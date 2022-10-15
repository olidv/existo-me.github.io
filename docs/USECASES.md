# ARTEFATO: CASOS DE USO

Este documento descreve os casos de uso do site EXISTO.me, detalhando os cenários e seus respectivos fluxos principal, alternativo e exceção. O fluxo principal da aplicação se mostrou bastante complexo em virtude dos vários cenários na inicialização da página principal (home). Este documento foi elaborado para facilitar a definição da lógica na aplicação do teste político e facilitar também eventual manutenção posterior. Da mesma forma, este artefato poderá auxiliar caso algum novo desenvolvedor queira contribuir com o projeto ou mesmo traduzi-lo (locale, i18n) para outro idioma_PAÍS.

As convenções de nomenclatura abaixo são um apanhado de lições aprendidas ao longo de anos atuando como analista de sistemas. Normalmente as empresas gostam de elaborar artefatos mais "formais" como um documento MS Word ou planilha MS Excel; ou até mesmo diagramação em alguma ferramenta UML como o System Architect. Particularmente eu sempre achei que este tipo de documentação possui um propósito único de auxiliar no desenvolvimento, não tendo um fim em sí. Existe enquanto necessário para esclarecer a lógica na cabeça do analista e/ou desenvolvedor, discutir com integrantes da equipe, dirimir dúvidas com o usuário, etc. O clássico "papel de pão".

A todo momento estamos discutindo na área de TI como o projeto de um sistema de software poderia ser comparado ao projeto de um edifício na área de engenharia civil. No entando, a lição mais importante da engenharia civil na minha opinião é o ANDAIME. É algo muito simples, ágil por ser fácil de montar e desmontável com igual praticidade. Qualquer auxiliar de pedreiro pode ajudar na montagem do andaime, que permanece em uma obra enquanto necessário. Quando não mais necessário, o andaime é desmontado ao final da obra. Ninguém se preocupa com a cor do andaime, se tem sujeira superficial, se a tubulação é redonda ou quadrada, etc - basta que seja firme, seguro e alcance todos os andares do prédio.

Artefatos que auxiliam no projeto deveriam seguir o mesmo paradigma de um andaime: serem simples e fáceis de elaborar, não precisarem de formatação "apresentável", aplicáveis a uma situação específica e descartáveis ao final do projeto. Talvez alguns artefatos possam ser mantidos, mas a grande maioria não se justifica porque "morrem" e se tornam defuntos quando o sistema entra em operação. A documentação de um sistema ou projeto raramente é "visitada" no futuro, e muitas vezes nem é atualizada na manutenção posterior. Em nosso dia-a-dia, todos sabemos que as decisões muitas vezes são tomadas pelo programador durante a codificação. Manter então os artefatos de forma simples (em arquivos texto) e próximos ao código (no mesmo repositório) acaba se tornando uma solução mais eficaz para "documentar" um projeto/software.

No caso deste projeto, como haviam muitos cenários na inicialização da home, o detalhamento dos casos de uso se tornou útil. Mas a lógica em cada caso de uso é bastante simples, por isso o fluxo das atividades foi detalhado apenas aqui (Portugol). Se em algum momento houvesse uma lógica mais crítica em um determinado fluxo, talvez fosse então o caso de elaborar um diagrama de sequência. Se alguma entidade tivesse um número expressivo de estados, com uma lógica mais complexa para mudança entre os estados, então talvez fossse o caso de elaborar um diagrama de estados. A UML possui vários diagramas úteis e bastante interessantes, que podem ser utilizados em casos específicos, especialmente nos componentes mais críticos e complexos de um sistema.


## CONVENÇÕES DE NOMENCLATURA PARA OS CASOS DE USO

    ----------
    Tracejado indica o início de um caso de uso ou o fluxo de um cenário.
    
    @NOME 
    Um ator ou agente/atuante, considerado como entidade externa pela aplicação.

    $CENARIO::TITULO
    Detalhamento de fluxo(s) principal, alternativo ou exceção do cenário especificado.
    
    <ação>
    Indica uma ação executada por uma entidade externa (ator) ou pela aplicação.

    [Componente]
    Botão ou opção de menu acessível pela entidade externa (ator) através do mouse ou teclado.

    {identificador}
    Possível estrutura de dados, classe ou arquivo - já implementado ou ainda a ser definido.

    ** ...
    DEFINIÇÃO DE UMA REGRA DE NEGÓCIO (FUNCIONALIDADE), DE IMPLEMENTAÇÃO (CÓDIGO) OU DE INTERFACE (UX/UI).
    
    ## ...
    OBSERVAÇÕES E/OU COMENTÁRIOS IMPORTANTES, EM LETRA MAIÚSCULA PARA MAIOR DESTAQUE.

    'uri'
    Apóstrofos designam endereço (url) de web site ou qualquer outro recurso (uri) utilizado.

    "Descrição"
    Aspas designam qualquer literal (cadeia de caracteres alfanumérico) manipulado como valor string.

    * Números e Datas são manipulados conforme regras gramaticais da língua portuguesa.


-------------------------------------------------------------------------------
@USUÁRIO <get-request> 'www.EXISTO.me'
    renderiza tela principal (home)

    ** DEVERÁ HAVER UM ÚNICO ARQUIVO SEPARADO PARA DECLARAÇÃO DAS QUESTÕES E PONTUAÇÃO DO TESTE.
    ** ESTE ARQUIVO NÃO PODERÁ FAZER USO DE CACHE, POIS PODERÁ SER MODIFICADO A QUALQUER MOMENTO.
    obtém ultima versão da {estrutura-gps-politico}, sem usar cache
        pgps = {estrutura-gps-politico}
    
    inicializa estrutura de dados do usuário
        $CENARIO::BEGINNER
        ## 1º ACESSO DO USUARIO
        se {estrutura-usuario} não está armazenada no local-storage  
            inicializa nova {estrutura-usuario} -> user
            
            $CENARIO::BEGINNER-START
            ## PRIMEIRA VISITA DO USUÁRIO, NÃO INICIOU NENHUMA VERSÃO DO TESTE
            ** O USUÁRIO DEVERÁ RESOLVER AS QUESTÕES BÁSICAS PRIMEIRO, 
            ** E NO PRÓXIMO ACESSO (OU APÓS F5) TER ACESSO ÀS QUESTÕES EXTRAS/INCREMENTAIS.
            estabelece versao primária (basic) para inicio dos testes
                {estrutura-usuario}.quizVersion = 1
            salva {estrutura-usuario} no local-storage
        
        $CENARIO::MAJOR
        ## NÃO É 1º ACESSO DO USUARIO
        se {estrutura-usuario} já está armazenada no local-storage  
            obtém do local-storage {estrutura-usuario} -> user
            
            $CENARIO::BEGINNER-RESTART
            ## USUÁRIO JÁ COMPLETOU VERSÃO BASICA DO TESTE
            se user.quizVersion = 1 e user.quizTotalBasic = pgps.quizTotalBasicQueries
                atualiza versao do teste do usuario: user.quizVersion = pgps.quizLastVersion
                salva {estrutura-usuario} no local-storage
            
            $CENARIO::MAJOR-RESTART
            ## USUÁRIO JÁ COMPLETOU VERSÃO EXTRA DO TESTE
            ** APÓS CONCLUIR AS QUESTÕES EXTRAS, O USUÁRIO SERÁ NOTIFICADO DE NOVAS QUESTÕES.
            se user.quizVersion > 1 e user.quizTotalExtra = pgps.quizTotalExtraQueries  
                atualiza versao do teste do usuario: user.quizVersion = pgps.quizLastVersion
                salva {estrutura-usuario} no local-storage

    ** O PAINEL INTRODUTÓRIO (1º SLIDE) TERÁ CONTEÚDO CONFORME O CENÁRIO ATUAL DO USUÁRIO.
    identifica o cenário de uso pelo estado do usuário
        ## PRIMEIRA VISITA DO USUARIO, NÃO INICIOU NENHUMA VERSÃO DO TESTE
        se user.quizDateStart = null ou user.quizTotalDone = 0  
            $CENARIO::BEGINNER-START
            apresenta opções [Iniciar Teste Básico] [Como Funciona]
            <stand-by>

        ## USUARIO INICIOU VERSÃO BASICA DO TESTE MAS NÃO FINALIZOU
        se user.quizVersion = 1 e user.quizTotalBasic < pgps.quizTotalBasicQueries  
            $CENARIO::BEGINNER-RESUME
            exibe notificação de questões pendentes com valor: # user.quizTotalBasic ... pgps.quizTotalBasicQueries
            apresenta opções [Retomar Teste Básico] [Revisar Respostas Básico]
            <stand-by>

        ## USUÁRIO ACABOU DE FINALIZAR VERSÃO BASICA DO TESTE
        se user.quizVersion = 1 e user.quizTotalBasic = pgps.quizTotalBasicQueries  
            $CENARIO::BEGINNER-RESTART
            exibe opções [Resultado] e [Doação]
                obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
            apresenta opções [Refazer Teste Básico] [Revisar Respostas Básico]
            <stand-by>

        ## USUÁRIO É NOTIFICADO DE NOVAS QUESTÕES EXTRAS
        se user.quizVersion > 1 e user.quizTotalDone = pgps.quizTotalBasicQueries  
            $CENARIO::MAJOR-NOTIFY
            exibe opções [Resultado] e [Doação]
                obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
            exibe notificação de novas questões com valor: + pgps.quizTotalExtraQueries
            altera o título do site: (pgps.quizTotalExtraQueries) EXISTO.me • GPS Político
            apresenta opções [Continuar Teste Extra] [Revisar Respostas Básico]
            <stand-by>

        ## USUÁRIO INICIOU VERSÃO EXTRA DO TESTE MAS NÃO FINALIZOU
        se user.quizVersion > 1 e user.quizTotalExtra < pgps.quizTotalExtraQueries  
            $CENARIO::MAJOR-RESUME
            exibe opções [Resultado] e [Doação]
                obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
            exibe notificação de questões pendentes com valor: # user.quizTotalExtra ... pgps.quizTotalExtraQueries
            apresenta opções [Retomar Teste Extra] [Revisar Respostas Extra]
            <stand-by>

        ## USUÁRIO ACABOU DE FINALIZAR VERSÃO EXTRA DO TESTE
        se user.quizVersion > 1 e user.quizTotalExtra = pgps.quizTotalExtraQueries
            $CENARIO::MAJOR-RESTART
            exibe opções [Resultado] e [Doação]
                obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
            apresenta opções [Refazer Teste Completo] [Revisar Respostas Completo]
            <stand-by>

        ## USUÁRIO É NOTIFICADO DE NOVAS QUESTÕES EXTRAS
        se 1 < user.quizVersion < pgps.quizLastVersion e user.quizTotalExtra < pgps.quizTotalExtraQueries  
            $CENARIO::MAJOR-NOTIFY
            exibe opções [Resultado] e [Doação]
                obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
            exibe notificação de novas questões com valor: + pgps.quizTotalExtraQueries    
            altera o título do site: (pgps.quizTotalExtraQueries) EXISTO.me • GPS Político
            apresenta opções [Continuar Teste Extra] [Revisar Respostas Completo]
            <stand-by>


-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Iniciar Teste Básico]
    inicializa teste com questões de pgps.quizListBasicQueries
    registra o início do teste: user.quizDateStart, user.quizFlagOpen

    $CENARIO::BEGINNER-TEST
    obtem 1ª questão do teste: query <- pgps.quizListBasicQueries
        prepara template de div para carrocel com dados da questão
        adiciona div como slide no carrocel e desloca para a primeira questão
        <stand-by>


@USUÁRIO <click-on> [Questão A ou B]
    coleta resposta do usuário -> quizUserOpts e quizTotalBasic++
    salva {estrutura-usuario} no local-storage
    
    se ainda há questões a serem respondidas
        $CENARIO::BEGINNER-TEST
        obtem próxima questão do teste: query <- pgps.quizListBasicQueries
            prepara template de div para carrocel com dados da questão
                adiciona div como slide no carrocel e desloca para a próxima questão
            <stand-by>

    se acabou as questões
        registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizHexColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        $CENARIO::BEGINNER-RESTART
        exibe opções [Resultado] e [Doação]
            obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opções [Refazer Teste Básico] [Revisar Respostas Básico]
        <stand-by>
    

-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Retomar Teste Básico]
    inicializa teste com questões de pgps.quizListBasicQueries
    identifica a última questão respondida pelo usuario: user.quizTotalBasic

    $CENARIO::BEGINNER-TEST
    obtem próxima questão do teste: query <- pgps.quizListBasicQueries
        prepara template de div para carrocel com dados da questão
        adiciona div como slide no carrocel e desloca para a primeira questão
        <stand-by>


@USUÁRIO <click-on> [Questão A ou B]
    coleta resposta do usuário -> quizUserOpts e quizTotalBasic++
    salva {estrutura-usuario} no local-storage
    
    se ainda há questões a serem respondidas
        $CENARIO::BEGINNER-TEST
        obtem próxima questão do teste: query <- pgps.quizListBasicQueries
            prepara template de div para carrocel com dados da questão
                adiciona div como slide no carrocel e desloca para a próxima questão
            <stand-by>

    se acabou as questões
        registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizHexColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        $CENARIO::BEGINNER-RESTART
        exibe opções [Resultado] e [Doação]
            obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opções [Refazer Teste Básico] [Revisar Respostas Básico]
        <stand-by>
    

-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Refazer Teste Básico]
    limpa as respostas do usuário: quizTotalBasic, quizTotalExtra, quizUserOpts, quizDateFinal, 
                                   quizUserScore, quizHexColor, quizFileImage
    inicializa teste com questões de pgps.quizListBasicQueries
    registra o início do teste: user.quizDateStart, user.quizFlagOpen
    
    $CENARIO::BEGINNER-TEST
    obtem 1ª questão do teste: query <- pgps.quizListBasicQueries
        prepara template de div para carrocel com dados da questão
        adiciona div como slide no carrocel e desloca para a primeira questão
        <stand-by>


@USUÁRIO <click-on> [Questão A ou B]
    coleta resposta do usuário -> quizUserOpts e quizTotalBasic++
    salva {estrutura-usuario} no local-storage
    
    se ainda há questões a serem respondidas
        $CENARIO::BEGINNER-TEST
        obtem próxima questão do teste: query <- pgps.quizListBasicQueries
            prepara template de div para carrocel com dados da questão
                adiciona div como slide no carrocel e desloca para a próxima questão
            <stand-by>

    se acabou as questões
        registra a conclusao do teste: user.quizFlagOpen, quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizHexColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        $CENARIO::BEGINNER-RESTART
        exibe opções [Resultado] e [Doação]
            obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opções [Refazer Teste Básico] [Revisar Respostas Básico]
        <stand-by>
    

-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Revisar Respostas Básico]
    inicializa teste com questões de pgps.quizListBasicQueries

    $CENARIO::BEGINNER-REVIEW
    loop de todas as questões do teste: query <- pgps.quizListBasicQueries
        identifica qual a questão selecionada (resposta) do usuário
        prepara template (read-only) de div para carrocel com dados da questão
        adiciona div como slide no carrocel
    move o slide de introdução para a última posição no carrocel
    habilita navegação do carrocel com mouse ou teclado
    desloca para a primeira questão
    <stand-by>


-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Continuar Teste Extra]
    registra o início do teste: user.quizFlagOpen
    inicializa teste com questões de pgps.quizListExtraQueries

    $CENARIO::MAJOR-TEST
    obtem 1ª questão do teste: query <- pgps.quizListExtraQueries
        prepara template de div para carrocel com dados da questão
        adiciona div como slide no carrocel e desloca para a primeira questão
        <stand-by>


@USUÁRIO <click-on> [Questão A ou B]
    coleta resposta do usuário -> quizUserOpts e quizTotalExtra++
    salva {estrutura-usuario} no local-storage
    
    se ainda há questões a serem respondidas
        $CENARIO::MAJOR-TEST
        obtem próxima questão do teste: query <- pgps.quizListExtraQueries
            prepara template de div para carrocel com dados da questão
                adiciona div como slide no carrocel e desloca para a próxima questão
            <stand-by>

    se acabou as questões
        registra a conclusao do teste: user.quizFlagOpen
        calcula a pontuacao do usuario -> quizUserScore, quizHexColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        $CENARIO::MAJOR-RESTART
        exibe opções [Resultado] e [Doação]
            obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opções [Refazer Teste Completo] [Revisar Respostas Completo]
        <stand-by>
        

-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Retomar Teste Extra]
    identifica a última questão respondida pelo usuario: user.quizTotalExtra
    inicializa teste com questões de pgps.quizListExtraQueries

    $CENARIO::MAJOR-TEST
    obtem próxima questão do teste: query <- pgps.quizListExtraQueries
        prepara template de div para carrocel com dados da questão
        adiciona div como slide no carrocel e desloca para a primeira questão
        <stand-by>


@USUÁRIO <click-on> [Questão A ou B]
    coleta resposta do usuário -> quizUserOpts e quizTotalExtra++
    salva {estrutura-usuario} no local-storage
    
    se ainda há questões a serem respondidas
        $CENARIO::MAJOR-TEST
        obtem próxima questão do teste: query <- pgps.quizListExtraQueries
            prepara template de div para carrocel com dados da questão
                adiciona div como slide no carrocel e desloca para a próxima questão
            <stand-by>

    se acabou as questões
        registra a conclusao do teste: user.quizFlagOpen
        calcula a pontuacao do usuario -> quizUserScore, quizHexColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        $CENARIO::MAJOR-RESTART
        exibe opções [Resultado] e [Doação]
            obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opções [Refazer Teste Completo] [Revisar Respostas Completo]
        <stand-by>
    

-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Revisar Respostas Extra]
    inicializa teste com questões de pgps.quizListExtraQueries

    $CENARIO::MAJOR-REVIEW
    loop de todas as questões do teste: query <- pgps.quizListExtraQueries
        identifica qual a questão selecionada (resposta) do usuário
        prepara template (read-only) de div para carrocel com dados da questão
        adiciona div como slide no carrocel
    move o slide de introdução para a última posição no carrocel
    habilita navegação do carrocel com mouse ou teclado
    desloca para a primeira questão
    <stand-by>


-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Refazer Teste Completo]
    registra o início do teste: user.quizDateStart, user.quizFlagOpen
    inicializa teste com questões de (pgps.quizListBasicQueries + pgps.quizListExtraQueries)

    $CENARIO::MAJOR-TEST
    obtem 1ª questão do teste: query <- (pgps.quizListBasicQueries + pgps.quizListExtraQueries)
        prepara template de div para carrocel com dados da questão
        adiciona div como slide no carrocel e desloca para a primeira questão
        <stand-by>


@USUÁRIO <click-on> [Questão A ou B]
    coleta resposta do usuário -> quizUserOpts e (quizTotalBasic++ ou quizTotalExtra++)
    salva {estrutura-usuario} no local-storage
    
    se ainda há questões a serem respondidas
        $CENARIO::MAJOR-TEST
        obtem próxima questão do teste: query <- (pgps.quizListBasicQueries + pgps.quizListExtraQueries)
            prepara template de div para carrocel com dados da questão
                adiciona div como slide no carrocel e desloca para a próxima questão
            <stand-by>

    se acabou as questões
        registra a conclusao do teste: user.quizFlagOpen, user.quizDateFinal
        calcula a pontuacao do usuario -> quizUserScore, quizHexColor, quizFileImage
        salva {estrutura-usuario} no local-storage

        $CENARIO::MAJOR-RESTART
        exibe opções [Resultado] e [Doação]
            obtém cor da pontuação do usuário e aplica cor nos ícones grid-3x3
        prepara template de div para carrocel com resultado do teste
            adiciona div como slide no carrocel e desloca para slide final
            apresenta opções [Refazer Teste Completo] [Revisar Respostas Completo]
        <stand-by>
        

-------------------------------------------------------------------------------
@USUÁRIO <click-on> [Revisar Respostas Completo]
    inicializa teste com questões de (pgps.quizListBasicQueries + pgps.quizListExtraQueries)

    $CENARIO::MAJOR-REVIEW
    loop de todas as questões do teste: query <- (pgps.quizListBasicQueries + pgps.quizListExtraQueries)
        identifica qual a questão selecionada (resposta) do usuário
        prepara template (read-only) de div para carrocel com dados da questão
        adiciona div como slide no carrocel
    move o slide de introdução para a última posição no carrocel
    habilita navegação do carrocel com mouse ou teclado
    desloca para a primeira questão
    <stand-by>


-------------------------------------------------------------------------------
