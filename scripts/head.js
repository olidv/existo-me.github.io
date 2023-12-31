/* --- LOGGING ------------------------------------------------------------- */

/**
 * .
 *
 */
(function (original) {
    console.enableLogging = function () {
        console.log = original;
    };
    console.disableLogging = function () {
        console.log = function () {};
    };
})(console.log);


/* --- ENVIRONMENT --------------------------------------------------------- */

// Cria instancia global para indicar o ambiente de execucao:
var GlobalEnv = {};

// determina qual o ambiente de execucao corrente: dev ou prod...
if (document.documentElement.getAttribute("data-env") == "dev") {
    // Ambiente DESENVOLVIMENTO:
    GlobalEnv = {
        name: "dev",
        production: false,
        baseUrl: "http://localhost:5500/",
    };

    // evita erros com a configuracao de PWA na estacao de desenvolvimento (desktop):
    document.querySelector('link[rel="manifest"]').removeAttribute("href");

    // habilita o logging na console em desenvolvimento:
    console.enableLogging();
    console.log("*** AMBIENTE DE DESENVOLVIMENTO ***");
    //
} else {
    // Ambiente PRODUCAO:
    GlobalEnv = {
        name: "prod",
        production: true,
        baseUrl: "https://www.existo.me/",
    };

    // forca o protocolo HTTPS quando em producao:
    if (location.protocol !== "https:") {
        location.replace(GlobalEnv.baseUrl);
    }

    // desabilita o logging na console em producao:
    //console.log("*** AMBIENTE DE PRODUCAO ***");
    console.disableLogging();
}

// atualiza a pasta base do web site conforme ambiente de execucao:
document.querySelector("base").setAttribute("href", GlobalEnv.baseUrl);
document.querySelector('link[rel="canonical"]').setAttribute("href", GlobalEnv.baseUrl);


/* --- STRING UTILITIES ---------------------------------------------------- */

/**
 * .
 *
 */
String.prototype.formats =
    String.prototype.formats ||
    function () {
        "use strict";

        let str = this.toString();
        if (arguments.length) {
            let t = typeof arguments[0];
            let args = "string" === t || "number" === t ? Array.prototype.slice.call(arguments) : arguments[0];
            for (let key in args) {
                str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
            }
        }

        return str;
    };

/**
 * .
 *
 */
String.prototype.hashtag =
    String.prototype.hashtag ||
    function () {
        "use strict";

        let str = this.toString();
        str = str.replace(/-|\s+/g, "");
        str = str.normalize("NFD").replace(/\p{Diacritic}/gu, "");

        return "#" + str;
    };

/* --- LOCAL STORAGE HELPER ------------------------------------------------ */

/**
 * Classe helper para manutencao de valores e/ou objetos no storage do browser.
 *
 */
class StorageFacade {
    // propriedades privadas:
    #store; // indica onde os dados serao salvos (local ou session).

    /* --- INITIALIZATION -------------------------------------------------- */

    /**
     * Inicializacao de nova instancia.
     *
     * @param  {Boolean} noExpiration .
     */
    constructor(noExpiration) {
        // verifica onde os dados serao salvos:
        this.#store = noExpiration ? window.localStorage : window.sessionStorage;
    }

    /**
     * .
     *
     * @param  {String} key .
     */
    exist(key) {
        // eh preciso q a chave seja valida:
        if (key) {
            // verifica se ha algo valido armazenado sob a chave:
            let strValue = this.#store.getItem(key);
            //console.log(`exist(${key}) = _${strValue}_ of type: ${typeof strValue}`);
            return strValue ? true : false;
        } else {
            // se a chave eh invalida, entao provavelmente o objeto nao existe:
            return false;
        }
    }

    /**
     * .
     *
     * @param  {String} key .
     */
    get(key) {
        // eh preciso q a chave seja valida:
        if (key) {
            let strValue = this.#store.getItem(key);
            //console.log(`get(${key}) = _${strValue}_ of type: ${typeof strValue}`);
            // verifica se eh um valor valido e objeto json:
            if (strValue && strValue.indexOf("{") > -1) {
                let objValue = JSON.parse(strValue);
                //console.log(`get(${key}) = _${objValue}_ of type: ${typeof objValue}`);
                return objValue;
            } else {
                return strValue;
            }
        } else {
            // se a chave eh invalida, entao provavelmente o objeto nao existe:
            return key;
        }
    }

    /**
     * .
     *
     * @param  {String} key .
     * @param  {any} value .
     */
    set(key, value) {
        // eh preciso q a chave seja valida:
        //console.log(`set(${key}, ${typeof value})`, value);
        if (key) {
            // apenas salve se o valor nao for nulo/vazio:
            if (value) {
                // se o valor for um objeto, tem q fazer o str-parse antes:
                if (typeof value === "object") {
                    let strObj = JSON.stringify(value);
                    this.#store.setItem(key, strObj);
                } else {
                    this.#store.setItem(key, value);
                }
            } else {
                // se o valor for nulo/vazio, entao remove o item:
                this.#store.removeItem(key);
            }
        }
    }

    /**
     * .
     *
     * @param  {String} key .
     */
    del(key) {
        // eh preciso q a chave seja valida:
        if (key) {
            this.#store.removeItem(key);
        }
    }

    /**
     * .
     *
     */
    clear() {
        this.#store.clear();
    }
}

// Cria instancia global para manutencao de dados no storage (browser api):
var GlobalStore = new StorageFacade(true); // maior persistencia sem data de expiracao (local-storage).

/* --- APPLICATION USER CLASS ---------------------------------------------- */

/**
 * Classe para armazenamento de informacoes e configuracoes do usuario.
 *
 */
class AppUser {
    // propriedades publicas: informacoes gerais
    name = null; // nome do usuario para emissao de certificado

    // propriedades publicas: preferencias do usuario
    prefThemeColor; // esquema de cores: light, dark
    prefFontSize; // tamanho da fonte: small, normal, large, huge
    prefSoundAlert; // alerta sonoro: on, off
    prefFirstTime; // indica se eh o primeiro acesso do usuario

    // propriedades publicas: teste do gps politico
    testVersion = 0.0; // numero da versao do teste respondido
    testStart = null; // data-hora em que iniciou o teste
    testFinal = null; // data-hora em que finalizou o teste
    testLength = 0; // numero de questoes do teste respondidas ate o momento
    testChoices = []; // respostas para as questoes respondidas
    // pontuacao calculada para as respostas
    testScore = {
        name: null,
        side: null,
        econ: 0,
        dipl: 0,
        govt: 0,
        scty: 0,
    };

    /* --- INITIALIZATION -------------------------------------------------- */

    /**
     * Inicializacao de nova instancia.
     *
     */
    constructor() {
        // valores default para as preferencias:
        this.prefThemeColor = "light";
        this.prefFontSize = "normal";
        this.prefSoundAlert = "off";
        this.prefFirstTime = true;
    }

    /**
     * Carrega os dados anteriores da ultima sessao do usuario a partir do local-storage.
     *
     */
    static loadInstance() {
        let newInstance = new AppUser();

        // se ja estiver salvo no local-storage, recupera as propriedades:
        if (GlobalStore.exist(AppUser.name)) {
            let objStorage = GlobalStore.get(AppUser.name);
            // transfere os valores para uma nova instancia de AppUser:
            newInstance = Object.assign(newInstance, objStorage);

            // salva novamente, para o caso de se ter criado novas propriedades na classe:
            newInstance.save();
            console.log("Valores de AppUser recuperados e atualizados no Storage com sucesso.");
        } else {
            // como ainda nao existia no storage, salva para proximas sessoes:
            newInstance.save();
            console.log("Nova instancia de AppUser criada e armazenada no Storage com sucesso.");
        }

        return newInstance;
    }

    /**
     * Reinicializa uma nova instancia do usuario, para corrigir inconsistencias.
     *
     */
    static resetInstance() {
        let newInstance = new AppUser();

        // sobrepoe a antiga versao existente no storage, para proximas sessoes:
        newInstance.save();
        console.log("Nova instancia de AppUser criada e armazenada no Storage com sucesso.");

        // de imediato efetiva as preferencias do usuario no website:
        newInstance.setup();

        return newInstance;
    }

    /* --- WEBSITE SETUP -------------------------------------------------- */

    /**
     * Property: esquema de cores 'dark' habilitado.
     *
     */
    get isThemeDark() {
        return this.prefThemeColor == "dark";
    }
    set isThemeDark(val) {
        if (val) {
            this.prefThemeColor = "dark";
        } else {
            this.prefThemeColor = "light";
        }

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no website:
        this.setup();
    }

    /**
     * Property: valor ordinal do tamanho da fonte.
     *
     */
    get ordFontSize() {
        switch (this.prefFontSize) {
            case "small": // 1 = small
                return 1;
            case "normal": // 2 = normal
                return 2;
            case "large": // 3 = large
                return 3;
            case "huge": // 4 = huge
                return 4;
        }
    }
    set ordFontSize(val) {
        // valor vem como string do input-range.
        switch (+val) {
            case 1: // 1 = small
                this.prefFontSize = "small";
                break;
            case 2: // 2 = normal
                this.prefFontSize = "normal";
                break;
            case 3: // 3 = large
                this.prefFontSize = "large";
                break;
            case 4: // 4 = huge
                this.prefFontSize = "huge";
                break;
        }

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no website:
        this.setup();
    }

    /**
     * Property: alerta sonoro habilitado 'on'.
     *
     */
    get isSoundOn() {
        return this.prefSoundAlert == "on";
    }
    set isSoundOn(val) {
        if (val) {
            this.prefSoundAlert = "on";
        } else {
            this.prefSoundAlert = "off";
        }

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no website:
        this.setup();
    }

    /**
     * Property: se eh o primeiro acesso do usuario.
     *
     */
    get isFirstTime() {
        return this.prefFirstTime;
    }
    set isFirstTime(val) {
        this.prefFirstTime = val;

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no website:
        this.setup();
    }

    /**
     * Aplica as configuracoes da aplicacao e preferencias do usuario no website.
     *
     */
    setup() {
        // aplica as preferencias atualmente configuradas:
        document.documentElement.setAttribute("data-theme", this.prefThemeColor);
        document.documentElement.setAttribute("data-fonts", this.prefFontSize);
        document.documentElement.setAttribute("data-sound", this.prefSoundAlert);

        // se esta aplicando novas preferencias, melhor ja salvar os novos valores:
        this.save();
    }

    /* --- TESTE GPS POLITICO  --------------------------------------------- */

    /**
     * .
     *
     * @param  {String} testVersion .
     */
    startQuiz(testVersion) {
        // inicializa propriedades para sinalizar o inicio do teste politico:
        this.testVersion = testVersion;
        this.testStart = new Date();
    }

    /**
     * .
     *
     * @param  {String} choice .
     */
    addChoice(choice) {
        // adiciona mais uma resposta do usuario:
        this.testLength++;
        // deixa registradas todas as escolhas, para calcular a pontuacao posteriormente:
        this.testChoices.push(choice);

        // ao adicionar nova resposta, salva os dados do usuario por garantia:
        this.save();
    }

    /**
     * .
     *
     * @param  {String} score .
     */
    stopQuiz(score) {
        // inicializa propriedades para sinalizar o encerramento do teste politico:
        this.testFinal = new Date();
        this.testScore = score;

        // apos finalizar o teste, salva seus dados por garantia:
        GlobalUser.save();
    }

    /**
     * Salva esta instancia do AppUser no local-storage.
     *
     */
    save() {
        GlobalStore.set(AppUser.name, this);
        console.log("Instancia corrente de AppUser armazenada no Storage com sucesso: ", this);
    }

    /**
     * Limpa o historico do teste.
     *
     */
    clear() {
        // apaga as respostas do usuario...
        this.testVersion = 0.0; // numero da versao do teste respondido
        this.testStart = null; // data-hora em que iniciou o teste
        this.testFinal = null; // data-hora em que finalizou o teste
        this.testLength = 0; // numero de questoes do teste respondidas ate o momento
        this.testChoices = []; // respostas para as questoes respondidas
        // pontuacao calculada para as respostas
        this.testScore = {
            name: null,
            side: null,
            econ: 0,
            dipl: 0,
            govt: 0,
            scty: 0,
        };

        // ...e tambem limpa o local-storage:
        this.save();
        console.log("Instancia corrente de AppUser reinicializada e atualizada no Storage com sucesso.");
    }
}

// Cria instancia global para manutencao das preferencias e respostas do usuario:
var GlobalUser = AppUser.loadInstance();

// de imediato efetiva as preferencias do usuario no website:
GlobalUser.setup();
