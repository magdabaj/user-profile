import React from 'react';
import styled from "styled-components";

const Header = styled.div`
    text-align: left;
      margin: 0 auto;
  padding: 0.25em 1em;
`;

const NewPostFormFrame = () => {
    return (
        <form >
            <Header className={'h3 indigo-text'}>Add Post</Header>
            <textarea
                className={'form-control'}
                rows="3"
                name={'body'}
                // error={errors.body}
            />
        </form>
    )
};

export default NewPostFormFrame;