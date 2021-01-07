import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Alert from './components/Alert';
import AlerState from './context/alert/AlerState';
import GithubState from './context/github/GithubState';

function App() {
    return (
        <GithubState>
            <AlerState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert alert={{text: 'Test alert'}}/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/profile/:name" component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlerState>
        </GithubState>

    );
};

export default App;
