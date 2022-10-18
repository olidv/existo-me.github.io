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

/*
 * .
 *
 */




/* --- LOCAL STORAGE HELPER ------------------------------------------------------------------ */

/** Classe helper para manutencao de valores e/ou objetos no storage do browser. */
/**
 * .
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

/* --- WEB SITE SETUP ------------------------------------------------------------------ */

/** Classe para manipulacao e armazenamento das configuracoes da aplicacao e preferencias do usuario. */
/**
 * .
 */
class AppSetup {
    // propriedades publicas: configuracoes da aplicacao
    //
    // propriedades publicas: preferencias do usuario
    schemeColor; // esquema de cores: light, dark
    fontSize; // tamanho da fonte: small, normal, large, huge
    soundAlert; // alerta sonoro: on, off

    /* --- INITIALIZATION ------------------------------------------------------------------ */

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // valores default:
        this.schemeColor = "light";
        this.fontSize = "normal";
        this.soundAlert = "off";
    }

    /**
     * Carrega as configuracoes e preferencias anteriores da ultima sessao do usuario a partir do storage.
     */
    static loadInstance() {
        let newInstance = new AppSetup();

        // se ja estiver salvo no storage, recupera as propriedades:
        if (GlobalStore.exist(AppSetup.name)) {
            let objStorage = GlobalStore.get(AppSetup.name);
            // transfere os valores para uma nova instancia de AppSetup:
            newInstance = Object.assign(newInstance, objStorage);

            // salva novamente, para o caso de se ter criado novas propriedades na classe:
            newInstance.save();
            console.info("Valores de AppSetup recuperados e atualizados no Storage com sucesso.");
        } else {
            // como ainda nao existia no storage, salva para proximas sessoes:
            newInstance.save();
            console.info("Nova instancia de AppSetup criada e armazenada no Storage com sucesso.");
        }

        return newInstance;
    }

    /** Rotulo para a preferencia Esquema de Cores. */
    /**
     * .
     */
    get labelSchemeColor() {
        return this.schemeColor == "dark" ? "Escuro" : "Claro";
    }

    /** Rotulo para a preferencia Esquema de Cores. */
    /**
     * .
     */
    get labelFontSize() {
        switch (this.fontSize) {
            case "small": // 1 = small
                return "Pequena";
            case "normal": // 2 = normal
                return "Normal";
            case "large": // 3 = large
                return "Grande";
            case "huge": // 4 = huge
                return "Maior";
        }
    }

    /** Rotulo para a preferencia Esquema de Cores. */
    /**
     * .
     */
    get labelSoundAlert() {
        return this.soundAlert == "on" ? "Ligado" : "Desligado";
    }

    /** Property: esquema de cores 'dark' habilitado. */
    /**
     * .
     */
    get isSchemeDark() {
        return this.schemeColor == "dark";
    }
    set isSchemeDark(val) {
        if (val) {
            this.schemeColor = "dark";
        } else {
            this.schemeColor = "light";
        }

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no web site:
        this.refresh();
    }

    /** Property: valor ordinal do tamanho da fonte. */
    /**
     * .
     */
    get ordFontSize() {
        switch (this.fontSize) {
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
                this.fontSize = "small";
                break;
            case 2: // 2 = normal
                this.fontSize = "normal";
                break;
            case 3: // 3 = large
                this.fontSize = "large";
                break;
            case 4: // 4 = huge
                this.fontSize = "huge";
                break;
        }

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no web site:
        this.refresh();
    }

    /** Property: alerta sonoro habilitado 'on'. */
    /**
     * .
     */
    get isSoundOn() {
        return this.soundAlert == "on";
    }
    set isSoundOn(val) {
        if (val) {
            this.soundAlert = "on";
        } else {
            this.soundAlert = "off";
        }

        // ao alterar qualquer propriedade, aplica as preferencias modificadas no web site:
        this.refresh();
    }

    /**
     * Aplica as configuracoes da aplicacao e preferencias do usuario no web site.
     */
    refresh() {
        // elimina quaisquer estilos atualmente configurados:
        const cls = ["scheme-light", "scheme-dark", "font-small", "font-normal", "font-large", "font-huge"];
        document.documentElement.classList.remove(...cls);

        // aplica as preferencias:
        document.documentElement.classList.add("scheme-" + this.schemeColor, "font-" + this.fontSize);

        // se esta aplicando novas preferencias, melhor ja salvar os novos valores:
        this.save();
    }

    /**
     * Salva as configuracoes da aplicacao e preferencias do usuario no storage.
     */
    save() {
        GlobalStore.set(AppSetup.name, this);
        console.table("Instancia corrente de AppSetup armazenada no Storage com sucesso: ", this);
    }
}

// Cria instancia global para manipular as preferencias do usuario:
//GlobalStore.clear();  // reset do storage.
var GlobalSetup = AppSetup.loadInstance();

// de imediato efetiva as preferencias do usuario no web site:
GlobalSetup.refresh();
