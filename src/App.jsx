import { Box } from "@mui/material";
import { cores } from "./tema";
import Cabecalho from "./componentes/Cabecalho";
import Abertura from "./componentes/Abertura";
import SobreEProjetos from "./componentes/SobreEProjetos";
import Contato from "./componentes/Contato";

// A página é formada por um header fixo e três seções, uma embaixo da outra.
function App() {
  return (
    <>
      {/* Fora da caixa de 1440px para o header ocupar a largura toda da tela */}
      <Cabecalho />

      <Box sx={{ maxWidth: 1440, mx: "auto" }}>
        {/* A abertura fica parada (sticky) enquanto a página rola */}
        <Abertura />

        {/* O resto da página tem fundo sólido e fica por cima da abertura,
            por isso parece que ele "passa por cima" dela ao rolar */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            bgcolor: cores.fundo,
            boxShadow: "0 -24px 48px rgba(0, 0, 0, 0.7)",
          }}
        >
          <SobreEProjetos />
          <Contato />
        </Box>
      </Box>
    </>
  );
}

export default App;
