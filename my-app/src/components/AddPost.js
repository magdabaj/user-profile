import Spinner from "./common/Spinner";
import React,{useState, useEffect} from 'react';
import styled from "styled-components";
import {loadUsers} from "../redux/actions/fetchActions";
import {setPost} from '../redux/actions/postActions';
import PostForm from './PostFrom';
import {connect} from 'react-redux';


const AddPost = ({posts, users,  post, setPost, ...props}) => {
    console.log(props);
    console.log('posts', posts.user1);
    console.log('post', post);

    const [_post, _setPost] = useState({...post});

    useEffect(() => {
        _setPost({...post})
        setPost(post)
    }, [post])

    function handleChange(event) {
        const {name, value} = event.target;

        _setPost( prevPost => ({
            ...prevPost,
            [name] : value
        }))
    }
    console.log(_post);

    function handleSave(event) {
        event.preventDefault();
        // savePost(_post);
    }

    return (
        users.length === 0 || props.user === null
            ? (
                <Spinner/>
            )
            :(
                <div>
                    <PostForm post={_post} onChange={handleChange} onSave={handleSave}/>
                </div>
            )
    )
};

export default AddPost;