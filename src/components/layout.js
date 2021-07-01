import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './footer'


function layout(props) {
    return (
        <Container>
            {props.children}
            <Footer/>
        </Container>
    );
};

export default layout;

