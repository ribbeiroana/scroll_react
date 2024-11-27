import { useLayoutEffect, useRef } from 'react'
import './App.css'
import relogioPretoImg from './assets/relogio-preto.svg'
import relogioRoseImg from './assets/relogio-rose.svg'
import relogioUltraImg from './assets/relogio-ultra.svg'
import relogio2 from './assets/relogio2.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {

  // Refs para os elementos e animações
  const el = useRef();
  const tl = useRef();

  // Efeito para rodar a animação quando o componente é montado
  useLayoutEffect(() => {

    // Registra o plugin ScrollTrigger do GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animação do relógio: posiciona e aplica opacidade ao elemento .relogio no scroll
    gsap.to(".relogio", {
      x: 0, // Move o relógio para a posição inicial (x)
      opacity: 1, // Torna o relógio visível
      rotate: "0deg", // Gira o relógio para 0 graus
      scrollTrigger: {
        trigger: ".items", // O elemento que ativa a animação ao ser visível
        markers: true, // Ativa os marcadores para debug da animação
        start: "top 520px", // A animação começa quando o topo de .items atinge 520px na tela
        end: "bottom 600px", // A animação termina quando o fundo de .items atinge 600px na tela
        scrub: true, // A animação é sincronizada com o movimento do scroll
      }
    })

    // Limpeza da animação quando o componente é desmontado
    return () => {
      gsap.killTweensOf(".relogio")
    }
  }, [])

  // Efeito para rodar a segunda animação com os modelos de relógio
  useLayoutEffect(() => {

    // Registra novamente o ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    // Cria um escopo para as animações específicas dentro de el (models-container)
    const ctx = gsap.context(() => {
      // Define uma timeline de animações
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".models-item", // O elemento que ativa a animação quando está visível
          scrub: true, // Sincroniza a animação com o scroll
          markers: true, // Exibe marcadores de início e fim da animação
          start: "top 800px", // A animação começa quando o topo do item entra em 800px da tela
          end: "bottom 900px", // A animação termina quando o fundo do item entra em 900px da tela
        }
      })
      // Animações dos modelos de relógio: opacidade e movimento no eixo Y
      .fromTo("#model-1", { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
      .fromTo("#model-2", { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
      .fromTo("#model-3", { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
    }, el) // Aplica o escopo ao container dos modelos

    // Limpeza da animação quando o componente é desmontado
    return () => {
      gsap.killTweensOf(".models-item")
    }

  }, [])

  return (
    <div className="container">
      <div className="area-model">
        <h1>ITEM 1</h1>
      </div>
      <div className="area-model">
        <h1>ITEM 2</h1>
      </div>

      <section className="items">
        <div className="items-content">
          {/* Imagem do relógio que será animado */}
          <img className="relogio" src={relogio2} alt="Relogio AppleWatch" />
        </div>
      </section>

      <section className="models-container">
        <h2 className="title">Qual é o Apple Watch ideal para você?</h2>

        <div className="models-content" ref={el}>
          {/* Modelos de relógios que vão ser animados ao rolar */}
          <div className="models-item" id="model-1">
            <img src={relogioPretoImg} alt="Relogio Preto" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch Series 8</h4>
            <p className="models-description">A partir de <strong>R$ 5.299</strong></p>
          </div>

          <div className="models-item" id="model-2">
            <img src={relogioRoseImg} alt="Relogio Rose" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch SE</h4>
            <p className="models-description">A partir de <strong>R$ 3.399</strong></p>
          </div>

          <div className="models-item" id="model-3">
            <img src={relogioUltraImg} alt="Relogio Ultra" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch Ultra</h4>
            <p className="models-description">A partir de <strong>R$ 10.299</strong></p>
          </div>
        </div>

      </section>

      <div className="area-model">
        <h1>ITEM 3</h1>
      </div>
      
      <div className="area-model">
        <h1>ITEM 4</h1>
      </div>
    </div>
  )
}

export default App
