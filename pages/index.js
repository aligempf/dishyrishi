import { useState } from 'react';
import styledNormalize from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

const boxSizing = `/* Box Sizing https://bit.ly/1A91I0J */
    html {
      box-sizing: border-box;
      font-size: 100%;
    }

    body {
        background-image: Url("/bar.png");
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

const Logo = styled.img`
    max-width: ${({size}) => size || '100%'};
    max-height: ${({size}) => size || '100%'};
    transition: max-height 1s;
    transition: max-width 1s;
`;

const GridDiv = styled.div`
    display: grid;
    margin: 1rem;
    grid-template-columns: auto auto auto;
    max-width: 100vw;
    justify-items: center;
    align-content: center;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
`;

const ImageGrid = () => (
    <GridDiv>
        {Array.from(Array(9).keys()).map( value =>
            <img key={value} src={`/gallery_images/${value}.jpg`} style={{maxWidth:'100%'}} />
        )}
    </GridDiv>
);

const Home = () => {
    const [showingGallery, setShowingGallery] = useState(false);
    return (
        <>
            <GlobalStyles />
            <div
                style={{height: '100%', width: '100%', margin:0, padding:0}}
                onClick={() => setShowingGallery(true)}
            >
                <Logo size={showingGallery ? '20%' : '100%'} src="/dishyrishilogo.png" />
                {
                    showingGallery && <ImageGrid />
                }
            </div>
        </>
    );
};

export default Home;