import { useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import { cores } from "../tema";
import { fotos, habilidades, projetos } from "../dados";
import { textosFotos } from "../textosFotos";
import Rotulo from "./Rotulo";
import JanelaCrescendo from "./JanelaCrescendo";

// ---------- Uma foto (se não tiver imagem, mostra um espaço reservado) ----------
// Passando o mouse: a foto dá um zoom. Clicando: chama onAbrir, que abre o texto
// (a janela cresce a partir do ponto onde a foto está).
function CartaoFoto({ foto, onAbrir }) {
  return (
    <Box
      role="button"
      tabIndex={0}
      aria-label={`Ler o texto: ${foto.legenda}`}
      onClick={(evento) => onAbrir(evento.currentTarget)}
      onKeyDown={(evento) => {
        // Também funciona com o teclado (Enter ou Espaço)
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          onAbrir(evento.currentTarget);
        }
      }}
      sx={{
        cursor: "pointer",
        transition: "transform 0.35s ease, border-color 0.35s ease",
        "&:hover, &:focus-visible": {
          transform: "scale(1.07)", // o "zoomzinho": 1.07 = 7% maior. Mude aqui se quiser mais ou menos
          zIndex: 2, // fica por cima das fotos vizinhas
          borderColor: cores.textoMuitoFraco,
          outline: "none",
        },
        "@media (prefers-reduced-motion: reduce)": { transition: "none" },
        position: "relative",
        width: foto.destaque ? 284 : 244,
        maxWidth: "100%", // em tela pequena a foto nunca passa da largura da tela
        flexShrink: 1,
        minWidth: 0,
        height: foto.destaque ? 356 : 272,
        bgcolor: foto.destaque ? cores.fotoFundoDestaque : cores.fotoFundo,
        border: `1px solid ${cores.fotoBorda}`,
        display: { xs: foto.destaque ? "block" : "none", md: "block" }, // no celular, só a do meio
      }}
    >
      {/* Se tiver foto: ela preenche o quadrado inteiro */}
      {foto.imagem && (
        <>
          <Box
            component="img"
            src={foto.imagem}
            alt="Foto de Eduardo Mariano"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover", // preenche o quadrado sem esticar a foto
              objectPosition: "center 15%", // corta mais embaixo, para o rosto não ser cortado
            }}
          />

          {/* Sombra escura em cima e embaixo, para o número e a legenda continuarem legíveis */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(9, 9, 9, 0.65) 0%, transparent 22%, transparent 72%, rgba(9, 9, 9, 0.8) 100%)",
            }}
          />
        </>
      )}

      <Box sx={{ position: "absolute", top: 20, left: 22 }}>
        <Rotulo tamanho={12} espacamento={0}>
          {foto.numero}
        </Rotulo>
      </Box>

      {/* Se não tiver foto: mostra o texto "SUA FOTO AQUI" */}
      {!foto.imagem && (
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
      )}

      <Box sx={{ position: "absolute", bottom: 20, left: 22 }}>
        <Rotulo tamanho={9} espacamento={1}>
          {foto.legenda}
        </Rotulo>
      </Box>
    </Box>
  );
}

// ---------- Conteúdo da janela de uma foto: mostra o texto escrito em textosFotos.js ----------
function ConteudoDaFoto({ foto }) {
  const conteudo = textosFotos[foto.numero];

  return (
    <>
      {/* Foto no topo da janela (só se tiver imagem) */}
      {foto.imagem && (
        <Box
          component="img"
          src={foto.imagem}
          alt={foto.legenda}
          sx={{
            display: "block",
            width: "100%",
            height: { xs: 220, md: 300 },
            objectFit: "cover",
            objectPosition: "center 15%",
          }}
        />
      )}

      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Rotulo>
          {foto.numero} / {foto.legenda}
        </Rotulo>
        <Typography
          component="h3"
          sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 600, letterSpacing: "-1px", mt: 2 }}
        >
          {conteudo?.titulo || foto.legenda}
        </Typography>
        {/* pre-line: respeita os parágrafos que você escreveu em textosFotos.js */}
        <Typography
          sx={{ fontSize: 16, lineHeight: "26px", color: cores.textoClaro, mt: 3, whiteSpace: "pre-line" }}
        >
          {conteudo?.texto || "Texto em breve."}
        </Typography>
      </Box>
    </>
  );
}

// ---------- Conteúdo da janela de um projeto: screenshot grande + texto ----------
function ConteudoDoProjeto({ projeto }) {
  return (
    <>
      {projeto.imagem && (
        <Box
          component="img"
          src={projeto.imagem}
          alt={`Captura de tela do projeto ${projeto.titulo}`}
          sx={{ display: "block", width: "100%", height: "auto" }}
        />
      )}

      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Rotulo>{projeto.numero} / PROJETO</Rotulo>
        <Typography
          component="h3"
          sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 600, letterSpacing: "-1px", mt: 2 }}
        >
          {projeto.titulo}
        </Typography>
        <Typography sx={{ fontSize: 16, lineHeight: "26px", color: cores.textoClaro, mt: 3 }}>
          {projeto.detalhes}
        </Typography>

        {projeto.tecnologias && (
          <Box sx={{ mt: 3 }}>
            <Rotulo cor={cores.textoFraco}>TECNOLOGIAS</Rotulo>
            <Typography sx={{ fontSize: 14, color: cores.textoMedio, mt: 1 }}>
              {projeto.tecnologias}
            </Typography>
          </Box>
        )}

        {/* O botão só aparece quando existe um link em dados.js */}
        {projeto.link && (
          <Link
            href={projeto.link}
            target="_blank"
            rel="noreferrer"
            underline="none"
            sx={{
              display: "inline-block",
              mt: 4,
              px: 3,
              py: 1.5,
              bgcolor: cores.botaoFundo,
              color: cores.botaoTexto,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "1px",
              "&:hover": { bgcolor: cores.textoForte },
            }}
          >
            VER PROJETO ↗
          </Link>
        )}
      </Box>
    </>
  );
}

// ---------- Um card de projeto ----------
// Se o projeto tiver "detalhes", o card é clicável e abre a janela.
function CartaoProjeto({ projeto, onAbrir }) {
  const clicavel = Boolean(projeto.detalhes);

  // Só os cards clicáveis ganham o comportamento de botão
  const comportamentoDeBotao = clicavel
    ? {
        role: "button",
        tabIndex: 0,
        "aria-label": `Ver detalhes: ${projeto.titulo}`,
        onClick: (evento) => onAbrir(evento.currentTarget),
        onKeyDown: (evento) => {
          if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            onAbrir(evento.currentTarget);
          }
        },
      }
    : {};

  return (
    <Box
      {...comportamentoDeBotao}
      sx={{
        bgcolor: cores.cartao,
        border: `1px solid ${cores.cartaoBorda}`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        minWidth: 0,
        cursor: clicavel ? "pointer" : "default",
        transition: "border-color 0.35s ease",
        "&:hover, &:focus-visible": clicavel
          ? { borderColor: cores.textoMuitoFraco, outline: "none" }
          : {},
        // No hover, o screenshot dá um zoom leve dentro do card
        "&:hover img, &:focus-visible img": { transform: "scale(1.04)" },
        "@media (prefers-reduced-motion: reduce)": { transition: "none", "& img": { transition: "none" } },
      }}
    >
      {/* Área do screenshot (sem imagem, fica só um espaço escuro) */}
      <Box
        sx={{
          aspectRatio: "16 / 9",
          bgcolor: cores.fotoFundo,
          borderBottom: `1px solid ${cores.cartaoBorda}`,
          overflow: "hidden",
        }}
      >
        {projeto.imagem && (
          <Box
            component="img"
            src={projeto.imagem}
            alt={`Captura de tela do projeto ${projeto.titulo}`}
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              transition: "transform 0.5s ease",
            }}
          />
        )}
      </Box>

      <Box
        sx={{
          p: 2.75,
          flexGrow: 1,
          minHeight: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Número e selo */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 11, color: cores.textoFraco }}>{projeto.numero}</Typography>
          <Typography sx={{ fontSize: 9, color: cores.textoFraco }}>
            {projeto.emBreve ? "EM BREVE" : "VER DETALHES"}
          </Typography>
        </Box>

        {/* Título, descrição e seta */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 2 }}>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontSize: 22, fontWeight: 500, lineHeight: 1.25 }}>{projeto.titulo}</Typography>
            <Typography sx={{ fontSize: 11, lineHeight: 1.6, color: cores.textoFraco, mt: 1.25 }}>
              {projeto.descricao}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 26, color: cores.textoClaro }}>↗</Typography>
        </Box>
      </Box>
    </Box>
  );
}

// ---------- Seção completa: fotos + sobre mim + habilidades + projetos ----------
function SobreEProjetos() {
  // Qual janela está aberta: { tipo: "foto" ou "projeto", item: os dados clicados }
  // "janela" continua guardada depois de fechar, para o conteúdo não sumir durante a animação de saída.
  const [janela, setJanela] = useState(null);
  const [aberta, setAberta] = useState(false);
  // De onde a janela nasce (o centro do que foi clicado)
  const [origem, setOrigem] = useState("50% 50%");

  function abrir(tipo, item, elemento) {
    const caixa = elemento.getBoundingClientRect();
    setOrigem(`${caixa.left + caixa.width / 2}px ${caixa.top + caixa.height / 2}px`);
    setJanela({ tipo, item });
    setAberta(true);
  }

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
          <CartaoFoto key={foto.numero} foto={foto} onAbrir={(elemento) => abrir("foto", foto, elemento)} />
        ))}
      </Box>

      {/* A mesma janela serve para as fotos e para os projetos */}
      <JanelaCrescendo
        aberto={aberta}
        aoFechar={() => setAberta(false)}
        origem={origem}
        tamanho={janela?.tipo === "projeto" ? "md" : "sm"}
      >
        {janela?.tipo === "foto" && <ConteudoDaFoto foto={janela.item} />}
        {janela?.tipo === "projeto" && <ConteudoDoProjeto projeto={janela.item} />}
      </JanelaCrescendo>

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
          gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(2, minmax(0, 1fr))" },
          gap: { xs: 6, md: 8 },
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
          gridTemplateColumns: { xs: "minmax(0, 1fr)", md: "repeat(3, minmax(0, 1fr))" },
          gap: 4,
          mt: 4,
        }}
      >
        {projetos.map((projeto) => (
          <CartaoProjeto
            key={projeto.numero}
            projeto={projeto}
            onAbrir={(elemento) => abrir("projeto", projeto, elemento)}
          />
        ))}
      </Box>

      <Typography sx={{ fontSize: 9, letterSpacing: "1.1px", color: cores.textoFraco, mt: 5 }}>
        ESTRUTURA INICIAL — FOTOS, TEXTOS E PROJETOS SERÃO PERSONALIZADOS.
      </Typography>
    </Box>
  );
}

export default SobreEProjetos;