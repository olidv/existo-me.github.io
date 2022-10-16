/* --- POLITICAL GPS TEST CLASS ------------------------------------------------------------------ */

/** Classe auxiliar na aplicacao do teste politico e gerenciamento das respostas. */
class PoliticalTest {
    // propriedades publicas:
    quizDateVersion = null; // data da liberacao desta versao do teste

    quizBasicVersion = 0.0; // numero da versao basica do teste
    quizTotalBasicQueries = 0; // numero total de questoes do teste
    quizListBasicQueries = []; // lista de questoes a serem respondidas

    quizExtraVersion = 0.0; // numero da versao extra do teste
    quizTotalExtraQueries = 0; // numero total de questoes do teste
    quizListExtraQueries = []; // lista de questoes a serem respondidas

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // ??? a versao pode ser utilizada na notificacao de novas questoes?
        this.quizDateVersion = new Date();
    }

    /**
     * Carrega a definicao do teste Gps Politico em nova instancia de PoliticalGps.
     *
     * @param  {Object} data Dados mais recentes do teste do GPS Politico.
     */
    static loadInstance(data) {
        let newInstance = new PoliticalTest();

        // transfere os valores recebidos para uma nova instancia de PoliticalTest...
        newInstance = Object.assign(newInstance, data);
        console.table("Nova instancia de PoliticalTest criada com sucesso: ", newInstance);

        return newInstance;
    }
}

// Cria instancia global para gerenciar a aplicacao do teste politico:
var GlobalTest = PoliticalTest.loadInstance(dataPoliticalGps);

// verifica em qual cenario o usuario se encontra:
if (GlobalUser.quizVersion == 0) {
    // $CENARIO::BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
    // O USUARIO DEVERA RESOLVER AS QUESTOES BASICAS PRIMEIRO
    GlobalUser.quizVersion = GlobalTest.quizBasicVersion;
    GlobalUser.save();
    // NO PROXIMO ACESSO (OU APOS F5) TER ACESSO AS QUESTOES EXTRAS / INCREMENTAIS.
} else if (GlobalUser.quizVersion == 1.0 && GlobalUser.quizTotalBasic == GlobalTest.quizTotalBasicQueries) {
    // $CENARIO:BEGINNER-RETAKE: USUARIO JA COMPLETOU VERSAO BASICA DO TESTE
    // O USUARIO JA PODE RESOLVER AS QUESTOES EXTRAS DE AGORA EM DIANTE
    GlobalUser.quizVersion = GlobalTest.quizExtraVersion;
    GlobalUser.save();
} else if (GlobalUser.quizVersion > 1.0 && GlobalUser.quizTotalExtra <= GlobalTest.quizTotalExtraQueries) {
    // $CENARIO:MAJOR-RETAKE: USUARIO JA COMPLETOU VERSAO EXTRA DO TESTE
    // CONTINUA ATUALIZANDO A VERSAO EXTRA, PARA NOTIFICAR NOVAS QUESTOES
    GlobalUser.quizVersion = GlobalTest.quizExtraVersion;
    GlobalUser.save();
}

/* --- JQUERY: DOM READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    /* --- PAINEL CENTRAL INTRODUTORIO -------------------------------------------- */
    // &RULE:04 O PAINEL INTRODUTORIO (1º SLIDE) TERA CONTEUDO CONFORME O CENARIO ATUAL DO USUARIO.

    // identifica o cenario de uso pelo estado do usuario, para definir qual painel introdutorio apresentar:
    // GlobalUser.quizVersion = 1.0;
    // GlobalUser.quizDateStart = new Date();
    // GlobalUser.quizTotalBasic = 2;

    if (GlobalUser.quizDateStart == null || GlobalUser.quizTotalDone == 0) {
        // $CENARIO:BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
        // apresenta opcoes [Iniciar Teste Basico] [Como Funciona]
        DOM.showIntroSlide("#cenarioBeginnerStart");

    } else if (GlobalUser.quizVersion == 1.0 && GlobalUser.quizTotalBasic < GlobalTest.quizTotalBasicQueries) {
        // $CENARIO:BEGINNER-RESUME: USUARIO INICIOU VERSAO BASICA DO TESTE MAS NAO FINALIZOU
        // exibe notificacao de questoes pendentes com valor: # user.quizTotalBasic ... pgps.quizTotalBasicQueries
        // apresenta opcoes [Retomar Teste Basico] [Revisar Respostas Basico]
        let htmlContent = DOM.html("#cenarioBeginnerResume");
        htmlContent = htmlContent.formats(GlobalUser.quizTotalBasic, GlobalTest.quizTotalBasicQueries);
        DOM.showIntroHtml(htmlContent);

    } else if (GlobalUser.quizVersion == 1.0 && GlobalUser.quizTotalBasic == GlobalTest.quizTotalBasicQueries) {
        // $CENARIO:BEGINNER-RETAKE: USUARIO ACABOU DE FINALIZAR VERSAO BASICA DO TESTE
        // exibe opcoes [Resultado] e [Doacao]
        //     obtem cor da pontuacao do usuario e aplica cor nos icones grid - 3x3
        // apresenta opcoes[Refazer Teste Basico] [Revisar Respostas Basico]
        let htmlContent = DOM.html("#cenarioBeginnerRetake");
        htmlContent = htmlContent.formats("icon-test-red");
        DOM.showIntroHtml(htmlContent);

    } else if (GlobalUser.quizVersion > 1.0 && GlobalUser.quizTotalDone == GlobalTest.quizTotalBasicQueries) {
        // $CENARIO:BEGINNER-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        // exibe opcoes [Resultado] e [Doacao]
        //     obtem cor da pontuacao do usuario e aplica cor nos icones grid - 3x3
        // exibe notificacao de novas questoes com valor: + pgps.quizTotalExtraQueries
        // altera o titulo do site: (pgps.quizTotalExtraQueries) EXISTO.me • GPS Politico
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Basico]
        DOM.showIntroSlide("#cenarioBeginnerNotify");

    } else if (GlobalUser.quizVersion > 1.0 && GlobalUser.quizTotalExtra < GlobalTest.quizTotalExtraQueries) {
        // $CENARIO:MAJOR-RESUME: USUARIO INICIOU VERSAO EXTRA DO TESTE MAS NAO FINALIZOU
        // exibe opcoes [Resultado] e [Doacao]
        //    obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        // exibe notificacao de questoes pendentes com valor: # user.quizTotalExtra ... pgps.quizTotalExtraQueries
        // apresenta opcoes [Retomar Teste Extra] [Revisar Respostas Extra]
        DOM.showIntroSlide("#cenarioMajorResume");

    } else if (GlobalUser.quizVersion > 1.0 && GlobalUser.quizTotalExtra == GlobalTest.quizTotalExtraQueries) {
        // $CENARIO:MAJOR-RETAKE: USUARIO ACABOU DE FINALIZAR VERSAO EXTRA DO TESTE
        // exibe opcoes [Resultado] e [Doacao]
        //    obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        // apresenta opcoes [Refazer Teste Completo] [Revisar Respostas Completo]
        DOM.showIntroSlide("#cenarioMajorRetake");
    } else if (GlobalUser.quizVersion < GlobalTest.quizExtraVersion && GlobalUser.quizTotalExtra < GlobalTest.quizTotalExtraQueries) {
        // $CENARIO:MAJOR-NOTIFY: USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        // exibe opcoes [Resultado] e [Doacao]
        //    obtem cor da pontuacao do usuario e aplica cor nos icones grid - 3x3
        // exibe notificacao de novas questoes com valor: + pgps.quizTotalExtraQueries
        // altera o titulo do site: (pgps.quizTotalExtraQueries) EXISTO.me • GPS Politico
        // apresenta opcoes[Continuar Teste Extra] [Revisar Respostas Completo]
        DOM.showIntroSlide("#cenarioMajorNotify");
    }
});

// , para inicializar as questoes do teste politico
