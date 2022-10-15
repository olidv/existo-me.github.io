/* --- WEB SITE PREFERENCES ------------------------------------------------------------------ */

/** Classe para manipulacao e armazenamento das preferencias do usuario. */
class Preferences {
    // propriedades publicas: preferencias
    schemeColor; // esquema de cores: light, dark
    fontSize; // tamanho da fonte: small, normal, large, huge
    soundAlert; // alerta sonoro: on, off

    /**
     * Inicializacao de nova instancia.
     */
    constructor() {
        this.schemeColor = localStorage.getItem("EXISTOme-scheme-color") || "light";
        this.fontSize = localStorage.getItem("EXISTOme-font-size") || "normal";
        this.soundAlert = localStorage.getItem("EXISTOme-sound-alert") || "on";

        // na inicializacao, aproveita para aplicar as preferencias recuperadas no web site:
        this.refresh();
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
        switch (+val) {  // valor vem como string do input-range.
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
        //this.refresh();
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
        localStorage.setItem("EXISTOme-scheme-color", this.schemeColor);
        localStorage.setItem("EXISTOme-font-size", this.fontSize);
        localStorage.setItem("EXISTOme-sound-alert", this.soundAlert);
    }
}

// Cria instancia global para manipular as preferencias do usuario:
var GlobalPreferences = new Preferences();
