import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {MDBContainer} from "mdbreact";
import {loadUsers, setUser} from "../redux/actions/fetchActions";
import PostsList from './PostsList';
import styled from 'styled-components';
import UserProfile from './UserProfile';


const Container = styled.div`
    width: 100%;
    text-align: center
`;

const Header = styled.div`
    text-align: center;
    margin: 0 1em;
    padding: 1em 0.25em;
`;


export const PostsContainer = ({posts, users, user, loadUsers, setUser, loadingPosts}) => {
    console.log('posts', posts);
    console.log(user);

    useEffect(() => {
        if(users.length === 0) {
            loadUsers();
            setUser();
        }
    });

    return (
        <Container>
            <UserProfile user={user}/>
            {loadingPosts && posts
                ? <PostsList posts={posts} id={user.id}/>
                : <Header className={'h1 indigo-text'}>Loading...</Header>
            }
        </Container>
    )
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
        posts: state.posts,
        loadingPosts: state.loadingPosts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers())
        },
        setUser: (user) => {
            dispatch(setUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);