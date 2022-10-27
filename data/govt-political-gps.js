/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Contem 16 questoes do eixo GOVERNO. */
var govtPoliticalGps = {
    testQuests: [
        {
            //question_en: "Gun ownership should be prohibited for those without a valid reason.",
            //question_pt: "A posse ou o porte de armas de fogo precisam ser limitados aos casos específicos onde elas se fazem realmente necessárias, sem uma razão válida.",
            subject: "A posse ou o porte de armas de fogo em território nacional deve ser:",
            options: [
                { text: "Liberada para todos, independentemente de haver razão válida.", mult: -1 },
                { text: "Proibida quando não houver uma razão válida.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "Physician-assisted suicide should be legal.",
            //question_pt: "O suicídio assistido por médico deve ser legal.",
            subject: "O suicídio assistido por médico no Brasil deve ser:",
            options: [
                { text: "Proibido e evitado.", mult: -1 },
                { text: "Permitido e regularizado.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "The sacrifice of some civil liberties is necessary to protect us from acts of terrorism.",
            //question_pt: "O sacrifício de algumas liberdades civis é necessário para nos proteger dos atos de terrorismo.",
            subject: "Para nos protegermos dos atos de terrorismo no Brasil é:",
            options: [
                { text: "Necessário o sacrifício de algumas liberdades civis.", mult: +1 },
                { text: "Injustificável permitir a perda das liberdades civis.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "Government surveillance is necessary in the modern world.",
            //question_pt: "A vigilância governamental é necessária no mundo moderno.",
            subject: "A vigilância governamental sobre os brasileiros, pela Agência Brasileira de Inteligência (ABIN), é:",
            options: [
                { text: "Necessária e importante.", mult: +1 },
                { text: "Desnecessária e perigosa.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "The very existence of the state is a threat to our liberty.",
            //question_pt: "A própria existência do Estado é uma ameaça à nossa liberdade.",
            subject: "A existência de um Estado é sempre:",
            options: [
                { text: "Importante para a nossa proteção.", mult: -1 },
                { text: "Uma ameaça à nossa liberdade.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "It is important that the government follows the majority opinion, even if it is wrong.",
            //question_pt: "É importante que o governo siga a opinião da maioria, ainda que ela possa estar errada.",
            subject: "Para tomar decisões, o governo do Brasil deve:",
            options: [
                { text: "Sempre seguir a opinião da maioria dos brasileiros, ainda que ela possa estar errada.", mult: +1 },
                { text: "Seguir a opinião da maioria dos brasileiros, mas apenas quando ela não estiver errada.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "It is very important to maintain law and order.",
            //question_pt: "É muito importante a manutenção da lei e da ordem.",
            subject: "A manutenção da lei e da ordem pelo governo do Brasil é:",
            options: [
                { text: "Menos prioritário que outros temas.", mult: -1 },
                { text: "O mais importante.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: -5,
                govt: -10,
                scty: -5,
            },
        },
        {
            //question_en: "Even when protesting an authoritarian government, violence is not acceptable.",
            //question_pt: "Mesmo ao protestar contra um governo autoritário, a violência não é aceitável.",
            subject: "Para protestar contra um governo autoritário:",
            options: [
                { text: "A violência pode ser utilizada.", mult: -1 },
                { text: "A violência jamais poderá ser aceitável.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 5,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "Military spending is a waste of money.",
            //question_pt: "As despesas militares são um desperdício de dinheiro.",
            subject: "As despesas com as Forças Armadas do Brasil são:",
            options: [
                { text: "Necessárias e devem ser mantidas.", mult: -1 },
                { text: "Um desperdício de dinheiro.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "All authority should be questioned.",
            //question_pt: "Toda autoridade deve ser questionada, nenhuma autoridade deve ser mantida livre de questionamentos.",
            subject: "A autoridade do governo brasileiro:",
            options: [
                { text: "Deve ser sempre questionada, pois nenhuma autoridade deve ser mantida livre de questionamentos.", mult: +1 },
                { text: "Não pode ser questionada a todo momento e em todos os casos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 5,
            },
        },
        {
            //question_en: Regardless of political opinions, it is important to side with your country.",
            //question_pt: "Independentemente das suas opiniões políticas, é importante ficar ao lado do seu país em momentos de necessidade.",
            subject: "Um cidadão brasileiro deve ser leal ao governo do Brasil:",
            options: [
                { text: "Apenas quando possuir a mesma opinião do governo.", mult: -1 },
                { text: "Mesmo quando possui opiniões políticas contrárias.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: -5,
            },
        },
        {
            //question_en: "The stronger the leadership, the better.",
            //question_pt: "Quanto mais forte for a liderança do governo, melhor para a nação.",
            subject: "Quanto mais forte for a liderança do nosso governo:",
            options: [
                { text: "Melhor para o Brasil.", mult: +1 },
                { text: "Pior para os brasileiros.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "Tariffs on international trade are important to encourage local production.",
            //question_pt: "A tarifação do comércio internacional é importante para estimular a produção local.",
            subject: "A tarifação de compras internacionais feitas em applicativos como Shopee:",
            options: [
                { text: "É importante para proteger a produção local e favorecer os brasileiros a longo prazo.", mult: +1 },
                { text: "Não afeta a produção local e apenas prejudica os brasileiros mais pobres a curto prazo.", mult: -1 },
            ],
            outcome: {
                econ: 5,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "The general populace makes poor decisions.",
            //question_pt: "A população em geral toma decisões ruins.",
            subject: "As decisões da população brasileira:",
            options: [
                { text: "Em geral são decisões ruins.", mult: +1 },
                { text: "Nem sempre são decisões ruins.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "A hierarchical state is best.",
            //question_pt: "Um Estado rigidamente hierárquico é o melhor caminho para a manutenção da ordem.",
            subject: "Um Estado rigidamente hierárquico:",
            options: [
                { text: "Não garante a ordem e pode levar ao fascismo.", mult: -1 },
                { text: "É o melhor caminho para a manutenção da ordem.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "Democracy is more than a decision-making process.",
            //question_pt: "A democracia é mais do que um mero processo de tomada de decisões.",
            subject: "A democracia brasileira:",
            options: [
                { text: "É simplesmente um mero processo de tomada de votos.", mult: -1 },
                { text: "É muito maior do que um mero processo de tomada de votos.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
    ],
};
