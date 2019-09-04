import {getUsers} from "../redux/actions/fetchActions";
import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import LeaveForm from './LeaveForm';
import {toast} from 'react-toastify';

const ManageLeavesPage = ({users, user, ...props}) => {
    console.log("ManageC... props", props);


    return (
        <div>
            Leave Management App
            <LeaveForm user={user} />
        </div>
    )

};

const mapStateToProps = state => {
    console.log("state", state);
    return {
        users: state.user.users,
        user: state.user.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsers());
        },

    }

};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLeavesPage);