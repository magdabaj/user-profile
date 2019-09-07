import {loadUsers, setUser} from "../redux/actions/fetchActions";
import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import LeaveForm from './LeaveForm';
import {toast} from 'react-toastify';

const ManageLeavesPage = ({users, ...props}) => {
    console.log("ManageC... props", props);
    console.log('users', users);
    console.log('user', props.user);
    const [user, _setUser] = useState({...props.user});

    useEffect(() => {
        if (users.length === 0) {
            props.loadUsers();
            props.setUser();
        } else {
            // props.setUser();
            _setUser({...props.user})
        }
    }, [props.user]);
    function handleChange(event) {

    }


    return (
        <div>
            <LeaveForm
                user={props.user}
                onChange={handleChange}
            />
        </div>
    )

};

function getLeaveBySlug(users, slug) {
    return users.find(user => user.login.md5 === slug) || null
}

const mapStateToProps = (state, ownProps) => {
    console.log("state", state);
    const slug = ownProps.match.params.slug;
    const user =
        slug && state.users.length > 0
            ? getLeaveBySlug(state.users, slug)
            : state.newUser;
    return {
        user,
        newUser: state.newUser,
        users: state.users,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers());
        },
        setUser: () => {
            dispatch(setUser());
        },

    }

};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLeavesPage);