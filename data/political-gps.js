/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Constantes para facilitar o preenchimento do questionario. */
const [ECONOMY, GOVERN, DIPLOMACY, SOCIETY] = [1, 2, 3, 4];
const [EQUALITY, MARKET, LIBERTY, AUTHORITY, GLOBAL, NATIONAL, PROGRESS, TRADITION] = [1, 0, 1, 0, 1, 0, 1, 0];

/* Let the browser do the parsing, automatically. */
var dataPoliticalGps = {
    // identificacao deste versao do teste politico:
    testVersion: 1.0,
    testLength: 70,

    // relacao de questoes do teste:
    testQuests: [
        {
            subject: ECONOMY,
            heading: "As praias em todo o litoral brasileiro devem ser:",
            options: [
                { text: "Mantidas públicas e de acesso gratuito, sempre sob administração do governo.", mult: +1, side: EQUALITY },
                { text: "Privatizadas em grande parte, para garantir à população maior limpeza e segurança.", mult: -1, side: MARKET },
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
            subject: GOVERN,
            heading: "A posse ou o porte de armas de fogo em território nacional deve ser:",
            options: [
                { text: "Liberada para todos, independentemente de haver razão válida.", mult: -1, side: LIBERTY },
                { text: "Proibida quando não houver uma razão válida.", mult: +1, side: AUTHORITY },
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
            subject: DIPLOMACY,
            heading: "Uma liga países aqui na América do Sul, como a União Europeia, deve ser:",
            options: [
                { text: "Evitada a todo custo.", mult: -1, side: NATIONAL },
                { text: "Criada para benefício de todos.", mult: +1, side: GLOBAL },
            ],
            outcome: {
                econ: -5,
                dipl: 10,
                govt: 10,
                scty: 5,
            },
        },
        {
            subject: SOCIETY,
            heading: 'A prática do crime de peculato pelos políticos, quando fazem "rachadinha" com o salário de seus subordinados, deve ser:',
            options: [
                { text: "Considerada apenas uma improbidade administrativa, pois é uma prática comum e não afeta o exercício da política.", mult: -1, side: TRADITION },
                { text: "Punida exemplarmente e com rigor, impedindo o político de exercer atividades públicas novamente.", mult: +1, side: PROGRESS },
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
            subject: ECONOMY,
            heading: "Para uma maior igualdade econômica em nossa sociedade:",
            options: [
                { text: "Os brasileiros mais ricos devem contribuir mais do que os mais pobres.", mult: +1, side: EQUALITY },
                { text: "Todos os brasileiros devem contribuir proporcionalmente da mesma maneira.", mult: -1, side: MARKET },
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
            subject: GOVERN,
            heading: "Para protestar contra um governo autoritário, a violência:",
            options: [
                { text: "Pode ser utilizada, ainda que eventualmente.", mult: -1, side: AUTHORITY },
                { text: "Jamais poderá ser considerada aceitável.", mult: +1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "O apoio financeiro aos países vizinhos necessitados é:",
            options: [
                { text: "Importante e necessário, independente do regime de seu governo.", mult: -1, side: GLOBAL },
                { text: "Um desperdício de dinheiro se for um governo autoritário.", mult: +1, side: NATIONAL },
            ],
            outcome: {
                econ: -5,
                dipl: -10,
                govt: 0,
                scty: 0,
            },
        },
        {
            subject: SOCIETY,
            heading: "A utilização de urnas eletrônicas pela justiça eleitoral brasileira é:",
            options: [
                { text: "Um risco à democracia brasileira, e deveria ser substituída pelo voto impresso.", mult: -1, side: TRADITION },
                { text: "Motivo de orgulho nacional, por ser comprovadamente segura e passível de auditoria.", mult: +1, side: PROGRESS },
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
            subject: ECONOMY,
            heading: "Os programas sociais promovidos pelo governo do Brasil devem ser:",
            options: [
                { text: "Mantidos porque são melhores que a caridade privada.", mult: -1, side: EQUALITY },
                { text: "Abolidos ou reduzidos em favor da caridade privada.", mult: +1, side: MARKET },
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
            subject: GOVERN,
            heading: "As despesas com as Forças Armadas do Brasil são:",
            options: [
                { text: "Necessárias e devem ser mantidas.", mult: -1, side: AUTHORITY },
                { text: "Um desperdício de dinheiro.", mult: +1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "O governo do Brasil deve se preocupar:",
            options: [
                { text: "Principalmente com os cidadãos brasileiros que nasceram aqui.", mult: -1, side: NATIONAL },
                { text: "Tanto com os brasileiros nascidos aqui quanto com cidadãos estrangeiros.", mult: +1, side: GLOBAL },
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
            subject: SOCIETY,
            heading: "A regularização fundiária na Amazônia é:",
            options: [
                { text: "Irrelevante e não necessariamente afeta nossa sociedade urbana.", mult: -1, side: TRADITION },
                { text: "Essencial para assegurar o futuro de nossos filhos e netos.", mult: +1, side: PROGRESS },
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
            subject: ECONOMY,
            heading: "O acesso aos serviços de saúde hospitalar de melhor qualidade deve ser concedido a:",
            options: [
                { text: "Todos os brasileiros, de maneira universal.", mult: -1, side: EQUALITY },
                { text: "Aqueles brasileiros que podem pagar mais.", mult: +1, side: MARKET },
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
            subject: GOVERN,
            heading: "A tarifação de compras internacionais feitas em aplicativos como Shopee:",
            options: [
                { text: "É importante para proteger a produção local e favorecer os brasileiros a longo prazo.", mult: +1, side: AUTHORITY },
                { text: "Não afeta a produção local e apenas prejudica os brasileiros mais pobres a curto prazo.", mult: -1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "A cultura popular brasileira é:",
            options: [
                { text: "Bem melhor que a cultura de nossos vizinhos.", mult: -1, side: NATIONAL },
                { text: "Tão boa quando a cultura de nossos vizinhos.", mult: +1, side: GLOBAL },
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
            subject: SOCIETY,
            heading: "A educação das crianças brasileiras deve ser:",
            options: [
                { text: "Progressiva e sem valores religiosos.", mult: -1, side: PROGRESS },
                { text: "Tradicional e incluir valores religiosos.", mult: +1, side: TRADITION },
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
            subject: ECONOMY,
            heading: "A tributação da herança no Brasil deve ser:",
            options: [
                { text: "Eliminada porque a herança é uma forma legítima de riqueza.", mult: +1, side: MARKET },
                { text: "Ampliada porque a herança promove a desigualdade social.", mult: -1, side: EQUALITY },
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
            subject: GOVERN,
            heading: "A vigilância governamental sobre os brasileiros, pela Agência Brasileira de Inteligência (ABIN), é:",
            options: [
                { text: "Necessária e importante.", mult: +1, side: AUTHORITY },
                { text: "Desnecessária e perigosa.", mult: -1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "A Organização das Nações Unidas (ONU) deve ser:",
            options: [
                { text: "Mantida por ser importante.", mult: -1, side: GLOBAL },
                { text: "Abolida por ser inútil.", mult: +1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "A presença de líderes religiosos no governo do Brasil deve:",
            options: [
                { text: "Se manter e ser mais influente para desempenhar um papel social.", mult: +1, side: TRADITION },
                { text: "Ser proibida para não afetar as decisões do governo.", mult: -1, side: PROGRESS },
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
            subject: ECONOMY,
            heading: "A maior prioridade do governo do Brasil é:",
            options: [
                { text: "Garantir o bem-estar social para todos os brasileiros.", mult: -1, side: EQUALITY },
                { text: "Manter um orçamento equilibrado e em ordem para todos os estados e municípios.", mult: +1, side: MARKET },
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
            subject: GOVERN,
            heading: "O suicídio assistido por médico no Brasil deve ser:",
            options: [
                { text: "Proibido e evitado.", mult: -1, side: AUTHORITY },
                { text: "Permitido e regularizado.", mult: +1, side: LIBERTY },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            subject: DIPLOMACY,
            heading: "Um político brasileiro ou figura pública do governo, atuante nas relações externas, deve sempre:",
            options: [
                { text: "Garantir a honra dos brasileiros, não permitindo que outros líderes falem mal do Brasil.", mult: -1, side: NATIONAL },
                { text: "Respeitar outros líderes de estado e jamais postar ofensas em redes sociais.", mult: +1, side: GLOBAL },
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
            subject: SOCIETY,
            heading: "A tributação das igrejas no Brasil deve ser:",
            options: [
                { text: "Evitada, pois não podem ser tributadas como as demais instituições.", mult: -1, side: TRADITION },
                { text: "Feita da mesma forma que as demais instituições são tributadas.", mult: +1, side: PROGRESS },
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
            subject: ECONOMY,
            heading: "O Sistema Único de Saúde (SUS) brasileiro deve:",
            options: [
                { text: "Ser privatizado em parte, para prover serviços de melhor qualidade.", mult: -1, side: MARKET },
                { text: "Se manter público e gratuito, sempre sob administração do governo.", mult: +1, side: EQUALITY },
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
            subject: GOVERN,
            heading: "Para nos protegermos dos atos de terrorismo no Brasil, é:",
            options: [
                { text: "Necessário o sacrifício de algumas liberdades civis.", mult: +1, side: AUTHORITY },
                { text: "Injustificável permitir a perda das liberdades civis.", mult: -1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "Um governo mundial e unido, com agendas mútuas, seria:",
            options: [
                { text: "Benéfico para os brasileiros.", mult: +1, side: GLOBAL },
                { text: "Prejudicial para os brasileiros.", mult: -1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "O uso de drogas no Brasil deve ser:",
            options: [
                { text: "Proibido e combatido.", mult: -1, side: TRADITION },
                { text: "Legalizado e descriminalizado.", mult: +1, side: PROGRESS },
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
            subject: ECONOMY,
            heading: "O aumento de impostos para os ricos no Brasil é:",
            options: [
                { text: "Necessário para prover aos brasileiros mais pobres.", mult: +1, side: EQUALITY },
                { text: "Injustificável para sustentar os brasileiros mais pobres.", mult: -1, side: MARKET },
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
            subject: GOVERN,
            heading: "Um cidadão brasileiro deve ser leal ao governo do Brasil:",
            options: [
                { text: "Apenas quando possuir a mesma opinião do governo.", mult: -1, side: LIBERTY },
                { text: "Mesmo quando possui opiniões políticas contrárias.", mult: +1, side: AUTHORITY },
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
            subject: DIPLOMACY,
            heading: "O governo do Brasil deve prestar contas:",
            options: [
                { text: "Também à comunidade internacional.", mult: +1, side: GLOBAL },
                { text: "Apenas à população brasileira.", mult: -1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "O aborto no território brasileiro deve ser:",
            options: [
                { text: "Permitido para todos os casos, ou em sua grande maioria.", mult: -1, side: PROGRESS },
                { text: "Proibido em todos os casos, ou em sua grande maioria.", mult: +1, side: TRADITION },
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
            subject: ECONOMY,
            heading: "O acesso a uma educação universitária de qualidade:",
            options: [
                { text: "Nem sempre é possível para todos os brasileiros.", mult: -1, side: MARKET },
                { text: "É um direito de todos os brasileiros.", mult: +1, side: EQUALITY },
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
            subject: GOVERN,
            heading: "As decisões da população brasileira:",
            options: [
                { text: "Em geral são decisões ruins.", mult: +1, side: AUTHORITY },
                { text: "Nem sempre são decisões ruins.", mult: -1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "As fronteiras do Brasil devem estar:",
            options: [
                { text: "Abertas para os imigrantes em geral.", mult: +1, side: GLOBAL },
                { text: "Fechadas para evitar mais imigrantes.", mult: -1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "A prostituição no Brasil deve ser:",
            options: [
                { text: "Proibida e criminalizada.", mult: +1, side: TRADITION },
                { text: "Permitida e regularizada.", mult: -1, side: PROGRESS },
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
            subject: ECONOMY,
            heading: "As áreas e serviços de utilidade pública no Brasil, como estradas e eletricidade, devem ser:",
            options: [
                { text: "Administradas pelo setor privado.", mult: -1, side: MARKET },
                { text: "Mantidas sob administração do Estado.", mult: +1, side: EQUALITY },
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
            subject: GOVERN,
            heading: "Quanto mais forte for a liderança do nosso governo:",
            options: [
                { text: "Melhor para o Brasil.", mult: +1, side: AUTHORITY },
                { text: "Pior para os brasileiros.", mult: -1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "Para combatermos as mudanças climáticas, o Brasil deve trabalhar:",
            options: [
                { text: "Conjuntamente com os demais países, unidos de forma global.", mult: +1, side: GLOBAL },
                { text: "Isoladamente, apenas cuidando do que nos afeta.", mult: -1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "O sexo fora do casamento é:",
            options: [
                { text: "Comum e natural.", mult: -1, side: PROGRESS },
                { text: "Algo imoral.", mult: +1, side: TRADITION },
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
            subject: ECONOMY,
            heading: "Uma intervenção excessiva do governo no mercado financeiro é:",
            options: [
                { text: "Necessário para estabilizar a economia do Brasil.", mult: -1, side: EQUALITY },
                { text: "Uma ameaça à livre iniciativa dos brasileiros.", mult: +1, side: MARKET },
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
            subject: GOVERN,
            heading: "Para tomar decisões, o governo do Brasil deve:",
            options: [
                { text: "Sempre seguir a opinião da maioria dos brasileiros, ainda que ela possa estar errada.", mult: +1, side: LIBERTY },
                { text: "Seguir a opinião da maioria dos brasileiros, mas apenas quando ela não estiver errada.", mult: -1, side: AUTHORITY },
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
            subject: DIPLOMACY,
            heading: "Para garantir a segurança, o governo do Brasil deve focar mais em:",
            options: [
                { text: "Relações pacíficas com os países vizinhos.", mult: +1, side: GLOBAL },
                { text: "Investimentos nas Forças Armadas do Brasil.", mult: -1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "Meus valores religiosos:",
            options: [
                { text: "São particulares a mim e podem não ter significado para outros.", mult: -1, side: PROGRESS },
                { text: "Precisam ser disseminados tanto quanto for possível.", mult: +1, side: TRADITION },
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
            subject: ECONOMY,
            heading: "A pesquisa científica é mais benéfica para os brasileiros quando:",
            options: [
                { text: "É financiada e realizada publicamente pelo governo.", mult: +1, side: EQUALITY },
                { text: "Está exclusivamente sob a administração do setor privado.", mult: -1, side: MARKET },
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
            subject: GOVERN,
            heading: "Um Estado rigidamente hierárquico:",
            options: [
                { text: "Não garante a ordem e pode levar ao fascismo.", mult: -1, side: LIBERTY },
                { text: "É o melhor caminho para a manutenção da ordem.", mult: +1, side: AUTHORITY },
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
            subject: DIPLOMACY,
            heading: "Os costumes, as crenças e demais valores culturais do Brasil:",
            options: [
                { text: "Não são tão imprescindíveis para serem disseminados a todos os países vizinhos.", mult: -1, side: GLOBAL },
                { text: "Precisam ser disseminados o máximo possível a todos os países vizinhos.", mult: +1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "Ao aceitarmos a entrada de imigrantes no Brasil:",
            options: [
                { text: "Não é necessário que eles assimilem a nossa cultura.", mult: -1, side: PROGRESS },
                { text: "É importante que eles assimilem a nossa cultura.", mult: +1, side: TRADITION },
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
            subject: ECONOMY,
            heading: "Para proteger os direitos dos brasileiros, o governo:",
            options: [
                { text: "Deve obrigatoriamente intervir na economia.", mult: +1, side: EQUALITY },
                { text: "Não necessariamente precisa intervir na economia.", mult: -1, side: MARKET },
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
            subject: GOVERN,
            heading: "A autoridade do governo brasileiro:",
            options: [
                { text: "Deve ser sempre questionada, pois nenhuma autoridade deve ser mantida livre de questionamentos.", mult: +1, side: LIBERTY },
                { text: "Não pode ser questionada a todo momento e em todos os casos.", mult: -1, side: AUTHORITY },
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
            subject: DIPLOMACY,
            heading: "Se o Brasil iniciasse uma guerra, deveria:",
            options: [
                { text: "Se justificar para os demais países vizinhos.", mult: -1, side: GLOBAL },
                { text: "Ignorar a opinião dos demais países vizinhos.", mult: +1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "O casamento civil entre brasileiros do mesmo sexo deve ser:",
            options: [
                { text: "Legal e regularizado.", mult: +1, side: PROGRESS },
                { text: "Ilegal e proibido.", mult: -1, side: TRADITION },
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
            subject: ECONOMY,
            heading: "Quanto mais livre for o mercado financeiro:",
            options: [
                { text: "Não necessariamente os brasileiros serão mais livres.", mult: -1, side: EQUALITY },
                { text: "Mais livres serão os brasileiros.", mult: +1, side: MARKET },
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
            subject: GOVERN,
            heading: "A manutenção da lei e da ordem pelo governo do Brasil é:",
            options: [
                { text: "Menos prioritário que outros temas.", mult: -1, side: LIBERTY },
                { text: "O mais importante para a sociedade.", mult: +1, side: AUTHORITY },
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
            subject: DIPLOMACY,
            heading: "O meu Brasil é uma nação grandiosa:",
            options: [
                { text: "Mas não é tão melhor que as nações vizinhas.", mult: -1, side: GLOBAL },
                { text: "E bem melhor que as outras nações vizinhas.", mult: +1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "Os interesses do meu grupo ideológico:",
            options: [
                { text: "Não são mais importantes que os interesses de outros grupos.", mult: -1, side: PROGRESS },
                { text: "São importantes e devem estar acima de todos os demais.", mult: +1, side: TRADITION },
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
            subject: ECONOMY,
            heading: "A opressão das corporações sobre os brasileiros é:",
            options: [
                { text: "Menos grave que a opressão por parte do governo.", mult: -1, side: MARKET },
                { text: "Mais grave que a opressão por parte do governo.", mult: +1, side: EQUALITY },
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
            subject: GOVERN,
            heading: "A existência de um Estado é sempre:",
            options: [
                { text: "Importante para a nossa proteção.", mult: -1, side: AUTHORITY },
                { text: "Uma ameaça à nossa liberdade.", mult: +1, side: LIBERTY },
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
            subject: DIPLOMACY,
            heading: "As pesquisas científicas dos institutos brasileiros devem ser conduzidas:",
            options: [
                { text: "Conjuntamente com outros países, em escala e cooperação global.", mult: +1, side: GLOBAL },
                { text: "Separadamente por cada país, sem interferência externa.", mult: -1, side: NATIONAL },
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
            subject: SOCIETY,
            heading: "Nossa sociedade brasileira:",
            options: [
                { text: "Era melhor há décadas atrás.", mult: +1, side: TRADITION },
                { text: "É melhor hoje do que décadas atrás.", mult: -1, side: PROGRESS },
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
            subject: SOCIETY,
            heading: "Seguir nossa razão e os novos rumos dos avanços científicos:",
            options: [
                { text: "Não pode ser mais importante do que manter a nossa cultura brasileira.", mult: -1, side: TRADITION },
                { text: "É mais importante do que manter nossa cultura brasileira.", mult: +1, side: PROGRESS },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "The means of production should belong to the workers who use them.",
            //question_pt: "Os meios de produção deveriam pertencer aos trabalhadores que os utilizam.",
            subject: ECONOMY,
            heading: "Os meios de produção no Brasil devem pertencer:",
            options: [
                { text: "A quem possui melhor condição de administrá-los.", mult: -1, side: MARKET },
                { text: "Aos trabalhadores que os mantém.", mult: +1, side: EQUALITY },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "It is important that we maintain the traditions of our past.",
            //question_pt: "É importante preservar as tradições do nosso passado.",
            subject: SOCIETY,
            heading: "As tradições do nosso passado:",
            options: [
                { text: "São importantes e deveriam ser preservadas.", mult: +1, side: TRADITION },
                { text: "Não são tão importantes a longo prazo.", mult: -1, side: PROGRESS },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: -10,
            },
        },
        {
            //question_en: "Climate change is currently one of the greatest threats to our way of life.",
            //question_pt: "A mudança climática é atualmente uma das maiores ameaças ao nosso modo de vida.",
            subject: SOCIETY,
            heading: "A questão das mudanças climáticas para a sociedade brasileira:",
            options: [
                { text: "Não é mais importante do que outros assuntos mais prioritários.", mult: -1, side: TRADITION },
                { text: "É uma das maiores ameaças ao nosso modo de vida.", mult: +1, side: PROGRESS },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "It is important to maintain our national sovereignty.",
            //question_pt: "É muito importante manter a nossa soberania nacional.",
            subject: DIPLOMACY,
            heading: "A soberania nacional do Brasil:",
            options: [
                { text: "É muito importante e deve ser priorizada acima de outras questões sociais.", mult: +1, side: NATIONAL },
                { text: "Não é mais importante que outras questões sociais mais prioritárias.", mult: -1, side: GLOBAL },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "A better world will come from automation, science, and technology.",
            //question_pt: "Um mundo melhor surgirá do avanço da automação, da ciência e da tecnologia.",
            subject: SOCIETY,
            heading: "O avanço da automação, da ciência e da tecnologia no Brasil nos levará a:",
            options: [
                { text: "Um mundo muito melhor.", mult: +1, side: PROGRESS },
                { text: "Uma sociedade bem pior.", mult: -1, side: TRADITION },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Genetic modification is a force for good, even on humans.",
            //question_pt: "As pesquisas e práticas de alteração genética são algo que beneficia a humanidade, mesmo quando a genética humana está envolvida.",
            subject: SOCIETY,
            heading: "As pesquisas e práticas de alteração genética, quando a genética humana está envolvida, devem ser:",
            options: [
                { text: "Consideradas benéficas aos brasileiros.", mult: +1, side: PROGRESS },
                { text: "Proibidas por representar risco aos brasileiros.", mult: -1, side: TRADITION },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "All people - regardless of factors like culture or sexuality - should be treated equally.",
            //question_pt: "Todas as pessoas - independentemente de fatores como cultura ou sexualidade - deveriam ser tratadas igualmente.",
            subject: SOCIETY,
            heading: "Todos os brasileiros devem ser tratados:",
            options: [
                { text: "Igualmente, independentemente de fatores como classe, cultura ou sexualidade.", mult: +1, side: PROGRESS },
                { text: "Distintamente, conforme sua condição social, cultura ou sexualidade.", mult: -1, side: TRADITION },
            ],
            outcome: {
                econ: 10,
                dipl: 10,
                govt: 10,
                scty: 10,
            },
        },
        {
            //question_en: "To chase progress at all costs is dangerous.",
            //question_pt: "Perseguir o progresso a qualquer custo é algo perigoso.",
            subject: SOCIETY,
            heading: "Perseguir o progresso sem medir custos é:",
            options: [
                { text: "O caminho para um Brasil melhor.", mult: -1, side: PROGRESS },
                { text: "Algo perigoso para a sociedade brasileira.", mult: +1, side: TRADITION },
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
            subject: SOCIETY,
            heading: "Ao estabelecermos uma agenda de política social no Brasil, devemos pensar a:",
            options: [
                { text: "Curto prazo, enquanto ainda estamos vivos.", mult: -1, side: TRADITION },
                { text: "Longo prazo, além de nossa expectativa de vida.", mult: +1, side: PROGRESS },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
    ],

    // denominacao para os eixos conforme a pontuacao (outcome):
    testLabels: {
        econ: ["Marxista", "Socialista", "Social-Democrata", "Centrista", "Liberal-Democrata", "Neoliberal", "Laissez-Faire"],
        dipl: ["Cosmopolita", "Internacionalista", "Pacifista", "Equilibrado", "Patriótico", "Nacionalista", "Chauvinista"],
        govt: ["Anarquista", "Libertário", "Liberalista", "Moderado", "Estatista", "Autoritário", "Totalitário"],
        scty: ["Revolucionário", "Progressista", "Moderno", "Neutro", "Tradicional", "Conservador", "Reacionário"],
    },
};
