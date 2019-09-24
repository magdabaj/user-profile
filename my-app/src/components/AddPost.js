import {MDBBtn} from "mdbreact";
import {toast} from "react-toastify";
import Spinner from "./common/Spinner";
import React,{useState, useEffect} from 'react';
import PostForm from './PostFrom';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 10;
    position: absolute;
    top: 3em;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: 1px solid  #3f51b5;
    padding: 2em;
    background-color: white;
    border-radius: 10px;
    width: 90%;
    max-width: 1012px
`;

const AddPost = ({posts, users,  post, setPost, activeUser, history, savingPost, ...props}) => {
    console.log(props);
    console.log('post', post);

    const [_post, _setPost] = useState(null);

    useEffect(() => {
        _setPost({...post});
        setPost(post)
    }, []); // props.post

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
        props.savePost(_post, activeUser);
    }

    if(savingPost) {
        toast.success('Post saved.');
    }

    return (
        users.length === 0 || props.user === null || !_post
            ? (
                <Spinner/>
            )
            :(
                <Container>
                    <PostForm post={_post} onChange={handleChange} onSave={handleSave}/>
                </Container>
            )
    )
};

export default AddPost;