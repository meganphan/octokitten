import React from 'react'
import styled from '@emotion/styled'
import {Container,Row, Col} from 'reactstrap'


const Name = styled.h1`
    color: #1C2833;
    font-weight: bold;
    font-family: 'Teko', san-serif;
    font-size: 30px;
`
const Avatar= styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const Bio = (props) => {

    return(
        <Container>
            <Row>
                <Col md={6} align="center">
                    <Avatar src={props.avatar} />
                </Col>
                <Col md={6}>
                    <Name>{props.name}</Name>
                    <p>@{props.username}</p>
                    <p>{props.bio}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Bio