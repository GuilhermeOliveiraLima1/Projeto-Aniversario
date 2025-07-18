import { useEffect, useState } from "react";
import Header from "../../components/header/Header"
import BottomMenu from "../../components/menu/Menu";
import './Home.css'

function Home() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const startDate = new Date('2022-08-10T00:00:00'); // sua data
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = now - startDate;

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);

      setTime({ days, hours, minutes, seconds });
    };

    updateTime(); // inicializa imediatamente
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div >
      <Header />
      <div className="content">
        <div className="timer">
        
          Namorados desde 10/08/2022 ou se preferir há: <br />
          <strong>{time.days}</strong> dias,{' '}
          <strong>{time.hours}</strong> horas,{' '}
          <strong>{time.minutes}</strong> minutos e{' '}
          <strong>{time.seconds}</strong> segundos 🤍
        </div>  
        <p className="text">Eu venho me perguntando a um tempo o que eu fiz pra merecer alguém como você, uma pessoa que me ajuda nos meus momentos difíceis,
           torna meus dias melhores você é a pessoa mais incrível que já apareceu na minha vida, poderia dizer mais diversas qualidades suas agora 
           mas vou deixar para falar daqui a pouco eu te amo, enfim eu estou fazendo isso como forma de demonstrar
           e agradecer o quanto eu te amo só que do meu jeitinho nerd, como você mesma fala que eu sou kkk espero que goste🤍.</p>
           

        <p className="assinatura">-com muito amor do seu plincipe encantado </p>
    
    
      </div>
    <BottomMenu />
    </div>
  );  
}

export default Home
