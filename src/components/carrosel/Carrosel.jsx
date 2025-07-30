import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carrosel.css';

const eventos = [
  {
    ano: '16/07/2022',
    imagem: '/carrosel/img1.jpeg',
    texto: 'Primeira mensagem, o começo de uma historia longa e linda',
  },
  {
    ano: '2012',
    imagem: '/imagens/exemplo2.jpeg',
    texto: 'Em 2012, houve crescimento e novas experiências inesquecíveis.',
  },
  {
    ano: '2013',
    imagem: '/imagens/exemplo3.png',
    texto: 'O ano de 2013 trouxe momentos únicos e memoráveis.',
  },
];

function Carrosel() {
  return (
    <div className="timeline-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop
      >
        {eventos.map((evento, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={evento.imagem} alt={`Evento ${evento.ano}`} />
              <div className="ano">{evento.ano}</div>
              <p className="descricao">{evento.texto}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrosel;
