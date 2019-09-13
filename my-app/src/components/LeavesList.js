import {MDBBtn, MDBContainer} from "mdbreact";
import ManageLeavesPage from "./ManageLeavesPage";
import React, {useState, useEffect} from 'react';
import LeavesListChild from './LeavesListChild';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadUsers, setUser, deleteUser} from '../redux/actions/fetchActions';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';

const buttonStyle = {
    borderRadius: '50px',
    margin: 20
};



class LeavesList extends React.Component {
    state = {
        redirectToAddLeavePage: false
    };

    componentDidMount() {
        if(this.props.users.length === 0) {
            this.props.loadUsers();
            console.log('users after mounting', this.props.users)
        }
    }

    handleDeleteUser = async user => {
        toast.success('User deleted');
        // try {
            await this.props.deleteUser(user);
            console.log(this.props.users)
        // } catch(error) {
        //     toast.error('Delete failed. ' + error.message, {autoClose: false})
        // }

        console.log(this.props.users)
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
                <MDBBtn  style={buttonStyle}
                         onClick={() => this.setState({redirectToAddLeavePage: true})}
                         gradient="blue"
                >
                    Add leave
                </MDBBtn>

                <LeavesListChild users={this.props.users} onDeleteClick={this.handleDeleteUser}/>

            </MDBContainer>
        )
    }
};

const mapStateToProps =(state) => (
 {
        loading: state.loading,
        users: state.users,
    }
);

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers());
        },
        setUser: () => {
            dispatch(setUser())
        },
        deleteUser: (user) => {
            deleteUser(user)
        }


    }

};

LeavesList.propTypes = {
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default connect (mapStateToProps, mapDispatchToProps)(LeavesList);
