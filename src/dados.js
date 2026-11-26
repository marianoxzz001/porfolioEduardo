import fotoMeio from "./assets/foto-meio.jpg";

// Textos e links do site.
// Quando você pedir alterações de conteúdo, é aqui que mexemos.

export const redesSociais = [
  { nome: "GitHub", link: "https://github.com/marianoxzz001" },
  { nome: "LinkedIn", link: "https://www.linkedin.com/in/emariano-dev/" },
  { nome: "Instagram", link: "https://www.instagram.com/mariano0xz/" }, // ainda sem link definido
];

// As palavras que ficam se alternando no nome grande da abertura.
export const palavrasDoNome = ["EDUARDO", "MARIANO", "DEV"];

export const menu = [
  { texto: "SOBRE", destino: "#sobre" },
  { texto: "PROJETOS", destino: "#projetos" },
  { texto: "CONTATO", destino: "#contato" },
];

// imagem: a foto que aparece no quadrado. Quando for null, o quadrado mostra "SUA FOTO AQUI".
// Para colocar uma foto nova: salve em src/assets, importe lá em cima e troque o null.
export const fotos = [
  { numero: "01", legenda: "UM POUCO DE MIM", destaque: false, imagem: null },
  { numero: "02", legenda: "NOS BASTIDORES", destaque: true, imagem: fotoMeio }, // a do meio é maior
  { numero: "03", legenda: "FORA DA TELA", destaque: false, imagem: null },
];

export const habilidades = [
  { nome: "Front-end", detalhe: "React e Bootstrap" },
  { nome: "Back-end", detalhe: "Node, C# com ASP.NET e Python com FastAPI" },
  { nome: "Ferramentas", detalhe: "IA para desenvolvimento (Claude, ChatGPT) e CI/CD" },
];

export const projetos = [
  { numero: "01", titulo: "Projeto 01", descricao: "Aplicação web  /  tecnologias a definir" },
  { numero: "02", titulo: "Projeto 02", descricao: "Experiência digital  /  tecnologias a definir" },
  { numero: "03", titulo: "Projeto 03", descricao: "Experimento pessoal  /  tecnologias a definir" },
];
