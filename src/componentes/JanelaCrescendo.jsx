import { Box, Dialog, Zoom, useMediaQuery } from "@mui/material";
import { cores } from "../tema";

// Tempo da animação, em milissegundos. 500 = meio segundo para a janela crescer.
// Para mais lento ou mais rápido, mude aqui.
const TEMPO_PARA_ABRIR = 500;
const TEMPO_PARA_FECHAR = 300;

// Janela que "cresce" a partir do lugar onde você clicou (foto ou card de projeto).
// É usada tanto nas fotos do "Sobre" quanto nos projetos, para os dois terem a mesma animação.
//
// aberto  -> true/false: se a janela está aparecendo
// origem  -> ponto de onde ela nasce, ex.: "320px 480px" (o centro do que foi clicado)
// tamanho -> "sm" ou "md": largura máxima da janela
function JanelaCrescendo({ aberto, aoFechar, origem, tamanho = "sm", children }) {
  // Quem pediu "reduzir movimento" no sistema não vê animação
  const reduzirMovimento = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <Dialog
      open={aberto}
      onClose={aoFechar}
      maxWidth={tamanho}
      fullWidth
      scroll="paper"
      TransitionComponent={Zoom} // Zoom = cresce do tamanho zero até o tamanho normal
      transitionDuration={
        reduzirMovimento ? 0 : { enter: TEMPO_PARA_ABRIR, exit: TEMPO_PARA_FECHAR }
      }
      TransitionProps={{
        style: { transformOrigin: origem }, // a janela nasce do ponto clicado
        easing: {
          enter: "cubic-bezier(0.22, 1, 0.36, 1)", // começa rápido e vai suavizando no fim
          exit: "cubic-bezier(0.4, 0, 1, 1)",
        },
      }}
      PaperProps={{
        sx: {
          bgcolor: cores.fotoFundo,
          backgroundImage: "none",
          border: `1px solid ${cores.fotoBorda}`,
          borderRadius: 0,
          m: 2,
          width: "calc(100% - 32px)", // em tela pequena nunca passa da largura da tela
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        {children}

        {/* Botão de fechar */}
        <Box
          component="button"
          type="button"
          onClick={aoFechar}
          aria-label="Fechar"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            border: `1px solid ${cores.fotoBorda}`,
            bgcolor: "rgba(9, 9, 9, 0.7)",
            color: cores.textoForte,
            fontSize: 16,
            cursor: "pointer",
            "&:hover": { bgcolor: cores.fundo },
          }}
        >
          ✕
        </Box>
      </Box>
    </Dialog>
  );
}

export default JanelaCrescendo;
