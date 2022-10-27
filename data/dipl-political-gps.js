/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Let the browser do the parsing, automatically. */
var diplPoliticalGps = {
    /* --- DIPLOMACIA 16 ------------------------------------------------------ */

    testQuests: [
        {
            //question_en: "The United Nations should be abolished.",
            //question_pt: "A ONU (Organização das Nações Unidas) deveria ser abolida.",
            subject: "A ONU (Organização das Nações Unidas) deve ser:",
            options: [
                { text: "abolida por ser inútil.", mult: +1 },
                { text: "Mantida por ser importante.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },

        {
            //question_en: "I support regional unions, such as the European Union.",
            //question_pt: "Eu apoio ligas regionais de países, como a União Europeia.",
            subject: "Uma liga países aqui na América do Sul, como a União Europeia, deve ser:",
            options: [
                { text: "Criada e mantida.", mult: +1 },
                { text: "Evitada a todo custo.", mult: -1 },
            ],
            outcome: {
                econ: -5,
                dipl: 10,
                govt: 10,
                scty: 5,
            },
        },
        {
            //question_en: "A united world government would be beneficial to mankind.",
            //question_pt: "Um governo mundial e unido, com agendas mútuas, seria benéfico para a humanidade.",
            subject: "Um governo mundial e unido, com agendas mútuas, é:",
            options: [
                { text: "Benéfico para a humanidade.", mult: +1 },
                { text: "Prejudicial à condição humana.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "It is more important to retain peaceful relations than to further our strength.",
            //question_pt: "É mais importante manter relações pacíficas com os demais países do que aumentar a nossa força militar.",
            subject: "O governo do Brasil deve focar mais em:",
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
            //question_en: "International aid is a waste of money.",
            //question_pt: "A ajuda internacional / apoio financeiro aos países necessitados é um desperdício de dinheiro.",
            subject: "O apoio financeiro aos países vizinhos necessitados é:",
            options: [
                { text: "Um desperdício de dinheiro se for um país comunista.", mult: +1 },
                { text: "Importante e necessário, independente de seu governo.", mult: -1 },
            ],
            outcome: {
                econ: -5,
                dipl: -10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Governments should be accountable to the international community.",
            //question_pt: "Os governos deveriam prestar contas à comunidade internacional.",
            subject: "O governo do Brasil deve:",
            options: [
                { text: "Prestar contas à comunidade internacional.", mult: +1 },
                { text: "Prestar contas apenas à população brasileira.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 5,
                scty: 0,
            },
        },
        {
            //question_en: "My nation is great.",
            //question_pt: "Minha nação é grandiosa e deveria vir em primeiro lugar.",
            subject: "O meu Brasil é uma nação grandiosa:",
            options: [
                { text: "E bem melhor que as outras nações vizinhas.", mult: +1 },
                { text: "Mas não é tão melhor que as nações vizinhas.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Wars do not need to be justified to other countries.",
            //question_pt: "As Nossas guerras não precisam ser justificadas para os demais países.",
            subject: "Se o Brasil iniciasse uma guerra, deveria:",
            options: [
                { text: "Ignorar a opinião dos demais países vizinhos.", mult: +1 },
                { text: "Se justificar para os demais países vizinhos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "Governments should be as concerned about foreigners as they are about their own citizens.",
            //question_pt: "Os governos deveriam estar tão preocupados com a situação social dos cidadãos estrangeiros quanto com os que nasceram em seu país / seus próprios cidadãos.",
            subject: "O governo do Brasil deve se preocupar:",
            options: [
                { text: "Tanto com os brasileiros nascidos aqui quanto com cidadãos estrangeiros.", mult: +1 },
                { text: "Principalmente com os cidadãos brasileiros que nasceram aqui.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
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
            //question_en: "It is important that we work as a united world to combat climate change.",
            //question_pt: "É importante trabalharmos conjuntamente, unidos de forma global, para combatermos as mudanças climáticas.",
            subject: "Para combatermos as mudanças climáticas, o Brasil deve:",
            options: [
                { text: "Trabalhar conjuntamente com os demais países, unidos de forma global.", mult: +1 },
                { text: "Trabalhar isoladamente, apenas cuidado do que nos afeta.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "No cultures are superior to others.",
            //question_pt: "Nenhuma cultura é superior a outra.",
            subject: "A cultura popular brasileira é:",
            options: [
                { text: "Tão boa quando a cultura de nossos vizinhos.", mult: +1 },
                { text: "Bem melhor que a cultura de nossos vizinhos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 5,
                scty: 10,
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
            //question_en: "Military action by our nation is often necessary to protect it.",
            //question_pt: "A ação militar preventiva por parte de nossa nação é por vezes necessária para protegê-la.",
            subject: "Uma possível ação militar preventiva por parte das Forças Armadas do Brasil:",
            options: [
                { text: "Seria importante e por vezes necessária para proteger nosso país.", mult: +1 },
                { text: "Deveria ser evitada, pois muitas vezes tais ações não se justificam.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "It is important to maintain our national sovereignty.",
            //question_pt: "É muito importante manter a nossa soberania nacional.",
            subject: "A soberania nacional do Brasil:",
            options: [
                { text: "É muito importante e deve ser priorizada acima de outras questões sociais.", mult: +1 },
                { text: "Não é mais importante que outras questões sociais mais prioritárias.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "Our nation's values should be spread as much as possible.",
            //question_pt: "Os valores tradicionais da nossa nação precisam ser disseminados tanto for quanto possível.",
            subject: "Os valores tradicionais e culturais do Brasil:",
            options: [
                { text: "Precisam ser disseminados o máximo possível a todos os países vizinhos.", mult: +1 },
                { text: "Não são tão importantes para serem disseminados a todos os países vizinhos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },

        //
    ],
};
