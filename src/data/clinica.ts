// Tudo o que é da clínica fica aqui: contatos, endereço, redes e a responsável técnica.
// Campo com null ainda não foi informado pela clínica: o site mostra um espaço marcado
// "a preencher" e o build lista o que falta (scripts/conferir.mjs).

export interface Responsavel {
  /** Nome como deve aparecer no site. */
  nome: string | null;
  /** Ex.: "CRBM-5 nº 12345". Obrigatório pelas regras de publicidade do biomédico. */
  registro: string | null;
  /** Uma ou duas frases sobre a formação e a experiência, em primeira pessoa ou terceira. */
  sobre: string | null;
  /** Arquivo em public/fotos/ (ex.: "/fotos/responsavel.jpg"), retrato vertical 4:5. */
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
  responsavel: {
    nome: null,
    registro: null,
    sobre: null,
    foto: null,
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

/** O que a clínica ainda precisa mandar. Aparece no fim do build. */
export function pendencias(): string[] {
  const falta: string[] = [];
  const r = clinica.responsavel;
  if (!r.nome) falta.push("Nome da responsável técnica (responsavel.nome)");
  if (!r.registro) falta.push("Registro no conselho, ex.: CRBM-5 nº 12345 (responsavel.registro)");
  if (!r.sobre) falta.push("Texto sobre a responsável técnica (responsavel.sobre)");
  if (!r.foto) falta.push("Foto da responsável técnica em public/fotos/ (responsavel.foto)");
  if (!clinica.horarios) falta.push("Horários de atendimento (horarios)");
  if (!clinica.whatsapp.numero) falta.push("Número do WhatsApp com DDD, para a mensagem pronta (whatsapp.numero)");
  return falta;
}
