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
    bs5Carousel;
    innerCarousel;
    prevControl;
    nextControl;

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
        this.bs5Carousel = $(this.idCarousel);
        this.innerCarousel = $(this.idCarousel + " .carousel-inner");
        this.prevControl = $(this.idCarousel + " .carousel-control-prev");
        this.nextControl = $(this.idCarousel + " .carousel-control-next");

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
     * Adiciona o html de um novo slide no carrocel e avanca para o mesmo.
     */
    nextSlide(htmlContent) {
        // se nao fornecer o html, entao somente ira pular para o proximo slide:
        if (htmlContent) {
            // incorpora o slide ao final da sequencia corrente:
            this.addSlide(htmlContent);
        }

        // e navega para o item, simulando um slide-next:
        $("#carouselTest").carousel("next");
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
     * Configura o carrocel para responder ao test.
     */
    initCarouselRespond() {
        // reconfigura o carrocel para percorrer todas as respostas:
        this.bs5Carousel.carousel({
            interval: false,
            pause: true,
            ride: false,
            keyboard: false,
            wrap: false,
        });

        // inibe os controles de navegacao (prev, next):
        this.prevControl.addClass("d-none");
        this.nextControl.addClass("d-none");
    }

    /**
     * Configura o carrocel para visualizacao das respostas.
     */
    initCarouselReview() {
        // reconfigura o carrocel para percorrer todas as respostas:
        this.bs5Carousel.carousel({
            interval: false,
            pause: false,
            ride: false,
            keyboard: true,
            wrap: true,
        });

        // habilita os controles de navegacao (prev, next):
        this.prevControl.removeClass("d-none");
        this.nextControl.removeClass("d-none");
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
