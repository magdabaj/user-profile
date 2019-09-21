import Spinner from "./common/Spinner";
import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import {loadUsers} from "../redux/actions/fetchActions";
import {setPost, loadPosts} from '../redux/actions/postActions';
import PostForm from './PostFrom';
import {connect} from 'react-redux';


const ManagePostPage = ({posts, users, loadPosts, ...props}) => {
    console.log(props);
    console.log('posts', posts.user1);

    const [_post, _setPost] = useState({...props.post});

    useEffect(() => {
        if(users.length === 0 ){
            props.loadUsers();
        }

        if(posts.length === 0) {
            loadPosts();
            props.setPost({...props.post});
        }

        props.setPost({...props.post});
        console.log('post', props.post);
    },[props.post]);


    return (
        users.length === 0 || props.user === null
            ? (
                <Spinner/>
            )
            :(
                <div>
                    <PostForm post={_post}/>
                </div>
            )
    )
};

function getPostBySlug (posts, slug) {
    console.log('slug', slug);
    console.warn('posts', posts);
    if(posts !== undefined){
    if(posts.length > 0) {
        return posts.find(post => post.id === slug) || null
    }}
}

const mapStateToProps = (state, ownProps) => {
    const slug = ownProps.match.params.slug;
    console.log(state.posts);
    parseInt(slug);
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
        activeUser: state.activeUser
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
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps) (ManagePostPage);