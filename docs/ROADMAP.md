--- OK --------------------------------------------------------------

Implementar layout do site no formato portrait/mobile
    Utilizar proporções Desktop: 10/15 e Mobile: 9/16

Layout do site / principais ícones/opções da tela
    menu hamburger                      resultado ajuda configuração doação

    (cc) Raul Bras                      twitter, 9gag, reddit, imgur, instagram
        github/tecnolista

Elaborar menu lateral do tipo hamburger:
    Uma \bem/ Breve Introdução (falar sobre o nome Existo.me / Decartes)
    Metodologia de Pontuação
    Teoria Política do Teste
    -------------------------
    Termos de Uso
    Política de Privacidade
    Informações Legais
    -------------------------
    Participe do desenvolvimento
    Fale com o Desenvolvedor (email)
    ?I Want for my Country / How can I translate to my Country?
    -------------------------
    * Citar iniciativa United-Sapiens na parte inferior

Implementar telas modais
    No cabeçalho da janela, o [X] "Fechar" é substituído pela seta "Próximo"
        Botão Próximo -> fecha a modal abre próximo item de menu
        Botão Fechar -> Cor cinza em todas as janelas, funciona com ESC

Incluir componente slider no formulário, indicando o número da questão
    Progressivamente vai incrementando da primeira à última questão (inicio e fim)

Implementar form-slider para responder o questionário



--- PENDENTE --------------------------------------------------------

Complementar telas modais
    Configuração
        Esquema de cores do site, dark ou light
        Alertas sonoros na utilização do site
        Tamanho da fonte, principalmente do formulário, com 4 opções (P, M, G, XG)
        Limpar Histórico de Respostas
    Ajuda
        FAQ
        Botão para enviar email com dúvidas ou feedback
    Resultado
        Botões para compartilhar e/ou copiar p/ clipboard
    Doação
        Texto básico do motivo da doação e link p/ vakinha

Finalizar form-slider para responder o questionário
    Os 2 slides iniciais contém apenas uma breve introdução do teste
        1ª vez tem 1 botão: [Iniciar Teste]
        2ª vez tem 2 botões: [Refazer Teste] [Revisar Respostas]
    O último slide agradece o usuário e pede uma contribuição/doação
        Tem 2 botões: [Exibir Resultado] [Revisar Respostas]
    Utilizar alertas sonoros no estilo gamificação

Elaborar textos explicativos e preencher modais
    Uma "Breve" Introdução
    Teoria Deste Teste Político

Elaborar 9 templates coloridos do plano/cubos/emoji-squares (PNG)
    Linha-coluna dos 9 cubos (3 linhas, 3 colunas) Ex: 12.png
    O ícone central será sempre verde, referência do Socialismo
    Os demais ícones serão da cor conforme a pontuação do usuário
        No local/cubo do plano onde o usuário "pontuar" terá a "mira"
    
Pesquisar metodologias e cálculos dos outros testes políticos
    Elaborar metodologia própria focando em gamificação
    Preencher modal "Metodologia de Pontuação"

Elaborar questionário de 60 questões iniciais com base em pesquisas na web
    Notícias, Blogs, Vídeos, Podcasts, Redes Sociais, etc?
    Pontuar questões e implementar cálculo do teste

Preencher textos legais das modais de expediente:
    Termos de Uso
    Política de Privacidade
    Informações Legais

Preencher modal para tradução para outros países
    Add Your Country


--- AO FINAL --------------------------------------------------------

Criar perfis para financiamento coletivo e doações no vakinha e apoia-se
    Adicionar ícone/popup no site pedindo contribuição/colaboração
    Criar novo banner (cover images) para redes sociais com ícone/doação
        Twitter, Instagram, Facebook, LinkedIn, YouTube
    Complementar modal de Doação
        Exibir QR-Code para pix imediato (qual conta?)

Desenvolver peça publicitária: Existo.me (GPS Político) com 60 questões
    Gerar imagens bem legíveis da tela e postar no twitter (post fixo).
    Divulgar Existo.me em redes sociais e canais YouTube (live msg $$)

Configurar Cloudflare para escalar acesso ao site
    Revisar configurações de cache dos arquivos html, css, js, img...
    Verificar técnica do Wordle para utilizar id do repo/commit na url


--- 2ª ETAPA --------------------------------------------------------

Implementar recursos para Acessibilidade (role,aria...)

Refatorar modal de resultados
    Adicionar botão para imprimir as respostas (Printable Certificate)
        Abrir diálogo pedindo o nome do usuário e motivo da impressão
        Abrir outra janela, com todas as respostas, para o usuário salvar PDF
        Divulgar opção para candidatos políticos imprimirem suas promessas (eleição)
    Adicionar botão [BACKUP] para importar/exportar respostas do teste
        Abrir diálogo com texto multi-linha para copiar/colar respostas

Adicionar novas perguntas todo dia, para caso do app viralizar
    Implementar alerta (red notification) para indicar nova pergunta
    Implementar funcionalidade para responder apenas a nova pergunta
        
Revisar pontuação e elaborar 12 templates coloridos
    2 colunas em cada um dos 3 quadrantes de cada lado (esquerda, direita)
    Ex: 011.png   (0=esquerda, 1=direita) (123=quadrantes) (0=coluna esquerda, 1=coluna direita)

Adicionar novos tópicos nas modais do menu hamburger:
    -------------------------
    Tenho uma Sugestão de Pergunta
    Outros Testes na Web
    Quero Saber Mais (videos, teoria, blogs)
    -------------------------
    Recursos para Imprensa
    Cadê os Anúncios??
    -------------------------

Indicar com alerta vemelho no ícone de doação que há novo artigo no blog do apoia-se.
    (*) Leia nosso Blog / Artigo novo...
    Escrever artigo inicial sobre as Eleições Brasil 2022  (blog)

Novas opções de configuração
    Configurar a coloração das questões conforme a ideologia (vermelho, verde, azul)
    Configurar a coloração do slider conforme a pontuação do usuário (preview do cubo)
        A cada questão respondida, é feito já o calculo e identificado a cor do plano

Melhoria do formulário de questionário do teste
    Colorir respostas conforme a ideologia (vermelho, verde, azul)
    Colorir o slider conforme a pontuação, com traço mais grosso e ponteira maior
    Indicar no slider o número da questão corrente e número total de questões

Elaborar roteiro para video (crowdfunding??)

Pedir ajuda para testar o EXISTO.me no iOS (Safari, desktop/mobile)

--- RESOLUÇÃO DA TELA -----------------------------------------------

DESKTOP = 10 / 15

DESKTOP (x > y): se x > y/1,5 -> x = y / 1.5
    1024 x  768 ->  512 x  768
    1280 x  720 ->  480 x  720
    1280 x 1024 ->  682 x 1024
    1360 x  768 ->  512 x  768
    1366 x  768 ->  512 x  768
    1440 x  900 ->  600 x  900
    1536 x  864 ->  576 x  864
    1600 x  900 ->  600 x  900
    1920 x 1080 ->  720 x 1080
    3414 x 1920 -> 1280 x 1920

MOBILE = 9 / 16

MOBILE (x < y): se x <= y/1,5 -> NAO MUDA
    Retrato:  1080 x 1920 -> 1280 x 1920 *DEIXA COMO 1080 x 1920
    Paisagem: 1920 x 1080 ->  720 x 1080 *NAO RECOMENDADO

        <!-- Icon Fonts -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

        <!-- Libraries Stylesheets -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

        <!-- Libraries Scripts -->
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>


--- OBSERVAÇÕES -----------------------------------------------------

Interessante sempre avisar o pessoal que novas perguntas foram incluídas,
e o site mostra quais as perguntas que ele ainda não respondeu, incentivando-o a fazer um novo teste com as novas perguntas.

O design do site utiliza o esquema de cores dark de uma ide, mas à medida que o usuário vai respondendo as perguntas,
o layout do site vai progressivamente alterando sua cor para a respectiva e correspondente cor do plano político do usuário.

implementar as perguntas novas (novidades) como badges/rótulos igual ao 9gag e twitter e facebook (balão vermelho numerado),
para o usuário saber que novas perguntas foram incluídas e que ele ainda não as respondeu. Ao final, se o plano político dele
foi modificado, ele é avisado e convidado a compartilhar o plano nas redes sociais.

sem sistema de login,
sem placar global,
sem publicidade,

limitação de se permitir um único desafio por dia, 
cria-se a partir dessa regra um senso de escassez,
que deixa as pessoas querendo mais e voltando no dia seguinte

três aspectos vitais para o sucesso viral do jogo/site:
    uso do tempo
    compartilhamento
    senso de comunidade
    
a simplicidade do app gera um compromisso pequeno com seus usuários,
em menos de 5/10 minutos é possível concluir o questionário
não se torna um gargalo de tempo como outros jogos sociais

com o empenho de pouquissimo tempo, ele pode se tornar uma parte da rotina do usuário,
não monopolizando o tempo do usuário,
um cafezinho, um questionário para relaxar, uma abordagem diferente que não busca engajamento do usuário.
por isso, incluir humor e novidades no questionário,

o modelo de compartilhamento do app garante o boca-a-boca que espalhou a novidade,
isto pode fazer a popularidade do app disparar.

a competitividade e o compartilhamento fazem parte do espírito humano,
as mensagens de compartilhamento do app podem se propagar pelas redes sociais.
isto pode contribuir para aumentar o interesse no app.

outro fator importante do compartilhamento e da própria natureza do app,
eh o senso de comunidade que ele gera, pois todos os usuários estão respondendo o mesmo questionário,
ao mesmo tempo e todos os dias,
isto aumenta a impressão de que os usuários fazem parte de um coletivo,
de que estamos irmanados, sem fronteiras, sem partido, e pelo mesmo desafio,

o usuário deve estar sempre no centro da experiência de uso,
não demandando tempo e nem compromisso.

não são necessárias tecnologias complexas para todos os cenários,
que antes de tudo, eh preciso adequar a sua stack para a sua real necessidade,
inclusive pensando na escalabilidade da solução.

sobre a monetização provê uma importante lição, a ideia de que  
nem tudo na vida precisa ser feito pensando no dinheiro,
as vezes a felicidade alheia é o que basta,
encontrar a satisfação de ter construído algo bacana e curtido por todo mundo.
este é o verdadeiro espírito do open source.
o dinheiro pelo visto vem depois.

a primeira visualização das pessoas sobre o app pode ser o que as outras pessoas compartilham na internet,
então a imagem a ser compartilhada deve levar ao site do app, e ter uma noção do que seja.

jogadores precisam voltar ao app todo dia, para ver novas perguntas todos os dias
e compartilhar seu perfil político.

#existo-me ???  (socialista moderado, esquerda/esquerdista progressista, direita/direitista  conservador).

#Existo-me como Socialista Moderado
#EXISTO-me à Esquerda/Esquerdista Progressista
#EXISTO-me à Direita/Direitista Conservador

#EXISTO-me Esquerdista Progressista
#Existo-me Direitista Conservador

emoji squares

ao longo do tempo o plano-político compartilhado aumentou a curiosidade das pessoas,
estimulando as pessoas a procurarem pela resposta.
em algum momento, as pessoas não resistiam à vontade de responder o questionário e saber seu posicionamento político.
o que é existo-me, o que o cubo (emoji squres) siginifica??
a falta de explicação sobre o emojisquares virou uma tática de marketing por sí própria (guerrila marketing).
chamou a atenção das pessoas e as tornou curiosas.
os emojis squares torna o compartilhamento mais fácil.
free marketing.

um bom jogo requer um senso de agência, 
onde o usuário precisa saber que ele tem controle sobre as decisões e o resultado.
ao preencher o questionário pela primeira vez, já deve dar essa impressão pros usuários.
não pode ser um jogo de advinhação aleatório pedindo para o usuário dar uma resposta sem muitas informações,
mas à medida que o questionário progride, ele precisa perceber que está no controle.

o usuário pode dar respostas diferentes para ver um novo modelo de emoji-squares a compartilhar.
isto permite que o usuário pense que ele tem mais controle do que pensa,
isto ajuda a tornar o jogo viral.

o app pode ser viral por estimular as áreas de linguagem e lógica dos cérebros,
ao terminar o questionário, o usuário deve ter uma sensação prazerosa (parabenizar o usuário, tocar música, confetes).
ele precisa sentir prazer e satisfação.
desta forma, o usuário se mantém no jogo, sempre estimulado a responder mais perguntas. tem q ser viciante.

é preciso criar um senso de comunidade, onde todos estão respondendo o mesmo questionário,
faz os usuários pensarem que fazem parte de algo maior do que eles,
ao postar o próprio resultado nas redes sociais, os seguidores e amigos irão instantaneamente saber a que está se referindo.
gera um sentimenot de pertencimento e uma experiência comum, 
deve haver um tanto de informação e drama no pequeno gráfico.
os usuários podem analisar o perfil político de cada uma apenas visualizando o emoji-squares,
e apenas os usuários da aplicação saberiam.

->> VERDADEIRO MOTIVO PARA CRIAÇÃO DO JOGO.
o momento é perfeito para o aplicativo,
após as separações causadas pela polarização política,
o app pode de alguma forma reunir as pessoas, 
separadas pela polarização política,
ao verem que possuem muita coisa em comum, 
lembrando a todos nossa necessidade de conexão que desejamos um com o outro,

vivemos numa economia de atenção,
e o app pode atrair muita atenção, 
com algumas perguntas adicionadas todos os dias.

usuários saem do app imediatamente após responderem as perguntas,
não sendo pressionados a ficarem no app (o app tem q estimular isso),
e os usuários poderiam voltar no dia seguinte, para mais perguntas.
por isso app possui uma certa escassez q pode ajudar a torná-lo especial e viral,
isso cria expectativa entre os jogadores e os faz voltar, dia após dia,
o app tem q estar preparando para receber o usuário novamente, todos os dias.
tem que ter interface direta, simples.

estimular os usuários a fazerem mais perguntas, para incluir no app

o app foi feito para ajudar uma família,
é algo entre familiares, que podem discutir as respostas e pensar em outras opções.
o app fornece algo comun para pontos de vistas diferentes,
no final das contas, todos queremos as mesmas coisas, independente dos políticos.

com o tempo deve-se aumentar as variações de cores (de 9, 18, 36, 45, 81).


--- PUBLICIDADE / MARKETING -----------------------------------------

[O] Você Pensa, Você Opina, Você Existe!               [<O>] #BoraVotar

    <marquee>
        Não permita que outras pessoas decidam por você.

        Se você faz 16 anos antes das Eleições 2022, tire seu título de eleitor(a) pela internet e #BoraVotar :)

        Seja parte da construção do futuro do Brasil!

        Não deixe de emitir sua opinião.

        Nestas Eleições de 2022 sua participação como cidadão é muito importante para o futuro do Brasil.

        Vote porque você pode, vote porque você quer, vote porque você se importa, vote porque você existe!

        Você pode e vai fazer a diferença!

        https://www.justicaeleitoral.jus.br/jovem-eleitor/
    <marquee>

    <video 100% />

(cc) 2022 United Sapiens                                     (T)(I)(Y)(L)(G)

-----------------------------

[<O>] Existo.me/Início     Sobre     Metodologia     Teste     Eleições     FAQ     \Git


    Início: Introdução, Faça o teste
    Resultado do usuário, compartilhamento, comparação com líderes


Termos | Privacidade | Jurídico | Imprensa | Versão | Contato | Loto365

(cc) 2022 United Sapiens                                     (T)(I)(Y)(L)(G)

-------------------------------------------------------------------------------

https://www.existo.me/  -> intro

https://www.existo.me/inicio
https://www.existo.me/sobre
https://www.existo.me/metodologia
https://www.existo.me/teste
https://www.existo.me/faq
https://www.existo.me/eleicoes


APOIE.me
<a href="https://apoia.se/UnitedSapiens" class="btn btn-danger" role="button" title="Você pode apoiar essa causa, mas só se você quiser..." target="_blank"><i class="fa-solid fa-hand-holding-heart"></i>&nbsp; APOIE.me</a>


-------------------------------------------------------------------------------

Desenvolver peça publicitária: Existo.me (GPS Político) com 100 questões
Desenvolver site Existo.me com jQuery.

Modificar a descrição da organização no github incluindo o termo "Bússola Política"
    mencionar que o projeto foi feito na pressa para motivar jovens a tirar titulo de eleitor e votarem

Elaborar textos de política, termos, cookies, etc (footer).

Pesquisar temas para elaborar 100 questões do teste.

Comprar domínio Existo.me e apontar DNS para GitHub
    Adquirir domínio www.existo.me em https://domains.google/
    Atualizar redes sociais e perfis com domínio www

Gerar imagens bem legíveis da tela e postar no twitter (post fixo).

Divulgar Existo.me em redes sociais e canais YouTube (live msg $$)


-------------------------------------------------------------------------------

FUNCIONALIDADES:
----------------

Uma vez iniciado o teste, soh pode clicar no brand/logo acima para voltar para tela principal
    Logo fica sempre preto, não muda

No final, gerar imagem do plano com todos os quadrantes na mesma cor, conforme a orientação politica (resultado teste)

Utilizar linguagem acessível porque é para jovens (justificativa se parecer tosco)

Mencionar na introdução da app/web que o teste é para todas as idades, mas principalmente para jovens
    compartilhe e tal

Mencionar ao final que a imagem gerada (html/canvas) pode e deve ser compartilhada
    incenticar a geração do txt com respostas e incentivar que quem expor o resultado também compartilhe suas respostas nas redes sociais

Na introdução, fazer propaganda do Loto365 e também da United Sapiens.
    Diálogo azul anil (mesma cor do Loto365) com botões azul claro (bt-info).
    

-------------------------------------------------------------------------------

Amarelo/Laranja: #F0BB4A

-------------------------------------------------------------------------------

imagem mão:
    <a href="https://flyclipart.com/onlinelabels-clip-art-black-power-fist-clipart-557459">Onlinelabels Clip Art - Black Power Fist Clipart</a>


Utilizar hooks para separar/retirar dos componentes a lógica das regras de estado ou do negócio.


A gente opera com a memória curta, a memória recente...

-------------------------------------------------------------------------------

ORGANIZAÇÃO DO FRONT-END

    src/
        views (telas)
        comps (componentes / vinculados a telas)
        logic (core / regras do negócio / domain)

    public/  (versão build de produção)


ORGANIZAÇÃO DO BACK-END

-------------------------------------------------------------------------------

Propaganda: Você não é você quando está com fome.


"Você não é direita quando está com fome."

"Você não é direita quando está com covid."

"Você não é direita quando está sem grana."

"Você não é direita quando está sem emprego."
"Você não é direita quando está desempregado."


Direitos humanos para humanos direitos.
Direitos humanos para todos.

-------------------------------------------------------------------------------

RESOLUÇÕES DE TELAS
*******************

    PHONE:
        SCREEN:       360 X 760
        
        RETRATO:      360 X 629
        
        PAISAGEM:     685 X 276


    TABLET:
        SCREEN:       800 X 1280
        
        RETRATO:      800 x 1112
        
        PAISAGEM:    1280 x 632


    DESKTOP:
        SCREEN:      1366 X 768
        
        PAISAGEM:    1366 X 625

-------------------------------------------------------------------------------

www.existo.me / a61Kv5

10 digitos + 26 letras minúsculas + 26 letras maiúsculas = 62 combinações

em 6 caracteres = 56.800.235.584

-------------------------------------------------------------------------------

Unidade de medidas relativas

    uso mínimo ou nenhum de  px
    usar mais   em, rem, %

-----------------------------------------------------------

Vtalis
    github
    linkedin
    youtube
    9gag
    imgur
    twitter ?suspended?
    
vtal
    facebook
    telegram
    youtube

-------------------------------------------------------------------------------

MUSSUM IPSUM
************

Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada.Sapien in monti palavris qui num significa nadis i pareci latim.Suco de cevadiss deixa as pessoas mais interessantis.Quem manda na minha terra sou euzis!

Quem manda na minha terra sou euzis!Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.

Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Aenean aliquam molestie leo, vitae iaculis nisl.Manduma pindureta quium dia nois paga.Quem num gosta di mé, boa gentis num é.

Paisis, filhis, espiritis santis.Copo furadis é disculpa de bebadis, arcu quam euismod magna.Casamentiss faiz malandris se pirulitá.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.

A ordem dos tratores não altera o pão duris.Viva Forevis aptent taciti sociosqu ad litora torquent.Pra lá , depois divoltis porris, paradis.Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!

-------------------------------------------------------------------------------
