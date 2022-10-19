/* --- CURRENT QUIZ ------------------------------------------------------------------ */

/**
 * A partir do estado do usuario, identifica qual painel introdutorio apresentar.
 */
function showIntro() {
    // identifica o cenario de uso para definir qual painel introdutorio apresentar:
    if (GlobalUser.testQuizVersion == 0 || GlobalUser.testQuizLength == 0) {
        // $CENARIO:BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU O TESTE BASICO
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideNavResulting();
        // informa ao usuario o numero de questoes do teste basico:
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerStart");
        htmlContent = htmlContent.formats(GlobalTest.testLength);
        // apresenta opcoes [Iniciar Teste Basico] [Como Funciona]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testQuizVersion == GlobalTest.testVersion && GlobalUser.testQuizLength < GlobalTest.testLength) {
        // $CENARIO:BEGINNER-RESUME: USUARIO INICIOU VERSAO BASICA DO TESTE MAS NAO FINALIZOU
        // altera o titulo do site para alertar sobre as questoes pendentes:
        DOM.notifyTitle("#" + GlobalUser.testQuizLength + "..." + GlobalTest.testLength);
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideNavResulting();
        // exibe notificacao de questoes pendentes com valor: # user.testTotalBasic ... pgps.testBasicLength
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerResume");
        htmlContent = htmlContent.formats(GlobalTest.testLength, GlobalUser.testQuizLength);
        // apresenta opcoes [Retomar Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testQuizVersion <= GlobalTest.testVersion && GlobalUser.testQuizLength == GlobalTest.testLength) {
        // $CENARIO:MAJOR-RESTART: USUARIO ACABOU DE FINALIZAR VERSAO BASICA DO TESTE
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showNavResulting(GlobalUser.testCssColor);
        // exibe a coloracao da pontuacao no slide intro:
        let htmlContent = DOM.getIntroHtml("#cenarioMajorRestart");
        htmlContent = htmlContent.formats(GlobalUser.testCssColor);
        // apresenta opcoes[Refazer Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testQuizVersion < GlobalTest.testVersion && GlobalUser.testQuizLength < GlobalTest.testLength) {
        // $CENARIO:MAJOR-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        let plusQueries = GlobalTest.testLength - GlobalUser.testQuizLength;
        // altera o titulo do site para alertar sobre novas questoes: (pgps.testExtraLength) EXISTO.me • GPS Politico
        DOM.notifyTitle("+" + plusQueries);
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showNavResulting(GlobalUser.testCssColor);
        // exibe notificacao de novas questoes com valor: + pgps.testExtraLength
        let htmlContent = DOM.getIntroHtml("#cenarioMajorNotify");
        htmlContent = htmlContent.formats(plusQueries);
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Basico]
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
    console.table("slideNextQuery: ", query);

    // se ainda ha questoes a serem respondidas:
    if (query != null) {
        const item0 = query.choices[0];
        const item1 = query.choices[1];
        // prepara template de div para carrocel com dados da questao
        let htmlContent = DOM.getIntroHtml("#templateRespondQuestion");
        htmlContent = htmlContent.formats(GlobalTest.testLength, query.idQuery, query.subject, item0.text, item0.rate, item0.side, item1.text, item1.rate, item1.side);
        // adiciona div como slide no carrocel e desloca para a questao
        DOM.nextSlide(htmlContent);
        // atualiza o range de progresso:
        DOM.updateRangeProgress(query.idQuery);
        // informa que processou proxima questao:
        return true;
    } else {
        // informa que nao ha mais questoes (todas ja foram respondidas)
        return false;
    }
}

/**
 * .
 */
function takeTest() {
    console.log(`takeTest()`);
    // registra o inicio do teste: user.quizDateStart, user.quizFlagOpen
    GlobalUser.startQuiz(GlobalTest.testVersion);

    // inicializa teste com questoes de pgps.quizListBasicQueries
    GlobalTest.initQuiz(GlobalUser.testQuizLength);

    // desabilita a navegacao do carrocel com mouse ou teclado
    DOM.initCarouselRespond();

    // configura o range de progresso, com o numero minimo e maximo das questoes:
    DOM.showRangeProgress(1, GlobalTest.testLength, 1);

    // exibe a primeira questao do teste:
    slideNextQuery();
}

/**
 * .
 *
 */
function calculateScore() {
    // GlobalTest.calculateQuiz();
    GlobalUser.testTotalScore = 123.45;
    GlobalUser.testCssColor = "icon-result-blue";
    GlobalUser.testFileImage = ``;
}

/**
 * .
 *
 * @param  {String} idQuery Numero da questao corrente.
 * @param  {String} item Sequencia da opcao (choices item) escolhida: 0 ou 1.
 * @param  {String} rate Valor da propriedade rate para calculo da pontuacao.
 * @param  {String} side Valor da propriedade side para calculo da pontuacao.
 */
function respondTest(idQuery, item, rate, side) {
    // emite alerta sonoro quando o usuario escolhe uma opcao:
    DOM.playRespond();

    // coleta resposta do usuario -> quizUserOpts e quizTotalDone++
    GlobalUser.addResponse(+item, +rate, +side);  // tem q converter p/ numericos
    //console.log(`respondTest(${idQuery}, ${item}, ${rate}, ${side})`);

    // salva {estrutura-usuario} no local-storage
    GlobalUser.save();

    // se ainda ha questoes a serem respondidas
    let hasNext = slideNextQuery();
    console.log("hasNext = ", hasNext);

    // verifica se acabou as questoes:
    if (!hasNext) {
        // registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        GlobalUser.stopQuiz();

        // calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        calculateScore();

        // salva {estrutura-usuario} no local-storage
        GlobalUser.save();

        // aproveita para avancar para o proximo cenario:
        showIntro();

        // ao final, exibe o resultado do teste para o usuario:
        GlobalResult.show();

        // emite alerta sonoro quando o usuario finaliza o teste:
        DOM.playFinish();
    }
}

/**
 * .
 */
function reviewTest() {
    // inicializa teste com questoes de pgps.quizListBasicQueries
    GlobalTest.initQuiz(0);

    // somente adiciona as questoes se os slides das questoes ainda nao foram adicionados:
    if (DOM.lengthSlides <= 1) {
        // $CENARIO:BEGINNER-REVIEW
        let idxItem = 0; // para obter as respostas do usuario
        // loop de todas as questoes do teste: query <- pgps.quizListBasicQueries
        for (let query = GlobalTest.nextQuery(); query != null; query = GlobalTest.nextQuery()) {
            console.table(`reviewTest(): `, query);

            // obtem o texto das opcoes:
            const item0Text = query.choices[0].text;
            const item1Text = query.choices[1].text;

            // identifica para a questao selecionada a resposta do usuario:
            const userChoice = GlobalUser.testQuizQueries[idxItem++];
            const item0Checked = userChoice.item == 0 ? "checked" : "disabled";
            const item1Checked = userChoice.item == 1 ? "checked" : "disabled";

            // prepara template (read-only) de div para carrocel com dados da questao
            let htmlContent = DOM.getIntroHtml("#templateReviewQuestion");
            htmlContent = htmlContent.formats(GlobalTest.testLength, query.idQuery, query.subject, item0Text, item0Checked, item1Text, item1Checked);

            // adiciona div como slide no carrocel
            DOM.addBeforeSlide(htmlContent);
        }
        // habilita navegacao do carrocel com mouse ou teclado
        DOM.initCarouselReview();

        // para apenas visualizar as respostas, nao precisa do range de progresso:
        DOM.hideRangeProgress();
    }

    // desloca para a primeira questao, que eh o proximo slide:
    DOM.nextSlide();
}

/**
 * .
 */
function retakeTest() {
    // limpa as respostas anteriores do usuario
    GlobalUser.clear();

    // inicializa teste:
    takeTest();
}

/* --- JQUERY: DOM READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
/**
 * .
 *
 */
$(document).ready(function () {
    ("use strict"); // sempre!

    // Efetua inicializacao das referencias internas do DOM.
    DOM.ready();
    GlobalSetup.ready();
    GlobalResult.ready();

    // a partir do estado do usuario, identifica qual painel introdutorio apresentar:
    showIntro();
});
