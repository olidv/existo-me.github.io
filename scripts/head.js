/* --- LOCAL STORAGE HELPER ------------------------------------------------------------------ */

/** Classe helper para manipulacao e/ou armazenamento de valores e/ou objetos no local-storage. */
class StorageHelper {
    // propriedades publicas:
    // TODO: poli...
    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // valores default:
    }

    /**
     * .
     *
     * @param  {String} key .
     */
    isSet(key) {
        // eh preciso q a chave seja valida:
        if (key) {
            // verifica se ha algo valido armazenado sob a chave:
            let strValue = localStorage.getItem(key);
            //console.log(`isSet(${key}) = _${strValue}_ of type: ${typeof strValue}`);
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
            let strValue = localStorage.getItem(key);
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
                    localStorage.setItem(key, strObj);
                } else {
                    localStorage.setItem(key, value);
                }
            } else {
                // se o valor for nulo/vazio, entao remove o item:
                localStorage.removeItem(key);
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
            localStorage.removeItem(key);
        }
    }

    /**
     * .
     */
    clear() {
        localStorage.clear();
    }
}

// Cria instancia global para manipular as preferencias do usuario:
var GlobalStore = new StorageHelper();


/* --- WEB SITE & USER PREFERENCES ------------------------------------------------------------------ */

/** Classe para manipulacao e armazenamento das preferencias do usuario. */
class UserPreferences {
    // propriedades publicas: preferencias
    schemeColor; // esquema de cores: light, dark
    fontSize; // tamanho da fonte: small, normal, large, huge
    soundAlert; // alerta sonoro: on, off

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        // valores default:
        this.schemeColor = "light";
        this.fontSize = "normal";
        this.soundAlert = "on";
    }

    /** Rotulo para a preferencia Esquema de Cores. */
    get labelSchemeColor() {
        return this.schemeColor == "dark" ? "Escuro" : "Claro";
    }

    /** Rotulo para a preferencia Esquema de Cores. */
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
    get labelSoundAlert() {
        return this.soundAlert == "on" ? "Ligado" : "Desligado";
    }

    /** Property: esquema de cores 'dark' habilitado. */
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
     * Aplica as preferencias do usuario no web site.
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
     * Salva as preferencias do usuario no local-storage.
     */
    save() {
        GlobalStore.set(UserPreferences.name, this);
        console.table("Instancia corrente de UserPreferences armazenada no LocalStorage: ", this);
    }

    /**
     * Carrega as preferencias anteriores da ultima sessao do usuario a partir do local-storage.
     */
    static loadInstance() {
        let newInstance = new UserPreferences();

        // se ja estiver salvo no local-storage, recupera as propriedades:
        if (GlobalStore.isSet(UserPreferences.name)) {
            let objStorage = GlobalStore.get(UserPreferences.name);
            // transfere os valores para uma nova instancia de UserPreferences:
            newInstance = Object.assign(newInstance, objStorage);
            // salva novamente, para o caso de se ter criado novas propriedades na classe:
            GlobalStore.set(UserPreferences.name, newInstance);
            console.table("Valores de UserPreferences recuperados do LocalStorage: ", newInstance);
        } else {
            GlobalStore.set(UserPreferences.name, newInstance);
            console.table("Nova instancia de UserPreferences criada e armazenada no LocalStorage: ", newInstance);
        }

        return newInstance;
    }
}

// Cria instancia global para manipular as preferencias do usuario:
//GlobalStore.clear();  // reset do local-storage
var GlobalPreferences = UserPreferences.loadInstance();
