import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {toast} from "react-toastify";
import {Redirect} from "react-router-dom";
import {loadUsers, setUser, setActiveUser} from "../redux/actions/fetchActions";
import {deletePost} from "../redux/actions/postActions";
import PostsList from './PostsList';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import AddPost from './AddPost';

const Container = styled.div`
    width: 100%;
    text-align: center
`;

const Header = styled.div`
    text-align: center;
    margin: 0 1em;
    padding: 1em 0.25em;
`;


export const PostsContainer = ({posts, users, user, loadUsers, setUser, loadingPosts, deletePost, deletingPost, setActiveUser, activeUser, newPost}) => {
    console.log('posts', posts);
    console.log(user);
    console.log(user.id);
    const [userId, setUserId] = useState({...user.id});

    useEffect(() => {
        if(users.length === 0) {
            loadUsers();
            setUser(user);
            if(activeUser===null) {
                setActiveUser(user.id)
            }
        } else {
            setUser(user)
        }
    },[]);


    const handleDeletePost = async (post) => {
        try {
            deletePost(post);
        } catch (error) {
            toast.error('Delete failed. ' + error.message, {autoClose: false})
        }
    };
    if(deletingPost) {
        toast.success('Post deleted. ');
    }

    return (

        <Container>
            <UserProfile user={user}/>
            {loadingPosts && posts
                ? <div>
                        <AddPost posts={posts} users={users} post={newPost}/>
                        <PostsList posts={posts} id={user.id} activeUser={activeUser} setActiveUser={setActiveUser} onDeleteClick={handleDeletePost}/>
                    </div>
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
        newPost: state.newPost,
        loadingPosts: state.loadingPosts,
        deletingPost: state.deletingPost,
        activeUser: state.activeUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers())
        },
        setUser: (user) => {
            dispatch(setUser(user));
        },
        deletePost: (post) => {
            dispatch(deletePost(post))
        },
        setActiveUser: id => {
            dispatch(setActiveUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);