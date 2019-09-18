import {MDBBtn, MDBMedia} from "mdbreact";
import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const hrefStyle = {
    padding: 10,
    color: '#3f51b5'
};

const Header = styled.div`
    text-align: center;
    margin: 1em;
    padding: 1em;
`;

const PostsList = ({id, posts}) => {
    return (
        <div>
            <Header className={'h1 indigo-text'}>Posts</Header>
            {/*Part of the condition*/}
            {/*posts['user' + id].length === 0 ||*/}
            { posts['user' + id] === undefined
                ?  (<div>User has no posts yet</div>)
                : (
                    posts['user' + id].map(post => (
                        <MDBMedia list className="mt-3" key={post.id}>
                            <MDBMedia tag="li">
                                <MDBMedia body>
                                    <MDBMedia heading>
                                        <h2>{post.title}</h2>
                                    </MDBMedia>
                                    {post.body}
                                </MDBMedia>
                            </MDBMedia>
                            <MDBMedia list className="mt-3" key={post.id}>
                                <MDBMedia tag={'li'}>
                                    <MDBMedia body>
                                        <a style={hrefStyle}>
                                            Edit post
                                        </a>
                                        <a style={hrefStyle}>
                                            See comments
                                        </a>
                                        <a style={hrefStyle}>
                                            Delete post
                                        </a>
                                    </MDBMedia>
                                </MDBMedia>
                             </MDBMedia>
                         </MDBMedia>
                    ))
                )
            }
        </div>
    )
};

export default PostsList;