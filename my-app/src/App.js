import {MDBContainer} from "mdbreact";
import PostsContainer from "./components/PostsContainer";
import React from 'react';
import {Route, Switch} from "react-router-dom";
import LeavesList from './components/LeavesList';
import ManageLeavesPage from './components/ManageLeavesPage';
import HomePage2 from './components/HomePage2';
import Header from './components/common/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from './redux/store';

function App() {
    console.log('store', store.getState());
    return (
        <MDBContainer fluid style={{maxWidth: 1200}}>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage2}/>
                <Route path={'/leaves'} component={LeavesList}/>
                <Route path={'/posts/:slug'} component={PostsContainer}/>
                <Route path={'/user/:slug'} component={ManageLeavesPage}/>
                <Route path={'/user'} component={ManageLeavesPage}/>
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar/>
        </MDBContainer>
    )
}

export default App;