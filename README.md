# Site da Rinascere Aesthetics

Site da Rinascere Aesthetics (Itajaí/SC), clínica de harmonização íntima masculina. Substitui a página do Google Sites (`sites.google.com/view/aumentopenianorinascere`).

- **Objetivo:** passar confiança e levar o visitante a **agendar a avaliação pelo WhatsApp**.
- **Visual:** a linguagem premium do site da Jaíne (topo escuro e editorial, títulos finos com uma parte em peso forte, faixa correndo, muito respiro), com a identidade da Rinascere: grafite, bronze e linho, fonte Raleway (a do logo).
- **Técnica:** [Astro](https://astro.build) gera HTML e CSS puros, **sem JavaScript no navegador**: abre rápido no celular e o Google lê tudo. Publicado no **Cloudflare Pages** (`rinascere.pages.dev`), sem o nome da conta no endereço.

## O que a página mostra

1. **Topo:** "Confiança se constrói com discrição.", botão do WhatsApp e três garantias (sigilo, sem cirurgia, avaliação individual). No fundo, "Rinascere" gigante em traço de bronze (do italiano: renascer).
2. **O procedimento:** o que é, em linguagem honesta, e o quadro "Em resumo".
3. **Por que a Rinascere:** sigilo, avaliação individual, acompanhamento.
4. **Como funciona:** os 4 passos, do WhatsApp ao retorno.
5. **Responsável técnico(a):** foto, nome e registro no conselho (obrigatórios). O site escreve "biomédica" ou "biomédico" conforme `responsavel.feminino`.
6. **Cuidados e recuperação:** o que esperar e os sinais para avisar a clínica na hora.
7. **Dúvidas:** 9 perguntas, incluindo "É o mesmo que aumento peniano?" (é o termo que as pessoas buscam no Google).
8. **Onde estamos:** endereço, rota no Google Maps e no Waze, redes sociais.
9. **Chamada final** e rodapé com CNPJ e responsável técnico(a).

O contato é **só pelo WhatsApp**, sem formulário: o site não guarda dado nenhum, o que simplifica a LGPD (veja `/privacidade`).

## Regras de publicidade (por que o texto é assim)

Quem responde pela clínica é da **Biomedicina**. Pelo CRBM (resposta oficial, dez/2025), o biomédico esteta pode fazer harmonização íntima masculina **só com finalidade estética**. Mudança de comprimento ou de desempenho sexual é competência médica. O Código de Ética do Profissional Biomédico (Res. CFBM 330/2020, art. 11) e o Código de Defesa do Consumidor (art. 37) proíbem promessa de resultado, preço e desconto para captar paciente, e propaganda enganosa.

Por isso o site **não** tem: "ganho de até 5 cm", "comprimento ereto", "mais prazer", "100% seguro / sem risco", "de R$ 180 por R$ 60", "válido por 10 minutos".

O `npm run build` **barra a publicação** se alguma dessas frases voltar (`scripts/conferir.mjs`).

**Antes e depois e depoimentos** ficaram de fora. Só podem entrar com autorização por escrito de cada paciente (TCLE) e com as legendas que o Código exige.

> Atenção para a clínica: em fev/2026 o TRF1 anulou a Resolução CFBM 241/2014, que trata da estética biomédica. O CFBM recorreu e diz que as outras resoluções seguem valendo. Já a Sociedade Brasileira de Urologia considera o preenchimento peniano ato médico. Vale a clínica confirmar a situação com um advogado.

## Procedimentos (site completo)

Além da página principal (harmonização íntima masculina), cada procedimento da fachada tem a sua página em `/procedimentos/<nome>/`, todas geradas a partir de **`src/data/procedimentos.ts`**:

- **Rosto:** toxina botulínica, harmonização facial, preenchimento labial, bioestimulador de colágeno, fios de PDO, ultrassom microfocado, laser de túlio.
- **Corpo:** criolipólise, harmonização de glúteo.

Cada página tem: o que é, para que costuma ser procurado, resumo, passo a passo, cuidados, responsável técnica, dúvidas e botão de WhatsApp com a mensagem já citando o procedimento. A lista completa fica em `/procedimentos/`, e a home tem a seção "Outros procedimentos".

Para criar uma página nova, é só acrescentar um item em `procedimentos.ts`: a página, o cartão na lista e o sitemap saem sozinhos.

**Ícones:** cada procedimento tem o seu (campo `icone`), desenhado em `src/data/icones.ts` no mesmo traço dos demais. Ele aparece no cartão, no emblema do topo da página, na ficha "Em resumo" e nas etapas. Os ícones da ficha e das etapas são escolhidos pelo texto (Duração, Anestesia, Retorno…); o que não tiver correspondência usa o ícone do procedimento.

**Antes de divulgar:** a responsável técnica deve revisar o texto de cada página (indicações, durações médias e cuidados). Os textos não citam marcas de produtos nem de aparelhos (Ultraformer, Lavieen etc.), como manda o art. 11 do Código de Ética do biomédico, e a conferência do build barra essas marcas.

**Ficaram de fora até a confirmação da responsável técnica:**
- **Enzimas para gordura localizada:** confirmar que o produto tem registro na Anvisa para esse uso.
- **Endolaser e endolifting:** confirmar que estão dentro da habilitação do biomédico esteta.
- **Emagrecimento:** pode envolver medicamentos, que só o médico prescreve. Se for só com procedimentos estéticos, dá para criar a página.

## Dados da clínica

Tudo fica em **`src/data/clinica.ts`**. O build avisa se faltar algo.

- [x] **Responsável técnica:** Bruna M. Zaccarias, biomédica esteta, CRBM 9292 (Instagram da clínica, set/2026; confirmado).
- [x] **Foto da responsável técnica:** do post de apresentação no Instagram (`src/assets/fotos/bruna-zaccarias.jpg`).
- [x] **Logo oficial:** recortado do perfil do Instagram, com fundo transparente (`src/assets/logo-rinascere.png`).
- [x] **WhatsApp:** (47) 99191-6750 (perfil do WhatsApp Business). O botão já abre com a mensagem pronta.
- [x] **Horários:** somente com hora marcada.
- [ ] **Região do CRBM** (ex.: CRBM-5 nº 9292), se a clínica quiser mostrar completo.
- [ ] **Fotos originais** em boa resolução (as do site antigo têm cerca de 500 px).
- [ ] **Conferir com a responsável técnica** os textos de cuidados (24 h sem academia, 72 h sem esforço nas pernas, sinais de alerta) e das dúvidas.

## Publicar

A cada envio para a `main`, o GitHub Actions (`.github/workflows/publicar.yml`) gera o site, confere e publica no Cloudflare Pages.

Configuração, uma vez só (é o mesmo esquema dos outros sites: um token do Cloudflare guardado nos segredos do repositório):

1. Abra o link abaixo já logado no Cloudflare. Ele abre a criação do token com a permissão **Cloudflare Pages → Editar** já marcada. Clique em **Continuar para o resumo → Criar token** e copie o token.
   https://dash.cloudflare.com/profile/api-tokens?permissionGroupKeys=%5B%7B%22key%22%3A%22page%22%2C%22type%22%3A%22edit%22%7D%5D&accountId=%2A&zoneId=all&name=Rinascere%20Pages
2. Abra https://github.com/uniaosupertroca-beep/rinascere-site/settings/secrets/actions/new. Em **Name**, escreva `CLOUDFLARE_API_TOKEN`. Em **Secret**, cole o token e clique em **Add secret**. Nunca mande o token por chat.
3. Vá em **Actions → Publicar → Run workflow**. Na primeira vez, o projeto `rinascere` é criado sozinho.

O id da conta do Cloudflare já está no fluxo (é o mesmo do jaine-app).

O endereço final aparece no resumo da execução. Se `rinascere.pages.dev` já tiver dono, o Cloudflare usa um parecido. Nesse caso, atualize `endereco` em `src/data/clinica.ts`.

**Domínio próprio** (ex.: `rinascereaesthetics.com.br`): em Cloudflare → Workers e Pages → `rinascere` → Domínios personalizados. Depois troque `endereco` em `src/data/clinica.ts`. Ele é o endereço oficial usado no Google e na prévia de link.

Por que Pages e não Workers: no Workers o endereço gratuito leva o nome da conta (`*.uniaosupertroca.workers.dev`). Esse subdomínio **não deve ser trocado**, porque derrubaria os endereços dos apps do NutriMarca que usam a mesma conta.

## Comandos

Requisito: Node.js 22.12 ou mais novo.

```bash
npm install
npm run dev        # site local em http://localhost:4321, atualiza enquanto você edita
npm run build      # gera dist/ e roda a conferência (textos proibidos, links, JavaScript)
npm run preview    # serve o dist/ gerado
```

As imagens `public/og.png` (prévia de link no WhatsApp e redes) e `public/apple-touch-icon.png` saem de `scripts/og.html` e `scripts/icone.html`. Para gerar de novo: `node scripts/gerar-imagens.mjs`. Precisa do Playwright: `npm i -D playwright && npx playwright install chromium`.

## Estrutura

```
src/data/clinica.ts      contatos, endereço, redes e responsável técnico(a) (o que muda fica aqui)
src/data/procedimentos.ts  textos de cada procedimento (uma página por item)
src/data/icones.ts       ícones em SVG (sem biblioteca externa)
src/pages/               página principal, procedimentos, privacidade, 404, robots.txt e sitemap.xml
src/components/          uma seção por arquivo (Abertura, Procedimento, Pilares, Etapas, Responsavel…)
src/styles/global.css    cores, fonte, títulos e botões
public/_headers          cabeçalhos de segurança (CSP sem scripts, HSTS) e cache
scripts/conferir.mjs     conferência depois do build
```

