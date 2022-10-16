/* --- CAROUSEL CLASS ------------------------------------------------------------------ */

/** Classe utilitaria (e unica) para manipulacao do HTML DOM da pagina.
 *  Auxilia na apresentacao do painel central, onde eh realizado o teste,
 *  controla o carrocel, o slider de progresso e qualquer outro componente associado.
 */
class DomHelper {
    // propriedades publicas: atributos do web site
    pageTitle;

    // propriedades publicas: componentes da modal setup
    labelSchemeColor;
    labelFontSize;
    labelSoundAlert;
    labelUserHistory;

    // propriedades publicas: componente carrocel
    idCarousel;
    divCarousel;
    bs5Carousel;
    innerCarousel;

    // propriedades publicas: slider de progresso do questionario
    rangeProgress;

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // Na carga do site, obtem os atributos da pagina:
        this.pageTitle = document.title;

        // o id eh utilizado para localizar o carrocel na pagina (dom):
        this.idCarousel = "#carouselTest";
    }

    ready() {
        // obtem os templates para os rotulos a partir do proprio html.
        this.labelSchemeColor = $("#labelSchemeColor").text();
        this.labelFontSize = $("#labelFontSize").text();
        this.labelSoundAlert = $("#labelSoundAlert").text();
        this.labelUserHistory = $("#labelUserHistory").text();

        // inicializa o componente carrocel e identifica seus elementos internos:
        this.divCarousel = $(this.idCarousel);
        this.bs5Carousel = $(this.idCarousel + " .carousel").carousel({
            // interval: false,
            // keyboard: false,
            // pause: true,
            // wrap: false,
            interval: 60000,
            wrap: true,
        });
        this.innerCarousel = $(this.idCarousel + " .carousel-inner");

        // identifica o slider de progresso.
        this.rangeProgress = $("#rangeProgress");
    }

    getTitle() {
        return document.title;
    }

    setTitle(newTitle) {
        document.title = newTitle;
    }

    resetTitle(newTitle) {
        document.title = this.pageTitle;
    }

    html(selector) {
        return selector ? $(selector).html() : null;
    }

    /**
     * Adiciona o html de um novo slide no carrocel.
     */
    addSlide(htmlContent) {
        // incorpora o slide ao final da sequencia corrente:
        this.innerCarousel.append(htmlContent);
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
    showIntroHtml(htmlContent) {
        // eh preciso eliminar qualquer slide ainda presente no carrocel:
        this.innerCarousel.empty();

        // verifica se nao ha nenhuma inconsistencia nos dados, com cenario nao identificado:
        if (htmlContent) {
            // O slide introdutorio do teste sera incorporado e apresentado:
            this.addSlide(htmlContent);
        } else {
            console.error("Nao foi possivel adicionar o slide introdutorio ao carrocel.");
        }
    }

    /**
     * Apresenta o slide introdutorio, conforme o cenario onde o usuario se encontra.
     */
    showIntroSlide(element) {
        // verifica se nao ha nenhuma inconsistencia nos dados, com cenario nao identificado:
        if (element) {
            // O slide introdutorio do teste sera incorporado e apresentado:
            let htmlContent = $(element).html();
            this.showIntroHtml(htmlContent);
        } else {
            console.error("Nao foi possivel adicionar o slide introdutorio ao carrocel.");
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

// Instancia helper para manipulacao do DOM (HTML Document Object Model) da pagina:
var DOM = new DomHelper();

/* --- JQUERY: DOM READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    // Efetua inicializacao das referencias internas do DOM.
    DOM.ready();
});
