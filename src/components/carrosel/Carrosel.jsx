import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carrosel.css';

const eventos = [
  {
    ano: '16/07/2022',
    imagem: '/carrosel/img1.jpg',
    texto: 'Primeira mensagem, o começo de uma linda e longa história.',
  },
  {
    ano: 'agosto de 2022',
    imagem: '/carrosel/img3.jpeg',
    texto: 'Volta as aulas com vc indo de ver em todos intervalos e horário de almoço, acho q dava pra perceber q eu tava apaixonado kk.',
  },
  {
    ano: '2022-2023',
    imagem: '/carrosel/img2.jpg',
    texto: 'Primeiro réveillon juntos',
  },
  {
    ano: '2023',
    imagem: '/carrosel/img4.jpeg',
    texto: 'Primeira viagem juntos, um dos melhores finais de semana da minha vida ao seu lado.',
  },
  {
    ano: '2023',
    imagem: '/carrosel/img5.jpeg',
    texto: 'Primeiro dia dos namorados juntos',
  },
  {
    ano: 'Overcooked',
    imagem: '/carrosel/img6.jpeg',
    texto: 'Primeiro jogo finalizado com vc depois de muito estresse kkk.',
  },
  {
    ano: 'Orgulho',
    imagem: '/carrosel/img7.jpg',
    texto: 'Essa com certeza é uma das palavras que mais definem o que eu sinto por vc, tenho muito orgulho por todo o esforço que vc faz .',
  },
  {
    ano: 'Eu amo...',
    imagem: '/carrosel/img11.jpg',
    texto: 'Eu amo seu sorriso pq ele me faz sentir bem.',
  },
  {
    ano: '',
    imagem: '/carrosel/img8.jpg',
    texto: 'Eu amo o seu jeito de ser.',
  },
  {
    ano: '',
    imagem: '/carrosel/img10.jpeg',
    texto: 'Eu amo cuidar de vc.',
  },
  {
    ano: '',
    imagem: '/carrosel/img9.jpg',
    texto: 'Eu amo mimar de vc.',
  },
  {
    ano: '',
    imagem: '/carrosel/img13.jpg',
    texto: 'Eu amo passar meu tempo com vc.',
  },
  {
    ano: '',
    imagem: '/carrosel/img14.png',
    texto: 'Eu amo planejar meu futuro com vc contruindo nossa família.',
  },
  {
    ano: '',
    imagem: '/carrosel/img15.png',
    texto: 'Eu amo cada detalhe em vc e nesses 3 anos vc me conguistou um pouquinho mais a cada dia que se passava e com isso fez com que eu escolhesse vc para divider minha vida, eu te amo minha plincesa🤍.',
  },
];

function Carrosel() {
  return (
    <div className="timeline-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ clickable: true, prevEl: false, nextEl: false }}
        autoplay={{ delay: 50000 }}
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
