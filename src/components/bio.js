import React from 'react'
import styled from '@emotion/styled'
import {Container,Row, Col, Button} from 'reactstrap'

const Url = styled.a`
    ,&:hover{
    text-decoration: none;
    color: white
    }
`
const Name = styled.h1`
    color: #1C2833;
    font-weight: bold;
    font-family: 'Teko', san-serif;
    font-size: 40px;
`
const Avatar= styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const Bio = (props) => {
    return(
        <Container className="mt-5">
            <Row>
                <Col md={6} align="center">
                    <Avatar src={props.avatar} />
                </Col>
                <Col md={6} align="center">
                    <Name>{props.name}</Name>
                    <div style={{color: '#B7950B'}}>
                        <p>@{props.username}</p>
                        <p>{props.bio}</p>
                        <Button size="sm" color="success"><Url href={props.url} target="_/blank">View Profile</Url></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Bio