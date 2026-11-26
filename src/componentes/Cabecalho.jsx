import { Box, Link, Typography } from "@mui/material";
import { cores, alturaCabecalho } from "../tema";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { menu, curriculo } from "../dados";
import BonecoAndando from "./BonecoAndando";

// Endereço do PDF dentro da pasta "public". BASE_URL já inclui "/porfolioEduardo/" quando o site está no ar.
const enderecoDoCurriculo = `${import.meta.env.BASE_URL}${curriculo.arquivo}`;

// Header fixo: fica sempre no topo da tela, mesmo quando a página rola.
function Cabecalho() {
  const baixarCurriculo = async (evento) => {
    evento.preventDefault();

    try {
      const resposta = await fetch(enderecoDoCurriculo, { cache: "no-store" });
      if (!resposta.ok) {
        window.location.assign(enderecoDoCurriculo);
        return;
      }

      const pdf = await resposta.blob();
      const url = URL.createObjectURL(pdf);
      const link = document.createElement("a");
      link.href = url;
      link.download = curriculo.nomeAoBaixar;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.location.assign(enderecoDoCurriculo);
    }
  };

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
      {/* O boneco anda por cima da linha de baixo do header, passando por trás do logo e do menu */}
      <BonecoAndando />

      <Box
        sx={{
          position: "relative",
          zIndex: 1, // fica na frente do boneco
          maxWidth: 1440,
          mx: "auto",
          height: "100%",
          px: { xs: 2, sm: 3, md: 8 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {/* Logo: clicar volta para o topo */}
        <Link href="#" underline="none" sx={{ color: cores.textoForte }}>
          <Typography sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 700, letterSpacing: "-3px" }}>EM</Typography>
        </Link>

        {/* Menu e botão do currículo ficam juntos, no canto direito */}
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, md: 4 }, minWidth: 0 }}>
          <Box component="nav" sx={{ display: "flex", gap: { xs: 1.75, sm: 3, md: 4.5 } }}>
            {menu.map((item) => (
              <Link
                key={item.texto}
                href={item.destino}
                underline="none"
                sx={{
                  fontSize: { xs: 10, md: 11 },
                  fontWeight: 500,
                  letterSpacing: { xs: "1px", md: "1.6px" },
                  color: cores.textoMedio,
                  "&:hover": { color: cores.textoForte },
                }}
              >
                {item.texto}
              </Link>
            ))}
          </Box>

          {/* Botão BAIXAR CV: no celular fica só "CV" para caber no header */}
          <Link
            href={enderecoDoCurriculo}
            download={curriculo.nomeAoBaixar}
            onClick={baixarCurriculo}
            underline="none"
            aria-label="Baixar currículo em PDF"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              px: { xs: 1.25, md: 2 },
              py: 0.9,
              border: `1px solid ${cores.fotoBorda}`,
              color: cores.textoClaro,
              fontSize: { xs: 10, md: 11 },
              fontWeight: 500,
              letterSpacing: { xs: "1px", md: "1.6px" },
              whiteSpace: "nowrap",
              transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
              "&:hover, &:focus-visible": {
                bgcolor: cores.botaoFundo,
                color: cores.botaoTexto,
                borderColor: cores.botaoFundo,
                outline: "none",
              },
            }}
          >
            <FileDownloadOutlinedIcon sx={{ fontSize: 16 }} />
            <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
              {curriculo.texto}
            </Box>
            <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>
              CV
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Cabecalho;
