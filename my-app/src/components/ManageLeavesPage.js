import {MDBBtn, MDBContainer} from "mdbreact";
import {Redirect} from "react-router";
import {loadUsers, setUser, saveUser, createUserSuccess, updateUserSuccess, saveUserSuccess} from "../redux/actions/fetchActions";
import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import LeaveForm from './LeaveForm';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';

const ManageLeavesPage = ({users, history, saveUser, ...props}) => {
    console.log(props);
    console.log('user', props.user);
    const [_user, _setUser] = useState({...props.user});
    const [userId, setUserId] = useState({...props.user.id});

    useEffect(() => {
        // console.log('useEffect');
        if (users.length === 0) {
            console.log('users length');
            props.loadUsers();
            props.setUser({...props.user});
        } else {
            // props.setUser();
            _setUser({...props.user});
            setUserId({...props.user.id})
        }
    }, [props.user]);

    function handleChange(event) {
        const {name, value} = event.target;

        _setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }

    function handleSave(event) {
        // console.log({_user})
        event.preventDefault();
        saveUser(_user);
   }
    if(props.userSaveSuccess) {
        toast.success('User saved.');
        history.push('/leaves');
        props.saveUserSuccess();
    }


    return (
        <>

            <MDBContainer>
                <LeaveForm
                    user={_user}
                    onChange={handleChange}
                    onSave={handleSave}
                />
            </MDBContainer>
        </>
    )

};

ManageLeavesPage.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    loadUsers: PropTypes.func.isRequired,
    saveUser: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

function getLeaveBySlug(users, slug) {
    return users.find(user => user.email === slug) || null
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
        userSaveSuccess: state.userSaveSuccess,
        loading: state.loading,
        posts: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers());
        },
        setUser: (user) => {
            dispatch(setUser(user));
        },
        saveUser: (user) => {
            dispatch(saveUser(user));
        },
        saveUserSuccess: () => {
            dispatch(saveUserSuccess());
        },
        createUserSuccess: (user) => {
            dispatch(createUserSuccess(user));
        },
        updateUserSuccess: (user) => {
            dispatch(updateUserSuccess(user));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLeavesPage);