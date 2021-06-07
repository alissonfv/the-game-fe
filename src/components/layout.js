import React from 'react';
import Container from 'react-bootstrap/Container';


function layout(props) {
    return (<Container>{props.children}</Container>);
};

export default layout;

