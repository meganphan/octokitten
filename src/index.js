import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import LandingPage from './components/landingpage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout'

class App extends Component {
    render(){
        return(
            <Layout>
                <LandingPage />
            </Layout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

