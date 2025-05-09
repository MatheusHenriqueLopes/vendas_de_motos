import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

import ImgFan from "../assets/fan1.png"
import ImgAfri from "../assets/africa.png"
import TwiTer from "../assets/twister.png"
import FazEr from "../assets/fazer2.png"

const motos = [
  {
    ano: '2021',
    modelo: 'Honda CG FAN',
    preco: '15.000',
    imagem: ImgFan,
  },
  {
    ano: '2023',
    modelo: 'Yamaha MT-07',
    preco: '42.500,00',
    imagem: ImgAfri,
  },
  {
    ano: '2024',
    modelo: 'Twister 300F',
    preco: '28.900',
    imagem: TwiTer,
  },
  {
    ano: '2023',
    modelo: 'Fazer 250',
    preco: '20.900',
    imagem: FazEr,
  },
 
];

const handleCardClick = (moto) => {
  const numero = '5512991877584';
  const mensagem = `Olá! Tenho interesse na ${moto.modelo} ${moto.ano}, disponível por R$ ${moto.preco}.`
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

const Home = () => {
  const [] = useState({})
  const navigate = useNavigate

  const handleNavigate = () => {
    navigate('')
  }
  return (
    <div className="home-container">
      <div className="social-icons">
        <a href="https://www.facebook.com/groups/594208200965101/user/100008827092827/"><FaFacebookF /></a>
        <a href="https://www.instagram.com/flveiculos71/"><FaInstagram /></a>
      </div>
      <section className="lojas">
        <div className="loja-box ativa"  onClick={() => window.open("https://www.google.com/maps?q=Av.+Sete+de+Setembro,+1314,+Lorena,+SP", "_blank")}>
          <FaMapMarkerAlt className='icone' />
          <span>FL VEÍCULOS - LORENA/SP</span>
          <p className='ender'> Av. Sete de Setembro, 1314</p>
        </div>
      </section>
      <section className="destaques">
        <h2>MOTOS EM DESTAQUE</h2>
        <div className="cards">
          {motos.map((moto, index) => (
            <div className="card" key={index} onClick={() => handleCardClick(moto)}>              
              <img src={moto.imagem} alt={moto.modelo} />
              <p>
                <strong>{moto.ano} {moto.modelo}</strong><br />
                {moto.tipo}
              </p>
              <p className="preco">R$ {moto.preco}</p>
            </div>
          ))}
        </div>
      </section>
      <a href="https://wa.me/message/7NSFUX4IFYWRB1" className="whatsapp-btn">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Home;
