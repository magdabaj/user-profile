import Spinner from "./common/Spinner";
import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import {loadUsers} from "../redux/actions/fetchActions";
import {setPost} from '../redux/actions/postActions';
import PostForm from './PostFrom';
import {connect} from 'react-redux';


const AddPost = ({posts, users,  post, ...props}) => {
    console.log(props);
    console.log('posts', posts.user1);
    console.log('post', post);

    return (
        users.length === 0 || props.user === null
            ? (
                <Spinner/>
            )
            :(
                <div>
                    <PostForm post={post}/>
                </div>
            )
    )
};

export default AddPost;