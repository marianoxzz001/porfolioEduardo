import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { cores } from "../tema";
import { palavrasDoNome } from "../dados";
import Rotulo from "./Rotulo";
import RedesSociais from "./RedesSociais";

// Animação de entrada da palavra: ela surge desfocada, de baixo para cima.
const entrar = keyframes`
  from { opacity: 0; transform: translateY(24px); filter: blur(10px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
`;

// Animação do cursor piscando
const piscar = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

// Tempo que cada palavra fica na tela (em milissegundos)
const TEMPO_DE_CADA_PALAVRA = 2800;

// Primeira tela do site: nome grande no centro, alternando entre as palavras.
function Abertura() {
  // indice diz qual palavra está aparecendo: 0 = EDUARDO, 1 = MARIANO
  const [indice, setIndice] = useState(0);

  // Passa para a próxima palavra (e volta para a primeira no final da lista)
  function trocarPalavra() {
    setIndice((atual) => (atual + 1) % palavrasDoNome.length);
  }

  // Liga um relógio que troca a palavra de tempos em tempos.
  // O return desliga o relógio quando o componente sai da tela.
  useEffect(() => {
    const relogio = setInterval(trocarPalavra, TEMPO_DE_CADA_PALAVRA);
    return () => clearInterval(relogio);
  }, []);

  const palavraAtual = palavrasDoNome[indice];

  return (
    <Box
      sx={{
        // sticky + top: 0 deixa esta tela parada quando a página rola.
        // A próxima seção (que tem fundo sólido) passa por cima dela.
        position: "sticky",
        top: 0,
        zIndex: 0,
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pb: "34px", // sobe o nome um pouquinho, como no Figma
        px: { xs: 3, md: 8 },
      }}
    >
      {/* Brilho suave atrás do nome, só para a tela não ficar tão crua */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 900,
          height: 600,
          maxWidth: "100%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse at center, rgba(242, 242, 238, 0.07), transparent 70%)",
          pointerEvents: "none", // o brilho não atrapalha cliques
        }}
      />

      {/* ---------- Bloco do nome: palavra + subtítulo + cursor ---------- */}
      <Box sx={{ position: "relative" }}>
        {/* key={palavraAtual} faz o React recriar o texto a cada troca, e assim a animação toca de novo */}
        <Typography
          key={palavraAtual}
          component="h1"
          sx={{
            fontSize: "clamp(56px, 11vw, 158px)", // cresce com a tela, até 158px
            fontWeight: 600,
            letterSpacing: "-0.057em",
            lineHeight: 1.21,
            animation: `${entrar} 0.8s ease-out`,
          }}
        >
          {palavraAtual}
        </Typography>

        {/* Subtítulo: fica logo abaixo do nome, mais para a direita (como no Figma).
            O cursor piscando fica do lado do texto, na mesma linha. */}
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: "72%",
            display: "flex", // deixa o texto e o cursor lado a lado
            alignItems: "center",
            gap: "3px",
            whiteSpace: "nowrap",
          }}
        >
          <Rotulo cor={cores.textoFraco} tamanho={11} espacamento={2.3}>
            DESENVOLVEDOR
          </Rotulo>

          {/* Cursor piscando */}
          <Box
            sx={{
              width: 2,
              height: 14,
              bgcolor: cores.textoMedio,
              animation: `${piscar} 1s step-end infinite`,
            }}
          />
        </Box>
      </Box>

      {/* ---------- Redes sociais em coluna, no canto de baixo à esquerda ---------- */}
      <Box sx={{ position: "absolute", left: { xs: 24, md: 64 }, bottom: 70 }}>
        <RedesSociais emColuna />
      </Box>
    </Box>
  );
}

export default Abertura;
