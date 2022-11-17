import logo from './logo.svg';
import { GiphyFetch } from '@giphy/js-fetch-api'
import { Gif, Grid } from '@giphy/react-components'
import './App.css';
import { useState, useEffect } from 'react';
import { openings, tags } from './lib';
import Landing from './components/Landing';
import styled from 'styled-components';

const Generation = styled.section`
  min-height: 80vh;
  padding: 50px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fffcf2;
  @media screen and (min-width: 720px) {
    min-height: 70vh;
    padding: 50px 100px;
  }
`;
const Description = styled.p``;
const Cta = styled.button`
  border: solid 2px #fcbf49;
  padding: 10px 15px;
  background-color: #fcbf49;
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  width: 150px;
  display: inline-block;
  text-align: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Share = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  font-size: 12px;
`;

function App() {
  const [gifGenerated, setGifGenerated] = useState(null);
  const gf = new GiphyFetch(process.env.REACT_APP_GIF_KEY);
  const phrase = openings[Math.floor(Math.random() * tags.length)];

  const handleGenerateGIF = async (ev) => {
    if (gifGenerated) {
      setGifGenerated(null);
    }
    const tag = tags[Math.floor(Math.random() * tags.length)];
    const { data: gif } = await gf.random({ tag: tag, type: 'gifs', sort: 'relevant' });
    setGifGenerated(gif)
  }

  useEffect(() => {
    if (gifGenerated) {
      const script = document.createElement('script');

      script.src = "https://teams.microsoft.com/share/launcher.js";
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }
  }, [gifGenerated]);

  return (
    <div className="App">
      <Landing />
      <Generation>
        <div id="generation">
          <Description>
            Stai pensando che sia inutile? <strong>Vero.</strong> <br />
            Stai pensando che potevi andare direttamente su Giphy? <strong>Verissimo.</strong> <br />
            Ma qui la selezione delle possibilità non è del tutto causale. <br />
            <br />
            Prova finchè non trovi quella che rappresenta al meglio il tuo mood questa mattina. <strong>E DAI DAI DAI.</strong>
          </Description>
          <Cta onClick={handleGenerateGIF}>{gifGenerated ? 'Ancora' : 'Proviamo'}</Cta>
          {gifGenerated && <Wrapper>
            <Gif gif={gifGenerated} width={300} />
            <Share>
              <p>E ora spammala a chi vuoi!</p>
              <div
                className="teams-share-button"
                data-href={gifGenerated?.embed_url}
                data-msg-text={phrase}
              >
              </div>
            </Share>
          </Wrapper>}
        </div>
      </Generation>
      <Footer>
        Fatto con 💛 da Francesca Ropolo
      </Footer>
    </div>
  );
}

export default App;
