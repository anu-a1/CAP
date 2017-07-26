import React, { Component } from 'react';
import '../stylesheets/app.css';

import {Header} from '../components/Header';
import Home from '../components/Home';





class App extends Component {
    render() {
        return (

            <div className="app container-fluid" >
                <div className = "app__content">
                    <div><Header/></div>
                    <div id="home"><Home/></div>
                    <div id="footer"></div>

                    {/*<div id="header" className="app__header">*/}
                     {/*<Header menuItems={this.constructor.menuItems}/>*/}
                     {/*<p>text </p>*/}
                     {/*</div>*/}


                </div>
            </div>
            /*<Router history="" >
                <div className = "app">
                    <div id="header" className="app__header">
                        <Header menuItems={this.constructor.menuItems}/>
                    </div>
                    <div id="home">
                        <Home></Home>

{/!*                        <div id="Router" className="app__content container-fluid" >
                            <Route path="/FIG" component={Fig}/>
                            <Route path = "/FCF" component={NoMatch}/>
                        </div>*!/}
                    </div>
                </div>
            </Router>*/
        );
    }
}

export default App;
