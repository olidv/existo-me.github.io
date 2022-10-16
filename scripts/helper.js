/* --- CAROUSEL CLASS ------------------------------------------------------------------ */

/** Classe para manipulacao do painel central da pagina home, onde eh realizado o teste.
 *  Controla o carrocel e tambem o slider de progresso, e qualquer outro componente associado. */
class HomePanelHelper {
    // propriedades privadas:
    divCarousel;
    bs5Carousel;
    innerCarousel;
    rangeProgress;

    // propriedades publicas:

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        let idCarousel = "#carouselTest";

        // o id eh fornecido para localizar o carrocel na pagina (dom):
        this.divCarousel = $(idCarousel);

        // daqui em diante, eh tudo padrao do bootstrap-5.
        this.bs5Carousel = $(idCarousel + " .carousel").carousel({
            // interval: false,
            // keyboard: false,
            // pause: true,
            // wrap: false,
            interval: 60000,
            wrap: true,
        });
        this.innerCarousel = $(idCarousel + " .carousel-inner");
        this.rangeProgress = $("#rangeProgress");
    }

    /**
     * Adiciona o html de um novo slide no carrocel.
     */
    addSlide(htmlSlide) {
        // apresenta o slide introdutorio conforme o cenario atual:
        this.innerCarousel.append(htmlSlide);
    }

    /**
     * Identifica o slide introdutorio, conforme o cenario onde o usuario se encontra.
     */
    getIntroSlide(objUser) {
        // O slide introdutorio do teste sera apresentado conforme o cenario corrente:
        if (objUser.noQuizYet) {
            // (1) se o usuario ainda nao fez o teste, apresenta slide convidando para iniciar o teste: ${itemName}
            return "#slideIntroStart";
        } else if (objUser.isQuizOnGoing) {
            // (2) se o usuario iniciou o teste mas nao finalizou, apresenta slide para retomar o teste:    slideIntro = `
            return "#slideIntroResume";
        } else if (objUser.hasQuizUpdate) {
            // (3) se tem novas questoes, apresenta slide para continuar o teste:
            return "#slideIntroNotify";
        } else if (objUser.isQuizComplete) {
            // (4) se o usuario ja finalizou o teste, apresenta slide com resultado (coloracao) do teste:
            return "slideIntroRestart";
        } else {
            return "";
        }
    }

    /**
     * Identifica o slide final, apos o usuario encerrar o teste politico.
     */
    getClosureSlide() {
        return "#slideClosure";
    }

    /**
     * Apresenta o slide introdutorio, conforme o cenario onde o usuario se encontra.
     */
    showIntroSlide(objUser) {
        // O slide introdutorio do teste sera apresentado conforme o cenario corrente:
        let slideIntro = this.getIntroSlide(objUser);
        // verifica se nao ha nenhuma inconsistencia nos dados, com cenario nao identificado:
        if (slideIntro) {
            //console.log(`slideIntro = ${slideIntro}`);
            let htmlContent = $(slideIntro).html();
            this.addSlide(htmlContent);
        } else {
            console.log("Nao foi possivel identificar o slide inicial pelo estado do usuario.");
        }
    }

    /**
     * Apresenta o slide final, apos o usuario encerrar o teste politico.
     */
    showClosureSlide(objUser) {
        // O slide final sera apresentado com o resultado do teste:
        let slideClosure = this.getClosureSlide();
        // verifica se nao ha nenhuma inconsistencia nos dados, com cenario nao identificado:
        if (slideClosure) {
            //console.log(`slideClosure = ${slideClosure}`);
            let htmlContent = $(slideClosure).html();
            this.addSlide(htmlContent);
        } else {
            console.log("Nao foi possivel identificar o slide final pelo estado do usuario.");
        }
    }
}
