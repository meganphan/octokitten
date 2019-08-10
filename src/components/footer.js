import React, {Component} from 'react'
import styled from '@emotion/styled'

const Link = styled.a`
,&:hover{
    text-decoration: none;
    color: #B7950B
    }
`

class Footer extends Component {
    render(){
        const links = [
            {
                name: 'GitHub API',
                link: 'https://github.com',
            },
            {
                name: 'React ChartJS',
                link: 'https://jerairrest.github.io/react-chartjs-2/',
            },
            {
                name: 'ReactStrap',
                link: '',
            }
        ]

        return(
            <footer style={{
                textAlign: 'center'
            }}>
                <ul>
                This project is built with
                {links.map(item => (
                    <li style={{
                        listStyleType: 'none',
                        display: 'inline'
                    }}><Link href={item.link} target="_blank"> {item.name} </Link>.</li>
                ))}
                </ul>
            </footer>
        )
    }
}

export default Footer