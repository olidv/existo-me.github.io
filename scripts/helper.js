/* --- CAROUSEL CLASS ------------------------------------------------------------------ */

/** Classe utilitaria (e unica) para manipulacao do HTML DOM da pagina.
 *  Auxilia na apresentacao do painel central, onde eh realizado o teste,
 *  controla o carrocel, o slider de progresso e qualquer outro componente associado.
 */
class DomHelper {
    // propriedades privadas: atributos do web site
    pageTitle;

    // propriedades privadas: menu funcional do site
    navResult;
    navDonate; // a opcao para doacao somente aparece apos o usuario concluir o teste.

    // propriedades privadas: componente carrocel
    bs5Carousel;
    innerCarousel;
    prevControl;
    nextControl;

    // propriedades privadas: slider de progresso do questionario
    panelProgress;
    rangeInput;

    // propriedades privadas: audios
    audioRespond;
    audioFinish;

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
     *
     */
    constructor() {
        // Na carga do site, obtem os atributos da pagina:
        this.pageTitle = document.title;
    }

    /**
     * .
     *
     */
    ready() {
        // obtem as referencias para as opcoes principais manipuladas ao longo do teste politico:
        this.navResult = $("#navResult");
        this.navDonate = $("#navDonate");

        // inicializa o componente carrocel e identifica seus elementos internos:
        this.bs5Carousel = $("#carouselTest");
        this.innerCarousel = $("#carouselTest .carousel-inner");
        this.prevControl = $("#carouselTest .carousel-control-prev");
        this.nextControl = $("#carouselTest .carousel-control-next");

        // identifica o slider de progresso.
        this.panelProgress = $("#panelProgress");
        this.rangeInput = $("#rangeTest");

        // identifica os arquivos de audios:
        this.audioRespond = document.querySelector("#audioRespond");
        this.audioFinish = document.querySelector("#audioFinish");
    }

    /* --- PAGE/DOCUMENT TITLE ------------------------------------------------------------------ */

    /**
     * .
     *
     */
    getTitle() {
        return document.title;
    }

    /**
     * .
     *
     * @param  {String} p .
     */
    setTitle(newTitle) {
        document.title = newTitle;
    }

    /**
     * .
     *
     * @param  {String} p .
     */
    notifyTitle(note) {
        document.title = "(" + note + ") " + this.pageTitle;
    }

    /**
     * .
     *
     */
    resetTitle() {
        document.title = this.pageTitle;
    }

    /* --- WEB SITE RESULT OPTIONS -------------------------------------------------------------- */

    /**
     * .
     *
     * @param  {String} p .
     */
    showNavResulting(cssColor) {
        // apresenta as opcoes resultantes:
        this.navResult.removeClass(); // limpa tudo, pq nao sabe qual a cor anterior
        this.navDonate.removeClass("d-none");

        // adiciona a coloracao para a opcao de resultado:
        this.navResult.addClass("ms-3 " + cssColor); // adiciona 'ms-3' pq ja existia antes
    }

    /**
     * .
     *
     */
    hideNavResulting() {
        // inibe as opcoes resultantes:
        this.navResult.addClass("d-none");
        this.navDonate.addClass("d-none");
    }

    /* --- BOOTSTRAP CAROUSEL ------------------------------------------------------------------ */

    /**
     * .
     *
     */
    get lengthSlides() {
        return this.innerCarousel.children().length;
    }

    /**
     * Adiciona o html de um novo slide no carrocel.
     *
     * @param  {String} p .
     */
    addSlide(htmlContent) {
        // incorpora o slide ao final da sequencia corrente:
        this.innerCarousel.append(htmlContent);
    }

    /**
     * Adiciona o html de um novo slide no carrocel, antes do ultimo elemento.
     *
     * @param  {String} p .
     */
    addBeforeSlide(htmlContent) {
        // incorpora o slide ao final da sequencia corrente, mas antes do slide introdutorio:
        $(".carousel-inner > .carousel-item:last-child").before(htmlContent);
    }

    /**
     * Adiciona o html de um novo slide no carrocel e avanca para o mesmo.
     *
     * @param  {String} p .
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
     * .
     *
     * @param  {String} p .
     */
    getIntroHtml(selector) {
        return selector ? $(selector).html() : null;
    }

    /**
     * Apresenta o slide introdutorio, conforme o cenario onde o usuario se encontra.
     *
     * @param  {String} p .
     */
    showIntroHtml(htmlContent) {
        // eh preciso eliminar qualquer slide ainda presente no carrocel:
        this.innerCarousel.empty();

        // verifica se o html eh valido:
        if (htmlContent) {
            // O slide introdutorio do teste sera incorporado e apresentado:
            this.addSlide(htmlContent);
        }

        // na apresentacao do slide introdutorio, nao precisa dos controles de navegacao do carrocel:
        this.prevControl.addClass("d-none");
        this.nextControl.addClass("d-none");

        // e nem o range de progresso:
        this.hideRangeProgress();
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
     *
     * @param  {String} p .
     * @param  {String} p .
     * @param  {String} p .
     */
    showRangeProgress(minValue, maxValue, stepValue) {
        // exibe o range de progresso, para o usuario se situar:
        this.panelProgress.removeClass("d-none");

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
        this.panelProgress.addClass("d-none");
    }

    /**
     * .
     *
     * @param  {String} p .
     */
    updateRangeProgress(newValue) {
        this.rangeInput.val(newValue);
    }

    /* --- AUDIOS: PLAY SOUND ------------------------------------------------------------------ */

    playRespond() {
        // apenas emite o som se estiver configurado para tal:
        if (GlobalUser.isSoundOn) {
            this.audioRespond.play();
        }
    }

    playFinish() {
        // apenas emite o som se estiver configurado para tal:
        if (GlobalUser.isSoundOn) {
            this.audioFinish.play();
        }
    }
}

// Instancia helper para manipulacao do DOM (HTML Document Object Model) da pagina:
var DOM = new DomHelper();
