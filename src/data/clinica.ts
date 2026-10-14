// Tudo o que é da clínica fica aqui: contatos, endereço, redes e quem é responsável técnico.
// Campo com null ainda não foi informado pela clínica: o site mostra um espaço marcado
// "a preencher" e o build lista o que falta (scripts/conferir.mjs).

export interface Responsavel {
  /** true para biomédica, false para biomédico. Enquanto null, o site usa "biomédico(a)". */
  feminino: boolean | null;
  /** true quando a clínica confirmar que é a responsável técnica (o CFBM exige o nome do RT na divulgação). */
  responsavelTecnico: boolean | null;
  /** Nome como deve aparecer no site. */
  nome: string | null;
  /** Ex.: "CRBM-5 nº 12345". Obrigatório pelas regras de publicidade do biomédico. */
  registro: string | null;
  /** Uma ou duas frases sobre a formação e a experiência, em primeira pessoa ou terceira. */
  sobre: string | null;
  /** Arquivo em src/assets/fotos/ (ex.: "bruna-zaccarias.jpg"), retrato vertical 4:5. */
  foto: string | null;
}

export const clinica = {
  nome: "Rinascere Aesthetics",
  /** Endereço oficial do site (canônico, sitemap e prévia de link). Troque quando houver domínio próprio. */
  endereco: "https://rinascere.pages.dev",
  cnpj: "44.930.707/0001-72",
  cidade: "Itajaí",
  uf: "SC",
  rua: "Rua Dagoberto Nogueira, 100, sala 05",
  bairro: "Centro",
  cep: "88301-060",
  /** Ex.: ["Segunda a sexta, das 9h às 19h", "Sábado, das 9h às 12h"]. */
  horarios: null as string[] | null,
  whatsapp: {
    /** Só dígitos, com país e DDD (ex.: "5547999999999"). Com ele, o botão já abre com a mensagem pronta. */
    numero: null as string | null,
    /** Link curto que a clínica já usa; vale enquanto o número não for informado. */
    linkAtual: "https://wa.link/97w9s4",
    mensagem: "Olá! Vim pelo site e quero agendar uma avaliação.",
  },
  redes: {
    instagram: "https://www.instagram.com/clinica.rinascere/",
    facebook: "https://www.facebook.com/rinascere.clinicaestetica/",
    youtube: "https://www.youtube.com/@RinascereAesthetics",
  },
  // Dados publicados pela própria clínica no Instagram (@clinica.rinascere, posts de set/2026).
  responsavel: {
    feminino: true,
    responsavelTecnico: true,
    nome: "Bruna M. Zaccarias",
    registro: "CRBM 9292",
    sobre:
      "Dedicada à harmonização íntima masculina, integra o corpo clínico da Rinascere. Atende com avaliação individual, transparência sobre cada etapa do procedimento e sigilo do primeiro contato ao retorno.",
    foto: "bruna-zaccarias.jpg",
  } as Responsavel,
};

export const linkWhatsapp = (): string => {
  const { numero, linkAtual, mensagem } = clinica.whatsapp;
  return numero ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}` : linkAtual;
};

export const enderecoCompleto = `${clinica.rua}, ${clinica.bairro}, ${clinica.cidade} (${clinica.uf}), CEP ${clinica.cep}`;

const destino = encodeURIComponent(`${clinica.rua.replace(", sala 05", "")}, ${clinica.cidade} - ${clinica.uf}, ${clinica.cep}`);
export const linkRotaGoogle = `https://www.google.com/maps/dir/?api=1&destination=${destino}`;
export const linkRotaWaze = `https://waze.com/ul?q=${destino}&navigate=yes`;

/** Palavras que mudam se quem responde pela clínica é biomédica ou biomédico. */
export function rotulos(r: Responsavel = clinica.responsavel) {
  const f = (feminino: string, masculino: string, neutro: string) => (r.feminino === null ? neutro : r.feminino ? feminino : masculino);
  const rt = r.responsavelTecnico === true;
  return {
    responsavel: rt ? f("Responsável técnica", "Responsável técnico", "Responsável técnico(a)") : "Quem cuida de você",
    /** Rodapé: "Responsável técnica" quando confirmado; senão, o cargo ("Biomédica esteta"). */
    rodape: rt ? f("Responsável técnica", "Responsável técnico", "Responsável técnico(a)") : f("Biomédica esteta", "Biomédico esteta", "Biomédico(a) esteta"),
    ehResponsavelTecnico: rt,
    cargo: f("Biomédica esteta", "Biomédico esteta", "Biomédico(a) esteta"),
    habilitado: f("habilitada", "habilitado", "habilitado(a)"),
    nomeVazio: f("Nome da biomédica", "Nome do biomédico", "Nome do(a) biomédico(a)"),
  };
}

/** O que a clínica ainda precisa mandar. Aparece no fim do build. */
export function pendencias(): string[] {
  const falta: string[] = [];
  const r = clinica.responsavel;
  if (r.responsavelTecnico !== true) falta.push("Confirmar se a profissional é a responsável técnica da clínica (responsavel.responsavelTecnico)");
  if (r.feminino === null) falta.push("Se quem responde pela clínica é biomédica ou biomédico (responsavel.feminino)");
  if (!r.nome) falta.push("Nome do(a) responsável técnico(a) (responsavel.nome)");
  if (!r.registro) falta.push("Registro no conselho, ex.: CRBM-5 nº 12345 (responsavel.registro)");
  if (!r.sobre) falta.push("Texto sobre o(a) responsável técnico(a) (responsavel.sobre)");
  if (!r.foto) falta.push("Foto do(a) responsável técnico(a) em src/assets/fotos/ (responsavel.foto)");
  if (!clinica.horarios) falta.push("Horários de atendimento (horarios)");
  if (!clinica.whatsapp.numero) falta.push("Número do WhatsApp com DDD, para a mensagem pronta (whatsapp.numero)");
  return falta;
}
