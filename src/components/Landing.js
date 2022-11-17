import React from 'react';
import PropTypes from 'prop-types';
import monica from '../assets/monica.gif'
import ross from '../assets/ross.gif'
import michaelscott from '../assets/michaelscott.gif'
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.section`
    height: 80vh;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffcf2;
`;
const Title = styled.h1`
    font-size: 7rem;
    text-align: left;
    margin: 0;
    color: #333;
`;
const Subtitle = styled.p`
    margin-top: 10px;
    text-align: left;
    color: #333;
    width: 400px;
`;
const CtaContainer = styled.div`
    text-align: left;
    margin-top: 30px;
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
const Img = styled.img`
    // width: 450px;
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
                <Img src={monica} alt="Interesting" show={!badPerson}/>
                <Img src={michaelscott} alt="Not funny" show={badPerson}/>
            </div>
        </Container>
    );
};

Landing.propTypes = {
    
};

export default Landing;