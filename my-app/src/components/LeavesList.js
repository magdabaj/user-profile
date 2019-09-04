import ManageLeavesPage from "./ManageLeavesPage";
import React, {useState, useEffect} from 'react';
import LeavesListChild from './LeavesListChild';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsers} from '../redux/actions/fetchActions';
import PropTypes from 'prop-types';

class LeavesList extends React.Component {
    state = {
        redirectToAddLeavePage: false
    };

    componentDidMount() {
        if(this.props.users.length === 0) {
            this.props.getUsers();
        }
    }

    render () {
        console.log("users", this.props.users);
        console.log(this.props);
        //don't do that
        //this.props.getUsers();
        const {users} = this.props;

        return (
            <div>
                {this.state.redirectToAddLeavePage && <Redirect to={'/user'}/>}
                <button
                    style={{marginBottom: 20}}
                    className={'btn btn-primary'}
                    onClick={() => this.setState({redirectToAddLeavePage: true})}
                >
                    Add Course
                </button>
                <LeavesListChild users={this.props.users}/>

            </div>
        )
    }
};

const mapStateToProps = state => {
    console.log("state", state);
    return {
        users: state.user.users
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        },

    }

};

LeavesList.propTypes = {
    users: PropTypes.array.isRequired
}

export default connect (mapStateToProps, mapDispatchToProps)(LeavesList);
