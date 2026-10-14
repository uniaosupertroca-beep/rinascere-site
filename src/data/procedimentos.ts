// Procedimentos da clínica (lista da fachada), cada um com a sua página em /procedimentos/<slug>/.
// Textos educativos e sem promessa de resultado: o que é, para que costuma ser indicado, como é feito,
// cuidados e dúvidas. Sem nomes comerciais de produtos ou aparelhos (Res. CFBM 330/2020, art. 11).
// A responsável técnica deve revisar cada página antes da divulgação.
//
// Ficaram de fora até a confirmação da responsável técnica: enzimas para gordura localizada
// (registro na Anvisa para esse uso), endolaser/endolifting (habilitação) e emagrecimento
// (pode envolver medicamentos, que só o médico prescreve).

import type { NomeIcone } from "./icones.ts";

export type Categoria = "Rosto" | "Corpo";

export interface Procedimento {
  slug: string;
  nome: string;
  categoria: Categoria;
  /** Ícone do procedimento, nos cartões e no topo da página. */
  icone: NomeIcone;
  /** Parte em destaque do título, depois do nome. */
  destaque: string;
  /** Uma frase: aparece nos cartões e na descrição para o Google. */
  resumo: string;
  oQueE: string[];
  indicacoes: string[];
  etapas: { titulo: string; texto: string }[];
  ficha: { termo: string; texto: string }[];
  cuidados: string[];
  duvidas: { p: string; r: string }[];
}

export const procedimentos: Procedimento[] = [
  {
    slug: "toxina-botulinica",
    nome: "Toxina botulínica",
    categoria: "Rosto",
    icone: "seringa",
    destaque: "com leveza.",
    resumo:
      "Suaviza as linhas de expressão da testa, entre as sobrancelhas e ao redor dos olhos, relaxando por um período os músculos que as formam.",
    oQueE: [
      "A toxina botulínica é aplicada em pontos específicos de alguns músculos do rosto para diminuir, por um período, a força da contração. Com menos movimento, as linhas que aparecem ao franzir a testa ou sorrir ficam mais suaves.",
      "A dose e os pontos de aplicação são definidos na avaliação, a partir da sua expressão. O objetivo é suavizar as linhas sem tirar a naturalidade dos movimentos.",
    ],
    indicacoes: [
      "Linhas na testa",
      "Linhas entre as sobrancelhas",
      "Linhas ao redor dos olhos, os “pés de galinha”",
      "Prevenção de linhas mais marcadas",
    ],
    etapas: [
      { titulo: "Avaliação", texto: "Conversa sobre suas expectativas, seu histórico de saúde e análise da sua expressão." },
      { titulo: "Aplicação", texto: "Feita com agulha bem fina, em poucos minutos. O desconforto costuma ser leve." },
      { titulo: "Retorno", texto: "Por volta de 15 dias depois, para conferir o efeito e ajustar, se for preciso." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Aplicação com agulha fina" },
      { termo: "Início do efeito", texto: "Entre 3 e 7 dias, com efeito completo em cerca de 15 dias" },
      { termo: "Duração", texto: "Em média de 4 a 6 meses, variando de pessoa para pessoa" },
      { termo: "Volta à rotina", texto: "No mesmo dia, com alguns cuidados nas primeiras horas" },
    ],
    cuidados: [
      "Não deitar nas primeiras 4 horas.",
      "Não massagear nem pressionar a região no dia da aplicação.",
      "Evitar exercício intenso nas primeiras 24 horas.",
      "Evitar calor intenso, como sauna e sol forte, nos primeiros dias.",
    ],
    duvidas: [
      {
        p: "É o mesmo que botox?",
        r: "Botox é o nome comercial de uma das marcas de toxina botulínica e virou o nome popular do procedimento. O produto usado é sempre registrado na Anvisa e definido na avaliação.",
      },
      {
        p: "Vou ficar com o rosto paralisado?",
        r: "O objetivo é suavizar as linhas, não tirar a expressão. A dose é planejada para cada pessoa, e o retorno serve justamente para conferir o efeito.",
      },
      {
        p: "Quem não pode fazer?",
        r: "Gestantes, lactantes e pessoas com algumas doenças neuromusculares não devem fazer. Esses pontos são conferidos na avaliação.",
      },
    ],
  },
  {
    slug: "harmonizacao-facial",
    nome: "Harmonização facial",
    categoria: "Rosto",
    icone: "rosto",
    destaque: "com proporção.",
    resumo:
      "Um plano individual que combina técnicas, como preenchimento e toxina botulínica, para valorizar a proporção e o equilíbrio do rosto.",
    oQueE: [
      "Harmonização facial não é um procedimento único: é um planejamento que pode reunir técnicas como preenchimento com ácido hialurônico, toxina botulínica, bioestimuladores de colágeno e fios. A escolha depende do seu rosto e do que você quer melhorar.",
      "Tudo começa por uma análise das proporções, com fotos e conversa sobre suas expectativas. O plano pode ser feito em etapas, respeitando a anatomia e os traços de cada pessoa.",
    ],
    indicacoes: [
      "Contorno da mandíbula e do queixo",
      "Volume e sustentação das maçãs do rosto",
      "Equilíbrio do perfil",
      "Sinais de envelhecimento e perda de volume",
    ],
    etapas: [
      { titulo: "Análise facial", texto: "Fotos, medidas e conversa sobre o que você quer valorizar." },
      { titulo: "Plano de tratamento", texto: "Quais técnicas, em que ordem e em quantas etapas, com termo de consentimento." },
      { titulo: "Aplicações", texto: "Feitas no consultório, com anestesia tópica ou local conforme a técnica." },
      { titulo: "Acompanhamento", texto: "Retornos para avaliar cada etapa e ajustar o plano." },
    ],
    ficha: [
      { termo: "Técnicas", texto: "Preenchimento, toxina botulínica, bioestimuladores e fios, conforme o plano" },
      { termo: "Anestesia", texto: "Tópica ou local, conforme a técnica" },
      { termo: "Sessões", texto: "Definidas no plano; podem ser feitas em etapas" },
      { termo: "Duração", texto: "Varia conforme cada técnica e cada organismo" },
    ],
    cuidados: [
      "Inchaço e pequenos hematomas podem aparecer e somem aos poucos.",
      "Evitar exercício intenso, calor e bebida alcoólica nas primeiras 24 a 48 horas.",
      "Seguir as orientações específicas de cada técnica, passadas na consulta.",
    ],
    duvidas: [
      {
        p: "Vai mudar muito o meu rosto?",
        r: "O planejamento busca equilíbrio e proporção, respeitando os seus traços. Você conhece o plano antes de começar.",
      },
      {
        p: "Preciso fazer tudo de uma vez?",
        r: "Não. O plano pode ser dividido em etapas, conforme a sua prioridade.",
      },
      {
        p: "É reversível?",
        r: "O preenchimento com ácido hialurônico pode ser dissolvido com hialuronidase, se necessário. As outras técnicas têm efeito temporário, que diminui com o tempo.",
      },
    ],
  },
  {
    slug: "preenchimento-labial",
    nome: "Preenchimento labial",
    categoria: "Rosto",
    icone: "labios",
    destaque: "com equilíbrio.",
    resumo:
      "Ácido hialurônico aplicado nos lábios para definir o contorno, repor volume e melhorar a hidratação, respeitando a proporção do rosto.",
    oQueE: [
      "O preenchimento labial usa ácido hialurônico, uma substância que existe naturalmente no corpo, para trabalhar contorno, volume e hidratação dos lábios.",
      "A quantidade e a técnica são definidas na avaliação, considerando o formato da sua boca e o equilíbrio com o restante do rosto.",
    ],
    indicacoes: ["Contorno pouco definido", "Assimetrias leves", "Perda de volume com o tempo", "Lábios ressecados ou com linhas finas"],
    etapas: [
      { titulo: "Avaliação", texto: "Análise do formato dos lábios e conversa sobre o que você espera." },
      { titulo: "Anestesia", texto: "Anestésico tópico e, quando indicado, local, para mais conforto." },
      { titulo: "Aplicação", texto: "Feita no consultório, com agulha ou cânula." },
      { titulo: "Retorno", texto: "Para conferir o efeito depois que o inchaço passar." },
    ],
    ficha: [
      { termo: "Produto", texto: "Ácido hialurônico registrado na Anvisa" },
      { termo: "Inchaço", texto: "Comum nos primeiros 2 a 5 dias" },
      { termo: "Duração", texto: "Em média de 6 a 12 meses, variando de pessoa para pessoa" },
      { termo: "Reversível", texto: "Sim, com uma enzima, a hialuronidase" },
    ],
    cuidados: [
      "Evitar beijos, canudos e pressão nos lábios nas primeiras 24 horas.",
      "Evitar calor intenso, sauna e exercício pesado por 48 horas.",
      "Usar protetor labial e seguir as orientações da consulta.",
    ],
    duvidas: [
      {
        p: "Vai ficar artificial?",
        r: "O volume é planejado para combinar com o seu rosto. Dá para começar com menos e complementar no retorno, se fizer sentido.",
      },
      { p: "Dói?", r: "São usados anestésicos para deixar a aplicação mais confortável." },
      { p: "E se eu não gostar?", r: "O ácido hialurônico pode ser dissolvido com uma enzima, a hialuronidase." },
    ],
  },
  {
    slug: "bioestimulador-de-colageno",
    nome: "Bioestimulador de colágeno",
    categoria: "Rosto",
    icone: "colageno",
    destaque: "com efeito gradual.",
    resumo:
      "Substâncias que estimulam o próprio corpo a produzir colágeno, melhorando aos poucos a firmeza e a qualidade da pele do rosto e do corpo.",
    oQueE: [
      "Com o tempo, o corpo produz menos colágeno, e a pele perde firmeza. Os bioestimuladores são substâncias aplicadas sob a pele que estimulam essa produção de forma gradual.",
      "O efeito aparece ao longo de semanas e meses, conforme o colágeno novo se forma. O número de sessões e o produto são definidos na avaliação.",
    ],
    indicacoes: [
      "Flacidez leve a moderada no rosto",
      "Perda de firmeza no pescoço e no colo",
      "Flacidez em braços, abdômen ou glúteos",
      "Qualidade da pele",
    ],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da pele e da flacidez, e escolha do produto mais indicado." },
      { titulo: "Aplicação", texto: "Com cânula ou agulha, e anestesia local quando necessário." },
      { titulo: "Intervalo", texto: "As sessões são espaçadas para o colágeno se formar." },
      { titulo: "Acompanhamento", texto: "Retornos para avaliar a evolução e combinar a manutenção." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Aplicação com cânula ou agulha" },
      { termo: "Efeito", texto: "Gradual, ao longo de semanas e meses" },
      { termo: "Sessões", texto: "Geralmente mais de uma, definidas na avaliação" },
      { termo: "Duração", texto: "Varia conforme o produto e o organismo; a manutenção é combinada na consulta" },
    ],
    cuidados: [
      "Fazer as massagens orientadas na consulta, quando indicadas para o produto.",
      "Evitar calor intenso e exercício pesado nas primeiras 24 a 48 horas.",
      "Pequenos hematomas e inchaço podem aparecer e somem aos poucos.",
    ],
    duvidas: [
      {
        p: "Quando vejo diferença?",
        r: "O colágeno se forma aos poucos: a mudança aparece ao longo de semanas e meses, não de um dia para o outro.",
      },
      {
        p: "É o mesmo que preenchimento?",
        r: "Não. O preenchimento repõe volume na hora; o bioestimulador estimula a pele a produzir colágeno com o tempo.",
      },
      { p: "Serve para o corpo?", r: "Sim, também é usado em regiões como braços, abdômen e glúteos, conforme a avaliação." },
    ],
  },
  {
    slug: "fios-de-pdo",
    nome: "Fios de PDO",
    categoria: "Rosto",
    icone: "fios",
    destaque: "sustentação sem cirurgia.",
    resumo: "Fios absorvíveis colocados sob a pele para dar sustentação e estimular colágeno, sem cortes e com anestesia local.",
    oQueE: [
      "Os fios de PDO (polidioxanona) são fios absorvíveis, inseridos sob a pele com agulha ou cânula. Os fios lisos estimulam a produção de colágeno; os fios com pequenas garras ajudam a reposicionar e sustentar os tecidos.",
      "Com o tempo, o corpo absorve os fios. O tipo, a quantidade e as regiões são definidos na avaliação.",
    ],
    indicacoes: [
      "Flacidez leve no contorno do rosto",
      "Sustentação das bochechas e da mandíbula",
      "Firmeza e qualidade da pele",
      "Pescoço e outras regiões, conforme avaliação",
    ],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da flacidez e escolha do tipo de fio." },
      { titulo: "Marcação e anestesia", texto: "As regiões são marcadas e recebem anestesia local." },
      { titulo: "Inserção dos fios", texto: "Com agulha ou cânula, sem cortes." },
      { titulo: "Retorno", texto: "Para acompanhar a recuperação e o efeito." },
    ],
    ficha: [
      { termo: "Material", texto: "Fios absorvíveis de polidioxanona (PDO)" },
      { termo: "Anestesia", texto: "Local" },
      { termo: "Absorção", texto: "Os fios são absorvidos pelo corpo ao longo de meses" },
      { termo: "Recuperação", texto: "Inchaço e sensibilidade nos primeiros dias" },
    ],
    cuidados: [
      "Evitar abrir muito a boca e fazer movimentos faciais exagerados nos primeiros dias.",
      "Dormir de barriga para cima na primeira semana, se orientado.",
      "Evitar academia, massagens no rosto e tratamentos dentários por alguns dias, conforme orientação.",
    ],
    duvidas: [
      {
        p: "Os fios ficam para sempre?",
        r: "Não. A polidioxanona é absorvida pelo corpo ao longo de meses, e o colágeno estimulado nesse período permanece.",
      },
      {
        p: "Substitui um lifting?",
        r: "Não. Os fios são indicados para flacidez leve a moderada; casos mais avançados podem precisar de avaliação médica.",
      },
      { p: "Dói?", r: "A aplicação é feita com anestesia local, para deixar o procedimento mais confortável." },
    ],
  },
  {
    slug: "ultrassom-microfocado",
    nome: "Ultrassom microfocado",
    categoria: "Rosto",
    icone: "ultrassom",
    destaque: "sem agulhas.",
    resumo:
      "Energia de ultrassom focada nas camadas profundas da pele para estimular colágeno e melhorar firmeza e contorno, sem cortes e sem agulhas.",
    oQueE: [
      "O ultrassom microfocado leva energia a pontos precisos das camadas profundas da pele, gerando calor controlado. Isso estimula a produção de colágeno e a retração dos tecidos.",
      "É um procedimento não invasivo: não há cortes nem agulhas, e a pele não fica marcada. O efeito aparece de forma gradual, conforme o colágeno se renova.",
    ],
    indicacoes: ["Flacidez no rosto e no pescoço", "Contorno da mandíbula", "Região da papada", "Flacidez em algumas áreas do corpo"],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da pele e definição das regiões e da intensidade." },
      { titulo: "Preparo", texto: "Limpeza da pele e aplicação de gel." },
      { titulo: "Aplicação", texto: "O aparelho percorre as regiões planejadas." },
      { titulo: "Acompanhamento", texto: "Retorno para avaliar a evolução e combinar a manutenção." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Ultrassom microfocado, sem agulhas" },
      { termo: "Sensação", texto: "Calor e pontadas durante a aplicação" },
      { termo: "Efeito", texto: "Gradual, ao longo de semanas" },
      { termo: "Volta à rotina", texto: "Imediata" },
    ],
    cuidados: [
      "Vermelhidão e leve inchaço podem aparecer nas primeiras horas.",
      "Usar protetor solar todos os dias.",
      "Manter a pele hidratada.",
    ],
    duvidas: [
      {
        p: "Dói?",
        r: "Pode causar desconforto, como calor e pontadas, durante a aplicação. A intensidade é ajustada para cada pessoa.",
      },
      { p: "Preciso me afastar das atividades?", r: "Não. Dá para voltar à rotina logo depois da sessão." },
      {
        p: "Quando a diferença aparece?",
        r: "O efeito é gradual: a firmeza melhora ao longo das semanas seguintes, conforme o colágeno se forma.",
      },
    ],
  },
  {
    slug: "laser-de-tulio",
    nome: "Laser de túlio",
    categoria: "Rosto",
    icone: "laser",
    destaque: "para a qualidade da pele.",
    resumo: "Laser fracionado não ablativo que trabalha textura, viço, poros e manchas da pele, com poucos dias de recuperação.",
    oQueE: [
      "O laser de túlio é um laser fracionado não ablativo: ele age em pequenas colunas da pele sem remover a camada superficial, estimulando a renovação e a produção de colágeno.",
      "Nos dias seguintes, a pele fica áspera e avermelhada enquanto se renova. O número de sessões é definido na avaliação, conforme o objetivo.",
    ],
    indicacoes: ["Textura irregular e poros dilatados", "Manchas e tom de pele desigual", "Perda de viço", "Linhas finas"],
    etapas: [
      { titulo: "Avaliação da pele", texto: "Análise do tipo de pele, das manchas e do objetivo." },
      { titulo: "Preparo", texto: "Limpeza e anestésico tópico para mais conforto." },
      { titulo: "Aplicação", texto: "O laser é passado nas regiões planejadas." },
      { titulo: "Renovação", texto: "A pele se renova nos dias seguintes, com os cuidados orientados." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Laser fracionado não ablativo" },
      { termo: "Anestesia", texto: "Tópica" },
      { termo: "Recuperação", texto: "Pele avermelhada e áspera por alguns dias" },
      { termo: "Proteção solar", texto: "Indispensável antes e depois" },
    ],
    cuidados: [
      "Usar protetor solar e evitar o sol nas semanas seguintes.",
      "Não arrancar a pele que descamar.",
      "Hidratar a pele e usar só os produtos indicados na consulta.",
    ],
    duvidas: [
      { p: "Posso fazer no verão?", r: "Pode, desde que a proteção solar seja rigorosa. Isso é avaliado caso a caso." },
      { p: "Fico com a pele marcada?", r: "A pele fica avermelhada e áspera por alguns dias, enquanto se renova." },
      { p: "Quantas sessões são necessárias?", r: "Depende do objetivo e da sua pele. A quantidade é definida na avaliação." },
    ],
  },
  {
    slug: "criolipolise",
    nome: "Criolipólise",
    categoria: "Corpo",
    icone: "floco",
    destaque: "para a gordura localizada.",
    resumo:
      "Resfriamento controlado que atinge as células de gordura localizada, eliminadas pelo próprio corpo ao longo das semanas seguintes.",
    oQueE: [
      "Na criolipólise, um aparelho resfria de forma controlada a região com gordura localizada. As células de gordura são mais sensíveis ao frio e, depois da sessão, são eliminadas aos poucos pelo próprio organismo.",
      "Não é um tratamento para emagrecer e não substitui alimentação e atividade física: o foco é a gordura localizada em regiões específicas.",
    ],
    indicacoes: ["Abdômen", "Flancos, os “pneuzinhos”", "Papada", "Costas, braços e coxas, conforme avaliação"],
    etapas: [
      { titulo: "Avaliação", texto: "Medidas, fotos e análise da gordura localizada." },
      { titulo: "Aplicação", texto: "O aparelho resfria a região de forma controlada." },
      { titulo: "Eliminação gradual", texto: "O corpo elimina as células de gordura nas semanas seguintes." },
      { titulo: "Reavaliação", texto: "Novas medidas e fotos para acompanhar a evolução." },
    ],
    ficha: [
      { termo: "Técnica", texto: "Resfriamento controlado, sem agulhas" },
      { termo: "Sensação", texto: "Frio intenso e pressão no início, que diminuem durante a sessão" },
      { termo: "Efeito", texto: "Gradual, ao longo de semanas" },
      { termo: "Volta à rotina", texto: "Imediata" },
    ],
    cuidados: [
      "Vermelhidão, sensibilidade e dormência na região são comuns e passam aos poucos.",
      "Manter alimentação equilibrada e boa hidratação.",
      "Avisar a clínica se notar endurecimento ou aumento de volume na região nas semanas seguintes.",
    ],
    duvidas: [
      { p: "Criolipólise emagrece?", r: "Não. Ela trata gordura localizada; o peso na balança muda pouco." },
      {
        p: "Tem riscos?",
        r: "Os efeitos mais comuns são vermelhidão, dormência e sensibilidade temporárias. Existe um efeito raro, o aumento de gordura na região tratada, que é explicado na avaliação.",
      },
      {
        p: "Quem não pode fazer?",
        r: "Gestantes, pessoas com algumas doenças ligadas ao frio e quem tem hérnia na região, entre outros casos conferidos na consulta.",
      },
    ],
  },
  {
    slug: "harmonizacao-de-gluteo",
    nome: "Harmonização de glúteo",
    categoria: "Corpo",
    icone: "contorno",
    destaque: "firmeza e contorno.",
    resumo:
      "Técnicas como bioestimuladores de colágeno para trabalhar firmeza, textura e contorno dos glúteos, conforme avaliação individual.",
    oQueE: [
      "A harmonização de glúteo reúne técnicas, como bioestimuladores de colágeno, para trabalhar firmeza, textura da pele e contorno da região.",
      "O plano é individual: depende da sua anatomia, do seu objetivo e da avaliação da pele. Sempre com produtos registrados na Anvisa e indicados para a região.",
    ],
    indicacoes: ["Flacidez", "Aspecto de celulite", "Irregularidades no contorno", "Perda de firmeza com o tempo"],
    etapas: [
      { titulo: "Avaliação", texto: "Análise da região, da pele e do seu objetivo." },
      { titulo: "Plano", texto: "Técnicas, número de sessões e termo de consentimento." },
      { titulo: "Aplicações", texto: "Feitas no consultório, com anestesia local quando necessária." },
      { titulo: "Acompanhamento", texto: "Retornos para avaliar a evolução." },
    ],
    ficha: [
      { termo: "Técnicas", texto: "Bioestimuladores de colágeno, entre outras, conforme o plano" },
      { termo: "Efeito", texto: "Gradual, ao longo de semanas e meses" },
      { termo: "Sessões", texto: "Definidas na avaliação" },
      { termo: "Volta à rotina", texto: "Geralmente no mesmo dia, com alguns cuidados" },
    ],
    cuidados: [
      "Fazer as massagens orientadas na consulta, quando indicadas.",
      "Evitar treino de glúteos e calor intenso nos primeiros dias.",
      "Pequenos hematomas e sensibilidade podem aparecer e passam aos poucos.",
    ],
    duvidas: [
      {
        p: "Aumenta o tamanho do bumbum?",
        r: "O foco é firmeza, textura e contorno. O que é possível no seu caso é conversado com franqueza na avaliação.",
      },
      { p: "Quando a diferença aparece?", r: "O efeito dos bioestimuladores é gradual, ao longo de semanas e meses." },
      { p: "Precisa de mais de uma sessão?", r: "Geralmente sim. A quantidade é definida no plano." },
    ],
  },
];

export const categorias: Categoria[] = ["Rosto", "Corpo"];

export const porCategoria = (c: Categoria) => procedimentos.filter((p) => p.categoria === c);

export const iconeDaCategoria: Record<Categoria, NomeIcone> = { Rosto: "rosto", Corpo: "contorno" };

// Ícones da ficha "Em resumo" e das etapas, escolhidos pelo texto. O que não tiver
// correspondência usa o ícone do próprio procedimento (por exemplo, "Técnica" e "Aplicação").
const ICONES_DA_FICHA: [RegExp, NomeIcone][] = [
  [/dura[cç][aã]o/i, "ampulheta"],
  [/efeito/i, "evolucao"],
  [/rotina/i, "maleta"],
  [/anestesia/i, "gota"],
  [/sess[oõ]es/i, "calendario"],
  [/produto|material/i, "frasco"],
  [/incha[cç]o|recupera/i, "curativo"],
  [/revers/i, "desfazer"],
  [/absor/i, "ciclo"],
  [/sensa[cç][aã]o/i, "termometro"],
  [/solar/i, "sol"],
  [/t[eé]cnicas/i, "camadas"],
];

const ICONES_DA_ETAPA: [RegExp, NomeIcone][] = [
  [/whatsapp/i, "conversa"],
  [/reavalia|retorno|acompanhamento/i, "calendario"],
  [/an[aá]lise|avalia/i, "prancheta"],
  [/plano/i, "lista"],
  [/marca[cç][aã]o/i, "caneta"],
  [/anestesia|preparo/i, "gota"],
  [/intervalo/i, "ampulheta"],
  [/renova/i, "brilho"],
  [/elimina/i, "reducao"],
];

const procurar = (lista: [RegExp, NomeIcone][], texto: string, padrao: NomeIcone) =>
  lista.find(([regra]) => regra.test(texto))?.[1] ?? padrao;

export const iconeDaFicha = (termo: string, p: Procedimento) => procurar(ICONES_DA_FICHA, termo, p.icone);
export const iconeDaEtapa = (titulo: string, p: Procedimento) => procurar(ICONES_DA_ETAPA, titulo, p.icone);
