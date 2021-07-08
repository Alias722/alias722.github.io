import React from 'react'

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from './pages/homepage'
import NotFound from './pages/notfound'

import ListProject from './pages/listproject'
import Project from './pages/project'
import ListTutorial from './pages/listtutorial'
import Tutorial from './pages/tutorial'
import Post from './pages/post'

import Footer from './component/footer'
import Header from "./component/header";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter basename='/' forceRefresh={true}>
                <Header/>
                <div id="page-wrapper">
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route exact path={"/post/:id"} component={Post}/>
                        <Route exact path={"/tutorial"} component={ListTutorial}/>
                        <Route exact path={"/tutorial/:course/:lesson"} component={Tutorial}/>
                        <Route exact path={"/project"} component={ListProject}/>
                        <Route exact path={"/project/:id"} component={Project}/>
                        <Route path={"/:param"} component={NotFound}/>
                    </Switch>
                </div>
            </BrowserRouter>
            <Footer title={"關於我"} context={"以下是我的聯絡方式"}/>
        </React.Fragment>
    )
        ;
}

export default App;
