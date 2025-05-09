import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

import ImgCli from "../assets/venda.jpeg"
import ImgClie from "../assets/cliente1.jpeg"
import ImgCliee from "../assets/cliente2.jpeg"
import ImgNap from "../assets/cliente3.jpeg"
import ImgMap from "../assets/cliente4.jpeg"
import ImgMo from "../assets/venda5.jpeg"
import ImgTo from "../assets/venda6.jpeg"
import ImgTa from "../assets/venda7.jpeg"
import ImgTi from "../assets/venda8.jpeg"

const client = [
  {
    id: 1,
    description: "",
    imagem: ImgCli,
  },
  {
    id: 2,
    description: "",
    imagem: ImgClie,
  },
  {
    id: 3,
    description: "",
    imagem: ImgCliee,
  },
  {
    id: 4,
    description: "",
    imagem: ImgNap,
  },
  {
    id: 5,
    description: "",
    imagem: ImgMap,
  },
  {
    id: 6,
    description: "",
    imagem: ImgTo,
  },
  {
    id: 7,
    description: "",
    imagem: ImgMo ,
  },
  {
    id: 8,
    description: "",
    imagem: ImgTa,
  },
  {
    id: 9,
    description: "",
    imagem: ImgTi,
  },
]


const Enterprise = () => {
  return (
    <div className='enter-container'>
      <h1>A FL VEÍCULOS NASCEU PARA REALIZAR SONHOS.</h1>
      <p>No mercado a cerca de um ano, já estamos transformando vidas na nossa região, ajudando cada cliente a conquistar sua tão sonhada moto. Aqui, mais do que vender veículos, oferecemos confiança, atendimento de qualidade e condições que cabem no seu bolso.
Estamos crescendo rápido, e isso é resultado da nossa dedicação e do compromisso com quem acredita na liberdade sobre duas rodas.
Na FL Veículos, seu sonho acelera com a gente!</p>
<div className="cards">
          {client.map((client, index) => (
            <div className="card" key={index}>
              <img src={client.imagem} alt={client.description} />
            </div>
          ))}
        </div>
        <a href="https://wa.me/message/7NSFUX4IFYWRB1" className="whatsapp-btn">
                      <FaWhatsapp />
              </a>
      </div>
   
  )
}

export default Enterprise