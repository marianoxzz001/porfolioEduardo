import { useState } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { cores } from "../tema";
import Rotulo from "./Rotulo";
import RedesSociais from "./RedesSociais";

// Estilo da linha de baixo de cada campo do formulário
const estiloCampo = {
  "& .MuiInputBase-root": { fontSize: 13, color: cores.textoForte },
  "& .MuiInputLabel-root": { fontSize: 13, color: cores.textoMedio },
  "& .MuiInput-underline:before": { borderBottomColor: cores.formularioLinha },
};

// Formulário "Deixe uma mensagem"
function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");

  // Por enquanto o formulário é só visual: não envia nada.
  // Quando for a hora de enviar de verdade, o código entra nesta função.
  function enviarMensagem(evento) {
    evento.preventDefault();
    console.log({ nome, email, assunto });
  }

  return (
    <Box
      component="form"
      onSubmit={enviarMensagem}
      sx={{
        bgcolor: cores.formularioFundo,
        border: `1px solid ${cores.formularioBorda}`,
        p: 4.5,
      }}
    >
      <Typography sx={{ fontSize: 26, fontWeight: 500 }}>DEIXE UMA MENSAGEM</Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        <TextField
          label="Seu nome"
          variant="standard"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          sx={estiloCampo}
        />
        <TextField
          label="Seu e-mail"
          type="email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={estiloCampo}
        />
        <TextField
          label="Sobre o que vamos conversar?"
          variant="standard"
          multiline
          minRows={3}
          value={assunto}
          onChange={(e) => setAssunto(e.target.value)}
          sx={estiloCampo}
        />
      </Box>

      <Button
        type="submit"
        fullWidth
        sx={{
          mt: 5,
          py: 2,
          borderRadius: 0,
          bgcolor: cores.botaoFundo,
          color: cores.botaoTexto,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "1px",
          "&:hover": { bgcolor: cores.textoForte },
        }}
      >
        ENVIAR MENSAGEM ↗
      </Button>

      <Typography sx={{ fontSize: 10, color: cores.textoFraco, mt: 2 }}>
        Prévia visual do formulário
      </Typography>
    </Box>
  );
}

// Seção de contato + rodapé do site
function Contato() {
  return (
    <Box id="contato" component="section" sx={{ px: { xs: 3, md: 8 } }}>
      <Box sx={{ height: "1px", bgcolor: cores.linha }} />

      <Box sx={{ pt: 5 }}>
        <Rotulo>03 / CONTATO</Rotulo>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 8,
          px: { md: 12 },
          py: { xs: 6, md: 12 },
          alignItems: "start",
        }}
      >
        {/* Lado esquerdo: chamada, e-mail e redes */}
        <Box>
          <Typography
            component="h2"
            sx={{ fontSize: 58, fontWeight: 600, letterSpacing: "-2px", lineHeight: "62px" }}
          >
            VAMOS
            <br />
            CONVERSAR.
          </Typography>

          <Typography sx={{ fontSize: 17, lineHeight: "27px", color: cores.textoMedio, mt: 5, maxWidth: 520 }}>
            Uma ideia, um projeto ou uma nova conexão.
            <br />
            Este é o espaço para começar.
          </Typography>

          <Box sx={{ mt: 8 }}>
            <Rotulo cor={cores.textoFraco}>E-MAIL</Rotulo>
            <Link
              href="mailto:eduardomariano.dev@gmail.com"
              underline="none"
              sx={{
                display: "block",
                fontSize: 19,
                color: cores.textoClaro,
                mt: 1.5,
                "&:hover": { color: cores.textoForte },
              }}
            >
              eduardomariano.dev@gmail.com
            </Link>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Rotulo cor={cores.textoFraco}>LINKS</Rotulo>
            <Box sx={{ mt: 2 }}>
              <RedesSociais mostrarNome />
            </Box>
          </Box>
        </Box>

        {/* Lado direito: formulário */}
        <Formulario />
      </Box>

      {/* Rodapé (no Figma não tem linha em cima dele) */}
      <Box
        component="footer"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 4 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: 30, fontWeight: 700, letterSpacing: "-2.5px" }}>EM</Typography>
          <Rotulo cor={cores.textoFraco} espacamento={1}>
            EDUARDO MARIANO / PORTFÓLIO
          </Rotulo>
        </Box>

        <Link href="#" underline="none" sx={{ color: cores.textoMedio, "&:hover": { color: cores.textoForte } }}>
          <Rotulo espacamento={0}>VOLTAR AO TOPO ↑</Rotulo>
        </Link>
      </Box>
    </Box>
  );
}

export default Contato;
