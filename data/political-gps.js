/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Let the browser do the parsing, automatically. */
var dataPoliticalGps = {
    // identificacao deste versao do teste politico:
    testVersion: 1.0,
    testLength: 60,

    // relacao de questoes do teste:
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
            //question_en: "I support regional unions, such as the European Union.",
            //question_pt: "Eu apoio ligas regionais de países, como a União Europeia.",
            subject: "Uma liga países aqui na América do Sul, como a União Europeia, deve ser:",
            options: [
                { text: "Evitada a todo custo.", mult: -1 },
                { text: "Criada para benefício de todos.", mult: +1 },
            ],
            outcome: {
                econ: -5,
                dipl: 10,
                govt: 10,
                scty: 5,
            },
        },
        {
            subject: 'A prática do crime de peculato pelos políticos, quando fazem "rachadinha" com o salário de seus subordinados, deve ser:',
            options: [
                { text: "Considerada uma improbidade administrativa, pois é uma prática comum e não afeta o exercício da política.", mult: -1 },
                { text: "Punida exemplarmente com rigor, impedindo o político de exercer atividades públicas novamente.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: 10,
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
            //question_en: "International aid is a waste of money.",
            //question_pt: "A ajuda internacional / apoio financeiro aos países necessitados é um desperdício de dinheiro.",
            subject: "O apoio financeiro aos países vizinhos necessitados é:",
            options: [
                { text: "Importante e necessário, independente de seu governo.", mult: -1 },
                { text: "Um desperdício de dinheiro se for um país comunista.", mult: +1 },
            ],
            outcome: {
                econ: -5,
                dipl: -10,
                govt: 0,
                scty: 0,
            },
        },
        {
            subject: "A utilização de urnas eletrônicas pela justiça eleitoral brasileira é:",
            options: [
                { text: "Um risco à democracia brasileira, e deveria ser substituída pelo voto impresso.", mult: -1 },
                { text: "Motivo de orgulho nacional, por ser comprovadamente segura e passível de auditoria.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: 10,
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
            //question_en: "Governments should be as concerned about foreigners as they are about their own citizens.",
            //question_pt: "Os governos deveriam estar tão preocupados com a situação social dos cidadãos estrangeiros quanto com os que nasceram em seu país / seus próprios cidadãos.",
            subject: "O governo do Brasil deve se preocupar:",
            options: [
                { text: "Principalmente com os cidadãos brasileiros que nasceram aqui.", mult: -1 },
                { text: "Tanto com os brasileiros nascidos aqui quanto com cidadãos estrangeiros.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Environmental regulations are essential.",
            //question_pt: "As regulações ambientais são essenciais para assegurar o futuro de nossos filhos e netos.",
            subject: "As regularização fundiária na Amazônia é:",
            options: [
                { text: "Irrelevante e não necessariamente afeta nossa sociedade urbana.", mult: -1 },
                { text: "Essencial para assegurar o futuro de nossos filhos e netos.", mult: +1 },
            ],
            outcome: {
                econ: 5,
                dipl: 0,
                govt: 0,
                scty: 10,
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
            //question_en: "No cultures are superior to others.",
            //question_pt: "Nenhuma cultura é superior a outra.",
            subject: "A cultura popular brasileira é:",
            options: [
                { text: "Bem melhor que a cultura de nossos vizinhos.", mult: -1 },
                { text: "Tão boa quando a cultura de nossos vizinhos.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 5,
                scty: 10,
            },
        },
        {
            //question_en: "Children should be educated in religious or traditional values.",
            //question_pt: "As crianças deveriam ser educadas com valores religiosos ou tradicionais.",
            subject: "A educação das crianças brasileiras deve ser:",
            options: [
                { text: "Progressiva e sem valores religiosos.", mult: -1 },
                { text: "Tradicional e incluir valores religiosos.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
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
            //question_en: "The United Nations should be abolished.",
            //question_pt: "A ONU (Organização das Nações Unidas) deveria ser abolida.",
            subject: "A Organização das Nações Unidas (ONU) deve ser:",
            options: [
                { text: "Mantida por ser importante.", mult: -1 },
                { text: "Abolida por ser inútil.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
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
            subject: "Um político brasileiro ou figura pública do governo, atuante nas relações externas, deve sempre:",
            options: [
                { text: "Garantir a honra dos brasileiros, não permitindo que outros líderes falem mal do Brasil.", mult: -1 },
                { text: "Respeitar outros líderes de estado e jamais postar ofensas em redes sociais.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 5,
                scty: 0,
            },
        },
        {
            //question_en: "Churches should be taxed the same way other institutions are taxed.",
            //question_pt: "As igrejas deveriam ser tributadas da mesma forma que as demais instituições são tributadas.",
            subject: "A tributação das igrejas no Brasil deve ser:",
            options: [
                { text: "Evitada, pois não podem ser tributadas como as demais instituições.", mult: -1 },
                { text: "Feita da mesma forma que as demais instituições são tributadas.", mult: +1 },
            ],
            outcome: {
                econ: 5,
                dipl: 0,
                govt: 0,
                scty: 10,
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
            //question_en: "A united world government would be beneficial to mankind.",
            //question_pt: "Um governo mundial e unido, com agendas mútuas, seria benéfico para a humanidade.",
            subject: "Um governo mundial e unido, com agendas mútuas, seria:",
            options: [
                { text: "Benéfico para os brasileiros.", mult: +1 },
                { text: "Prejudicial para os brasileiros.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Drug use should be legalized or decriminalized.",
            //question_pt: "O uso de drogas deveria ser legalizado ou descriminalizado.",
            subject: "O uso de drogas no Brasil deve ser:",
            options: [
                { text: "Proibido e combatido.", mult: -1 },
                { text: "Legalizado e descriminalizado.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 5, // 2
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
            //question_en: "Governments should be accountable to the international community.",
            //question_pt: "Os governos deveriam prestar contas à comunidade internacional.",
            subject: "O governo do Brasil deve prestar contas:",
            options: [
                { text: "Também à comunidade internacional.", mult: +1 },
                { text: "Apenas à população brasileira.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 5,
                scty: 0,
            },
        },
        {
            //question_en: "Abortion should be prohibited in most or all cases.",
            //question_pt: "O aborto deveria ser proibido em todos os casos, ou em sua grande maioria.",
            subject: "O aborto no território brasileiro deve ser:",
            options: [
                { text: "Permitido para todos os casos, ou em sua grande maioria.", mult: -1 },
                { text: "Proibido em todos os casos, ou em sua grande maioria.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: -10,
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
            //question_en: "We should open our borders to immigration.",
            //question_pt: "Nós devemos manter nossas fronteiras abertas para os imigrantes em geral.",
            subject: "As fronteiras do Brasil devem estar:",
            options: [
                { text: "Abertas para os imigrantes em geral.", mult: +1 },
                { text: "Fechadas para evitar mais imigrantes.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 10,
                scty: 0,
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
            //question_en: "It is important that we work as a united world to combat climate change.",
            //question_pt: "É importante trabalharmos conjuntamente, unidos de forma global, para combatermos as mudanças climáticas.",
            subject: "Para combatermos as mudanças climáticas, o Brasil deve trabalhar:",
            options: [
                { text: "Conjuntamente com os demais países, unidos de forma global.", mult: +1 },
                { text: "Isoladamente, apenas cuidando do que nos afeta.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Sex outside marriage is immoral.",
            //question_pt: "O sexo fora do casamento é algo imoral.",
            subject: "O sexo fora do casamento é:",
            options: [
                { text: "Comum e natural.", mult: -1 },
                { text: "Algo imoral.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
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
            //question_en: "It is more important to retain peaceful relations than to further our strength.",
            //question_pt: "É mais importante manter relações pacíficas com os demais países do que aumentar a nossa força militar.",
            subject: "Para garantir a segurança, o governo do Brasil deve focar mais em:",
            options: [
                { text: "Relações pacíficas com os países vizinhos.", mult: +1 },
                { text: "Investimentos nas Forças Armadas do Brasil.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "My religious values should be spread as much as possible.",
            //question_pt: "Meus valores religiosos precisam ser disseminados tanto quanto for possível.",
            subject: "Meus valores religiosos:",
            options: [
                { text: "São particulares a mim e podem não ter significado para outros.", mult: -1 },
                { text: "Precisam ser disseminados tanto quanto for possível.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: -5,
                govt: -10,
                scty: -10,
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
            //question_en: "Our nation's values should be spread as much as possible.",
            //question_pt: "Os valores tradicionais da nossa nação precisam ser disseminados tanto for quanto possível.",
            subject: "Os valores tradicionais e culturais do Brasil:",
            options: [
                { text: "Não são tão importantes para serem disseminados a todos os países vizinhos.", mult: -1 },
                { text: "Precisam ser disseminados o máximo possível a todos os países vizinhos.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "If we accept migrants at all, it is important that they assimilate into our culture.",
            //question_pt: "Se aceitamos os migrantes, é importante que eles assimilem a nossa cultura.",
            subject: "Ao aceitarmos a entrada de imigrantes no Brasil:",
            options: [
                { text: "Não é necessário que eles assimilem a nossa cultura.", mult: -1 },
                { text: "É importante que eles assimilem a nossa cultura.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
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
            //question_en: "Wars do not need to be justified to other countries.",
            //question_pt: "As Nossas guerras não precisam ser justificadas para os demais países.",
            subject: "Se o Brasil iniciasse uma guerra, deveria:",
            options: [
                { text: "Se justificar para os demais países vizinhos.", mult: -1 },
                { text: "Ignorar a opinião dos demais países vizinhos.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: 0,
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
            //question_en: "My nation is great.",
            //question_pt: "Minha nação é grandiosa e deveria vir em primeiro lugar.",
            subject: "O meu Brasil é uma nação grandiosa:",
            options: [
                { text: "Mas não é tão melhor que as nações vizinhas.", mult: -1 },
                { text: "E bem melhor que as outras nações vizinhas.", mult: +1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "It is important that we further my group's goals above all others.",
            //question_pt: "É importante que coloquemos os interesses do nosso grupo ideológico acima de todos os demais.",
            subject: "Os interesses do meu grupo ideológico:",
            options: [
                { text: "Não são mais importantes que os interesses de outros grupos.", mult: -1 },
                { text: "São importantes e devem estar acima de todos os demais.", mult: +1 },
            ],
            outcome: {
                econ: -10,
                dipl: -10,
                govt: -10,
                scty: -10,
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
            //question_en: "Research should be conducted on an international scale.",
            //question_pt: "As pesquisas científicas deveriam ser conduzidas em escala e cooperação global.",
            subject: "As pesquisas científicas dos instituros brasileiros devem ser conduzidas:",
            options: [
                { text: "Conjuntamente com outros países, em escala e cooperação global.", mult: +1 },
                { text: "Separadamente por cada país, sem interferência externa.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
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
    ],

    // denominacao para os eixos conforme a pontuacao (outcome):
    testLabels: {
        econ: ["Comunista", "Socialista", "Social", "Centrista", "Liberal", "Neoliberal", "Laissez-Faire"],
        dipl: ["Cosmopolita", "Internacionalista", "Pacifista", "Equilibrado", "Patriótico", "Nacionalista", "Chauvinista"],
        govt: ["Anarquista", "Libertário", "Liberalista", "Moderado", "Estatista", "Autoritário", "Totalitário"],
        scty: ["Revolucionário", "Muito Progressista", "Moderno", "Neutro", "Tradicional", "Muito Conservador", "Reacionário"],
    },
};
