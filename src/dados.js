import fotoMeio from "./assets/foto-meio.jpg";
import fotoPraia from "./assets/MarianoPraia.png";
import fotoDeFrente from "./assets/poseDeFrenteMariano.png";
import marianoMono from "./assets/marianoMono.png";
import projetoNutriscan from "./assets/projeto-nutriscan.webp";
import projetoLauffens from "./assets/projeto-lauffens.png";

// Textos e links do site.
// Quando você pedir alterações de conteúdo, é aqui que mexemos.

export const redesSociais = [
  { nome: "GitHub", link: "https://github.com/marianoxzz001" },
  { nome: "LinkedIn", link: "https://www.linkedin.com/in/emariano-dev/" },
  { nome: "Instagram", link: "https://www.instagram.com/mariano0xz/" },
];

// As palavras que ficam se alternando no nome grande da abertura.
export const palavrasDoNome = ["EDUARDO", "MARIANO", "DEV"];

export const menu = [
  { texto: "SOBRE", destino: "#sobre" },
  { texto: "PROJETOS", destino: "#projetos" },
  { texto: "CONTATO", destino: "#contato" },
];

// Botão "BAIXAR CV" do cabeçalho.
// Coloque o seu PDF dentro da pasta "public" com este nome: public/curriculo-eduardo.pdf
// (se o PDF tiver outro nome, é só trocar "arquivo" aqui).
export const curriculo = {
  texto: "BAIXAR CV",
  arquivo: "Curriculo_Eduardo_Marianoo.pdf", // nome do arquivo dentro da pasta "public"
  nomeAoBaixar: "Curriculo-Eduardo-Mariano.pdf", // nome que o arquivo ganha no computador de quem baixa
};

// imagem: a foto que aparece no quadrado. Quando for null, o quadrado mostra "SUA FOTO AQUI".
// Para colocar uma foto nova: salve em src/assets, importe lá em cima e troque o null.
export const fotos = [
  { numero: "01", legenda: "UM POUCO DE MIM", destaque: false, imagem: fotoPraia },
  { numero: "02", legenda: "NOS BASTIDORES", destaque: true, imagem: fotoDeFrente },
  { numero: "03", legenda: "FORA DA TELA", destaque: false, imagem: marianoMono },
];

export const sobreMim = {
  titulo: "Desenvolvedor em evolução.",
  texto:
    "Sou Eduardo Mariano, desenvolvedor focado em criar interfaces modernas, acessíveis e experiências digitais bem construídas.",
};

export const habilidades = [
  { nome: "Front-end", detalhe: "React e Bootstrap" },
  { nome: "Back-end", detalhe: "Node, C# com ASP.NET e Python com FastAPI" },
  { nome: "Ferramentas", detalhe: "IA para desenvolvimento (Claude, ChatGPT) e CI/CD" },
];

// Projetos.
// imagem: o screenshot do projeto (salve em src/assets e importe lá em cima).
// detalhes: texto que aparece quando clica no card. Sem "detalhes", o card não abre.
// link: endereço do projeto no ar ou no GitHub. Se estiver vazio, o botão não aparece.
// emBreve: true mostra o selo "EM BREVE" no card.
export const projetos = [
  {
    numero: "01",
    titulo: "App de análise nutricional",
    descricao: "Aplicação web/mobile. Integração com ChatGPT API usando Node.js, React e TypeScript.",
    imagem: projetoNutriscan,
    detalhes:
      "Aplicação em que a pessoa envia a foto de uma refeição e recebe, em segundos, uma estimativa nutricional. A análise da imagem é feita pela API da OpenAI.",
    tecnologias: "Node.js, React, TypeScript e integração com a API do ChatGPT",
    link: "", // <- COLE AQUI O LINK DO PROJETO
    emBreve: false,
  },
  {
    numero: "02",
    titulo: "Sistema Lauffens",
    descricao: "Sistema de gerenciamento para controle de tempo, custo e uso de materiais nas etapas da empresa Lauffens.",
    imagem: projetoLauffens,
    detalhes:
      "Sistema desenvolvido para acompanhar o tempo de cada etapa de produção, calcular custos e controlar quanto material é utilizado.",
    emBreve: true,
  },
  { numero: "03", titulo: "Projeto 03", descricao: "Experimento pessoal / tecnologias a definir", imagem: null, emBreve: true },
];

// Os textos que abrem ao clicar nas fotos ficam em src/textosFotos.js.
