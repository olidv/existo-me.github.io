/* --- CURRENT QUIZ ------------------------------------------------------------------ */

/**
 * .
 */
function startTest() {
    // primeiro atualiza o estado do usuario, para verificar em qual cenario se encontra:
    if (GlobalUser.testVersion == 0) {
        // $CENARIO::BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
        // O USUARIO DEVERA RESOLVER AS QUESTOES BASICAS PRIMEIRO
        // E NO PROXIMO ACESSO (OU APOS F5) TERAH ACESSO AS QUESTOES EXTRAS / INCREMENTAIS.
        GlobalUser.testVersion = GlobalTest.testBasicVersion;
        GlobalUser.save();
    } else if (GlobalUser.testVersion == 1.0 && GlobalUser.testTotalDone == GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-RETAKE: USUARIO JA COMPLETOU VERSAO BASICA DO TESTE
        // O USUARIO JA PODE RESOLVER AS QUESTOES EXTRAS DE AGORA EM DIANTE
        GlobalUser.testVersion = GlobalTest.testExtraVersion;
        GlobalUser.save();
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone <= GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-RETAKE: USUARIO JA COMPLETOU VERSAO EXTRA DO TESTE
        // CONTINUA ATUALIZANDO A VERSAO EXTRA, PARA NOTIFICAR NOVAS QUESTOES
        GlobalUser.testVersion = GlobalTest.testExtraVersion;
        GlobalUser.save();
    }

    // em seguida, identifica o cenario de uso para definir qual painel introdutorio apresentar:
    if (GlobalUser.testDateStart == null || GlobalUser.testTotalDone == 0) {
        // $CENARIO:BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
        // apresenta opcoes [Iniciar Teste Basico] [Como Funciona]
        DOM.showIntroSlide("#cenarioBeginnerStart");
    } else if (GlobalUser.testVersion == 1.0 && GlobalUser.testTotalDone < GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-RESUME: USUARIO INICIOU VERSAO BASICA DO TESTE MAS NAO FINALIZOU
        // exibe notificacao de questoes pendentes com valor: # user.testTotalBasic ... pgps.testBasicLength
        // apresenta opcoes [Retomar Teste Basico] [Revisar Respostas Basico]
        let htmlContent = DOM.html("#cenarioBeginnerResume");
        htmlContent = htmlContent.formats(GlobalTest.testBasicLength, GlobalUser.testTotalDone);
        DOM.showIntroHtml(htmlContent);
    } else if (GlobalUser.testVersion == 1.0 && GlobalUser.testTotalDone == GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-RETAKE: USUARIO ACABOU DE FINALIZAR VERSAO BASICA DO TESTE
        // exibe opcoes [Resultado] e [Doacao]
        //     obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        // apresenta opcoes[Refazer Teste Basico] [Revisar Respostas Basico]
        let htmlContent = DOM.html("#cenarioBeginnerRetake");
        htmlContent = htmlContent.formats("icon-test-red");
        DOM.showIntroHtml(htmlContent);
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone == GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        // exibe opcoes [Resultado] e [Doacao]
        //     obtem cor da pontuacao do usuario e aplica cor nos icones grid - 3x3
        // exibe notificacao de novas questoes com valor: + pgps.testExtraLength
        // altera o titulo do site: (pgps.testExtraLength) EXISTO.me • GPS Politico
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Basico]
        DOM.showIntroSlide("#cenarioBeginnerNotify");
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone < GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-RESUME: USUARIO INICIOU VERSAO EXTRA DO TESTE MAS NAO FINALIZOU
        // exibe opcoes [Resultado] e [Doacao]
        //    obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        // exibe notificacao de questoes pendentes com valor: # user.testTotalExtra ... pgps.testExtraLength
        // apresenta opcoes [Retomar Teste Extra] [Revisar Respostas Extra]
        DOM.showIntroSlide("#cenarioMajorResume");
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone == GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-RETAKE: USUARIO ACABOU DE FINALIZAR VERSAO EXTRA DO TESTE
        // exibe opcoes [Resultado] e [Doacao]
        //    obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        // apresenta opcoes [Refazer Teste Completo] [Revisar Respostas Completo]
        DOM.showIntroSlide("#cenarioMajorRetake");
    } else if (GlobalUser.testVersion < GlobalTest.testExtraVersion && GlobalUser.testTotalDone < GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        // exibe opcoes [Resultado] e [Doacao]
        //    obtem cor da pontuacao do usuario e aplica cor nos icones grid - 3x3
        // exibe notificacao de novas questoes com valor: + pgps.testExtraLength
        // altera o titulo do site: (pgps.testExtraLength) EXISTO.me • GPS Politico
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Completo]
        DOM.showIntroSlide("#cenarioMajorNotify");
    }
}

/**
 * .
 *
 */
function slideNextQuery() {
    // $CENARIO:BEGINNER-TEST: obtem 1ª questao do teste
    const query = GlobalTest.nextQuery();
    console.table("slideNextQuery: ", query);

    // se ainda ha questoes a serem respondidas:
    if (query != null) {
        const item0 = query.choices[0];
        const item1 = query.choices[1];
        // prepara template de div para carrocel com dados da questao
        let htmlContent = DOM.html("#templateRespondQuestion");
        htmlContent = htmlContent.formats(GlobalTest.quizTotalQueries, query.idQuery, query.subject, item0.text, item0.rate, item0.side, item1.text, item1.rate, item1.side);
        // adiciona div como slide no carrocel e desloca para a questao
        DOM.nextSlide(htmlContent);
        // informa que processou proxima questao:
        return true;
    } else {
        // informa que nao ha mais questoes (todas ja foram respondidas)
        return false;
    }
}

/**
 * .
 *
 * @param  {String} stage "basic", "extra".
 */
function takeTest(stage) {
    // registra o inicio do teste: user.quizDateStart, user.quizFlagOpen
    GlobalUser.startQuiz();

    // inicializa teste com questoes de pgps.quizListBasicQueries
    GlobalTest.initQuiz(stage, GlobalUser.testTotalDone);

    // desabilita a navegacao do carrocel com mouse ou teclado
    DOM.initCarouselRespond();

    // exibe a primeira questao do teste:
    slideNextQuery();
}

/**
 * .
 *
 * @param  {String} idQuery Numero da questao corrente.
 * @param  {String} item Sequencia da opcao (choice) escolhida: 0 ou 1.
 * @param  {String} rate Valor da propriedade rate para calculo da pontuacao.
 * @param  {String} side Valor da propriedade side para calculo da pontuacao.
 */
function respondTest(idQuery, item, rate, side) {
    console.log(`respondTest(${idQuery}, ${item}, ${rate}, ${side})`);
    // coleta resposta do usuario -> quizUserOpts e quizTotalBasic++
    // ???

    // salva {estrutura-usuario} no local-storage
    GlobalUser.save();

    // se ainda ha questoes a serem respondidas
    let hasNext = slideNextQuery();

    // verifica se acabou as questoes:
    if (!hasNext) {
        // registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        GlobalUser.stopQuiz();

        // calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        // ???

        // salva {estrutura-usuario} no local-storage
        GlobalUser.save();

        // avanca para o proximo cenario:
        startTest();
    }
}

/**
 * .
 *
 * @param  {String} stage "basic", "all".
 */
function reviewTest(stage) {
    // inicializa teste com questoes de pgps.quizListBasicQueries
    GlobalTest.initQuiz(stage, 0);

    // $CENARIO:BEGINNER-REVIEW
    // loop de todas as questoes do teste: query <- pgps.quizListBasicQueries
    for (let query = GlobalTest.nextQuery(); query != null; query = GlobalTest.nextQuery()) {
        // identifica qual a questao selecionada (resposta) do usuario
        console.table(`reviewTest(${stage}): `, query);

        // prepara template (read-only) de div para carrocel com dados da questao
        let htmlContent = DOM.html("#templateReviewQuestion");
        htmlContent = htmlContent.formats(GlobalTest.quizTotalQueries, query.idQuery, query.subject, item0.text, item1.text);

        // adiciona div como slide no carrocel
        DOM.addSlide(htmlContent);
    }
    // habilita navegacao do carrocel com mouse ou teclado
    DOM.initCarouselReview();

    // desloca para a primeira questao
    DOM.nextSlide();
}

/**
 * .
 *
 * @param  {String} stage "basic", "all".
 */
function retakeTest(stage) {
    // limpa as respostas anteriores do usuario
    GlobalUser.clear();

    // inicializa teste:
    takeTest(stage);
}

/* --- JQUERY: DOM READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    // identifica o cenario de uso pelo estado do usuario, para definir qual painel introdutorio apresentar:
    startTest();
});
