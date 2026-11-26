import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import bonecoGif from "../assets/boneco-andando.gif";

// Tamanho do boneco na tela (em pixels). O GIF original é 384 x 512, por isso a proporção 3:4.
const LARGURA_DO_BONECO = 45;
const ALTURA_DO_BONECO = 60;

// Quantos pixels ele anda a cada passo, e de quanto em quanto tempo (em milissegundos).
// 1px a cada 20ms dá uns 50px por segundo. Para ele andar mais devagar ou mais rápido, mude aqui.
const PIXELS_POR_PASSO = 1;
const TEMPO_DE_CADA_PASSO = 20;

// Boneco que anda de um lado ao outro do header.
// Quando bate na parede, ele volta e o desenho é espelhado (vira para o outro lado).
function BonecoAndando() {
  // x = distância do boneco até a borda esquerda do header
  // indoParaDireita = true quando ele anda para a direita, false quando anda para a esquerda
  const [boneco, setBoneco] = useState({ x: 0, indoParaDireita: true });

  // Dá um passo. É chamada várias vezes por segundo.
  function andar() {
    setBoneco((atual) => {
      // O fim do header é a largura da tela menos a largura do boneco
      const limiteDireito = document.documentElement.clientWidth - LARGURA_DO_BONECO;

      let x = atual.x + (atual.indoParaDireita ? PIXELS_POR_PASSO : -PIXELS_POR_PASSO);
      let indoParaDireita = atual.indoParaDireita;

      // Bateu na parede da direita: volta para a esquerda
      if (x >= limiteDireito) {
        x = limiteDireito;
        indoParaDireita = false;
      }

      // Bateu na parede da esquerda: volta para a direita
      if (x <= 0) {
        x = 0;
        indoParaDireita = true;
      }

      return { x, indoParaDireita };
    });
  }

  // Liga um relógio que chama andar() o tempo todo.
  // O return desliga o relógio quando o componente sai da tela.
  useEffect(() => {
    const relogio = setInterval(andar, TEMPO_DE_CADA_PASSO);
    return () => clearInterval(relogio);
  }, []);

  // O desenho original do GIF olha para a ESQUERDA.
  // scaleX(1) deixa o desenho normal (olhando para a esquerda).
  // scaleX(-1) espelha o desenho (olhando para a direita).
  const espelho = boneco.indoParaDireita ? -1 : 1;

  return (
    <Box
      component="img"
      src={bonecoGif}
      alt=""
      sx={{
        position: "absolute",
        left: 0,
        bottom: -5, // o desenho tem um espacinho vazio embaixo; isso apoia os pés na linha do header
        width: LARGURA_DO_BONECO,
        height: ALTURA_DO_BONECO,
        filter: "drop-shadow(0 0 1px rgba(255, 255, 255, 0.35))", // contorno claro, porque a roupa é escura
        transform: `translateX(${boneco.x}px) scaleX(${espelho})`,
        pointerEvents: "none", // o boneco não atrapalha os cliques
      }}
    />
  );
}

export default BonecoAndando;
