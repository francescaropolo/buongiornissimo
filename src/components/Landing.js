import React from 'react';
import PropTypes from 'prop-types';
import monica from '../assets/monica.gif'
import ross from '../assets/ross.gif'
import michaelscott from '../assets/michaelscott.gif'
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.section`
    height: 90vh;
    padding: 50px 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fffcf2;
    flex-direction: column-reverse;
    @media screen and (min-width: 720px) {
        height: 80vh;
        padding: 50px 100px;
        flex-direction: row;
        justify-content: space-between;
    }
    @media screen and (min-width: 1440px) {
        justify-content: space-around;
    }
`;
const Title = styled.h1`
    font-size: 4rem;
    text-align: left;
    margin: 0;
    color: #333;

    @media screen and (min-width: 800px) {
        font-size: 7rem;
    }
`;
const Subtitle = styled.p`
    margin-top: 10px;
    text-align: left;
    color: #333;
    
    @media screen and (min-width: 720px) {
       width: 400px;
    }
`;
const CtaContainer = styled.div`
    text-align: center;
    margin-top: 30px;

    @media screen and (min-width: 720px) {
       text-align: left;
    }
`;
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
`;
const FakeCta = styled(Cta)`
    background-color: transparent;
    color: #fcbf49;
    margin-left: 20px;
`;
const ImgContainer = styled.div`
    width: 100%;
`;
const Img = styled.img`
    // width: 450px;
    max-width: 100%;
    display: ${props => props.show ? 'inline' : 'none' };
`;
const Landing = props => {
    const [badPerson, setBadPerson] = useState(false);
    const handleBadPerson = ev => {
        // ev.stopPropagation();
        setBadPerson(true);
        setTimeout(() => setBadPerson(false), 4000);
        // alert('Not funny')
    }
    const handleGoToGeneration = ev => {
        document.querySelector('#generation').scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <Container>
            <div>
                <Title>
                    Buon <br/>
                    giorn <br/>
                    issimo!
                </Title>
                <Subtitle>Un sito non richiesto per generare GIF di buongiornissimo da condividere su Teams.</Subtitle>
                <CtaContainer>
                    <Cta onClick={handleGoToGeneration}>Daje</Cta>
                    <FakeCta onClick={handleBadPerson}>Buuuu</FakeCta>
                </CtaContainer>
            </div>
            <div>
                <ImgContainer>
                    <Img src={monica} alt="Interesting" show={!badPerson}/>
                    <Img src={michaelscott} alt="Not funny" show={badPerson}/>
                </ImgContainer>
            </div>
        </Container>
    );
};

Landing.propTypes = {
    
};

export default Landing;