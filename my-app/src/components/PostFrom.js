import {MDBBtn} from "mdbreact";
import React from 'react';
import styled from "styled-components";
import TextInput from './common/TextInput';

const Header = styled.div`
    text-align: left;
    margin: 0 auto;
    padding:  0.5em;
`;


const buttonStyle = {
    borderRadius: '50px',
    margin: 20
};

const PostForm = ({post, onChange, errors={}, onSave}) => {
    return (
        <div>
        <Header className={'h3 indigo-text'}>{post.id ? 'Edit' : 'Add'} Post</Header>
            <form onSubmit={onSave}>
                    <TextInput
                        name={'title'}
                        value={post.title}
                        // error={errors.title}
                        onChange={onChange}
                    />
                    <textarea
                        className={'form-control'}
                        rows="3"
                        name={'body'}
                        // error={errors.body}
                        value={post.body}
                        onChange={onChange}
                    />
            <MDBBtn
                type={'submit'}
                style={buttonStyle}
                onSubmit={onSave}
                color={'indigo'}
                disabled={!post.title || !post.body}
            >
                {!post.id ? 'Add' : 'Edit'} post
            </MDBBtn>
            </form>
        </div>
    )
};

export default PostForm;