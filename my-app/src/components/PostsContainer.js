import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {MDBContainer} from "mdbreact";
import {loadUsers, setUser} from "../redux/actions/fetchActions";
import PostsList from './PostsList';
import styled from 'styled-components';

const Header = styled.div`
    text-align: center;
      margin: 0 1em;
  padding: 0.25em 1em;
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
        <MDBContainer>
            <Header className={'h1 indigo-text'}>Posts</Header>
            {loadingPosts && posts
                ? <PostsList posts={posts} id={user.id}/>
                : <div>Loading...</div>
            }
        </MDBContainer>
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