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
                dipl: 0,
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
                dipl: 0,
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
                dipl: 0,
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
                dipl: 0,
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
                dipl: 0,
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
            name: "Anarcocomunismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 50,
                govt: 100,
                scty: 90,
            },
        },
        {
            name: "Comunismo Libertário",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 70,
                govt: 80,
                scty: 80,
            },
        },
        {
            name: "Trotskismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 100,
                govt: 60,
                scty: 80,
            },
        },
        {
            name: "Marxismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 70,
                govt: 40,
                scty: 80,
            },
        },
        {
            name: "De Leonismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 30,
                govt: 30,
                scty: 80,
            },
        },
        {
            name: "Leninismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 40,
                govt: 20,
                scty: 70,
            },
        },
        {
            name: "Stalinismo/Maoismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 20,
                govt: 0,
                scty: 60,
            },
        },
        {
            name: "Comunismo Reliogioso",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 100,
                dipl: 50,
                govt: 30,
                scty: 30,
            },
        },
        {
            name: "Socialismo de Estado",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 80,
                dipl: 30,
                govt: 30,
                scty: 70,
            },
        },
        {
            name: "Socialismo Teocrático",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 80,
                dipl: 50,
                govt: 30,
                scty: 20,
            },
        },
        {
            name: "Socialismo Religioso",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 80,
                dipl: 50,
                govt: 70,
                scty: 20,
            },
        },
        {
            name: "Socialismo Democrático",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 80,
                dipl: 50,
                govt: 50,
                scty: 80,
            },
        },
        {
            name: "Socialismo Revolucionário",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 80,
                dipl: 20,
                govt: 50,
                scty: 70,
            },
        },
        {
            name: "Socialismo Libertário",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 80,
                dipl: 80,
                govt: 80,
                scty: 80,
            },
        },
        {
            name: "Anarcosindicalismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 80,
                dipl: 50,
                govt: 100,
                scty: 80,
            },
        },
        {
            name: "Populismo de Esquerda",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 40,
                govt: 30,
                scty: 70,
            },
        },
        {
            name: "Distributismo Teocrático",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 40,
                govt: 30,
                scty: 20,
            },
        },
        {
            name: "Distributismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 50,
                govt: 50,
                scty: 20,
            },
        },
        {
            name: "Liberalismo Social",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 60,
                govt: 60,
                scty: 80,
            },
        },
        {
            name: "Democracia Cristã",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 60,
                govt: 40,
                scty: 30,
            },
        },
        {
            name: "Social Democracia",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 70,
                govt: 40,
                scty: 80,
            },
        },
        {
            name: "Progressivismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 80,
                govt: 60,
                scty: 100,
            },
        },
        {
            name: "Anarcomutualismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 50,
                govt: 100,
                scty: 70,
            },
        },
        {
            name: "Totalitarismo Nacionalista",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 50,
                dipl: 20,
                govt: 0,
                scty: 50,
            },
        },
        {
            name: "Totalitarismo Globalista",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 50,
                dipl: 80,
                govt: 0,
                scty: 50,
            },
        },
        {
            name: "Tecnocracia",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 60,
                govt: 20,
                scty: 70,
            },
        },
        {
            name: "Centrista",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 50,
                dipl: 50,
                govt: 50,
                scty: 50,
            },
        },
        {
            name: "Liberalismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 50,
                dipl: 60,
                govt: 60,
                scty: 60,
            },
        },
        {
            name: "Anarquismo Religioso",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 50,
                dipl: 50,
                govt: 0,
                scty: 20,
            },
        },
        {
            name: "Populismo de Direita",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 40,
                dipl: 30,
                govt: 30,
                scty: 30,
            },
        },
        {
            name: "Conservadorismo Moderado",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 40,
                dipl: 40,
                govt: 50,
                scty: 30,
            },
        },
        {
            name: "Reacionário",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 40,
                dipl: 40,
                govt: 40,
                scty: 10,
            },
        },
        {
            name: "Social Libertarianismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 60,
                dipl: 70,
                govt: 80,
                scty: 70,
            },
        },
        {
            name: "Libertarianismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 40,
                dipl: 60,
                govt: 80,
                scty: 60,
            },
        },
        {
            name: "Anarcoegoísmo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 40,
                dipl: 50,
                govt: 100,
                scty: 50,
            },
        },
        {
            name: "Nazismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 40,
                dipl: 0,
                govt: 0,
                scty: 5,
            },
        },
        {
            name: "Autocrácia",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 50,
                dipl: 20,
                govt: 20,
                scty: 50,
            },
        },
        {
            name: "Fascismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 40,
                dipl: 20,
                govt: 20,
                scty: 20,
            },
        },
        {
            name: "Fascismo Capitalista",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 20,
                dipl: 20,
                govt: 20,
                scty: 20,
            },
        },
        {
            name: "Conservadorismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 30,
                dipl: 40,
                govt: 40,
                scty: 20,
            },
        },
        {
            name: "Neoliberalismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 30,
                dipl: 30,
                govt: 50,
                scty: 60,
            },
        },
        {
            name: "Liberalismo Clássico",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 30,
                dipl: 60,
                govt: 60,
                scty: 80,
            },
        },
        {
            name: "Capitalismo Autoritário",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 20,
                dipl: 30,
                govt: 20,
                scty: 40,
            },
        },
        {
            name: "Capitalismo de Estado",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 20,
                dipl: 50,
                govt: 30,
                scty: 50,
            },
        },
        {
            name: "Neoconservadorismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 20,
                dipl: 20,
                govt: 40,
                scty: 20,
            },
        },
        {
            name: "Fundamentalismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 20,
                dipl: 30,
                govt: 30,
                scty: 5,
            },
        },
        {
            name: "Capitalismo Libertário",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 20,
                dipl: 50,
                govt: 80,
                scty: 60,
            },
        },
        {
            name: "Anarquismo de Mercado",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 20,
                dipl: 50,
                govt: 100,
                scty: 50,
            },
        },
        {
            name: "Objetivismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 10,
                dipl: 50,
                govt: 90,
                scty: 40,
            },
        },
        {
            name: "Capitalismo Totalitário",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 0,
                dipl: 30,
                govt: 0,
                scty: 50,
            },
        },
        {
            name: "Ultracapitalismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 0,
                dipl: 40,
                govt: 50,
                scty: 50,
            },
        },
        {
            name: "Anarcocapitalismo",
            side: "Esquerda",
            zone: "11",
            rate: {
                econ: 0,
                dipl: 50,
                govt: 100,
                scty: 50,
            },
        },
    ],
};
