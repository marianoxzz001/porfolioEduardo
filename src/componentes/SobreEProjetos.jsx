import { Box, Typography } from "@mui/material";
import { cores } from "../tema";
import { fotos, habilidades, projetos } from "../dados";
import Rotulo from "./Rotulo";

// ---------- Uma foto (por enquanto, só um espaço reservado) ----------
function CartaoFoto({ foto }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: foto.destaque ? 284 : 244,
        height: foto.destaque ? 356 : 272,
        bgcolor: foto.destaque ? cores.fotoFundoDestaque : cores.fotoFundo,
        border: `1px solid ${cores.fotoBorda}`,
        display: { xs: foto.destaque ? "block" : "none", md: "block" }, // no celular, só a do meio
      }}
    >
      <Box sx={{ position: "absolute", top: 20, left: 22 }}>
        <Rotulo tamanho={12} espacamento={0}>
          {foto.numero}
        </Rotulo>
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Rotulo cor={cores.textoFraco} tamanho={11}>
          SUA FOTO AQUI
        </Rotulo>
      </Box>

      <Box sx={{ position: "absolute", bottom: 20, left: 22 }}>
        <Rotulo tamanho={9} espacamento={1}>
          {foto.legenda}
        </Rotulo>
      </Box>
    </Box>
  );
}

// ---------- Um card de projeto ----------
function CartaoProjeto({ projeto }) {
  return (
    <Box
      sx={{
        bgcolor: cores.cartao,
        border: `1px solid ${cores.cartaoBorda}`,
        height: 180,
        p: 2.75,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Número e "EM BREVE" */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: 11, color: cores.textoFraco }}>{projeto.numero}</Typography>
        <Typography sx={{ fontSize: 9, color: cores.textoFraco }}>EM BREVE</Typography>
      </Box>

      {/* Título, descrição e seta */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <Box>
          <Typography sx={{ fontSize: 25, fontWeight: 500 }}>{projeto.titulo}</Typography>
          <Typography sx={{ fontSize: 11, color: cores.textoFraco, mt: 1.25, whiteSpace: "pre" }}>
            {projeto.descricao}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 26, color: cores.textoClaro }}>↗</Typography>
      </Box>
    </Box>
  );
}

// ---------- Seção completa: fotos + sobre mim + habilidades + projetos ----------
function SobreEProjetos() {
  return (
    <Box
      id="sobre"
      component="section"
      sx={{ px: { xs: 3, md: 8 }, py: 5 }} // 64px nas laterais em telas grandes
    >
      {/* Linha de cima */}
      <Rotulo>02 / SOBRE & PROJETOS</Rotulo>

      {/* Três fotos lado a lado (a do meio é maior) */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3, mt: 6 }}>
        {fotos.map((foto) => (
          <CartaoFoto key={foto.numero} foto={foto} />
        ))}
      </Box>

      {/* Título grande */}
      <Typography
        component="h2"
        sx={{
          fontSize: "clamp(36px, 5vw, 62px)",
          fontWeight: 600,
          letterSpacing: "-2.5px",
          textAlign: "center",
          mt: 8,
        }}
      >
        ALÉM DO CÓDIGO.
      </Typography>

      {/* Sobre mim (esquerda) e habilidades (direita) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 8,
          mt: 6,
          px: { md: 12 }, // recuo de 100px nas laterais, como no design
        }}
      >
        <Box>
          <Rotulo>SOBRE MIM</Rotulo>
          <Typography sx={{ fontSize: 21, lineHeight: "32px", color: cores.textoClaro, mt: 4, maxWidth: 555 }}>
            Aqui entra a minha história: o que me move,
            <br />
            como comecei e o que quero construir.
          </Typography>
          <Typography sx={{ fontSize: 11, color: cores.textoFraco, mt: 1.5 }}>
            Texto de apresentação a personalizar.
          </Typography>
        </Box>

        <Box>
          <Rotulo>MINHAS HABILIDADES</Rotulo>
          <Box sx={{ mt: 4, borderTop: `1px solid ${cores.linha}` }}>
            {habilidades.map((habilidade) => (
              <Box
                key={habilidade.nome}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                  py: 1,
                  pr: "23px", // o texto da direita não encosta no fim da linha, como no Figma
                  borderBottom: `1px solid ${cores.linha}`,
                }}
              >
                <Typography sx={{ fontSize: 13, color: cores.textoClaro, whiteSpace: "nowrap" }}>
                  {habilidade.nome}
                </Typography>
                {/* textAlign right: se o texto for longo, ele quebra de linha alinhado à direita */}
                <Typography sx={{ fontSize: 11, color: cores.textoFraco, textAlign: "right" }}>
                  {habilidade.detalhe}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Divisor entre "sobre" e "projetos" */}
      <Box sx={{ height: "1px", bgcolor: cores.linha, mt: 10 }} />

      {/* Projetos */}
      <Box
        id="projetos"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 2,
          mt: 5,
        }}
      >
        <Typography component="h2" sx={{ fontSize: 34, fontWeight: 500, letterSpacing: "-1px" }}>
          PROJETOS SELECIONADOS
        </Typography>
        <Typography sx={{ fontSize: 10, color: cores.textoFraco, pb: 1 }}>
          UMA AMOSTRA DO QUE EU CONSTRUO
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
          mt: 4,
        }}
      >
        {projetos.map((projeto) => (
          <CartaoProjeto key={projeto.numero} projeto={projeto} />
        ))}
      </Box>

      <Typography sx={{ fontSize: 9, letterSpacing: "1.1px", color: cores.textoFraco, mt: 5 }}>
        ESTRUTURA INICIAL — FOTOS, TEXTOS E PROJETOS SERÃO PERSONALIZADOS.
      </Typography>
    </Box>
  );
}

export default SobreEProjetos;
