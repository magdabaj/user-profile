import {MDBBtn} from "mdbreact";
import React from 'react';
import styled from "styled-components";
import TextInput from './common/TextInput';

const Header = styled.div`
    text-align: center;
      margin: 0 1em;
  padding: 0.25em 1em;
`;


const buttonStyle = {
    borderRadius: '50px',
    margin: 20
};

const PostForm = ({post, onChange, errors={}, onSave}) => {
    return (
        <div>
            <form onSubmit={onSave}>
                <Header className={'h3 indigo-text'}>{post.id ? 'Edit' : 'Add'} Post</Header>
                <div className={'form-group'}>
                    <TextInput
                        label={'Title'}
                        name={'title'}
                        value={post.title}
                        // error={errors.title}
                        onChange={onChange}
                    />
                </div>
                <div className={'form-group'}>
                    <label>Body</label>
                    <textarea
                        name={'body'}
                        className={'form-control'}
                        id={post.id}
                        row="3"
                        value={post.body}
                        onChange={onChange}
                    />
                </div>
            </form>
            <MDBBtn style={buttonStyle}
                    onSubmit={onSave}
                    color={'indigo'}
            >
                Add post
            </MDBBtn>
        </div>
    )
};

export default PostForm;