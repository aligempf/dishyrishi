import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const boxSizing = `/* Box Sizing https://bit.ly/1A91I0J */
    html {
      box-sizing: border-box;
      font-size: 100%;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }`;

const GlobalStyles = createGlobalStyle`
    ${styledNormalize}
    
    ${boxSizing}

    html{
      ${({ fonts }) => fonts || null}
    }
  `;

const Home = () => (
    <>
        <GlobalStyles />
        <div style={{backgroundImage: 'Url("/bar.png")', height: '100%', width: '100%', margin:0, padding:0}}>
            <img style={{maxWidth: '100vh', maxHeight: '100vw'}} src="/dishyrishilogo.png" />
        </div>
    </>
);

export default Home;