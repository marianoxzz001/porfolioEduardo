import { Typography } from "@mui/material";
import { cores } from "../tema";

// Texto pequeno, em maiúsculas e com espaço entre as letras.
// É usado em vários lugares do site (ex.: "SOBRE MIM", "E-MAIL", "LINKS").
function Rotulo({ children, cor = cores.textoMedio, tamanho = 10, espacamento = 2 }) {
  return (
    <Typography
      sx={{
        fontSize: tamanho,
        fontWeight: 500,
        letterSpacing: `${espacamento}px`,
        color: cor,
      }}
    >
      {children}
    </Typography>
  );
}

export default Rotulo;
