# ARTEFATO: CASOS DE USO

<p align="justify">Este documento descreve os casos de uso do site EXISTO.me, detalhando os cenários e seus respectivos fluxos principal, alternativo e de exceção. O fluxo principal da aplicação se mostrou bastante complexo em virtude dos vários cenários na inicialização da página principal (home). Este documento foi elaborado para facilitar a definição da lógica na aplicação do teste político e facilitar também eventual manutenção posterior. Da mesma forma, este artefato poderá auxiliar caso algum novo desenvolvedor queira contribuir com o projeto ou mesmo traduzi-lo (locale, i18n) para outro idioma_PAÍS.</p>

<p align="justify">As convenções de nomenclatura abaixo são um apanhado de lições aprendidas ao longo de anos atuando como analista de sistemas. Normalmente as empresas gostam de elaborar artefatos mais "formais" como um documento MS Word, uma planilha MS Excel ou até mesmo diagramação em alguma ferramenta UML como o System Architect. Particularmente eu sempre achei que este tipo de documentação possui um propósito único de auxiliar no desenvolvimento, não tendo um fim em si. Existe enquanto necessária para esclarecer a lógica na cabeça do analista e/ou desenvolvedor, discutir com integrantes da equipe, dirimir dúvidas com o usuário, etc. Mas sempre usando o clássico "papel de pão".</p>

<p align="justify">A todo momento estamos discutindo na área de TI como o projeto de um sistema de software poderia ser comparado ao projeto de um edifício na área de engenharia civil. No entanto, a lição mais importante da engenharia civil na minha opinião é o ANDAIME. É algo muito simples, ágil por ser fácil de montar e desmontável com igual praticidade. Qualquer auxiliar de pedreiro pode ajudar na montagem do andaime, que permanece em uma obra enquanto necessário. Quando não mais necessário, o andaime é desmontado ao final da obra. Ninguém se preocupa com a cor do andaime, se tem sujeira superficial, se a tubulação é redonda ou quadrada, etc. Basta que seja firme, seguro e alcance todos os andares do prédio.</p>

<p align="justify">Artefatos que auxiliam no projeto deveriam seguir o mesmo paradigma de um andaime: serem simples e fáceis de elaborar, não precisarem de formatação "apresentável", aplicáveis a uma situação específica e descartáveis ao final do projeto. Talvez alguns artefatos possam ser mantidos, mas a grande maioria não se justifica porque "morrem" e se tornam defuntos quando o sistema entra em operação. A documentação de um sistema ou projeto raramente é "visitada" no futuro, e muitas vezes nem é atualizada na manutenção posterior. Em nosso dia-a-dia, todos sabemos que as decisões muitas vezes são tomadas pelo programador durante a codificação. Manter então os artefatos de forma simples (em arquivos texto) e próximos ao código (no mesmo repositório) acaba se tornando uma solução mais eficaz para "documentar" um projeto/software.</p>

<p align="justify">No caso deste projeto, como haviam muitos cenários na inicialização da home, o detalhamento dos casos de uso se tornou pertinente. Mas a lógica em cada caso de uso é bastante simples, por isso o fluxo das atividades foi detalhado apenas aqui (Portugol). Também não há persistência de registros em banco de dados, mas se fosse o caso, então certamente eu iria elaborar um diagrama de entidades e relacionamentos antes de criar qualquer tabela na base. Se em algum momento houvesse uma lógica mais crítica em um determinado fluxo, talvez fosse então o caso de elaborar um diagrama de sequência. Ou então se alguma entidade tivesse um número expressivo de estados, com uma lógica mais complexa para mudança entre os estados, então talvez fosse o caso de elaborar um diagrama de estados. A UML possui vários diagramas úteis e bastante interessantes, que podem ser utilizados em casos específicos, especialmente nos componentes mais críticos e complexos de um sistema.</p>


// CONVENCOES DE NOMENCLATURA PARA OS CASOS DE USO

```
    ----------
    Tracejado indica o inicio de um caso de uso ou algum fluxo de determinado cenario.
    
    @ACTOR
    Um ator ou agente/atuante, considerado como entidade externa pela aplicacao.

    $SCENARIO:ID
    Detalhamento de fluxo(s) principal, alternativo ou excecao do cenario especificado.
    
    <action-token>
    Indica uma acao executada por uma entidade externa (ator) ou pela aplicacao.

    [Component]
    Botao ou opcao de menu acessivel pela entidade externa (ator) atraves do mouse ou teclado.

    {identifier}
    Possivel estrutura de dados, classe ou arquivo - ja implementado ou ainda a ser definido.

    &RULE:#ID
    DEFINICAO DE UMA REGRA DE NEGOCIO (FUNCIONALIDADE), DE IMPLEMENTACAO (CODIGO) OU DE INTERFACE (UX/UI).
    
    // COMENTÁRIO JAVA, JAVASCRIPT, C#...
    ## COMENTARIO PYTHON, BASH...
    OBSERVACOES E/OU COMENTARIOS IMPORTANTES, EM LETRA MAIUSCULA PARA MAIOR DESTAQUE. E SEM ACENTUACAO.

    'uri'
    Apostrofos designam endereco (url) de web site ou qualquer outro recurso (uri) utilizado.

    "Description"
    Aspas designam qualquer literal (cadeia de caracteres alfanumerico) manipulado como valor string.

    * Numeros e Datas sao manipulados conforme regras gramaticais da lingua portuguesa.
```


// DETALHAMENTO DOS CASOS DE USO

//# Caso de Uso: Acesso ao Web Site

```
-------------------------------------------------------------------------------
@USUARIO <get-request> 'www.EXISTO.me'
    renderiza tela principal (home)

    // &RULE:01 DEVERA HAVER UM UNICO ARQUIVO SEPARADO PARA DECLARACAO DAS QUESTOES E PONTUACAO DO TESTE.
    // ESTE ARQUIVO NAO PODERA FAZER USO DE CACHE, POIS PODERA SER MODIFICADO A QUALQUER MOMENTO.
    obtem ultima versao da {estrutura-gps-politico}, sem usar cache
        pgps = {estrutura-gps-politico}
    
    inicializa estrutura de dados do usuario
        // $CENARIO:BEGINNER: 1º ACESSO DO USUARIO
        se {estrutura-usuario} nao esta armazenada no local-storage  
            inicializa nova {estrutura-usuario} -> user
            
            // $CENARIO:BEGINNER-START: PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
            // &RULE:02 O USUARIO DEVERA RESOLVER AS QUESTOES BASICAS PRIMEIRO, o    
            // E NO PROXIMO ACESSO (OU APOS F5) TER ACESSO AS QUESTOES EXTRAS/INCREMENTAIS.
            estabelece versao primaria (basic) para inicio dos testes
                {estrutura-usuario}.quizVersion = 1.0
            salva {estrutura-usuario} no local-storage
        
        // $CENARIO:MAJOR: NAO EH 1º ACESSO DO USUARIO
        se {estrutura-usuario} ja esta armazenada no local-storage  
            obtem do local-storage {estrutura-usuario} -> user
            
            // $CENARIO:BEGINNER-RETAKE: USUARIO JA COMPLETOU VERSAO BASICA DO TESTE
            se user.quizVersion = 1 e user.quizTotalBasic = pgps.quizTotalBasicQueries
                atualiza versao do teste do usuario: user.quizVersion = pgps.quizLastVersion
                salva {estrutura-usuario} no local-storage
            
            // $CENARIO:MAJOR-RETAKE: USUARIO JA COMPLETOU VERSAO EXTRA DO TESTE
            // &RULE:03 APOS CONCLUIR AS QUESTOES EXTRAS, O USUARIO SERA NOTIFICADO DE NOVAS QUESTOES.
            se user.quizVersion > 1 e user.quizTotalExtra = pgps.quizTotalExtraQueries  
                atualiza versao do teste do usuario: user.quizVersion = pgps.quizLastVersion
                salva {estrutura-usuario} no local-storage

    // &RULE:04 O PAINEL INTRODUTORIO (1º SLIDE) TERA CONTEUDO CONFORME O CENARIO ATUAL DO USUARIO.
    identifica o cenario de uso pelo estado do usuario
        // PRIMEIRA VISITA DO USUARIO, NAO INICIOU NENHUMA VERSAO DO TESTE
        se user.quizDateStart = null ou user.quizTotalDone = 0  
            // $CENARIO:BEGINNER-START
            apresenta opcoes [Iniciar Teste Basico] [Como Funciona]
            <stand-by>

        // USUARIO INICIOU VERSAO BASICA DO TESTE MAS NAO FINALIZOU
        se user.quizVersion = 1 e user.quizTotalBasic < pgps.quizTotalBasicQueries  
            // $CENARIO:BEGINNER-RESUME
            exibe notificacao de questoes pendentes com valor: # user.quizTotalBasic ... pgps.quizTotalBasicQueries
            apresenta opcoes [Retomar Teste Basico] [Revisar Respostas Basico]
            <stand-by>

        // USUARIO ACABOU DE FINALIZAR VERSAO BASICA DO TESTE
        se user.quizVersion = 1 e user.quizTotalBasic = pgps.quizTotalBasicQueries  
            // $CENARIO:BEGINNER-RETAKE
            exibe opcoes [Resultado] e [Doacao]
                obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
            apresenta opcoes [Refazer Teste Basico] [Revisar Respostas Basico]
            <stand-by>

        // USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        se user.quizVersion > 1 e user.quizTotalDone = pgps.quizTotalBasicQueries  
            // $CENARIO:MAJOR-NOTIFY
            exibe opcoes [Resultado] e [Doacao]
                obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
            exibe notificacao de novas questoes com valor: + pgps.quizTotalExtraQueries
            altera o titulo do site: (pgps.quizTotalExtraQueries) EXISTO.me • GPS Politico
            apresenta opcoes [Continuar Teste Extra] [Revisar Respostas Basico]
            <stand-by>

        // USUARIO INICIOU VERSAO EXTRA DO TESTE MAS NAO FINALIZOU
        se user.quizVersion > 1 e user.quizTotalExtra < pgps.quizTotalExtraQueries  
            // $CENARIO:MAJOR-RESUME
            exibe opcoes [Resultado] e [Doacao]
                obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
            exibe notificacao de questoes pendentes com valor: # user.quizTotalExtra ... pgps.quizTotalExtraQueries
            apresenta opcoes [Retomar Teste Extra] [Revisar Respostas Extra]
            <stand-by>

        // USUARIO ACABOU DE FINALIZAR VERSAO EXTRA DO TESTE
        se user.quizVersion > 1 e user.quizTotalExtra = pgps.quizTotalExtraQueries
            // $CENARIO:MAJOR-RETAKE
            exibe opcoes [Resultado] e [Doacao]
                obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
            apresenta opcoes [Refazer Teste Completo] [Revisar Respostas Completo]
            <stand-by>

        // USUARIO EH NOTIFICADO DE NOVAS QUESTOES EXTRAS
        se 1 < user.quizVersion < pgps.quizLastVersion e user.quizTotalExtra < pgps.quizTotalExtraQueries  
            // $CENARIO:MAJOR-NOTIFY
            exibe opcoes [Resultado] e [Doacao]
                obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
            exibe notificacao de novas questoes com valor: + pgps.quizTotalExtraQueries    
            altera o titulo do site: (pgps.quizTotalExtraQueries) EXISTO.me • GPS Politico
            apresenta opcoes [Continuar Teste Extra] [Revisar Respostas Completo]
            <stand-by>
```


//# Casos de Uso: Acesso ao Teste Politico

```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Iniciar Teste Basico]
    inicializa teste com questoes de pgps.quizListBasicQueries
    registra o inicio do teste: user.quizDateStart, user.quizFlagOpen

    // $CENARIO:BEGINNER-TEST
    obtem 1ª questao do teste: query <- pgps.quizListBasicQueries
        prepara template de div para carrocel com dados da questao
        adiciona div como slide no carrocel e desloca para a primeira questao
        <stand-by>


@USUARIO <click-on> [Questao A ou B]
    coleta resposta do usuario -> quizUserOpts e quizTotalBasic++
    salva {estrutura-usuario} no local-storage
    
    se ainda ha questoes a serem respondidas
        // $CENARIO:BEGINNER-TEST
        obtem proxima questao do teste: query <- pgps.quizListBasicQueries
            prepara template de div para carrocel com dados da questao
                adiciona div como slide no carrocel e desloca para a proxima questao
            <stand-by>

    se acabou as questoes
        registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        // $CENARIO:BEGINNER-RETAKE
        exibe opcoes [Resultado] e [Doacao]
            obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opcoes [Refazer Teste Basico] [Revisar Respostas Basico]
        <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Retomar Teste Basico]
    inicializa teste com questoes de pgps.quizListBasicQueries
    identifica a ultima questao respondida pelo usuario: user.quizTotalBasic

    // $CENARIO:BEGINNER-TEST
    obtem proxima questao do teste: query <- pgps.quizListBasicQueries
        prepara template de div para carrocel com dados da questao
        adiciona div como slide no carrocel e desloca para a primeira questao
        <stand-by>


@USUARIO <click-on> [Questao A ou B]
    coleta resposta do usuario -> quizUserOpts e quizTotalBasic++
    salva {estrutura-usuario} no local-storage
    
    se ainda ha questoes a serem respondidas
        // $CENARIO:BEGINNER-TEST
        obtem proxima questao do teste: query <- pgps.quizListBasicQueries
            prepara template de div para carrocel com dados da questao
                adiciona div como slide no carrocel e desloca para a proxima questao
            <stand-by>

    se acabou as questoes
        registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        // $CENARIO:BEGINNER-RETAKE
        exibe opcoes [Resultado] e [Doacao]
            obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opcoes [Refazer Teste Basico] [Revisar Respostas Basico]
        <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Refazer Teste Basico]
    limpa as respostas do usuario: quizTotalBasic, quizTotalExtra, quizUserOpts, quizDateFinal, 
                                   quizUserScore, quizCssColor, quizFileImage
    inicializa teste com questoes de pgps.quizListBasicQueries
    registra o inicio do teste: user.quizDateStart, user.quizFlagOpen
    
    // $CENARIO:BEGINNER-TEST
    obtem 1ª questao do teste: query <- pgps.quizListBasicQueries
        prepara template de div para carrocel com dados da questao
        adiciona div como slide no carrocel e desloca para a primeira questao
        <stand-by>


@USUARIO <click-on> [Questao A ou B]
    coleta resposta do usuario -> quizUserOpts e quizTotalBasic++
    salva {estrutura-usuario} no local-storage
    
    se ainda ha questoes a serem respondidas
        // $CENARIO:BEGINNER-TEST
        obtem proxima questao do teste: query <- pgps.quizListBasicQueries
            prepara template de div para carrocel com dados da questao
                adiciona div como slide no carrocel e desloca para a proxima questao
            <stand-by>

    se acabou as questoes
        registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        // $CENARIO:BEGINNER-RETAKE
        exibe opcoes [Resultado] e [Doacao]
            obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opcoes [Refazer Teste Basico] [Revisar Respostas Basico]
        <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Revisar Respostas Basico]
    inicializa teste com questoes de pgps.quizListBasicQueries

    // $CENARIO:BEGINNER-REVIEW
    loop de todas as questoes do teste: query <- pgps.quizListBasicQueries
        identifica qual a questao selecionada (resposta) do usuario
        prepara template (read-only) de div para carrocel com dados da questao
        adiciona div como slide no carrocel
    move o slide de introducao para a ultima posicao no carrocel
    habilita navegacao do carrocel com mouse ou teclado
    desloca para a primeira questao
    <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Continuar Teste Extra]
    registra o inicio do teste: user.quizFlagOpen
    inicializa teste com questoes de pgps.quizListExtraQueries

    // $CENARIO:MAJOR-TEST
    obtem 1ª questao do teste: query <- pgps.quizListExtraQueries
        prepara template de div para carrocel com dados da questao
        adiciona div como slide no carrocel e desloca para a primeira questao
        <stand-by>


@USUARIO <click-on> [Questao A ou B]
    coleta resposta do usuario -> quizUserOpts e quizTotalExtra++
    salva {estrutura-usuario} no local-storage
    
    se ainda ha questoes a serem respondidas
        // $CENARIO:MAJOR-TEST
        obtem proxima questao do teste: query <- pgps.quizListExtraQueries
            prepara template de div para carrocel com dados da questao
                adiciona div como slide no carrocel e desloca para a proxima questao
            <stand-by>

    se acabou as questoes
        registra a conclusao do teste: user.quizFlagOpen
        calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        // $CENARIO:MAJOR-RETAKE
        exibe opcoes [Resultado] e [Doacao]
            obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opcoes [Refazer Teste Completo] [Revisar Respostas Completo]
        <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Retomar Teste Extra]
    identifica a ultima questao respondida pelo usuario: user.quizTotalExtra
    inicializa teste com questoes de pgps.quizListExtraQueries

    // $CENARIO:MAJOR-TEST
    obtem proxima questao do teste: query <- pgps.quizListExtraQueries
        prepara template de div para carrocel com dados da questao
        adiciona div como slide no carrocel e desloca para a primeira questao
        <stand-by>


@USUARIO <click-on> [Questao A ou B]
    coleta resposta do usuario -> quizUserOpts e quizTotalExtra++
    salva {estrutura-usuario} no local-storage
    
    se ainda ha questoes a serem respondidas
        // $CENARIO:MAJOR-TEST
        obtem proxima questao do teste: query <- pgps.quizListExtraQueries
            prepara template de div para carrocel com dados da questao
                adiciona div como slide no carrocel e desloca para a proxima questao
            <stand-by>

    se acabou as questoes
        registra a conclusao do teste: user.quizFlagOpen
        calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        // $CENARIO:MAJOR-RETAKE
        exibe opcoes [Resultado] e [Doacao]
            obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opcoes [Refazer Teste Completo] [Revisar Respostas Completo]
        <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Revisar Respostas Extra]
    inicializa teste com questoes de pgps.quizListExtraQueries

    // $CENARIO:MAJOR-REVIEW
    loop de todas as questoes do teste: query <- pgps.quizListExtraQueries
        identifica qual a questao selecionada (resposta) do usuario
        prepara template (read-only) de div para carrocel com dados da questao
        adiciona div como slide no carrocel
    move o slide de introducao para a ultima posicao no carrocel
    habilita navegacao do carrocel com mouse ou teclado
    desloca para a primeira questao
    <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Refazer Teste Completo]
    registra o inicio do teste: user.quizDateStart, user.quizFlagOpen
    inicializa teste com questoes de (pgps.quizListBasicQueries + pgps.quizListExtraQueries)

    // $CENARIO:MAJOR-TEST
    obtem 1ª questao do teste: query <- (pgps.quizListBasicQueries + pgps.quizListExtraQueries)
        prepara template de div para carrocel com dados da questao
        adiciona div como slide no carrocel e desloca para a primeira questao
        <stand-by>


@USUARIO <click-on> [Questao A ou B]
    coleta resposta do usuario -> quizUserOpts e (quizTotalBasic++ ou quizTotalExtra++)
    salva {estrutura-usuario} no local-storage
    
    se ainda ha questoes a serem respondidas
        // $CENARIO:MAJOR-TEST
        obtem proxima questao do teste: query <- (pgps.quizListBasicQueries + pgps.quizListExtraQueries)
            prepara template de div para carrocel com dados da questao
                adiciona div como slide no carrocel e desloca para a proxima questao
            <stand-by>

    se acabou as questoes
        registra a conclusao do teste: user.quizFlagOpen, user.quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizCssColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        // $CENARIO:MAJOR-RETAKE
        exibe opcoes [Resultado] e [Doacao]
            obtem cor da pontuacao do usuario e aplica cor nos icones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opcoes [Refazer Teste Completo] [Revisar Respostas Completo]
        <stand-by>
```


```
-------------------------------------------------------------------------------
@USUARIO <click-on> [Revisar Respostas Completo]
    inicializa teste com questoes de (pgps.quizListBasicQueries + pgps.quizListExtraQueries)

    // $CENARIO:MAJOR-REVIEW
    loop de todas as questoes do teste: query <- (pgps.quizListBasicQueries + pgps.quizListExtraQueries)
        identifica qual a questao selecionada (resposta) do usuario
        prepara template (read-only) de div para carrocel com dados da questao
        adiciona div como slide no carrocel
    move o slide de introducao para a ultima posicao no carrocel
    habilita navegacao do carrocel com mouse ou teclado
    desloca para a primeira questao
    <stand-by>
```

-------------------------------------------------------------------------------
