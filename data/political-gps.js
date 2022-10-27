/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Let the browser do the parsing, automatically. */
var dataPoliticalGps = {
    // identificacao deste versao do teste politico:
    testVersion: 1.01,
    testLength: 12, /* 70 */

    // relacao de questoes do teste:
    testQuests: [
        {
            //question_en: "Oppression by corporations is more of a concern than oppression by governments.",
            //question_pt: "A opressão por parte das corporações é um problema mais grave do que a opressão por parte dos governos.",
            subject: "A opressão das corporações sobre os cidadãos:",
            options: [
                { text: "É mais grave do que a opressão por parte dos governos.", mult: +1 },
                { text: "Não é mais grave que a opressão por parte dos governos.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "It is necessary for the government to intervene in the economy to protect consumers.",
            //question_pt: "É necessário que o governo intervenha na economia para proteger os consumidores.",
            subject: "Para proteger os consumidores, o governo:",
            options: [
                { text: "Precisa intervir na economia.", mult: +1 },
                { text: "Não precisa intervir na economia.", mult: -1 },
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
            subject: "Quanto mais livre for o mercado:",
            options: [
                { text: "Mais livres serão as pessoas.", mult: +1 },
                { text: "Não necessariamente as pessoas serão mais livres.", mult: -1 },
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
            subject: "A maior prioridade de um governo deveria ser:",
            options: [
                { text: "Manter um orçamento equilibrado e em ordem.", mult: +1 },
                { text: "Garantir o bem-estar social para todos os cidadãos.", mult: -1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Publicly-funded research is more beneficial to the people than leaving it to the market.",
            //question_pt: "A pesquisa financiada pelo governo é mais benéfica para a população do que deixá-la exclusivamente sob a administração do setor privado.",
            subject: "A pesquisa científica é mais benéfica para a população quando:",
            options: [
                { text: "É financiada e realizada pelo governo.", mult: +1 },
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
            //question_en: "Tariffs on international trade are important to encourage local production.",
            //question_pt: "A tarifação do comércio internacional é importante para estimular a produção local.",
            subject: "A tarifação do comércio internacional:",
            options: [
                { text: "É importante para estimular a produção local.", mult: +1 },
                { text: "Não afeta a produção local.", mult: -1 },
            ],
            outcome: {
                econ: 5,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "From each according to his ability, to each according to his needs.",
            //question_pt: "De cada qual, segundo sua capacidade; a cada qual, segundo suas necessidades.",
            subject: "Para uma maior igualdade econômica na sociedade:",
            options: [
                { text: "Os mais ricos devem contribuir mais do que os mais pobres.", mult: +1 },
                { text: "Todos devem contribuir proporcionalmente da mesma maneira.", mult: -1 },
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
            subject: "Os programas sociais promovidos pelo governo:",
            options: [
                { text: "Deveriam ser abolidos em favor da caridade privada.", mult: +1 },
                { text: "Deveriam ser mantidos porque são melhores que a caridade privada.", mult: -1 },
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
            subject: "O aumento de impostos para os ricos:",
            options: [
                { text: "É necessário para prover aos mais pobres.", mult: +1 },
                { text: "Não se justifica para sustentar os pobres.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Inheritance is a legitimate form of wealth.",
            //question_pt: "A herança é uma forma legítima de riqueza.",
            subject: "Sobre a tributação da herança:",
            options: [
                { text: "Não deveria ser tributada porque é uma forma legítima de riqueza.", mult: +1 },
                { text: "Deveria ser tributada porque promove a desigualdade social.", mult: -1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: -5,
            },
        },
        {
            //question_en: "Basic utilities like roads and electricity should be publicly owned.",
            //question_pt: "Áreas e serviços de utilidade pública, como estradas e eletricidade, deveriam ser propriedade do Estado.",
            subject: "Áreas e serviços de utilidade pública, como estradas e eletricidade:",
            options: [
                { text: "Deveriam ser propriedade do Estado.", mult: +1 },
                { text: "Deveriam ser iniciativas do setor privado.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Government intervention is a threat to the economy.",
            //question_pt: "Uma intervenção excessiva do Estado no Mercado é um risco/ameaça à economia.",
            subject: "A intervenção excessiva do Estado no Mercado:",
            options: [
                { text: "É uma ameaça à economia do país.", mult: +1 },
                { text: "É necessário para estabilizar a economia do país.", mult: -1 },
            ],
            outcome: {
                econ: -10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Those with a greater ability to pay should receive better healthcare.",
            //question_pt: "Aqueles que podem pagar mais deveriam receber melhores cuidados de saúde / melhor acesso à saúde.",
            subject: "O acesso aos serviços de saúde deveria ser concedido:",
            options: [
                { text: "Àqueles que podem pagar mais.", mult: +1 },
                { text: "A todos, de maneira universal.", mult: -1 },
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
            subject: "O acesso a uma educação de qualidade:",
            options: [
                { text: "É um direito de todos.", mult: +1 },
                { text: "Nem sempre é possível para todos.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 5,
            },
        },
        {
            //question_en: "The means of production should belong to the workers who use them.",
            //question_pt: "Os meios de produção deveriam pertencer aos trabalhadores que os utilizam.",
            subject: "Os meios de produção deveriam pertencer:",
            options: [
                { text: "Aos trabalhadores que os utilizam.", mult: +1 },
                { text: "A quem possui melhor condição de administra-los.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "The United Nations should be abolished.",
            //question_pt: "A ONU (Organização das Nações Unidas) deveria ser abolida.",
            subject: "A ONU (Organização das Nações Unidas) deveria:",
            options: [
                { text: "Ser abolida por ser inútil.", mult: +1 },
                { text: "Ser mantida por ser importante.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "Military action by our nation is often necessary to protect it.",
            //question_pt: "A ação militar preventiva por parte de nossa nação é por vezes necessária para protegê-la.",
            subject: "A ação militar preventiva por parte de uma nação:",
            options: [
                { text: "É por vezes necessária para protegê-la.", mult: +1 },
                { text: "Nem sempre é necessária porque muitas vezes não se justifica.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "I support regional unions, such as the European Union.",
            //question_pt: "Eu apoio ligas regionais de países, como a União Europeia.",
            subject: "Ligas regionais de países, como a União Europeia, deveriam:",
            options: [
                { text: "Ser criadas e mantidas.", mult: +1 },
                { text: "Ser evitadas a todo custo.", mult: -1 },
            ],
            outcome: {
                econ: -5,
                dipl: 10,
                govt: 10,
                scty: 5,
            },
        },
        {
            //question_en: "It is important to maintain our national sovereignty.",
            //question_pt: "É muito importante manter a nossa soberania nacional.",
            subject: "A nossa soberania nacional:",
            options: [
                { text: "É muito importante e deve ser mantida.", mult: +1 },
                { text: "Não é mais importante que outros temas.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "A united world government would be beneficial to mankind.",
            //question_pt: "Um governo mundial e unido, com agendas mútuas, seria benéfico para a humanidade.",
            subject: "Um governo mundial e unido, com agendas mútuas, seria:",
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
            subject: "Um governo deveria focar mais em:",
            options: [
                { text: "Relações pacíficas com os demais países.", mult: +1 },
                { text: "Aumento da força militar.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Wars do not need to be justified to other countries.",
            //question_pt: "As Nossas guerras não precisam ser justificadas para os demais países.",
            subject: "As guerras que um país inicia:",
            options: [
                { text: "Não precisam ser justificadas para os demais países.", mult: +1 },
                { text: "Deveriam ser justificadas para os demais países.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "Military spending is a waste of money.",
            //question_pt: "As despesas militares são um desperdício de dinheiro.",
            subject: "As despesas militares:",
            options: [
                { text: "São um desperdício de dinheiro.", mult: +1 },
                { text: "São necessárias e devem ser mantidas.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "International aid is a waste of money.",
            //question_pt: "A ajuda internacional / apoio financeiro aos países necessitados é um desperdício de dinheiro.",
            subject: "O apoio financeiro aos países necessitados:",
            options: [
                { text: "É um desperdício de dinheiro.", mult: +1 },
                { text: "É importante e necessário.", mult: -1 },
            ],
            outcome: {
                econ: -5,
                dipl: -10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "My nation is great.",
            //question_pt: "Minha nação é grandiosa e deveria vir em primeiro lugar.",
            subject: "A minha nação é grandiosa:",
            options: [
                { text: "E deveria vir em primeiro lugar.", mult: +1 },
                { text: "Mas não é tão melhor que outras.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Research should be conducted on an international scale.",
            //question_pt: "As pesquisas científicas deveriam ser conduzidas em escala e cooperação global.",
            subject: "As pesquisas científicas deveriam:",
            options: [
                { text: "Ser conduzidas conjuntamente, em escala e cooperação global.", mult: +1 },
                { text: "Ser conduzidas separadamente por cada país, sem interferência.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "Governments should be accountable to the international community.",
            //question_pt: "Os governos deveriam prestar contas à comunidade internacional.",
            subject: "Os governos deveriam:",
            options: [
                { text: "Prestar contas à comunidade internacional.", mult: +1 },
                { text: "Prestar contas apenas à sua população.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 5,
                scty: 0,
            },
        },
        {
            //question_en: "Even when protesting an authoritarian government, violence is not acceptable.",
            //question_pt: "Mesmo ao protestar contra um governo autoritário, a violência não é aceitável.",
            subject: "Para protestar contra um governo autoritário:",
            options: [
                { text: "A violência jamais poderá ser aceitável.", mult: +1 },
                { text: "A violência pode ser utilizada.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 5,
                govt: -5,
                scty: 0,
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
            //question_en: "Our nation's values should be spread as much as possible.",
            //question_pt: "Os valores tradicionais da nossa nação precisam ser disseminados tanto for quanto possível.",
            subject: "Os valores tradicionais de uma nação:",
            options: [
                { text: "Precisam ser disseminados o quanto for possível.", mult: +1 },
                { text: "Não são tão importantes para serem disseminados a todos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -5,
                scty: 0,
            },
        },
        {
            //question_en: "It is very important to maintain law and order.",
            //question_pt: "É muito importante a manutenção da lei e da ordem.",
            subject: "A manutenção da lei e da ordem:",
            options: [
                { text: "É muito importante.", mult: +1 },
                { text: "Não é tão prioritária.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -5,
                govt: -10,
                scty: -5,
            },
        },
        {
            //question_en: "The general populace makes poor decisions.",
            //question_pt: "A população em geral toma decisões ruins.",
            subject: "As decisões de uma população:",
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
            //question_en: "Physician-assisted suicide should be legal.",
            //question_pt: "O suicídio assistido por médico deve ser legal.",
            subject: "O suicídio assistido por médico deveria:",
            options: [
                { text: "Ser permitido e regularizado", mult: +1 },
                { text: "Ser proibido e evitado.", mult: -1 },
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
            subject: "Para nos protegermos dos atos de terrorismo:",
            options: [
                { text: "É necessário o sacrifício de algumas liberdades civis.", mult: +1 },
                { text: "Não podemos permitir a perda das liberdades civis.", mult: -1 },
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
            subject: "A vigilância governamental no mundo moderno:",
            options: [
                { text: "É necessária e importante.", mult: +1 },
                { text: "É desnecessária e perigosa.", mult: -1 },
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
            subject: "A existência de um Estado:",
            options: [
                { text: "É uma ameaça à nossa liberdade.", mult: +1 },
                { text: "É importante para a nossa liberdade.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "Regardless of political opinions, it is important to side with your country.",
            //question_pt: "Independentemente das suas opiniões políticas, é importante ficar ao lado do seu país em momentos de necessidade.",
            subject: "Uma pessoa deve ser leal ao seu país e governo:",
            options: [
                { text: "Mesmo quando possui opiniões políticas contrárias.", mult: +1 },
                { text: "Apenas quando possuir a mesma opinião do governo.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: -5,
            },
        },
        {
            //question_en: "All authority should be questioned.",
            //question_pt: "Toda autoridade deve ser questionada, nenhuma autoridade deve ser mantida livre de questionamentos.",
            subject: "A autoridade de um governo:",
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
            //question_en: "A hierarchical state is best.",
            //question_pt: "Um Estado rigidamente hierárquico é o melhor /? caminho para a manutenção da ordem.",
            subject: "Um Estado rigidamente hierárquico:",
            options: [
                { text: "É o melhor caminho para a manutenção da ordem.", mult: +1 },
                { text: "Não necessariamente garante a manutenção da ordem.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "It is important that the government follows the majority opinion, even if it is wrong.",
            //question_pt: "É importante que o governo siga a opinião da maioria, ainda que ela possa estar errada.",
            subject: "Para tomar decisões, o governo deveria:",
            options: [
                { text: "Sempre seguir a opinião da maioria, ainda que ela possa estar errada.", mult: +1 },
                { text: "Seguir a opinião da maioria, mas apenas quando ela não estiver errada.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "The stronger the leadership, the better.",
            //question_pt: "Quanto mais forte for a liderança do governo, melhor para a nação.",
            subject: "Quanto mais forte for a liderança do governo:",
            options: [
                { text: "Melhor para a nação.", mult: +1 },
                { text: "Pior para os cidadãos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: -10,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "Democracy is more than a decision-making process.",
            //question_pt: "A democracia é mais do que um mero processo de tomada de decisões.",
            subject: "A democracia:",
            options: [
                { text: "É mais do que um mero processo de tomada de decisões.", mult: +1 },
                { text: "É simplesmente um mero processo de tomada de decisões.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 0,
            },
        },
        {
            //question_en: "Environmental regulations are essential.",
            //question_pt: "As regulações ambientais são essenciais /? para assegurar o futuro de nossos filhos e netos.",
            subject: "As regulamentações ambientais:",
            options: [
                { text: "São essenciais para assegurar o futuro de nossos filhos e netos.", mult: +1 },
                { text: "Não são tão necessárias para a sociedade.", mult: -1 },
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
            subject: "O avanço da automação, da ciência e da tecnologia:",
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
            subject: "A educação das crianças deveria:",
            options: [
                { text: "Ser tradicional e incluir valores religiosos.", mult: +1 },
                { text: "Ser progressiva e sem valores religiosos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
            },
        },
        {
            //question_en: "Traditions are of no value on their own.",
            //question_pt: "As tradições não possuem valor por si mesmas.",
            subject: "As tradições de uma sociedade:",
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
            //question_en: "Religion should play a role in government.",
            //question_pt: "A religião deveria ter influência e desempenhar um papel no governo.",
            subject: "A religião no governo:",
            options: [
                { text: "Deveria ser influente e desempenhar um papel.", mult: +1 },
                { text: "Deveria ser proibida para não afetar as decisões.", mult: -1 },
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
            subject: "A tributação das igrejas deveria:",
            options: [
                { text: "Ser feita da mesma forma que as demais instituições são tributadas.", mult: +1 },
                { text: "Ser evitada, pois não podem ser tributadas como as demais instituições.", mult: -1 },
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
            subject: "Sobre as mudanças climáticas na atualidade:",
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
            //question_en: "It is important that we work as a united world to combat climate change.",
            //question_pt: "É importante trabalharmos conjuntamente, unidos de forma global, para combatermos as mudanças climáticas.",
            subject: "Para combatermos as mudanças climáticas, deveríamos:",
            options: [
                { text: "Trabalharmos conjuntamente, unidos de forma global.", mult: +1 },
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
            //question_en: "Society was better many years ago than it is now.",
            //question_pt: "Nossa sociedade era melhor há décadas atrás do que é agora.",
            subject: "Nossa sociedade:",
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
            //question_en: "It is important that we think in the long term, beyond our lifespans.",
            //question_pt: "É importante que pensemos a longo prazo, além de nossa expectativa de vida.",
            subject: "Ao estabelecermos uma agenda política, deveríamos:",
            options: [
                { text: "Pensar a longo prazo, além de nossa expectativa de vida.", mult: +1 },
                { text: "Pensar a curto prazo, enquanto ainda estamos vivos.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
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
            //question_en: "Drug use should be legalized or decriminalized.",
            //question_pt: "O uso de drogas deveria ser legalizado ou descriminalizado.",
            subject: "O uso de drogas deveria:",
            options: [
                { text: "Ser legalizado e descriminalizado.", mult: +1 },
                { text: "Ser proibido e combatido.", mult: -1 },
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
            subject: "O casamento civil entre pessoas do mesmo sexo deveria:",
            options: [
                { text: "Ser legal e regularizado.", mult: +1 },
                { text: "Ser ilegal e proibido.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 10,
                scty: 10,
            },
        },
        {
            //question_en: "No cultures are superior to others.",
            //question_pt: "Nenhuma cultura é superior a outra.",
            subject: "Sobre a cultura de um país:",
            options: [
                { text: "Nenhuma é superior a outra.", mult: +1 },
                { text: "Algumas são melhores que outras.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 5,
                scty: 10,
            },
        },
        {
            //question_en: "Sex outside marriage is immoral.",
            //question_pt: "O sexo fora do casamento é algo imoral.",
            subject: "O sexo fora do casamento:",
            options: [
                { text: "É algo imoral.", mult: +1 },
                { text: "É comum e natural.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -5,
                scty: -10,
            },
        },
        {
            //question_en: "If we accept migrants at all, it is important that they assimilate into our culture.",
            //question_pt: "Se aceitamos os migrantes, é importante que eles assimilem a nossa cultura.",
            subject: "Ao aceitarmos a entrada de imigrantes no país:",
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
            //question_en: "Abortion should be prohibited in most or all cases.",
            //question_pt: "O aborto deveria ser proibido em todos os casos, ou em sua grande maioria.",
            subject: "O aborto deveria:",
            options: [
                { text: "Ser proibido em todos os casos, ou em sua grande maioria.", mult: +1 },
                { text: "Ser permitido para todos os casos, ou em sua grande maioria.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: -10,
            },
        },
        {
            //question_en: "Gun ownership should be prohibited for those without a valid reason.",
            //question_pt: "A posse ou o porte de armas de fogo precisam ser limitados aos casos específicos onde elas se fazem realmente necessárias, sem uma razão válida.",
            subject: "A posse ou o porte de armas de fogo deveria:",
            options: [
                { text: "Ser proibido quando não houver uma razão válida.", mult: +1 },
                { text: "Ser liberada para todos, independentemente de haver razão válida.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: 0,
            },
        },
        {
            //question_en: "I support single-payer, universal healthcare.",
            //question_pt: "Eu apoio um sistema único e universal de saúde.",
            subject: "Um sistema único e universal de saúde:",
            options: [
                { text: "Deveria sempre existir.", mult: +1 },
                { text: "Não tem como ser mantido.", mult: -1 },
            ],
            outcome: {
                econ: 10,
                dipl: 0,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "Prostitution should be illegal.",
            //question_pt: "A prostituição deveria ser ilegal.",
            subject: "A prostituição deveria:",
            options: [
                { text: "Ser ilegal e proibida.", mult: +1 },
                { text: "Ser legal e permitida.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: -10,
                scty: -10,
            },
        },
        {
            //question_en: "Maintaining family values is essential.",
            //question_pt: "A manutenção dos valores familiares é algo essencial para a nossa sociedade.",
            subject: "A manutenção dos valores familiares:",
            options: [
                { text: "É algo essencial para a nossa sociedade.", mult: +1 },
                { text: "Não é tão prioritário na sociedade.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: -10,
            },
        },
        {
            //question_en: "To chase progress at all costs is dangerous.",
            //question_pt: "Perseguir o progresso a qualquer custo é algo perigoso.",
            subject: "Perseguir o progresso a qualquer custo:",
            options: [
                { text: "É algo perigoso para a sociedade.", mult: +1 },
                { text: "É o caminho para um mundo melhor.", mult: -1 },
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
                { text: "Ser consideradas benéficas à humanidade.", mult: +1 },
                { text: "Ser proibidas por representar risco à humanidade.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 0,
                govt: 0,
                scty: 10,
            },
        },
        {
            //question_en: "We should open our borders to immigration.",
            //question_pt: "Nós devemos manter nossas fronteiras abertas para os imigrantes em geral.",
            subject: "As fronteiras de um país deveriam:",
            options: [
                { text: "Estar abertas para os imigrantes em geral.", mult: +1 },
                { text: "Estar fechadas para evitar mais imigrantes.", mult: -1 },
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
            subject: "Os governos deveriam estar preocupados:",
            options: [
                { text: "Tanto com os cidadãos que nasceram no país quanto com cidadãos estrangeiros.", mult: +1 },
                { text: "Principalmente com os seus próprios cidadãos, que nasceram no país.", mult: -1 },
            ],
            outcome: {
                econ: 0,
                dipl: 10,
                govt: 0,
                scty: 0,
            },
        },
        {
            //question_en: "All people - regardless of factors like culture or sexuality - should be treated equally.",
            //question_pt: "Todas as pessoas - independentemente de fatores como cultura ou sexualidade - deveriam ser tratadas igualmente.",
            subject: "Todas as pessoas devem ser tratadas igualmente:",
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
            subject: "Os interesses do seu grupo ideológico:",
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
    ],

    // denominacao para os eixos conforme a pontuacao (outcome):
    testLabels: {
        econ: ["Comunista", "Socialista", "Social", "Centrista", "Liberal", "Neoliberal", "Laissez-Faire"],
        dipl: ["Cosmopolita", "Internacionalista", "Pacifista", "Equilibrado", "Patriótico", "Nacionalista", "Chauvinista"],
        govt: ["Anarquista", "Libertário", "Liberalista", "Moderado", "Estatista", "Autoritário", "Totalitário"],
        scty: ["Revolucionário", "Muito Progressista", "Moderno", "Neutro", "Tradicional", "Muito Conservador", "Reacionário"]
    }
};
