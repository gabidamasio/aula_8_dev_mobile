# Relatório de Uso de Inteligência Artificial

**Projeto:** Rastreador de Hábitos (Aula 8: Hooks, Zustand e persistência em disco)  
**Stack:** React Native, Expo (Expo Router), TypeScript, Zustand, AsyncStorage e expo-sqlite.

---

## 1. Ferramenta utilizada

| Item | Descrição |
|---|---|
| Ferramenta | Claude (Anthropic), modelo Claude Sonnet 5.5 |
| Interface | Chat web/app (claude.ai), em uma conversa contínua |
| Finalidade | Apoio à compreensão dos requisitos, orientação durante a implementação, esclarecimento de dúvidas, revisão de trechos de código e auxílio na resolução de problemas. |
| Recursos extras | Não foram utilizados agentes, skills ou execução de código pela IA. Os comandos, instalações, testes, execução do aplicativo e operações com Git foram realizados por mim, na minha máquina. |

---

## 2. Como a IA foi utilizada

A IA foi utilizada como uma ferramenta de apoio ao longo do desenvolvimento, principalmente para esclarecer dúvidas, discutir alternativas de implementação e revisar soluções. O processo ocorreu nas seguintes etapas:

1. **Compreensão dos requisitos:** apresentei o enunciado dos Exercícios 1 a 5 e da Atividade Aplicada para obter orientações sobre como organizar a implementação e atender aos critérios solicitados.

2. **Orientação durante a implementação:** compartilhei arquivos do projeto, como a store, o contexto de tema, os layouts, as telas, o componente `FocusTimer` e o serviço `focus-db`. A partir deles, solicitei explicações, sugestões de ajustes e indicações de como implementar os requisitos sem descaracterizar a estrutura original do projeto.

3. **Conferência dos requisitos:** utilizei a IA para comparar o que já havia sido implementado com o enunciado e a rubrica da atividade. Essa conferência ajudou a identificar pontos que ainda precisavam de atenção, incluindo o Exercício 1, que foi implementado posteriormente.

4. **Esclarecimento de dúvidas e depuração:** consultei a ferramenta sobre problemas encontrados durante a execução do projeto, incluindo comandos no Windows, login e tunnel do Expo, o erro `Cannot find native module 'ExpoSQLite'` e o aviso `GO_BACK was not handled`. As sugestões foram avaliadas e testadas, e nem todas foram utilizadas.

5. **Versionamento:** utilizei as orientações da IA como apoio para compreender e executar etapas de versionamento com Git e GitHub, incluindo a inicialização do repositório, a configuração do `.gitignore`, os commits, o push e o clone em outra máquina.

6. **Documentação:** utilizei a IA como apoio para organizar as informações sobre o processo de desenvolvimento e elaborar este relatório de uso da ferramenta.

---

## 3. Análise crítica das orientações recebidas

### Pontos positivos

- **Apoio à compreensão do enunciado:** as explicações ajudaram a relacionar os conceitos apresentados na aula com sua aplicação prática no projeto, especialmente `useState`, `useEffect`, Zustand e persistência local.
- **Orientações sobre boas práticas:** a ferramenta apresentou exemplos de atualizações imutáveis utilizando spread, `.map()` e `.filter()`, além de explicar a importância do cleanup no `setInterval`.
- **Revisão da implementação:** a análise dos arquivos ajudou a identificar diferenças entre o código existente e os requisitos da atividade.
- **Apoio na resolução de problemas:** algumas orientações contribuíram para identificar e corrigir problemas, como a navegação com `router.back()` quando não existe histórico de navegação.
- **Atenção à estrutura do projeto:** ao longo da conversa, a ferramenta passou a considerar melhor a organização já existente, evitando substituir desnecessariamente estruturas como o `Drawer` por um `Stack`.
- **Segurança no versionamento:** a revisão do `.gitignore` chamou atenção para a necessidade de evitar o envio de arquivos de ambiente, como `.env`, e de dependências como `node_modules`.

### Erros e imprecisões

| Problema identificado | Descrição | Como foi tratado |
|---|---|---|
| Interpretação inicial do código | Em alguns momentos, a IA confundiu os arquivos do projeto-base com a versão que estava sendo desenvolvida. | Esclareci a diferença e compartilhei os arquivos atualizados para orientar as respostas seguintes. |
| Divergências em relação ao projeto-base | Algumas sugestões iniciais alteravam características já existentes, como os hábitos iniciais da store e o formato de persistência do tema. | Comparei as sugestões com o código original e solicitei os ajustes necessários. |
| Estrutura de navegação | Uma sugestão utilizava `Stack`, enquanto o projeto já estava organizado com `Drawer`. | Mantive a estrutura original, que atendia à organização do projeto. |
| Comandos incompatíveis com o Windows | Alguns comandos apresentados continham comentários que causavam erros quando executados diretamente no CMD. | Adaptei a execução, separando os comandos. |
| Alterações além do escopo | Em determinado momento, foi sugerida a aplicação do tema escuro em uma tela que não fazia parte do escopo definido para essa funcionalidade. | Revisei o escopo e solicitei a adequação das alterações. |
| Exercício não identificado inicialmente | O Exercício 1 não foi considerado na primeira conferência de cobertura dos requisitos. | Ao realizar uma nova verificação, identifiquei a pendência e providenciei sua implementação. |
| Problemas com o Expo | As orientações sobre login e tunnel não resolveram diretamente a dificuldade encontrada no ambiente. | Avaliei as alternativas e realizei os testes necessários até conseguir executar o aplicativo. |
| Módulo `expo-sqlite` | A ferramenta apresentou hipóteses para o erro `Cannot find native module 'ExpoSQLite'`, mas não foi possível confirmar sua causa apenas pela conversa. | Analisei as sugestões, apliquei uma alternativa e validei o funcionamento no ambiente de execução. |

### Limitações identificadas

- A IA não executou o aplicativo nem teve acesso direto ao ambiente local. Portanto, as sugestões de código precisaram ser verificadas por meio de execução e testes realizados por mim.
- As orientações dependiam das informações e dos arquivos compartilhados durante a conversa. Quando o contexto estava incompleto, algumas sugestões não correspondiam à estrutura real do projeto.
- A ferramenta não tinha conhecimento completo das configurações do ambiente, como a versão do SDK e as particularidades da execução com Expo Go ou development build, o que dificultou alguns diagnósticos.
- As respostas precisaram de avaliação crítica, pois nem todas as sugestões eram adequadas ao escopo ou à estrutura já existente.

---

## 4. Avaliação do auxílio recebido

A avaliação a seguir representa minha percepção sobre a utilidade das orientações durante o desenvolvimento, considerando a necessidade de revisar e adaptar as sugestões antes de aplicá-las.

| Etapa | Avaliação do auxílio | Observação |
|---|---|---|
| Store com Zustand e persistência | Alto | As orientações ajudaram na compreensão das ações e da persistência, mas foram necessários ajustes para manter as características do projeto-base. |
| Contexto de tema | Alto | A IA auxiliou na organização do contexto e no uso do `useTheme`, com ajustes no formato de armazenamento. |
| `FocusTimer` e `useEffect` | Alto | As explicações sobre intervalo, dependências e cleanup foram úteis para a implementação. |
| Telas Home, Estatísticas, Configurações e Detalhe | Alto | As sugestões auxiliaram na integração com a store e na adaptação das telas. |
| Exercício 1 com `useState` | Alto | As orientações foram úteis, embora a necessidade de implementar esse exercício tenha sido identificada somente durante uma revisão posterior. |
| Persistência com `expo-sqlite` | Médio | Houve apoio na estruturação do serviço, mas também dificuldades relacionadas ao ambiente de execução. |
| Ambiente, terminal e Expo | Baixo a médio | Algumas sugestões não resolveram os problemas encontrados, exigindo investigação e testes adicionais. |
| Git e GitHub | Alto | As orientações auxiliaram na compreensão e execução das etapas de versionamento. |

**Avaliação geral:** a IA foi uma ferramenta de apoio útil durante o desenvolvimento, principalmente para esclarecer conceitos, apresentar possibilidades de implementação, revisar trechos de código e auxiliar na investigação de erros. Entretanto, as respostas não foram utilizadas de forma automática. Foi necessário analisar as sugestões, compará-las com os requisitos e com a estrutura existente, realizar adaptações e verificar os resultados na prática. As decisões finais sobre o código, as alterações aplicadas e a validação do aplicativo foram de minha responsabilidade.

---

## 5. Participação e validação

Durante o desenvolvimento, fiquei responsável por conduzir a implementação e validar as alterações realizadas, utilizando a IA como apoio quando surgiam dúvidas ou dificuldades.

Entre as atividades realizadas por mim, destaco:

- Análise do enunciado, do checklist e da rubrica da atividade.
- Inspeção dos arquivos existentes antes de aplicar alterações.
- Avaliação e adaptação das sugestões recebidas, preservando a estrutura original do projeto.
- Execução de `npx tsc --noEmit` para verificar a existência de erros de tipo.
- Execução do aplicativo e realização de testes dos recursos implementados.
- Verificação do funcionamento da store, das atualizações de hábitos, das estatísticas e da persistência dos dados.
- Revisão do `.gitignore` e do `git status` antes do envio ao GitHub.
- Identificação de divergências e solicitação de esclarecimentos ou correções quando necessário.

Dessa forma, a ferramenta contribuiu como suporte técnico e didático, mas a análise, a aplicação das mudanças e a validação da solução foram realizadas por mim.

---

## 6. Declaração

Declaro que utilizei a ferramenta de Inteligência Artificial [nome da ferramenta e versão conforme o Catálogo de IA do CESAR] nesta atividade, com a finalidade de gerar um rascunho sobre o desenvolvimento do aplicativo Rastreador de Hábitos (Aula 8: Hooks, Zustand e persistência local em React Native/Expo), sobre o qual realizei análise crítica (curadoria) das informações apresentadas. Não tratei dados pessoais no uso desta ferramenta. Revisei criticamente o conteúdo gerado, identificando seus acertos e eventuais imprecisões, e assumo a responsabilidade integral pela versão final apresentada.