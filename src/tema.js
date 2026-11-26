import { createTheme } from "@mui/material";

// Todas as cores do site ficam aqui.
// Para mudar uma cor no site inteiro, é só mudar neste arquivo.
export const cores = {
  fundo: "#090909",
  textoForte: "#f2f2ee", // títulos
  textoClaro: "#d4d4cf", // textos de leitura
  textoMedio: "#a6a6a3", // menu e rótulos
  textoFraco: "#999995", // legendas
  textoMuitoFraco: "#777774", // detalhes discretos
  linha: "#292929", // linhas divisórias
  cartao: "#111111", // fundo dos cards de projeto
  cartaoBorda: "#292929",
  fotoFundo: "#131313",
  fotoFundoDestaque: "#191919",
  fotoBorda: "#303030",
  formularioFundo: "#101010",
  formularioBorda: "#1c1c1c",
  formularioLinha: "#3a3a3a",
  botaoFundo: "#e8e8e3",
  botaoTexto: "#151515",
};

// Altura do header fixo (em pixels).
// Usada para o conteúdo não ficar escondido atrás dele.
export const alturaCabecalho = 80;

const tema = createTheme({
  palette: {
    mode: "dark",
    background: { default: cores.fundo, paper: cores.fundo },
    text: { primary: cores.textoForte },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Rolagem suave quando clica nos links do menu
        html: { scrollBehavior: "smooth" },
        // Ao pular para uma seção, deixa um espaço para o header fixo não cobrir o título
        "[id]": { scrollMarginTop: `${alturaCabecalho}px` },
      },
    },
  },
});

export default tema;
