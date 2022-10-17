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
    rangeInput;

    /* --- INITIALIZATION ------------------------------------------------------------------ */

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
        this.rangeInput = $("#rangeTest");
    }

    /* --- PAGE/DOCUMENT TITLE ------------------------------------------------------------------ */

    getTitle() {
        return document.title;
    }

    setTitle(newTitle) {
        document.title = newTitle;
    }

    resetTitle(newTitle) {
        document.title = this.pageTitle;
    }

    /* --- BOOTSTRAP CAROUSEL ------------------------------------------------------------------ */

    /**
     * .
     */
    get lengthSlides() {
        return this.innerCarousel.children().length;
    }

    /**
     * Adiciona o html de um novo slide no carrocel.
     */
    addSlide(htmlContent) {
        // incorpora o slide ao final da sequencia corrente:
        this.innerCarousel.append(htmlContent);
    }

    /**
     * Adiciona o html de um novo slide no carrocel, antes do ultimo elemento.
     */
    addBeforeSlide(htmlContent) {
        // incorpora o slide ao final da sequencia corrente, mas antes do slide introdutorio:
        $(".carousel-inner > .carousel-item:last-child").before(htmlContent);
    }

    /**
     * .
     */
    firstSlide() {
        // e navega para o primeiro item diretamente, simulando um slide-next ou nao:
        this.bs5Carousel.carousel(0);
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

        // se este for o primeiro slide, apenas navega para o mesmo:
        if (this.lengthSlides == 1) {
            // o slide inicial deve ter a class 'active':
            $(".carousel-inner > .carousel-item:first-child").addClass("active");

            // e navega para o primeiro item, simulando um slide-next:
            this.bs5Carousel.carousel(0);
        } else {
            // se houver mais slides, navega para o item adicionado, simulando um slide-next:
            this.bs5Carousel.carousel("next");
        }
    }

    /**
     * Apresenta o slide introdutorio, conforme o cenario onde o usuario se encontra.
     */
    showIntroHtml(htmlContent) {
        // eh preciso eliminar qualquer slide ainda presente no carrocel:
        this.innerCarousel.empty();

        // na apresentacao do slide introdutorio, nao precisa do range de progresso:
        this.hideRangeProgress();

        // verifica se nao ha nenhuma inconsistencia nos dados, com cenario nao identificado:
        if (htmlContent) {
            // O slide introdutorio do teste sera incorporado e apresentado:
            this.addSlide(htmlContent);
        } else {
            console.error("Nao foi possivel adicionar o slide introdutorio ao carrocel.");
        }
    }

    /**
     * Configura o carrocel para responder ao test.
     */
    initCarouselRespond() {
        // apaga os slides anteriores:
        this.innerCarousel.empty();

        // reconfigura o carrocel para percorrer todas as respostas:
        this.bs5Carousel.carousel("pause");

        // inibe os controles de navegacao (prev, next):
        this.prevControl.addClass("d-none");
        this.nextControl.addClass("d-none");
    }

    /**
     * Configura o carrocel para visualizacao das respostas.
     */
    initCarouselReview() {
        // habilita os controles de navegacao (prev, next):
        this.prevControl.removeClass("d-none");
        this.nextControl.removeClass("d-none");
    }

    /* --- INPUT RANGE PROGRESS ------------------------------------------------------------------ */

    /**
     * Configura o range de progresso para que o usuario possa se situar.
     */
    initRangeProgress(minValue, maxValue, stepValue) {
        // exibe o range de progresso, para o usuario se situar:
        this.rangeProgress.removeClass("d-none");

        // parametriza os valores minimo e maximo da regua de progresso.
        this.rangeInput.prop("min", minValue);
        this.rangeInput.prop("max", maxValue);
        this.rangeInput.prop("step", stepValue);
    }

    /**
     * Inibe o range de progresso.
     */
    hideRangeProgress() {
        // inibe o range de progresso, pois o usuario nao precisa se situar:
        this.rangeProgress.addClass("d-none");
    }

    /**
     * .
     */
    updateProgress(newValue) {
        //this.rangeProgress.val(newValue);
        this.rangeInput.val(newValue);
        console.log(`updateProgress(${newValue}): ${$("#rangeTest").val()}`);
    }

    /* --- DOM UTILITIES ------------------------------------------------------------------ */

    html(selector) {
        return selector ? $(selector).html() : null;
    }
}

// Instancia helper para manipulacao do DOM (HTML Document Object Model) da pagina:
var DOM = new DomHelper();
