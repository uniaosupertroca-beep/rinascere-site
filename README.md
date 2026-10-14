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

## O que a clínica ainda precisa mandar

Enquanto não chegam, o site mostra espaços marcados "a preencher", e o build lista o que falta.

- [ ] **Biomédica ou biomédico**, **nome** e **registro no CRBM** (ex.: `CRBM-5 nº 12345`). São obrigatórios antes de divulgar o site.
- [ ] **Foto do(a) responsável técnico(a)**: retrato vertical. Salve em `public/fotos/responsavel.jpg` (cerca de 800×1000 px).
- [ ] **Texto curto sobre o(a) profissional**: formação, experiência, jeito de atender.
- [ ] **Número do WhatsApp** com DDD. Com ele, o botão já abre com a mensagem "Vim pelo site e quero agendar uma avaliação". Hoje usa o link `wa.link/97w9s4`.
- [ ] **Horários de atendimento.**
- [ ] **Logo em SVG ou PNG** (opcional). Hoje o nome é escrito em Raleway, no desenho do logo atual.
- [ ] **Conferir com o(a) responsável técnico(a)** os textos de cuidados (24 h sem academia, 72 h sem esforço nas pernas, sinais de alerta) e das dúvidas.

Tudo isso se preenche em um lugar só: **`src/data/clinica.ts`**.

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
src/pages/               página principal, privacidade, 404, robots.txt e sitemap.xml
src/components/          uma seção por arquivo (Abertura, Procedimento, Pilares, Etapas, Responsavel…)
src/styles/global.css    cores, fonte, títulos e botões
public/_headers          cabeçalhos de segurança (CSP sem scripts, HSTS) e cache
scripts/conferir.mjs     conferência depois do build
```

Para virar o site completo da clínica (outros procedimentos), cada procedimento ganha a própria página em `src/pages/`, reaproveitando as seções e o layout.
