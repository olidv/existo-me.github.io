/* --- MODAL APP SETUP ------------------------------------------------------------------ */

/**
 * .
 *
 * @param  {Object} event .
 */
function modalSetup_Refresh(event) {
    // atualiza o label dos componentes baseando em seus valores atuais:
    let label = DOM.labelSchemeColor.replace("{0}", GlobalSetup.labelSchemeColor);
    $("#labelSchemeColor").text(label);

    label = DOM.labelFontSize.replace("{0}", GlobalSetup.labelFontSize);
    $("#labelFontSize").text(label);

    label = DOM.labelSoundAlert.replace("{0}", GlobalSetup.labelSoundAlert);
    $("#labelSoundAlert").text(label);

    label = DOM.labelUserHistory.replace("{0}", GlobalUser.testTotalDone);
    $("#labelUserHistory").text(label);
    $("#clearUserHistory").prop("disabled", GlobalUser.testTotalDone == 0);

}

/**
 * .
 *
 * @param  {Object} event .
 */
function modalSetup_Show(event) {
    // atualiza os valores atuais das preferencias nos rotulos:
    modalSetup_Refresh(event);

    // estado inicial das preferencias do usuario:
    $("#switchSchemeColor").attr("checked", GlobalSetup.isSchemeDark);
    $("#rangeFontSize").val(GlobalSetup.ordFontSize);
    $("#switchSoundAlert").attr("checked", GlobalSetup.isSoundOn);

    // se o usuario ainda nao respondeu o teste, desabilita o botao:
    $("#clearUserHistory").prop("disabled", GlobalUser.testTotalDone == 0);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function switchSchemeColor_Change(event) {
    // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
    GlobalSetup.isSchemeDark = this.checked;

    // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
    modalSetup_Refresh(event);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function rangeFontSize_Change(event) {
    // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
    GlobalSetup.ordFontSize = this.value;

    // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
    modalSetup_Refresh(event);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function switchSoundAlert_Change(event) {
    // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
    GlobalSetup.isSoundOn = this.checked;

    // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
    modalSetup_Refresh(event);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function clearUserHistory_Click(event) {
    // para evitar enganos, pede a confirmacao do usuario:
    let isOk = confirm("Por favor, confirme a exclusão do seu histórico de respostas para o teste do GPS Político:");
    if (isOk) {
        // limpa todos os dados do teste do usuario:
        GlobalUser.clear();
        // apos apagar o historico, limpa o valor de questoes respondidas no rotulo:
        modalSetup_Refresh(event);

        // eh preciso atualizar o slide introdutorio, pq o usuario tem novo estado:
        showIntro();
    }
}

/* --- MODAL RESULTADO ------------------------------------------------------------------ */


/* --- JQUERY: DOM READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    /* --- MODAL SETUP -------------------------------------------- */

    // efetua bind dos eventos para a modal de setup:
    $("#modalSetup").on("show.bs.modal", modalSetup_Show);
    // eventos para tratamento das alteracoes das preferencias:
    $("#switchSchemeColor").change(switchSchemeColor_Change);
    $("#rangeFontSize").change(rangeFontSize_Change);
    $("#switchSoundAlert").change(switchSoundAlert_Change);
    $("#clearUserHistory").click(clearUserHistory_Click);

    /* --- MODAL RESULTADO ------------------------------------------------- */

});
