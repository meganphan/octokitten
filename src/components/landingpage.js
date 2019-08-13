import React, {Component} from 'react'
import {TitleComponent} from './title'
import {Form, Label, Row, Col} from 'reactstrap'
import Main from './main'
import Home from './home'
import Bio from './bio'
import LangChart from './charts/languages';
import ActivityChart from './charts/activity'


class LandingPage extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            name: null,
            url: null,
            avatar: null,
            bio: null,
            blog: null,
            repos: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUser(username){
        return fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(response => {
            return response;
        })
    }

   async handleSubmit(e){
        e.preventDefault();
        let user = await this.getUser(this.refs.username.value);
        if(user.message==='Not Found'){
            document.getElementById('errorMessage').innerHTML="Username Not Found";
        }
        else{
            document.getElementById('errorMessage').innerHTML="";
            document.getElementById('home').classList.add('hidden');
            document.getElementById('main').classList.remove('hidden');
        
            this.setState({
                username: user.login,
                name: user.name,
                url: user.html_url,
                avatar: user.avatar_url,
                bio: user.bio,
                blog: user.blog,
                repos: user.public_repos,
                followers: user.followers,
                following: user.following,
                location: user.location,
                joinDate: user.created_at
            })
        }
    }

    render(){
        const InputStyle={
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #1C2833',
            outline: 'none',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '20px',
            color: '#1C2833',
        }

        const Text={
            color:'#B7950B',
            fontFamily: 'Teko, sans-serif',
            letterSpacing: '0.1em',
            fontSize: '20px'
        }

        const languages = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };

        const activity = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };
                  
        return(
            <div style={{minHeight: '90vh'}}>
                <TitleComponent title={this.state.name} />
                <div align="center">
                    <Form onSubmit={e => this.handleSubmit(e)} style={{paddingTop: '2vh'}}>
                            <Label for="username" style={Text}>Enter Your GitHub Username</Label>
                            <input ref="username" type="text" name="username" id="username" style={InputStyle} ></input>  
                    </Form>
                    <span id="errorMessage" style={{
                        color: 'red'}}></span>
                    <Home />
                    <Main>
                        <Bio
                            avatar={this.state.avatar}
                            name={this.state.name}
                            username={this.state.username}
                            bio={this.state.bio}
                            url={this.state.url}
                            followers={this.state.followers}
                            following={this.state.following}
                            location={this.state.location}
                            joinDate={this.state.joinDate}/>
                            <Row className='mt-5'>
                                <Col md={6}>
                                    <LangChart data={languages} />
                                </Col>
                                <Col md={6}>
                                    <ActivityChart data={activity} />
                                </Col>
                            </Row>
                    </Main>
                </div>
            </div>
        )
    }
}


export default LandingPage