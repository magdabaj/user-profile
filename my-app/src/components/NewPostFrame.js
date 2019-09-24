import NewPostFormFrame from "./NewPostFrameForm";
import {toast} from "react-toastify";
import Spinner from "./common/Spinner";
import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import './PostsContainer.css';

const Container = styled.div`
    border: 1px solid indigo;
    padding: 1em;
    text-align: center
    background-color: white
`;

const NewPostFrame = () => {

    return (
                <Container className={'addPostHidden'}>
                   <NewPostFormFrame/>
                </Container>
              )
};

export default NewPostFrame;