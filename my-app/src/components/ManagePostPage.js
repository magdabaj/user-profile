import {toast} from "react-toastify";
import Spinner from "./common/Spinner";
import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import {loadUsers, setActiveUser} from "../redux/actions/fetchActions";
import {setPost, loadPosts, savePost} from '../redux/actions/postActions';
import PostForm from './PostFrom';
import {connect} from 'react-redux';


const ManagePostPage = ({posts, post, users, loadPosts, savingPost, history, ...props}) => {
    console.log(props);
    console.log('post', post);

    const [_post, _setPost] = useState({...post});

    useEffect(() => {
        if(users.length === 0 ){
            props.loadUsers();
        }

        if(posts.length === 0) {
            loadPosts();
            props.setPost({...post});
            // if(props.activeUser === null) {
            //     props.setActiveUser(post.userId)
            // }
        } else {
            _setPost({...post});
        }


        // props.setActiveUser(post.userId);
        console.log('post', post);
    },[post]);

    console.log(_post);

    function handleChange(event) {
        const {name, value} = event.target;

        _setPost(prevPost => ({
            ...prevPost,
            [name] : value
        }))
    }

    function handleSave(event) {
        event.preventDefault();
        if(props.activeUser !== undefined) {
            props.savePost(_post, post.userId);
        }
    }

    if(savingPost) {
        const user = users.find(user => user.id === post.userId);
        toast.success('Post saved.');
        history.push(`/posts/${user.email}`);
    }

    return (
        users.length === 0 || props.user === null || !_post
            ? (
                <Spinner/>
            )
            :(
                <div>
                    <PostForm
                        post={_post}
                        onChange={handleChange}
                        onSave={handleSave}
                    />
                </div>
            )
    )
};

function getPostBySlug (posts, slug) {
    if(posts !== undefined){
    if(posts.length > 0) {
        return posts.find(post => post.id === parseFloat(slug)) || null;
    }}
}

const mapStateToProps = (state, ownProps) => {
    const slug = ownProps.match.params.slug;
    console.log(state.posts);
     const post =
         state.loadingPosts && slug && state.posts.length > 0
                ? getPostBySlug(state.posts, slug)
                : state.newPost;
    console.log('post', post);
    return {
        post,
        newPost: state.newPost,
        posts: state.posts,
        users: state.users,
        loadingPosts: state.loadingPosts,
        activeUser: state.activeUser,
        savingPost: state.savingPost
}};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers());
        },
        loadPosts: () => {
            dispatch(loadPosts());
        },
        setPost: (post) => {
            dispatch(setPost(post))
        },
        savePost: (post, userId) => {
            dispatch(savePost(post, userId))
        },
        // setActiveUser: id => {
        //     dispatch(setActiveUser(id));
        // }
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (ManagePostPage);