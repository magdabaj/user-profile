import {MDBBtn, MDBContainer} from "mdbreact";
import styled from "styled-components";
import Spinner from "./common/Spinner";
import React from 'react';
import LeavesListChild from './LeavesListChild';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadUsers, setUser, deleteUser} from '../redux/actions/fetchActions';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';

const Header = styled.div`
    text-align: center;
      margin: 0 1em;
  padding: 0.25em 1em;
`;

const buttonStyle = {
    borderRadius: '50px',
    margin: 20
};

class LeavesList extends React.Component {
    state = {
        redirectToAddLeavePage: false,
        seePosts: false
    };

    componentDidMount() {
        if(this.props.users.length === 0) {
            this.props.loadUsers();
            this.props.setUser(this.props.user);
            console.log('users after mounting', this.props.users)
        }
    }

    handleDeleteUser = async user => {
        toast.success('User deleted');
        try {
            await this.props.deleteUser(user);
            console.log(this.props.users);
        } catch(error) {
            toast.error('Delete failed. ' + error.message, {autoClose: false})
        }

        console.log(this.props.users);
    };

    render () {
        console.log("users", this.props.users);
        console.log(this.props);
        //don't do that
        //this.props.getUsers();
        const {users} = this.props;

        return (
            <MDBContainer >
                {this.state.redirectToAddLeavePage && <Redirect to={'/user'}/>}
                <Header className={'h1 indigo-text'}>Users</Header>
                {this.props.loading ?
                    <Spinner/> : (
                        <>
                            <MDBBtn style={buttonStyle}
                                    onClick={() => this.setState({redirectToAddLeavePage: true})}
                                    gradient="blue"
                            >
                                Add leave
                            </MDBBtn>
                            <LeavesListChild users = {this.props.users} user={this.props.user} onDeleteClick={this.handleDeleteUser}/>
                        </>
                    )}

            </MDBContainer>
        )
    }
};

function getLeaveBySlug(users, slug) {
    return users.find(user => user.email === slug) || null
}

const mapStateToProps =(state, ownProps) => {
    console.log('state', state);
    const slug = ownProps.match.params.slug;
    const user =
        slug && state.users.length > 0
            ? getLeaveBySlug(state.users, slug)
            : state.newUser;

    return {
        loading: state.loading,
        users: state.users,
        posts: state.posts,
        user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers());
        },
        setUser: (user) => {
            dispatch(setUser(user))
        },
        deleteUser: (user) => {
            deleteUser(user)
        }


    }

};

LeavesList.propTypes = {
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
};

export default connect (mapStateToProps, mapDispatchToProps)(LeavesList);
