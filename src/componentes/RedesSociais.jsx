import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { cores } from "../tema";
import { redesSociais } from "../dados";

// Cada rede social tem seu ícone. A chave é o nome que está em dados.js.
const icones = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

// mostrarNome = false -> só os ícones; true -> ícone + nome (usado no contato)
// emColuna = true -> ícones um embaixo do outro (usado na abertura)
function RedesSociais({ mostrarNome = false, emColuna = false }) {
  // Na coluna a ordem é invertida: Instagram, LinkedIn, GitHub (como no Figma)
  const lista = emColuna ? [...redesSociais].reverse() : redesSociais;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: emColuna ? "column" : "row",
        gap: emColuna ? 1.75 : mostrarNome ? 5 : 3,
        alignItems: emColuna ? "flex-start" : "center",
      }}
    >
      {lista.map((rede) => {
        const Icone = icones[rede.nome];

        return (
          <Link
            key={rede.nome}
            href={rede.link}
            target="_blank"
            rel="noreferrer"
            underline="none"
            aria-label={rede.nome}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              fontSize: 14,
              color: mostrarNome ? cores.textoClaro : cores.textoForte,
              "&:hover": { color: cores.textoForte },
            }}
          >
            <Icone sx={{ fontSize: 20 }} />
            {mostrarNome && rede.nome}
          </Link>
        );
      })}
    </Box>
  );
}

export default RedesSociais;
