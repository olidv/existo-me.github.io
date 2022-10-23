/* --- CURRENT QUIZ ------------------------------------------------------------------ */

/**
 * A partir do estado do usuario, identifica qual painel introdutorio apresentar.
 */
function showIntro() {
    // identifica o cenario de uso para definir qual painel introdutorio apresentar:
    if (GlobalUser.testVersion == 0 || GlobalUser.testLength == 0) {
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
    } else if (GlobalUser.testVersion == GlobalTest.testVersion && GlobalUser.testLength < GlobalTest.testLength) {
        // $CENARIO:BEGINNER-RESUME: USUARIO INICIOU VERSAO BASICA DO TESTE MAS NAO FINALIZOU
        // altera o titulo do site para alertar sobre as questoes pendentes:
        DOM.notifyTitle("#" + GlobalUser.testLength + "..." + GlobalTest.testLength);
        // como ainda nao tem resultado de teste, inibe as opcoes resultantes:
        DOM.hideNavResulting();
        // exibe notificacao de questoes pendentes com valor: # user.testTotalBasic ... pgps.testBasicLength
        let htmlContent = DOM.getIntroHtml("#cenarioBeginnerResume");
        htmlContent = htmlContent.formats(GlobalTest.testLength, GlobalUser.testLength);
        // apresenta opcoes [Retomar Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion <= GlobalTest.testVersion && GlobalUser.testLength == GlobalTest.testLength) {
        // $CENARIO:MAJOR-RESTART: USUARIO ACABOU DE FINALIZAR VERSAO BASICA DO TESTE
        let imgPlane = `<img src="images/score/${GlobalUser.testScore.zone}.png" class="img-inline" alt="Resultado do Teste" draggable="false" />`;
        // como nao tem nenhuma notificacao, restaura o titulo original do site:
        DOM.resetTitle();
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showNavResulting();
        // exibe o espectro resultante da pontuacao no slide intro:
        let htmlContent = DOM.getIntroHtml("#cenarioMajorRestart");
        htmlContent = htmlContent.formats(imgPlane);
        // apresenta opcoes[Refazer Teste Basico] [Revisar Respostas Basico]
        DOM.showIntroHtml(htmlContent);
        //
    } else if (GlobalUser.testVersion < GlobalTest.testVersion && GlobalUser.testLength < GlobalTest.testLength) {
        // $CENARIO:MAJOR-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        let plusQueries = GlobalTest.testLength - GlobalUser.testLength;
        // altera o titulo do site para alertar sobre novas questoes: (pgps.testExtraLength) EXISTO.me • GPS Politico
        DOM.notifyTitle("+" + plusQueries);
        // exibe opcoes [Resultado] e [Doacao]: obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        DOM.showNavResulting();
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
function slideNextQuest() {
    // $CENARIO:BEGINNER-TEST: obtem 1ª questao do teste
    const question = GlobalTest.nextQuest();
    console.table("slideNextQuest: ", question);

    // se ainda ha questoes a serem respondidas:
    if (question != null) {
        const option0 = question.options[0];
        const option1 = question.options[1];
        // prepara template de div para carrocel com dados da questao
        let htmlContent = DOM.getIntroHtml("#templateRespondQuestion");
        htmlContent = htmlContent.formats(GlobalTest.testLength, GlobalTest.currentQuest, question.subject, option0.text, option1.text);
        // adiciona div como slide no carrocel e desloca para a questao
        DOM.nextSlide(htmlContent);
        // atualiza o range de progresso:
        DOM.updateRangeProgress(GlobalTest.currentQuest);
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
    GlobalTest.initQuiz(GlobalUser.testLength, GlobalUser.testChoices);

    // desabilita a navegacao do carrocel com mouse ou teclado
    DOM.initCarouselRespond();

    // configura o range de progresso, com o numero minimo e maximo das questoes:
    DOM.showRangeProgress(1, GlobalTest.testLength, 1);

    // exibe a primeira questao do teste:
    slideNextQuest();
}

/**
 * .
 *
 * @param  {String} idQuest Numero da questao corrente.
 * @param  {String} option Sequencia da opcao (options item) escolhida: 0 ou 1.
 */
function respondTest(idQuest, option) {
    // emite alerta sonoro quando o usuario escolhe uma opcao:
    DOM.playRespond();

    // coleta resposta do usuario -> quizUserOpts e quizTotalDone++
    let idx = idQuest - 1;
    GlobalTest.updateRate(idx, option);  // 0 index
    GlobalUser.addChoice(option); // tem q converter p/ numericos
    //console.log(`respondTest(${idQuest}, ${item}, ${rate}, ${side})`);

    // se ainda ha questoes a serem respondidas
    let hasNext = slideNextQuest();
    console.log("hasNext = ", hasNext);

    // verifica se acabou as questoes:
    if (!hasNext) {
        // calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        let testScore = GlobalTest.calculateScore();

        // registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        GlobalUser.stopQuiz(testScore);

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
    GlobalTest.initQuiz(0, []);

    // somente adiciona as questoes se os slides das questoes ainda nao foram adicionados:
    if (DOM.lengthSlides <= 1) {
        // $CENARIO:BEGINNER-REVIEW
        let idQuestion = 0;
        // loop de todas as questoes do teste: question <- pgps.quizListBasicQueries
        for (let question = GlobalTest.nextQuest(); question != null; question = GlobalTest.nextQuest()) {
            console.table(`reviewTest(): `, question);

            // obtem o texto das opcoes:
            const option0Text = question.options[0].text;
            const option1Text = question.options[1].text;

            // identifica para a questao selecionada a resposta do usuario:
            const userChoice = GlobalUser.testChoices[idQuestion++];
            const option0Checked = userChoice == 0 ? "checked" : "disabled";
            const option1Checked = userChoice == 1 ? "checked" : "disabled";

            // prepara template (read-only) de div para carrocel com dados da questao
            let htmlContent = DOM.getIntroHtml("#templateReviewQuestion");
            htmlContent = htmlContent.formats(GlobalTest.testLength, idQuestion, question.subject, option0Text, option0Checked, option1Text, option1Checked);

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

    // const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    // const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

    // componente para manipulacao do clipboard:
    var clipboard = new ClipboardJS(".btn");
    clipboard.on("success", function (e) {
        console.log(e);
    });

    // Efetua inicializacao das referencias internas do DOM.
    DOM.ready();
    GlobalSetup.ready();
    GlobalResult.ready();

    // a partir do estado do usuario, identifica qual painel introdutorio apresentar:
    showIntro();
});
