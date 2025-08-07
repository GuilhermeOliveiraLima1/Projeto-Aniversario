import React from 'react'
import BottomMenu from '../../components/menu/Menu'
import Header from '../../components/header/Header'
import './Songs.css'

export default function Songs() {
  return (
    <div>
      <Header />
      <div className="content">
        <div>
          <p>Depois de te conhecer, todas as musicas de amor me lembram você, mas essas são especiais de um jeito diferente, cada uma me lembra de uma coisinha difernte em vc.</p>
        </div>


        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/7xVSNhAUQhUIpwfR6lTOwA?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>Nunca vou esquecer dessa música a primeira música que vc dedicou a mim.</p>
        </div>

        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/6TYPGKaUJrmGCewrOk9gTw?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Querida eu não consigo com palavras dizer o que sinto por você mas é mais do que eu posso menos do que eu queria..." Não existem palavras que possam definir o meu amor por você.</p>
        </div>

        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/0wZZRJNv6bwSjAHVRf97ND?utm_source=generator"          
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Tudo em volta tem um pouco do pouco que eu tenho de ti no meu quarto, teu cheiro, tu esqueceu aqui..." te carrego pra onde eu for dentro do meu coração.</p>
        </div>

        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/1l35fhxjWXsjmknWdsB3tw?utm_source=generator"          
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Em meio às galáxias do mundo universo encontrei em Marte a musa do amor..."você é a minha musa.</p>
        </div>


        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/1PQRwFvNM7xV65bIkHmDtx?utm_source=generator"          
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Eu quero partilhar a vida boa com você..." nem precisa de explicação né kkk.</p>
        </div>

        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/2mlsK27VNUj8y08BvtIbXu?utm_source=generator"          
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Saudades, pontos de exclamação, você está maravilhosa..." Saudades, uma das palavras que a gente mais fala um pro outro sonhando no dia de morar juntos para não usa-lá tanto.</p>
        </div>

        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/6ZUArSVO6hPj6e27tD3OyT?utm_source=generator"          
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Eu curto o seu cabelo, curto do jeitin que tá e quando cê arruma ele só pra eu bagunçar coisa louca...Quero estar com você sem tempo contado vê se não demora que eu tô louco pra te ver..." Amo o seu cabelo e a sua companhia.</p>
        </div>

        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/624ra5mDiibqvFYDK4yhmo?utm_source=generator"          
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Complicada e perfeitinha você me apareceu era tudo o que eu queria estrela da sorte..." você aparaceu na minha vida com seus jeitinho e me conquistou.</p>
        </div>

        <div className='music'>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/6Vfcu5p7cPcoVImKJ4gBhI?utm_source=generator"          
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <p>"Seu cabelo me alucina sua boca me devora sua voz me ilumina seu olhar me apavora..." Tudo em vc é maravilhoso.</p>
        </div>




      </div>
      <BottomMenu />
    </div>
  )
}
