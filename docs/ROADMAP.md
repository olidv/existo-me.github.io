--- OK --------------------------------------------------------------

Implementar layout do site no formato portrait/mobile
    Utilizar propor��es Desktop: 10/15 e Mobile: 9/16

Layout do site / principais �cones/op��es da tela
    menu hamburger                      resultado ajuda configura��o doa��o

    (cc) Raul Bras                      twitter, 9gag, reddit, imgur, instagram
        github/tecnolista

Elaborar menu lateral do tipo hamburger:
    Uma \bem/ Breve Introdu��o (falar sobre o nome Existo.me / Decartes)
    Metodologia de Pontua��o
    Teoria Pol�tica do Teste
    -------------------------
    Termos de Uso
    Pol�tica de Privacidade
    Informa��es Legais
    -------------------------
    Participe do desenvolvimento
    Fale com o Desenvolvedor (email)
    ?I Want for my Country / How can I translate to my Country?
    -------------------------
    * Citar iniciativa United-Sapiens na parte inferior

Implementar telas modais
    No cabe�alho da janela, o [X] "Fechar" � substitu�do pela seta "Pr�ximo"
        Bot�o Pr�ximo -> fecha a modal abre pr�ximo item de menu
        Bot�o Fechar -> Cor cinza em todas as janelas, funciona com ESC

Incluir componente slider no formul�rio, indicando o n�mero da quest�o
    Progressivamente vai incrementando da primeira � �ltima quest�o (inicio e fim)

Implementar form-slider para responder o question�rio



--- PENDENTE --------------------------------------------------------

Complementar telas modais
    Configura��o
        Esquema de cores do site, dark ou light
        Alertas sonoros na utiliza��o do site
        Tamanho da fonte, principalmente do formul�rio, com 4 op��es (P, M, G, XG)
        Limpar Hist�rico de Respostas
    Ajuda
        FAQ
        Bot�o para enviar email com d�vidas ou feedback
    Resultado
        Bot�es para compartilhar e/ou copiar p/ clipboard
    Doa��o
        Texto b�sico do motivo da doa��o e link p/ vakinha

Finalizar form-slider para responder o question�rio
    Os 2 slides iniciais cont�m apenas uma breve introdu��o do teste
        1� vez tem 1 bot�o: [Iniciar Teste]
        2� vez tem 2 bot�es: [Refazer Teste] [Revisar Respostas]
    O �ltimo slide agradece o usu�rio e pede uma contribui��o/doa��o
        Tem 2 bot�es: [Exibir Resultado] [Revisar Respostas]
    Utilizar alertas sonoros no estilo gamifica��o

Elaborar textos explicativos e preencher modais
    Uma "Breve" Introdu��o
    Teoria Deste Teste Pol�tico

Elaborar 9 templates coloridos do plano/cubos/emoji-squares (PNG)
    Linha-coluna dos 9 cubos (3 linhas, 3 colunas) Ex: 12.png
    O �cone central ser� sempre verde, refer�ncia do Socialismo
    Os demais �cones ser�o da cor conforme a pontua��o do usu�rio
        No local/cubo do plano onde o usu�rio "pontuar" ter� a "mira"
    
Pesquisar metodologias e c�lculos dos outros testes pol�ticos
    Elaborar metodologia pr�pria focando em gamifica��o
    Preencher modal "Metodologia de Pontua��o"

Elaborar question�rio de 60 quest�es iniciais com base em pesquisas na web
    Not�cias, Blogs, V�deos, Podcasts, Redes Sociais, etc?
    Pontuar quest�es e implementar c�lculo do teste

Preencher textos legais das modais de expediente:
    Termos de Uso
    Pol�tica de Privacidade
    Informa��es Legais

Preencher modal para tradu��o para outros pa�ses
    Add Your Country


--- AO FINAL --------------------------------------------------------

Criar perfis para financiamento coletivo e doa��es no vakinha e apoia-se
    Adicionar �cone/popup no site pedindo contribui��o/colabora��o
    Criar novo banner (cover images) para redes sociais com �cone/doa��o
        Twitter, Instagram, Facebook, LinkedIn, YouTube
    Complementar modal de Doa��o
        Exibir QR-Code para pix imediato (qual conta?)

Desenvolver pe�a publicit�ria: Existo.me (GPS Pol�tico) com 60 quest�es
    Gerar imagens bem leg�veis da tela e postar no twitter (post fixo).
    Divulgar Existo.me em redes sociais e canais YouTube (live msg $$)

Configurar Cloudflare para escalar acesso ao site
    Revisar configura��es de cache dos arquivos html, css, js, img...
    Verificar t�cnica do Wordle para utilizar id do repo/commit na url


--- 2� ETAPA --------------------------------------------------------

Implementar recursos para Acessibilidade (role,aria...)

Refatorar modal de resultados
    Adicionar bot�o para imprimir as respostas (Printable Certificate)
        Abrir di�logo pedindo o nome do usu�rio e motivo da impress�o
        Abrir outra janela, com todas as respostas, para o usu�rio salvar PDF
        Divulgar op��o para candidatos pol�ticos imprimirem suas promessas (elei��o)
    Adicionar bot�o [BACKUP] para importar/exportar respostas do teste
        Abrir di�logo com texto multi-linha para copiar/colar respostas

Adicionar novas perguntas todo dia, para caso do app viralizar
    Implementar alerta (red notification) para indicar nova pergunta
    Implementar funcionalidade para responder apenas a nova pergunta
        
Revisar pontua��o e elaborar 12 templates coloridos
    2 colunas em cada um dos 3 quadrantes de cada lado (esquerda, direita)
    Ex: 011.png   (0=esquerda, 1=direita) (123=quadrantes) (0=coluna esquerda, 1=coluna direita)

Adicionar novos t�picos nas modais do menu hamburger:
    -------------------------
    Tenho uma Sugest�o de Pergunta
    Outros Testes na Web
    Quero Saber Mais (videos, teoria, blogs)
    -------------------------
    Recursos para Imprensa
    Cad� os An�ncios??
    -------------------------

Indicar com alerta vemelho no �cone de doa��o que h� novo artigo no blog do apoia-se.
    (*) Leia nosso Blog / Artigo novo...
    Escrever artigo inicial sobre as Elei��es Brasil 2022  (blog)

Novas op��es de configura��o
    Configurar a colora��o das quest�es conforme a ideologia (vermelho, verde, azul)
    Configurar a colora��o do slider conforme a pontua��o do usu�rio (preview do cubo)
        A cada quest�o respondida, � feito j� o calculo e identificado a cor do plano

Melhoria do formul�rio de question�rio do teste
    Colorir respostas conforme a ideologia (vermelho, verde, azul)
    Colorir o slider conforme a pontua��o, com tra�o mais grosso e ponteira maior
    Indicar no slider o n�mero da quest�o corrente e n�mero total de quest�es

Elaborar roteiro para video (crowdfunding??)

Pedir ajuda para testar o EXISTO.me no iOS (Safari, desktop/mobile)

--- RESOLU��O DA TELA -----------------------------------------------

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


--- OBSERVA��ES -----------------------------------------------------

Interessante sempre avisar o pessoal que novas perguntas foram inclu�das,
e o site mostra quais as perguntas que ele ainda n�o respondeu, incentivando-o a fazer um novo teste com as novas perguntas.

O design do site utiliza o esquema de cores dark de uma ide, mas � medida que o usu�rio vai respondendo as perguntas,
o layout do site vai progressivamente alterando sua cor para a respectiva e correspondente cor do plano pol�tico do usu�rio.

implementar as perguntas novas (novidades) como badges/r�tulos igual ao 9gag e twitter e facebook (bal�o vermelho numerado),
para o usu�rio saber que novas perguntas foram inclu�das e que ele ainda n�o as respondeu. Ao final, se o plano pol�tico dele
foi modificado, ele � avisado e convidado a compartilhar o plano nas redes sociais.

sem sistema de login,
sem placar global,
sem publicidade,

limita��o de se permitir um �nico desafio por dia, 
cria-se a partir dessa regra um senso de escassez,
que deixa as pessoas querendo mais e voltando no dia seguinte

tr�s aspectos vitais para o sucesso viral do jogo/site:
    uso do tempo
    compartilhamento
    senso de comunidade
    
a simplicidade do app gera um compromisso pequeno com seus usu�rios,
em menos de 5/10 minutos � poss�vel concluir o question�rio
n�o se torna um gargalo de tempo como outros jogos sociais

com o empenho de pouquissimo tempo, ele pode se tornar uma parte da rotina do usu�rio,
n�o monopolizando o tempo do usu�rio,
um cafezinho, um question�rio para relaxar, uma abordagem diferente que n�o busca engajamento do usu�rio.
por isso, incluir humor e novidades no question�rio,

o modelo de compartilhamento do app garante o boca-a-boca que espalhou a novidade,
isto pode fazer a popularidade do app disparar.

a competitividade e o compartilhamento fazem parte do esp�rito humano,
as mensagens de compartilhamento do app podem se propagar pelas redes sociais.
isto pode contribuir para aumentar o interesse no app.

outro fator importante do compartilhamento e da pr�pria natureza do app,
eh o senso de comunidade que ele gera, pois todos os usu�rios est�o respondendo o mesmo question�rio,
ao mesmo tempo e todos os dias,
isto aumenta a impress�o de que os usu�rios fazem parte de um coletivo,
de que estamos irmanados, sem fronteiras, sem partido, e pelo mesmo desafio,

o usu�rio deve estar sempre no centro da experi�ncia de uso,
n�o demandando tempo e nem compromisso.

n�o s�o necess�rias tecnologias complexas para todos os cen�rios,
que antes de tudo, eh preciso adequar a sua stack para a sua real necessidade,
inclusive pensando na escalabilidade da solu��o.

sobre a monetiza��o prov� uma importante li��o, a ideia de que  
nem tudo na vida precisa ser feito pensando no dinheiro,
as vezes a felicidade alheia � o que basta,
encontrar a satisfa��o de ter constru�do algo bacana e curtido por todo mundo.
este � o verdadeiro esp�rito do open source.
o dinheiro pelo visto vem depois.

a primeira visualiza��o das pessoas sobre o app pode ser o que as outras pessoas compartilham na internet,
ent�o a imagem a ser compartilhada deve levar ao site do app, e ter uma no��o do que seja.

jogadores precisam voltar ao app todo dia, para ver novas perguntas todos os dias
e compartilhar seu perfil pol�tico.

#existo-me ???  (socialista moderado, esquerda/esquerdista progressista, direita/direitista  conservador).

#Existo-me como Socialista Moderado
#EXISTO-me � Esquerda/Esquerdista Progressista
#EXISTO-me � Direita/Direitista Conservador

#EXISTO-me Esquerdista Progressista
#Existo-me Direitista Conservador

emoji squares

ao longo do tempo o plano-pol�tico compartilhado aumentou a curiosidade das pessoas,
estimulando as pessoas a procurarem pela resposta.
em algum momento, as pessoas n�o resistiam � vontade de responder o question�rio e saber seu posicionamento pol�tico.
o que � existo-me, o que o cubo (emoji squres) siginifica??
a falta de explica��o sobre o emojisquares virou uma t�tica de marketing por s� pr�pria (guerrila marketing).
chamou a aten��o das pessoas e as tornou curiosas.
os emojis squares torna o compartilhamento mais f�cil.
free marketing.

um bom jogo requer um senso de ag�ncia, 
onde o usu�rio precisa saber que ele tem controle sobre as decis�es e o resultado.
ao preencher o question�rio pela primeira vez, j� deve dar essa impress�o pros usu�rios.
n�o pode ser um jogo de advinha��o aleat�rio pedindo para o usu�rio dar uma resposta sem muitas informa��es,
mas � medida que o question�rio progride, ele precisa perceber que est� no controle.

o usu�rio pode dar respostas diferentes para ver um novo modelo de emoji-squares a compartilhar.
isto permite que o usu�rio pense que ele tem mais controle do que pensa,
isto ajuda a tornar o jogo viral.

o app pode ser viral por estimular as �reas de linguagem e l�gica dos c�rebros,
ao terminar o question�rio, o usu�rio deve ter uma sensa��o prazerosa (parabenizar o usu�rio, tocar m�sica, confetes).
ele precisa sentir prazer e satisfa��o.
desta forma, o usu�rio se mant�m no jogo, sempre estimulado a responder mais perguntas. tem q ser viciante.

� preciso criar um senso de comunidade, onde todos est�o respondendo o mesmo question�rio,
faz os usu�rios pensarem que fazem parte de algo maior do que eles,
ao postar o pr�prio resultado nas redes sociais, os seguidores e amigos ir�o instantaneamente saber a que est� se referindo.
gera um sentimenot de pertencimento e uma experi�ncia comum, 
deve haver um tanto de informa��o e drama no pequeno gr�fico.
os usu�rios podem analisar o perfil pol�tico de cada uma apenas visualizando o emoji-squares,
e apenas os usu�rios da aplica��o saberiam.

->> VERDADEIRO MOTIVO PARA CRIA��O DO JOGO.
o momento � perfeito para o aplicativo,
ap�s as separa��es causadas pela polariza��o pol�tica,
o app pode de alguma forma reunir as pessoas, 
separadas pela polariza��o pol�tica,
ao verem que possuem muita coisa em comum, 
lembrando a todos nossa necessidade de conex�o que desejamos um com o outro,

vivemos numa economia de aten��o,
e o app pode atrair muita aten��o, 
com algumas perguntas adicionadas todos os dias.

usu�rios saem do app imediatamente ap�s responderem as perguntas,
n�o sendo pressionados a ficarem no app (o app tem q estimular isso),
e os usu�rios poderiam voltar no dia seguinte, para mais perguntas.
por isso app possui uma certa escassez q pode ajudar a torn�-lo especial e viral,
isso cria expectativa entre os jogadores e os faz voltar, dia ap�s dia,
o app tem q estar preparando para receber o usu�rio novamente, todos os dias.
tem que ter interface direta, simples.

estimular os usu�rios a fazerem mais perguntas, para incluir no app

o app foi feito para ajudar uma fam�lia,
� algo entre familiares, que podem discutir as respostas e pensar em outras op��es.
o app fornece algo comun para pontos de vistas diferentes,
no final das contas, todos queremos as mesmas coisas, independente dos pol�ticos.

com o tempo deve-se aumentar as varia��es de cores (de 9, 18, 36, 45, 81).


--- PUBLICIDADE / MARKETING -----------------------------------------

[O] Voc� Pensa, Voc� Opina, Voc� Existe!               [<O>] #BoraVotar

    <marquee>
        N�o permita que outras pessoas decidam por voc�.

        Se voc� faz 16 anos antes das Elei��es 2022, tire seu t�tulo de eleitor(a) pela internet e #BoraVotar :)

        Seja parte da constru��o do futuro do Brasil!

        N�o deixe de emitir sua opini�o.

        Nestas Elei��es de 2022 sua participa��o como cidad�o � muito importante para o futuro do Brasil.

        Vote porque voc� pode, vote porque voc� quer, vote porque voc� se importa, vote porque voc� existe!

        Voc� pode e vai fazer a diferen�a!

        https://www.justicaeleitoral.jus.br/jovem-eleitor/
    <marquee>

    <video 100% />

(cc) 2022 United Sapiens                                     (T)(I)(Y)(L)(G)

-----------------------------

[<O>] Existo.me/In�cio     Sobre     Metodologia     Teste     Elei��es     FAQ     \Git


    In�cio: Introdu��o, Fa�a o teste
    Resultado do usu�rio, compartilhamento, compara��o com l�deres


Termos | Privacidade | Jur�dico | Imprensa | Vers�o | Contato | Loto365

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
<a href="https://apoia.se/UnitedSapiens" class="btn btn-danger" role="button" title="Voc� pode apoiar essa causa, mas s� se voc� quiser..." target="_blank"><i class="fa-solid fa-hand-holding-heart"></i>&nbsp; APOIE.me</a>


-------------------------------------------------------------------------------

Desenvolver pe�a publicit�ria: Existo.me (GPS Pol�tico) com 100 quest�es
Desenvolver site Existo.me com jQuery.

Modificar a descri��o da organiza��o no github incluindo o termo "B�ssola Pol�tica"
    mencionar que o projeto foi feito na pressa para motivar jovens a tirar titulo de eleitor e votarem

Elaborar textos de pol�tica, termos, cookies, etc (footer).

Pesquisar temas para elaborar 100 quest�es do teste.

Comprar dom�nio Existo.me e apontar DNS para GitHub
    Adquirir dom�nio www.existo.me em https://domains.google/
    Atualizar redes sociais e perfis com dom�nio www

Gerar imagens bem leg�veis da tela e postar no twitter (post fixo).

Divulgar Existo.me em redes sociais e canais YouTube (live msg $$)


-------------------------------------------------------------------------------

FUNCIONALIDADES:
----------------

Uma vez iniciado o teste, soh pode clicar no brand/logo acima para voltar para tela principal
    Logo fica sempre preto, n�o muda

No final, gerar imagem do plano com todos os quadrantes na mesma cor, conforme a orienta��o politica (resultado teste)

Utilizar linguagem acess�vel porque � para jovens (justificativa se parecer tosco)

Mencionar na introdu��o da app/web que o teste � para todas as idades, mas principalmente para jovens
    compartilhe e tal

Mencionar ao final que a imagem gerada (html/canvas) pode e deve ser compartilhada
    incenticar a gera��o do txt com respostas e incentivar que quem expor o resultado tamb�m compartilhe suas respostas nas redes sociais

Na introdu��o, fazer propaganda do Loto365 e tamb�m da United Sapiens.
    Di�logo azul anil (mesma cor do Loto365) com bot�es azul claro (bt-info).
    

-------------------------------------------------------------------------------

Amarelo/Laranja: #F0BB4A

-------------------------------------------------------------------------------

imagem m�o:
    <a href="https://flyclipart.com/onlinelabels-clip-art-black-power-fist-clipart-557459">Onlinelabels Clip Art - Black Power Fist Clipart</a>


Utilizar hooks para separar/retirar dos componentes a l�gica das regras de estado ou do neg�cio.


A gente opera com a mem�ria curta, a mem�ria recente...

-------------------------------------------------------------------------------

ORGANIZA��O DO FRONT-END

    src/
        views (telas)
        comps (componentes / vinculados a telas)
        logic (core / regras do neg�cio / domain)

    public/  (vers�o build de produ��o)


ORGANIZA��O DO BACK-END

-------------------------------------------------------------------------------

Propaganda: Voc� n�o � voc� quando est� com fome.


"Voc� n�o � direita quando est� com fome."

"Voc� n�o � direita quando est� com covid."

"Voc� n�o � direita quando est� sem grana."

"Voc� n�o � direita quando est� sem emprego."
"Voc� n�o � direita quando est� desempregado."


Direitos humanos para humanos direitos.
Direitos humanos para todos.

-------------------------------------------------------------------------------

RESOLU��ES DE TELAS
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

10 digitos + 26 letras min�sculas + 26 letras mai�sculas = 62 combina��es

em 6 caracteres = 56.800.235.584

-------------------------------------------------------------------------------

Unidade de medidas relativas

    uso m�nimo ou nenhum de  px
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

Quem manda na minha terra sou euzis!Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Todo mundo v� os porris que eu tomo, mas ningu�m v� os tombis que eu levo!Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.

Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Aenean aliquam molestie leo, vitae iaculis nisl.Manduma pindureta quium dia nois paga.Quem num gosta di m�, boa gentis num �.

Paisis, filhis, espiritis santis.Copo furadis � disculpa de bebadis, arcu quam euismod magna.Casamentiss faiz malandris se pirulit�.T� deprimidis, eu conhe�o uma cachacis que pode alegrar sua vidis.

A ordem dos tratores n�o altera o p�o duris.Viva Forevis aptent taciti sociosqu ad litora torquent.Pra l� , depois divoltis porris, paradis.Si u mundo t� muito paradis? Toma um m� que o mundo vai girarzis!

-------------------------------------------------------------------------------
