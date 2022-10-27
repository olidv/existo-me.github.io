/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Contem 23 questoes do eixo SOCIEDADE. */
var sctyPoliticalGps = {
    testQuests: [
        {
            //question_en: "Environmental regulations are essential.",
            //question_pt: "As regulações ambientais são essenciais para assegurar o futuro de nossos filhos e netos.",
            subject: "As regularização fundiária na Amazônia:",
            options: [
                { text: "É essencial para assegurar o futuro de nossos filhos e netos.", mult: +1 },
                { text: "É uma questão que não necessariamente afeta nossa sociedade urbana.", mult: -1 },
            ],
            outcome: {
                econ: 5,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "A better world will come from automation, science, and technology.",
            //question_pt: "Um mundo melhor surgirá do avanço da automação, da ciência e da tecnologia.",
            subject: "O avanço da automação, da ciência e da tecnologia no Brasil:",
            options: [
                { text: "Nos levará a um mundo melhor.", mult: +1 },
                { text: "Nos levará a um mundo pior.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Children should be educated in religious or traditional values.",
            //question_pt: "As crianças deveriam ser educadas com valores religiosos ou tradicionais.",
            subject: "A educação das crianças brasileiras deve ser:",
            options: [
                { text: "Tradicional e incluir valores religiosos.", mult: +1 },
                { text: "Progressiva e sem valores religiosos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
            },
        },
        {
            //question_en: "Religion should play a role in government.",
            //question_pt: "A religião deveria ter influência e desempenhar um papel no governo.",
            subject: "A presença de líderes religiosos no governo do Brasil deve:",
            options: [
                { text: "Se manter e ser mais influente para desempenhar um papel social.", mult: +1 },
                { text: "Ser proibida para não afetar as decisões do governo.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: -10,
            },
        },
        {
            //question_en: "Churches should be taxed the same way other institutions are taxed.",
            //question_pt: "As igrejas deveriam ser tributadas da mesma forma que as demais instituições são tributadas.",
            subject: "A tributação das igrejas no Brasil deve ser:",
            options: [
                { text: "Feita da mesma forma que as demais instituições são tributadas.", mult: +1 },
                { text: "Evitada, pois não podem ser tributadas como as demais instituições.", mult: -1 },
            ],
            outcome: {
                econ: 5,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Climate change is currently one of the greatest threats to our way of life.",
            //question_pt: "A mudança climática é atualmente uma das maiores ameaças ao nosso modo de vida.",
            subject: "A questão das mudanças climáticas para a sociedade brasileira:",
            options: [
                { text: "É uma das maiores ameaças ao nosso modo de vida.", mult: +1 },
                { text: "Não é mais importante do que outros assuntos mais prioritários.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Society was better many years ago than it is now.",
            //question_pt: "Nossa sociedade era melhor há décadas atrás do que é agora.",
            subject: "Nossa sociedade brasileira:",
            options: [
                { text: "Era melhor há décadas atrás.", mult: +1 },
                { text: "É melhor hoje do que décadas atrás.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: -10,
            },
        },
        {
            //question_en: "It is important that we think in the long term, beyond our lifespans.",
            //question_pt: "É importante que pensemos a longo prazo, além de nossa expectativa de vida.",
            subject: "Ao estabelecermos uma agenda de política social no Brasil, devemos pensar a:",
            options: [
                { text: "Longo prazo, além de nossa expectativa de vida.", mult: +1 },
                { text: "Curto prazo, enquanto ainda estamos vivos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Drug use should be legalized or decriminalized.",
            //question_pt: "O uso de drogas deveria ser legalizado ou descriminalizado.",
            subject: "O uso de drogas no Brasil deve ser:",
            options: [
                { text: "Legalizado e descriminalizado.", mult: +1 },
                { text: "Proibido e combatido.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 5, // 2
            },
        },
        {
            //question_en: "Same-sex marriage should be legal.",
            //question_pt: "O casamento civil entre pessoas do mesmo sexo deveria ser legal.",
            subject: "O casamento civil entre brasileiros do mesmo sexo deve ser:",
            options: [
                { text: "Legal e regularizado.", mult: +1 },
                { text: "Ilegal e proibido.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 10,
            },
        },
        {
            //question_en: "Sex outside marriage is immoral.",
            //question_pt: "O sexo fora do casamento é algo imoral.",
            subject: "O sexo fora do casamento é:",
            options: [
                { text: "Algo imoral.", mult: +1 },
                { text: "Comum e natural.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
            },
        },
        {
            //question_en: "Abortion should be prohibited in most or all cases.",
            //question_pt: "O aborto deveria ser proibido em todos os casos, ou em sua grande maioria.",
            subject: "O aborto no território brasileiro deve ser:",
            options: [
                { text: "Proibido em todos os casos, ou em sua grande maioria.", mult: +1 },
                { text: "Permitido para todos os casos, ou em sua grande maioria.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: -10,
            },
        },
        {
            //question_en: "Prostitution should be illegal.",
            //question_pt: "A prostituição deveria ser ilegal.",
            subject: "A prostituição no Brasil deve ser:",
            options: [
                { text: "Proibida e criminalizada.", mult: +1 },
                { text: "Permitida e regularizada.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: -10,
            },
        },
        {
            //question_en: "To chase progress at all costs is dangerous.",
            //question_pt: "Perseguir o progresso a qualquer custo é algo perigoso.",
            subject: "Perseguir o progresso sem medir custos é:",
            options: [
                { text: "Algo perigoso para a sociedade brasileira.", mult: +1 },
                { text: "O caminho para um Brasil melhor.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: -10,
            },
        },
        {
            //question_en: "If we accept migrants at all, it is important that they assimilate into our culture.",
            //question_pt: "Se aceitamos os migrantes, é importante que eles assimilem a nossa cultura.",
            subject: "Ao aceitarmos a entrada de imigrantes no Brasil:",
            options: [
                { text: "É importante que eles assimilem a nossa cultura.", mult: +1 },
                { text: "Não é necessário que eles assimilem a nossa cultura.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
            },
        },
        {
            //question_en: "All people - regardless of factors like culture or sexuality - should be treated equally.",
            //question_pt: "Todas as pessoas - independentemente de fatores como cultura ou sexualidade - deveriam ser tratadas igualmente.",
            subject: "Todos os brasileiros devem ser tratadas igualmente:",
            options: [
                { text: "Independentemente de fatores como cultura ou sexualidade.", mult: +1 },
                { text: "Apenas quando forem da mesma cultura ou sexualidade.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 10,
                govt: 10,
                scty: 10,
            },
        },
        {
            //question_en: "It is important that we further my group's goals above all others.",
            //question_pt: "É importante que coloquemos os interesses do nosso grupo ideológico acima de todos os demais.",
            subject: "Os interesses do meu grupo ideológico:",
            options: [
                { text: "São importantes e devem estar acima de todos os demais.", mult: +1 },
                { text: "Não são mais importantes que os interesses de outros grupos.", mult: -1 },
            ],
            outcome: {
                econ: -10,
                dipl: -10,
                govt: -10,
                scty: -10,
            },
        },
        {
            //question_en: "My religious values should be spread as much as possible.",
            //question_pt: "Meus valores religiosos precisam ser disseminados tanto quanto for possível.",
            subject: "Meus valores religiosos:",
            options: [
                { text: "Precisam ser disseminados tanto quanto for possível.", mult: +1 },
                { text: "São particulares a mim e podem não ter significado para outros.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -5,
                govt: -10,
                scty: -10,
            },
        },
        {
            //question_en: "Traditions are of no value on their own.",
            //question_pt: "As tradições não possuem valor por si mesmas.",
            subject: "As tradições da sociedade brasileira:",
            options: [
                { text: "Não possuem tanto valor por si mesmas.", mult: +1 },
                { text: "São valiosas e importantes para todos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "It is important that we maintain the traditions of our past.",
            //question_pt: "É importante preservar as tradições do nosso passado.",
            subject: "As tradições do nosso passado:",
            options: [
                { text: "São importantes e deveriam ser preservadas.", mult: +1 },
                { text: "Não são tão importantes a longo prazo.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: -10,
            },
        },
        {
            //question_en: "Reason is more important than maintaining our culture.",
            //question_pt: "A razão é mais importante do que manter nossa cultura.",
            subject: "Seguir nossa razão e os novos rumos dos avanços científicos:",
            options: [
                { text: "É mais importante do que manter nossa cultura.", mult: +1 },
                { text: "Não pode ser mais importante do que manter a nossa cultura.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Maintaining family values is essential.",
            //question_pt: "A manutenção dos valores familiares é algo essencial para a nossa sociedade.",
            subject: "A manutenção dos valores familiares:",
            options: [
                { text: "É algo essencial para a nossa sociedade brasileira.", mult: +1 },
                { text: "Não é tão prioritário na sociedade brasileira.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: -10,
            },
        },
        {
            //question_en: "Genetic modification is a force for good, even on humans.",
            //question_pt: "As pesquisas e práticas de alteração genética são algo que beneficia a humanidade, mesmo quando a genética humana está envolvida.",
            subject: "As pesquisas e práticas de alteração genética, quando a genética humana está envolvida, deveriam:",
            options: [
                { text: "Ser consideradas benéficas aos brasileiros.", mult: +1 },
                { text: "Ser proibidas por representar risco aos brasileiros.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
    ],
};
