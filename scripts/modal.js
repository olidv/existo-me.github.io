/* --- MODAL PREFERENCES ------------------------------------------------------------------ */

// .
var modalPreferences = {
    labelSchemeColor: "",
    labelFontSize: "",
    labelSoundAlert: "",
    labelUserHistory: "",
}

/**
 * .
 *
 * @param  {Object} event .
 */
function modalPreferences_Load() {
    // Na carga do site, obtem os templates para os rotulos a partir do html.
    modalPreferences.labelSchemeColor = $("#labelSchemeColor").text();
    modalPreferences.labelFontSize = $("#labelFontSize").text();
    modalPreferences.labelSoundAlert = $("#labelSoundAlert").text();
    modalPreferences.labelUserHistory = $("#labelUserHistory").text();
    console.table("Carregados templates para rotulos da modalPreferences: ", modalPreferences);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function modalPreferences_Refresh(event) {
    let label = '';

    // atualiza o label dos componentes baseando em seus valores atuais:
    label = modalPreferences.labelSchemeColor;
    $("#labelSchemeColor").text(label.replace("{0}", GlobalPreferences.labelSchemeColor));

    label = modalPreferences.labelFontSize;
    $("#labelFontSize").text(label.replace("{0}", GlobalPreferences.labelFontSize));

    label = modalPreferences.labelSoundAlert;
    $("#labelSoundAlert").text(label.replace("{0}", GlobalPreferences.labelSoundAlert));

    label = modalPreferences.labelUserHistory;
    $("#labelUserHistory").text(label.replace("{0}", GlobalUser.quizTotalDone));
}

/**
 * .
 *
 * @param  {Object} event .
 */
function modalPreferences_Show(event) {
    // atualiza os valores atuais das preferencias nos rotulos:
    modalPreferences_Refresh(event);

    // estado inicial das preferencias do usuario:
    $("#switchSchemeColor").attr("checked", GlobalPreferences.isSchemeDark);
    $("#rangeFontSize").val(GlobalPreferences.ordFontSize);
    $("#switchSoundAlert").attr("checked", GlobalPreferences.isSoundOn);

    // se o usuario ainda nao respondeu o teste, desabilita o botao:
    $("#clearUserHistory").prop("disabled", !GlobalUser.isQuizDone);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function switchSchemeColor_Change(event) {
    // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
    GlobalPreferences.isSchemeDark = this.checked;

    // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
    modalPreferences_Refresh(event);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function rangeFontSize_Change(event) {
    // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
    GlobalPreferences.ordFontSize = this.value;

    // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
    modalPreferences_Refresh(event);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function switchSoundAlert_Change(event) {
    // ao alterar qualquer propriedade, as preferencias modificadas serao aplicadas no web site:
    GlobalPreferences.isSoundOn = this.checked;

    // ao alterar qualquer preferencia, atualiza o respectivo rotulo:
    modalPreferences_Refresh(event);
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
        GlobalUser.clear();

        // apos apagar o historico, limpa o valor de questoes respondidas no rotulo:
        modalPreferences_Refresh(event);
        // como limpou o historico, nao ha mais respostas a limpar:
        $("#clearUserHistory").prop("disabled", true);
    }
}

/* --- MODAL RESULTADO ------------------------------------------------------------------ */


// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    /* --- MODAL PREFERENCES -------------------------------------------- */

    // inicializa a estrutura de dados da modal de preferencias:
    modalPreferences_Load();

    // efetua bind dos eventos para a modal de preferencias:
    $("#modalPreferences").on("show.bs.modal", modalPreferences_Show);
    // eventos para tratamento das alteracoes das preferencias:
    $("#switchSchemeColor").change(switchSchemeColor_Change);
    $("#rangeFontSize").change(rangeFontSize_Change);
    $("#switchSoundAlert").change(switchSoundAlert_Change);
    $("#clearUserHistory").click(clearUserHistory_Click);

    /* --- MODAL RESULTADO ------------------------------------------------- */

});
