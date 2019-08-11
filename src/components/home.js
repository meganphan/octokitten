import React from 'react'
import Icon from './icon'

const Home = () => {
    return(
        <div id="home" style={{
            paddingTop: '25vh'
        }}>
            <Icon fill='#B7950B' />
            <h1 style={{
                fontFamily: 'Teko, san-serif',
                fontWeight: 'bold'
            }}>
                OctoKitten</h1>
            <h4 style={{
                color: '#1C2833',
                fontFamily: 'Nunito, san-serif'
            }}>
                GitHub Profile Visualization</h4>
            <p style={{fontFamily: 'Nunito, san-serif',
                fontSize: '15px'}}>
                View profile, repos, stats in an organized way</p>
        </div>
    )
}


export default Home