/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Contem 15 questoes do eixo ECONOMIA. */
var econPoliticalGps = {
    testQuests: [
        {
            subject: "As prais em todo o litoral brasileiro deveriam ser:",
            options: [
                { text: "Mantidas públicas e de acesso gratuito, sempre sob administração do governo.", mult: +1 },
                { text: "Privatizadas em grande parte, para garantir à população maior limpeza e segurança.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "I support single-payer, universal healthcare.",
            //question_pt: "Eu apoio um sistema único e universal de saúde.",
            subject: "O Sistema Único de Saúde (SUS) brasileiro deve:",
            options: [
                { text: "Ser privatizado em parte, para prover serviços de melhor qualidade.", mult: -1 },
                { text: "Se manter público e gratuito, sempre sob administração do governo.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "It is necessary for the government to intervene in the economy to protect consumers.",
            //question_pt: "É necessário que o governo intervenha na economia para proteger os consumidores.",
            subject: "Para proteger os direitos dos brasileiros, o governo:",
            options: [
                { text: "Deve obrigatoriamente intervir na economia.", mult: +1 },
                { text: "Não necessariamente precisa intervir na economia.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "The freer the markets, the freer the people.",
            //question_pt: "Quanto mais livre é o mercado, mais livres são as pessoas.",
            subject: "Quanto mais livre for o mercado financeiro:",
            options: [
                { text: "Não necessariamente os brasileiros serão mais livres.", mult: -1 },
                { text: "Mais livres serão os brasileiros.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "It is better to maintain a balanced budget than to ensure welfare for all citizens.",
            //question_pt: "É melhor manter um orçamento equilibrado e em ordem do que garantir o bem-estar social para todos os cidadãos.",
            subject: "A maior prioridade do governo do Brasil é:",
            options: [
                { text: "Garantir o bem-estar social para todos os brasileiros.", mult: -1 },
                { text: "Manter um orçamento equilibrado e em ordem para todos os estados e municípios.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "From each according to his ability, to each according to his needs.",
            //question_pt: "De cada qual, segundo sua capacidade; a cada qual, segundo suas necessidades.",
            subject: "Para uma maior igualdade econômica em nossa sociedade:",
            options: [
                { text: "Os brasileiros mais ricos devem contribuir mais do que os mais pobres.", mult: +1 },
                { text: "Todos os brasileiros devem contribuir proporcionalmente da mesma maneira.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "It would be best if social programs were abolished in favor of private charity.",
            //question_pt: "Seria melhor se os programas sociais fossem abolidos em favor da caridade privada.",
            subject: "Os programas sociais promovidos pelo governo do Brasil devem ser:",
            options: [
                { text: "Mantidos porque são melhores que a caridade privada.", mult: -1 },
                { text: "Abolidos ou reduzidos em favor da caridade privada.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Taxes should be increased on the rich to provide for the poor.",
            //question_pt: "Os impostos deveriam aumentar para os ricos, para sustentar os pobres.",
            subject: "O aumento de impostos para os ricos no Brasil é:",
            options: [
                { text: "Necessário para prover aos brasileiros mais pobres.", mult: +1 },
                { text: "Injustificável para sustentar os brasileiros mais pobres.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Basic utilities like roads and electricity should be publicly owned.",
            //question_pt: "Áreas e serviços de utilidade pública, como estradas e eletricidade, deveriam ser propriedade do Estado.",
            subject: "As áreas e serviços de utilidade pública no Brasil, como estradas e eletricidade, devem ser:",
            options: [
                { text: "Administradas pelo setor privado.", mult: -1 },
                { text: "Mantidas como propriedade do Estado.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Those with a greater ability to pay should receive better healthcare.",
            //question_pt: "Aqueles que podem pagar mais deveriam receber melhores cuidados de saúde / melhor acesso à saúde.",
            subject: "O acesso aos serviços de saúde hospitalar de melhor qualidade deve ser concedido a:",
            options: [
                { text: "Todos os brasileiros, de maneira universal.", mult: -1 },
                { text: "Aqueles brasileiros que podem pagar mais.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Quality education is a right of all people.",
            //question_pt: "Uma educação de qualidade é um direito de todos.",
            subject: "O acesso a uma educação universitária de qualidade:",
            options: [
                { text: "Nem sempre é possível para todos os brasileiros.", mult: -1 },
                { text: "É um direito de todos os brasileiros.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 5,
            },
        },
        {
            //question_en: "Inheritance is a legitimate form of wealth.",
            //question_pt: "A herança é uma forma legítima de riqueza.",
            subject: "A tributação da herança no Brasil deve ser:",
            options: [
                { text: "Eliminada porque a herança é uma forma legítima de riqueza.", mult: +1 },
                { text: "Aumentada porque a herança promove a desigualdade social.", mult: -1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: -5,
            },
        },
        {
            //question_en: "Publicly-funded research is more beneficial to the people than leaving it to the market.",
            //question_pt: "A pesquisa financiada pelo governo é mais benéfica para a população do que deixá-la exclusivamente sob a administração do setor privado.",
            subject: "A pesquisa científica é mais benéfica para os brasileiros quando:",
            options: [
                { text: "É financiada e realizada publicamente pelo governo.", mult: +1 },
                { text: "Está exclusivamente sob a administração do setor privado.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Oppression by corporations is more of a concern than oppression by governments.",
            //question_pt: "A opressão por parte das corporações é um problema mais grave do que a opressão por parte dos governos.",
            subject: "A opressão das corporações sobre os brasileiros é:",
            options: [
                { text: "Menos grave que a opressão por parte do governo.", mult: -1 },
                { text: "Mais grave que a opressão por parte do governo.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "Government intervention is a threat to the economy.",
            //question_pt: "Uma intervenção excessiva do Estado no Mercado é um risco/ameaça à economia.",
            subject: "A intervenção excessiva do governo no mercado financeiro:",
            options: [
                { text: "É necessário para estabilizar a economia do Brasil.", mult: -1 },
                { text: "É uma ameaça à economia do Brasil.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "The means of production should belong to the workers who use them.",
            //question_pt: "Os meios de produção deveriam pertencer aos trabalhadores que os utilizam.",
            subject: "Os meios de produção no Brasil deveriam pertencer:",
            options: [
                { text: "A quem possui melhor condição de administrá-los.", mult: -1 },
                { text: "Aos trabalhadores que os utilizam.", mult: +1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
    ],
};
