/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Let the browser do the parsing, automatically. */
var dataPoliticalGps = {
    // identificacao deste versao do teste politico:
    testVersion: 1.0,
    testLength: 10,

    // relacao de questoes do teste:
    testQuests: [
        {
            subject: "A opressão por parte das corporações é um problema mais grave do que a opressão por parte dos governos.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 5,
                govt: 0,
                scty: 0,
            },
        },
        {
            subject: "É necessário que o governo intervenha na economia para proteger os consumidores.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            subject: "Quanto mais livre é o mercado, mais livres são as pessoas.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 5,
                govt: 0,
                scty: 0,
            },
        },
        {
            subject: "É melhor manter o orçamento em ordem do que garantir o bem-estar social para todos os cidadãos.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 10,
                govt: 0,
                scty: 0,
            },
        },
        {
            subject: "Pesquisas publicamente financiadas são um maior benefício a população do que deixá-las exclusivamente sob a administração do setor privado.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 10,
                govt: 0,
                scty: 10,
            },
        },
        {
            subject: "O comércio internacional é benéfico.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: -5,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            subject: "De cada qual, segundo sua capacidade; a cada qual, segundo suas necessidades.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 10,
                govt: 0,
                scty: 5,
            },
        },
        {
            subject: "Seria melhor se programas sociais fossem abolidos em favor da caridade privada.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: -5,
            },
        },
        {
            subject: "Os impostos deveriam aumentar para os ricos, em benefício dos pobres.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            subject: "A herança é uma forma legítima de riqueza.",
            options: [
                { text: "Delegadis gente finis, bibendum egestas augue arcu ut est.Aenean aliquam molestie leo, vitae iaculis nisl.", mult: -1 },
                { text: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis, Interagi no mé.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: -5,
            },
        },
    ],

    // denominacao para os eixos conforme a pontuacao (outcome):
    testLabels: {
        econ: ["Comunista", "Socialista", "Social", "Centrista", "Mercado", "Capitalista", "Liberalista"],
        dipl: ["Cosmopolita", "Internacionalista", "Pacifista", "Balanceado", "Patriótico", "Nacionalista", "Chauvinista"],
        govt: ["Anarquista", "Libertário", "Liberal", "Moderado", "Estadista", "Autoritário", "Totalitarista"],
        scty: ["Revolucionário", "Muito Progressista", "Progressista", "Neutro", "Conservador", "Muito Conservador", "Reacionário"],
    },

    // relacao de ideologias resultantes do teste:
    testIdeals: [
        {
            name: "Anarco-Comunista",
            side: 1,
            rate: {
                econ: 100,
                dipl: 50,
                govt: 100,
                scty: 90,
            },
        },
        {
            name: "Comunista Libertário",
            side: 1,
            rate: {
                econ: 100,
                dipl: 70,
                govt: 80,
                scty: 80,
            },
        },
        {
            name: "Trotskista",
            side: 1,
            rate: {
                econ: 100,
                dipl: 100,
                govt: 60,
                scty: 80,
            },
        },
        {
            name: "Marxista",
            side: 1,
            rate: {
                econ: 100,
                dipl: 70,
                govt: 40,
                scty: 80,
            },
        },
        {
            name: "De Leonista",
            side: 1,
            rate: {
                econ: 100,
                dipl: 30,
                govt: 30,
                scty: 80,
            },
        },
        {
            name: "Leninista",
            side: 1,
            rate: {
                econ: 100,
                dipl: 40,
                govt: 20,
                scty: 70,
            },
        },
        {
            name: "Stalinista Maoista",
            side: 1,
            rate: {
                econ: 100,
                dipl: 20,
                govt: 0,
                scty: 60,
            },
        },
        {
            name: "Comunista Religioso",
            side: 1,
            rate: {
                econ: 100,
                dipl: 50,
                govt: 30,
                scty: 30,
            },
        },
        {
            name: "Socialista De Estado",
            side: 1,
            rate: {
                econ: 80,
                dipl: 30,
                govt: 30,
                scty: 70,
            },
        },
        {
            name: "Socialista Teocrático",
            side: 1,
            rate: {
                econ: 80,
                dipl: 50,
                govt: 30,
                scty: 20,
            },
        },
        {
            name: "Socialista Religioso",
            side: 1,
            rate: {
                econ: 80,
                dipl: 50,
                govt: 70,
                scty: 20,
            },
        },
        {
            name: "Socialista Democrático",
            side: 1,
            rate: {
                econ: 80,
                dipl: 50,
                govt: 50,
                scty: 80,
            },
        },
        {
            name: "Socialista Revolucionário",
            side: 1,
            rate: {
                econ: 80,
                dipl: 20,
                govt: 50,
                scty: 70,
            },
        },
        {
            name: "Socialista Libertário",
            side: 1,
            rate: {
                econ: 80,
                dipl: 80,
                govt: 80,
                scty: 80,
            },
        },
        {
            name: "Anarco-Sindicalista",
            side: 1,
            rate: {
                econ: 80,
                dipl: 50,
                govt: 100,
                scty: 80,
            },
        },
        {
            name: "Populista De Esquerda",
            side: 1,
            rate: {
                econ: 60,
                dipl: 40,
                govt: 30,
                scty: 70,
            },
        },
        {
            name: "Distributista Teocrático",
            side: 1,
            rate: {
                econ: 60,
                dipl: 40,
                govt: 30,
                scty: 20,
            },
        },
        {
            name: "Distributista",
            side: 1,
            rate: {
                econ: 60,
                dipl: 50,
                govt: 50,
                scty: 20,
            },
        },
        {
            name: "Liberal Social",
            side: 2,
            rate: {
                econ: 60,
                dipl: 60,
                govt: 60,
                scty: 80,
            },
        },
        {
            name: "Democrata Cristão",
            side: 2,
            rate: {
                econ: 60,
                dipl: 60,
                govt: 40,
                scty: 30,
            },
        },
        {
            name: "Social Democrata",
            side: 1,
            rate: {
                econ: 60,
                dipl: 70,
                govt: 40,
                scty: 80,
            },
        },
        {
            name: "Progressivista",
            side: 1,
            rate: {
                econ: 60,
                dipl: 80,
                govt: 60,
                scty: 100,
            },
        },
        {
            name: "Anarco-Mutualista",
            side: 1,
            rate: {
                econ: 60,
                dipl: 50,
                govt: 100,
                scty: 70,
            },
        },
        {
            name: "Totalitarista Nacionalista",
            side: 2,
            rate: {
                econ: 50,
                dipl: 20,
                govt: 0,
                scty: 50,
            },
        },
        {
            name: "Totalitarista Globalista",
            side: 2,
            rate: {
                econ: 50,
                dipl: 80,
                govt: 0,
                scty: 50,
            },
        },
        {
            name: "Tecnocrata",
            side: 0,
            rate: {
                econ: 60,
                dipl: 60,
                govt: 20,
                scty: 70,
            },
        },
        {
            name: "Centrista",
            side: 0,
            rate: {
                econ: 50,
                dipl: 50,
                govt: 50,
                scty: 50,
            },
        },
        {
            name: "Liberal",
            side: 2,
            rate: {
                econ: 50,
                dipl: 60,
                govt: 60,
                scty: 60,
            },
        },
        {
            name: "Anarquista Religioso",
            side: 1,
            rate: {
                econ: 50,
                dipl: 50,
                govt: 0,
                scty: 20,
            },
        },
        {
            name: "Populista de Direita",
            side: 2,
            rate: {
                econ: 40,
                dipl: 30,
                govt: 30,
                scty: 30,
            },
        },
        {
            name: "Conservador Moderado",
            side: 2,
            rate: {
                econ: 40,
                dipl: 40,
                govt: 50,
                scty: 30,
            },
        },
        {
            name: "Reacionário",
            side: 2,
            rate: {
                econ: 40,
                dipl: 40,
                govt: 40,
                scty: 10,
            },
        },
        {
            name: "Social Libertário",
            side: 1,
            rate: {
                econ: 60,
                dipl: 70,
                govt: 80,
                scty: 70,
            },
        },
        {
            name: "Libertário",
            side: 1,
            rate: {
                econ: 40,
                dipl: 60,
                govt: 80,
                scty: 60,
            },
        },
        {
            name: "Anarco-Egoísta",
            side: 2,
            rate: {
                econ: 40,
                dipl: 50,
                govt: 100,
                scty: 50,
            },
        },
        {
            name: "Nazista",
            side: 2,
            rate: {
                econ: 40,
                dipl: 0,
                govt: 0,
                scty: 5,
            },
        },
        {
            name: "Autocrata",
            side: 2,
            rate: {
                econ: 50,
                dipl: 20,
                govt: 20,
                scty: 50,
            },
        },
        {
            name: "Fascista",
            side: 2,
            rate: {
                econ: 40,
                dipl: 20,
                govt: 20,
                scty: 20,
            },
        },
        {
            name: "Fascista Capitalista",
            side: 2,
            rate: {
                econ: 20,
                dipl: 20,
                govt: 20,
                scty: 20,
            },
        },
        {
            name: "Conservador",
            side: 2,
            rate: {
                econ: 30,
                dipl: 40,
                govt: 40,
                scty: 20,
            },
        },
        {
            name: "Neoliberal",
            side: 2,
            rate: {
                econ: 30,
                dipl: 30,
                govt: 50,
                scty: 60,
            },
        },
        {
            name: "Liberal Clássico",
            side: 2,
            rate: {
                econ: 30,
                dipl: 60,
                govt: 60,
                scty: 80,
            },
        },
        {
            name: "Capitalista Autoritário",
            side: 2,
            rate: {
                econ: 20,
                dipl: 30,
                govt: 20,
                scty: 40,
            },
        },
        {
            name: "Capitalista De Estado",
            side: 2,
            rate: {
                econ: 20,
                dipl: 50,
                govt: 30,
                scty: 50,
            },
        },
        {
            name: "Neoconservador",
            side: 2,
            rate: {
                econ: 20,
                dipl: 20,
                govt: 40,
                scty: 20,
            },
        },
        {
            name: "Fundamentalista",
            side: 2,
            rate: {
                econ: 20,
                dipl: 30,
                govt: 30,
                scty: 5,
            },
        },
        {
            name: "Capitalista Libertário",
            side: 2,
            rate: {
                econ: 20,
                dipl: 50,
                govt: 80,
                scty: 60,
            },
        },
        {
            name: "Anarquista De Mercado",
            side: 2,
            rate: {
                econ: 20,
                dipl: 50,
                govt: 100,
                scty: 50,
            },
        },
        {
            name: "Objetivista",
            side: 2,
            rate: {
                econ: 10,
                dipl: 50,
                govt: 90,
                scty: 40,
            },
        },
        {
            name: "Capitalista Totalitário",
            side: 2,
            rate: {
                econ: 0,
                dipl: 30,
                govt: 0,
                scty: 50,
            },
        },
        {
            name: "Ultracapitalista",
            side: 2,
            rate: {
                econ: 0,
                dipl: 40,
                govt: 50,
                scty: 50,
            },
        },
        {
            name: "Anarco-Capitalista",
            side: 2,
            rate: {
                econ: 0,
                dipl: 50,
                govt: 100,
                scty: 50,
            },
        },
    ],
};
