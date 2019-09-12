import {loadUsers, setUser, saveUser, createUserSuccess, updateUserSuccess} from "../redux/actions/fetchActions";
import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';
import LeaveForm from './LeaveForm';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';

const ManageLeavesPage = ({users, history, saveUser, ...props}) => {
    // console.log("ManageC... props", props);
    // console.log('users', users);
    // console.log('user', props.user);
    // console.log('slug', props.match.params.slug);

    const [_user, _setUser] = useState({...props.user});

    useEffect(() => {
        if (users.length === 0) {
            props.loadUsers();
            props.setUser({...props.user});
        } else {
            // props.setUser();
            _setUser({...props.user})
        }
    }, [props.user]);

    function handleChange(event) {
        const {name, value} = event.target;

        _setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }
    // console.log('user after handleChange', props.user);

    function handleSave(event) {
        // console.log({_user})
        event.preventDefault();
        saveUser(_user);
        toast.success('User saved.');
        history.push('/leaves');

        console.log(_user);
        console.log(props);


    }

    return (
        <div>
            <LeaveForm
                user={_user}
                onChange={handleChange}
                onSave={handleSave}
            />
            <div>{users.map(user => (
                <div>{user.name}</div>
            ))}</div>

        </div>
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
    // console.log('state user',{user})

    return {
        user,
        newUser: state.newUser,
        users: state.users,
        userSaveSuccess: state.userSaveSuccess,
        loading: state.loading
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
        createUserSuccess: (user) => {
            dispatch(createUserSuccess(user));
        },
        updateUserSuccess: (user) => {
            dispatch(updateUserSuccess(user));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(ManageLeavesPage);