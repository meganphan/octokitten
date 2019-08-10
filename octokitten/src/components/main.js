import React, {Component} from 'react'
import {TitleComponent} from './title'
import {Form, Label} from 'reactstrap'
import Bio from './bio'

class Main extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
        }
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
            this.setState({
                username: user.login,
                name: user.name,
                avatar: user.avatar_url,
                bio: user.bio,
                blog: user.blog,
            })
            console.log(user);
            document.getElementById('main').classList.remove('hidden');
            document.getElementById('errorMessage').innerHTML="";
        }
    }

    render(){
        const MainStyle={
            padding: '10px'
        }
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

        return(
            <div>
                <TitleComponent title={this.state.name} />
                <div align="center">
                    <Form onSubmit={e => this.handleSubmit(e)}>
                            <Label for="username" sm={2} style={Text}>Enter Your GitHub Username </Label>
                            <input ref="username" type="text" name="username" id="username" style={InputStyle}></input>
                    </Form>
                    <span id="errorMessage" style={{
                        color: 'red'
                    }}></span>
                </div>
                <div id="main" className="hidden" style={MainStyle}>
                        <Bio name={this.state.name}
                            username={this.state.username}
                            avatar={this.state.avatar}
                            bio={this.state.bio}></Bio>
                       
                </div>
            </div>
        )
    }
}

export default Main