/* --- MODAL APP SETUP ------------------------------------------------------------------ */

// .
var modalSetup = {
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
function modalSetup_Load() {
    // Na carga do site, obtem os templates para os rotulos a partir do html.
    modalSetup.labelSchemeColor = $("#labelSchemeColor").text();
    modalSetup.labelFontSize = $("#labelFontSize").text();
    modalSetup.labelSoundAlert = $("#labelSoundAlert").text();
    modalSetup.labelUserHistory = $("#labelUserHistory").text();
    console.table("Carregados templates para rotulos da modalSetup: ", modalSetup);
}

/**
 * .
 *
 * @param  {Object} event .
 */
function modalSetup_Refresh(event) {
    let label = '';

    // atualiza o label dos componentes baseando em seus valores atuais:
    label = modalSetup.labelSchemeColor;
    $("#labelSchemeColor").text(label.replace("{0}", GlobalSetup.labelSchemeColor));

    label = modalSetup.labelFontSize;
    $("#labelFontSize").text(label.replace("{0}", GlobalSetup.labelFontSize));

    label = modalSetup.labelSoundAlert;
    $("#labelSoundAlert").text(label.replace("{0}", GlobalSetup.labelSoundAlert));

    label = modalSetup.labelUserHistory;
    $("#labelUserHistory").text(label.replace("{0}", GlobalUser.quizTotalDone));
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
    $("#clearUserHistory").prop("disabled", !GlobalUser.isQuizDone);
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
        GlobalUser.clear();

        // apos apagar o historico, limpa o valor de questoes respondidas no rotulo:
        modalSetup_Refresh(event);
        // como limpou o historico, nao ha mais respostas a limpar:
        $("#clearUserHistory").prop("disabled", true);
    }
}

/* --- MODAL RESULTADO ------------------------------------------------------------------ */


/* --- JQUERY: DOM READY ------------------------------------------------------------------ */

// Elementos "Window, Body e Document" prontos para manipulacao pelo jQuery.
$(document).ready(function () {
    ("use strict"); // sempre!

    /* --- MODAL SETUP -------------------------------------------- */

    // inicializa a estrutura de dados da modal de setup:
    modalSetup_Load();

    // efetua bind dos eventos para a modal de setup:
    $("#modalSetup").on("show.bs.modal", modalSetup_Show);
    // eventos para tratamento das alteracoes das preferencias:
    $("#switchSchemeColor").change(switchSchemeColor_Change);
    $("#rangeFontSize").change(rangeFontSize_Change);
    $("#switchSoundAlert").change(switchSoundAlert_Change);
    $("#clearUserHistory").click(clearUserHistory_Click);

    /* --- MODAL RESULTADO ------------------------------------------------- */

});
