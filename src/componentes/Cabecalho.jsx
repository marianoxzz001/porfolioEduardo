import { Box, Link, Typography } from "@mui/material";
import { cores, alturaCabecalho } from "../tema";
import { menu } from "../dados";

// Header fixo: fica sempre no topo da tela, mesmo quando a página rola.
function Cabecalho() {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed", // é isso que prende o header na tela
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100, // fica por cima do conteúdo que passa por baixo
        height: alturaCabecalho,
        bgcolor: "rgba(9, 9, 9, 0.8)", // fundo escuro meio transparente
        backdropFilter: "blur(12px)", // desfoca o que passa por trás
        borderBottom: `1px solid ${cores.linha}`,
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          height: "100%",
          px: { xs: 3, md: 8 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo: clicar volta para o topo */}
        <Link href="#" underline="none" sx={{ color: cores.textoForte }}>
          <Typography sx={{ fontSize: 36, fontWeight: 700, letterSpacing: "-3px" }}>EM</Typography>
        </Link>

        <Box component="nav" sx={{ display: "flex", gap: 4.5 }}>
          {menu.map((item) => (
            <Link
              key={item.texto}
              href={item.destino}
              underline="none"
              sx={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "1.6px",
                color: cores.textoMedio,
                "&:hover": { color: cores.textoForte },
              }}
            >
              {item.texto}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Cabecalho;
