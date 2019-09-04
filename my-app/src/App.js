import React from 'react';
import {Route, Switch} from "react-router-dom";
import LeavesList from './components/LeavesList';
import ManageLeavesPage from './components/ManageLeavesPage';
import HomePage2 from './components/HomePage2';
import Header from './components/common/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className={'container-fluid'}>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage2}/>
                <Route path={'/leaves'} component={LeavesList}/>
                <Route path={'/user/:slug'} component={ManageLeavesPage}/>
                <Route path={'/user'} component={ManageLeavesPage}/>
            </Switch>
            <ToastContainer autoClose={3000} hideProgressBar/>
        </div>
    )
}

export default App;