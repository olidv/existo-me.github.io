/* --- CURRENT QUIZ ------------------------------------------------------------------ */

/**
 * .
 */
function showIntro() {
    // primeiro atualiza o estado do usuario, para verificar em qual cenario se encontra:
    if (GlobalUser.testVersion == 0) {
        // $CENARIO::BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
        // O USUARIO DEVERA RESOLVER AS QUESTOES BASICAS PRIMEIRO
        // E NO PROXIMO ACESSO (OU APOS F5) TERAH ACESSO AS QUESTOES EXTRAS / INCREMENTAIS.
        GlobalUser.testVersion = GlobalTest.testBasicVersion;
        GlobalUser.save();
//
    } else if (GlobalUser.testVersion == 1.0 && GlobalUser.testTotalDone == GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-RETAKE: USUARIO JA COMPLETOU VERSAO BASICA DO TESTE
        // O USUARIO JA PODE RESOLVER AS QUESTOES EXTRAS DE AGORA EM DIANTE
        GlobalUser.testVersion = GlobalTest.testExtraVersion;
        GlobalUser.save();
//
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone == GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-RETAKE: USUARIO JA COMPLETOU VERSAO EXTRA DO TESTE
        // CONTINUA ATUALIZANDO A VERSAO EXTRA, PARA NOTIFICAR NOVAS QUESTOES
        GlobalUser.testVersion = GlobalTest.testExtraVersion;
        GlobalUser.save();
    }

    // em seguida, identifica o cenario de uso para definir qual painel introdutorio apresentar:
    if (GlobalUser.testDateStart == null || GlobalUser.testTotalDone == 0) {
        // $CENARIO:BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideResultingNav();
        // informa ao usuario o numero de questoes do teste basico:
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerStart");
        htmlContent = htmlContent.formats(GlobalTest.testBasicLength);
        // apresenta opcoes [Iniciar Teste Basico] [Como Funciona]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion == 1.0 && GlobalUser.testTotalDone < GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-RESUME: USUARIO INICIOU VERSAO BASICA DO TESTE MAS NAO FINALIZOU
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideResultingNav();
        // exibe notificacao de questoes pendentes com valor: # user.testTotalBasic ... pgps.testBasicLength
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerResume");
        htmlContent = htmlContent.formats(GlobalTest.testBasicLength, GlobalUser.testTotalDone);
        // apresenta opcoes [Retomar Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
//
    } else if (GlobalUser.testVersion == 1.0 && GlobalUser.testTotalDone == GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-RETAKE: USUARIO ACABOU DE FINALIZAR VERSAO BASICA DO TESTE
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showResultingNav(GlobalUser.testCssColor);
        // exibe a coloracao da pontuacao no slide intro:
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerRetake");
        htmlContent = htmlContent.formats(GlobalUser.testCssColor);
        // apresenta opcoes[Refazer Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone == GlobalTest.testBasicLength) {
        // $CENARIO:BEGINNER-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        let plusQueries = GlobalTest.testAllLength - GlobalUser.testTotalDone;
        // altera o titulo do site para alertar sobre novas questoes: (pgps.testExtraLength) EXISTO.me • GPS Politico
        DOM.notifyTitle("+" + plusQueries);
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showResultingNav(GlobalUser.testCssColor);
        // exibe notificacao de novas questoes com valor: + pgps.testExtraLength
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerNotify");
        htmlContent = htmlContent.formats(plusQueries);
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone < GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-RESUME: USUARIO INICIOU VERSAO EXTRA DO TESTE MAS NAO FINALIZOU
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showResultingNav(GlobalUser.testCssColor);
        // exibe notificacao de questoes pendentes com valor: # user.testTotalExtra ... pgps.testExtraLength
        let htmlContent = DOM.getIntroHtml("#cenarioMajorResume");
        htmlContent = htmlContent.formats(GlobalTest.testAllLength, GlobalUser.testTotalDone);
        // apresenta opcoes [Retomar Teste Extra] [Revisar Respostas Extra]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion > 1.0 && GlobalUser.testTotalDone == GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-RETAKE: USUARIO ACABOU DE FINALIZAR VERSAO EXTRA DO TESTE
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showResultingNav(GlobalUser.testCssColor);
        // exibe a coloracao da pontuacao no slide intro:
        let htmlContent = DOM.getIntroHtml("#cenarioMajorRetake");
        htmlContent = htmlContent.formats(GlobalUser.testCssColor);
        // apresenta opcoes [Refazer Teste Completo] [Revisar Respostas Completo]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion < GlobalTest.testExtraVersion && GlobalUser.testTotalDone < GlobalTest.testAllLength) {
        // $CENARIO:MAJOR-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        let plusQueries = GlobalTest.testAllLength - GlobalUser.testTotalDone;
        // altera o titulo do site para alertar sobre novas questoes: (pgps.testExtraLength) EXISTO.me • GPS Politico
        DOM.notifyTitle("+" + plusQueries);
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showResultingNav(GlobalUser.testCssColor);
        // exibe notificacao de novas questoes com valor: + pgps.testExtraLength
        let htmlContent = DOM.getIntroHtml("#cenarioMajorNotify");
        htmlContent = htmlContent.formats(plusQueries);
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Completo]
        DOM.showIntroHtml(htmlContent);
    }
}

/**
 * .
 *
 */
function slideNextQuery() {
    // $CENARIO:BEGINNER-TEST: obtem 1ª questao do teste
    const query = GlobalTest.nextQuery();
    //console.table("slideNextQuery: ", query);

    // se ainda ha questoes a serem respondidas:
    if (query != null) {
        const item0 = query.options[0];
        const item1 = query.options[1];
        // prepara template de div para carrocel com dados da questao
        let htmlContent = DOM.getIntroHtml("#templateRespondQuestion");
        htmlContent = htmlContent.formats(GlobalTest.quizTotalQueries, query.idQuery, query.subject, item0.text, item0.rate, item0.side, item1.text, item1.rate, item1.side);
        // adiciona div como slide no carrocel e desloca para a questao
        DOM.nextSlide(htmlContent);
        // atualiza o range de progresso:
        DOM.updateProgress(query.idQuery);
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

    // configura o range de progresso, com o numero minimo e maximo das questoes:
    DOM.initProgressRespond(1, GlobalTest.quizTotalQueries, 1);

    // exibe a primeira questao do teste:
    slideNextQuery();
}

/**
 * .
 *
 */
function calculateScore() {
    // GlobalTest.calculateQuiz();
    GlobalUser.testUserScore = 123.45;
    GlobalUser.testCssColor = "icon-result-blue";
    GlobalUser.testFileImage = ``;
}

/**
 * .
 *
 * @param  {String} idQuery Numero da questao corrente.
 * @param  {String} item Sequencia da opcao (options item) escolhida: 0 ou 1.
 * @param  {String} rate Valor da propriedade rate para calculo da pontuacao.
 * @param  {String} side Valor da propriedade side para calculo da pontuacao.
 */
function respondTest(idQuery, item, rate, side) {
    console.log(`respondTest(${idQuery}, ${item}, ${rate}, ${side})`);
    // coleta resposta do usuario -> quizUserOpts e quizTotalDone++
    GlobalUser.addResponse(+item, +rate, +side);  // tem q converter p/ numericos

    // salva {estrutura-usuario} no local-storage
    GlobalUser.save();

    // se ainda ha questoes a serem respondidas
    let hasNext = slideNextQuery();

    // verifica se acabou as questoes:
    if (!hasNext) {
        // registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        GlobalUser.stopQuiz();

        // calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        calculateScore();

        // salva {estrutura-usuario} no local-storage
        GlobalUser.save();

        // avanca para o proximo cenario:
        showIntro();
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

    // somente adiciona as questoes se os slides das questoes ainda nao foram adicionados:
    if (DOM.lengthSlides <= 1) {
        // $CENARIO:BEGINNER-REVIEW
        let idxOpts = 0; // para obter as respostas do usuario
        // loop de todas as questoes do teste: query <- pgps.quizListBasicQueries
        for (let query = GlobalTest.nextQuery(); query != null; query = GlobalTest.nextQuery()) {
            console.table(`reviewTest(${stage}): `, query);

            // obtem o texto das opcoes:
            const item0Text = query.options[0].text;
            const item1Text = query.options[1].text;

            // identifica para a questao selecionada a resposta do usuario:
            const userOption = GlobalUser.testUserOpts[idxOpts++];
            const item0Checked = userOption.item == 0 ? "checked" : "";
            const item1Checked = userOption.item == 1 ? "checked" : "";

            // prepara template (read-only) de div para carrocel com dados da questao
            let htmlContent = DOM.getIntroHtml("#templateReviewQuestion");
            htmlContent = htmlContent.formats(GlobalTest.quizTotalQueries, query.idQuery, query.subject, item0Text, item0Checked, item1Text, item1Checked);

            // adiciona div como slide no carrocel
            DOM.addBeforeSlide(htmlContent);
        }
        // habilita navegacao do carrocel com mouse ou teclado
        DOM.initCarouselReview();

        // para apenas visualizar as respostas, nao precisa do range de progresso:
        DOM.hideProgressRespond();
    }

    // desloca para a primeira questao, que eh o proximo slide:
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

    // Efetua inicializacao das referencias internas do DOM.
    DOM.ready();

    // identifica o cenario de uso pelo estado do usuario, para definir qual painel introdutorio apresentar:
    showIntro();
});
