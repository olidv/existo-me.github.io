/* --- UTILITARIOS ------------------------------------------------------------------ */

/**
 * .
 *
 */
String.prototype.formats = String.prototype.formats || function () {
    "use strict";

    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = "string" === t || "number" === t ? Array.prototype.slice.call(arguments) : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
};


/* --- LOCAL STORAGE HELPER ------------------------------------------------------------------ */

/**
 * Classe helper para manutencao de valores e/ou objetos no storage do browser.
 *
 */
class StorageFacade {
    // propriedades privadas:
    #store; // indica onde os dados serao salvos (local ou session).

    /* --- INITIALIZATION ------------------------------------------------------------------ */

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
                //console.table(`get(${key}) = _${objValue}_ of type: ${typeof objValue}`);
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
        //console.table(`set(${key}, ${typeof value})`, value);
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
     */
    clear() {
        this.#store.clear();
    }
}

// Cria instancia global para manutencao de dados no storage (browser api):
var GlobalStore = new StorageFacade(true); // maior persistencia sem data de expiracao (local-storage).


/* --- APPLICATION USER CLASS ------------------------------------------------------------------ */

/**
 * Classe para armazenamento de informacoes e configuracoes do usuario.
 */
class AppUser {
    // propriedades publicas: informacoes gerais
    name = null; // nome do usuario para emissao de certificado

    // propriedades publicas: preferencias do usuario
    prefSchemeColor; // esquema de cores: light, dark
    prefFontSize; // tamanho da fonte: small, normal, large, huge
    prefSoundAlert; // alerta sonoro: on, off

    // propriedades publicas: teste do gps politico
    testQuizVersion = 0.0; // numero da versao do teste respondido
    testQuizStart = null; // data-hora em que iniciou o teste
    testQuizFinal = null; // data-hora em que finalizou o teste
    testQuizLength = 0; // numero de questoes do teste respondidas ate o momento
    testQuizQueries = []; // respostas para as questoes respondidas
    testTotalScore = 0.0; // pontuacao calculada para as respostas
    testCssColor = null; // coloracao correspondente a pontuacao obtida
    testFileImage = null; // id do plano (figura) para a pontuacao obtida

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // valores default para as preferencias:
        this.prefSchemeColor = "light";
        this.prefFontSize = "normal";
        this.prefSoundAlert = "off";
    }

    /**
     * Carrega os dados anteriores da ultima sessao do usuario a partir do local-storage.
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
            console.info("Valores de AppUser recuperados e atualizados no Storage com sucesso.");
        } else {
            // como ainda nao existia no storage, salva para proximas sessoes:
            newInstance.save();
            console.info("Nova instancia de AppUser criada e armazenada no Storage com sucesso.");
        }

        return newInstance;
    }

    /* --- WEB SITE SETUP ------------------------------------------------------------------ */

    /** Property: esquema de cores 'dark' habilitado. */
    /**
     * .
     */
    get isSchemeDark() {
        return this.prefSchemeColor == "dark";
    }
    set isSchemeDark(val) {
        if (val) {
            this.prefSchemeColor = "dark";
        } else {
            this.prefSchemeColor = "light";
        }

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no web site:
        this.setup();
    }

    /** Property: valor ordinal do tamanho da fonte. */
    /**
     * .
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

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no web site:
        this.setup();
    }

    /** Property: alerta sonoro habilitado 'on'. */
    /**
     * .
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

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no web site:
        this.setup();
    }

    /**
     * Aplica as configuracoes da aplicacao e preferencias do usuario no web site.
     */
    setup() {
        // elimina quaisquer estilos atualmente configurados:
        const cls = ["scheme-light", "scheme-dark", "font-small", "font-normal", "font-large", "font-huge"];
        document.documentElement.classList.remove(...cls);

        // aplica as preferencias:
        document.documentElement.classList.add("scheme-" + this.prefSchemeColor, "font-" + this.prefFontSize);

        // se esta aplicando novas preferencias, melhor ja salvar os novos valores:
        this.save();
    }

    /* --- TESTE GPS POLITICO  -------------------------------------------------------------- */

    /**
     * .
     *
     * @param  {String} p .
     */
    startQuiz(testVersion) {
        // inicializa propriedades para sinalizar o inicio do teste politico:
        this.testQuizVersion = testVersion;
        this.testQuizStart = new Date();
    }

    /**
     * .
     *
     * @param  {String} p .
     * @param  {String} p .
     * @param  {String} p .
     */
    addResponse(item, rate, side) {
        // deixa registrados todos os valores, para calcular a pontuacao posteriormente:
        const choice = {
            item: item,
            rate: rate,
            side: side,
        };

        // adiciona mais uma resposta do usuario:
        this.testQuizLength++;
        this.testQuizQueries.push(choice);
    }

    /**
     * .
     */
    stopQuiz() {
        // inicializa propriedades para sinalizar o encerramento do teste politico:
        this.testQuizFinal = new Date();
    }

    /**
     * Salva esta instancia do AppUser no local-storage.
     */
    save() {
        GlobalStore.set(AppUser.name, this);
        console.table("Instancia corrente de AppUser armazenada no Storage com sucesso: ", this);
    }

    /**
     * Limpa o historico do teste.
     */
    clear() {
        // apaga as respostas do usuario...
        this.testUserVersion = 0.0;
        this.testQuizStart = null;
        this.testQuizFinal = null;
        this.testQuizLength = 0;
        this.testQuizQueries = [];
        this.testTotalScore = 0.0;
        this.testCssColor = null;
        this.testFileImage = null;

        // ...e tambem limpa o local-storage:
        this.save();
        console.info("Instancia corrente de AppUser reinicializada e atualizada no Storage com sucesso.");
    }
}

// Cria instancia global para manutencao das preferencias e respostas do usuario:
var GlobalUser = AppUser.loadInstance();

// de imediato efetiva as preferencias do usuario no web site:
GlobalUser.setup();
