import {MDBBtn, MDBMedia} from "mdbreact";
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
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

const PostsList = ({id, posts, onDeleteClick, activeUser, setActiveUser}) => {

    useEffect(() => {
        setActiveUser(id)
    }, []);

    return (
        <div>
            {/*<Header className={'h1 indigo-text'}>Posts</Header>*/}
            {/*Part of the condition*/}
            {/*posts['user' + id].length === 0 ||*/}
            { posts['user' + id] === undefined
                ?  (<Header className={'h1 indigo-text'}>User has no posts yet</Header>)
                : (
                    posts['user' + id].map(post => (
                        <div key={post.id} >
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                            <div style={{display: "flex"}}>
                                <div><Link to={'/editpost/' + post.id}>Edit post</Link></div>
                                <div>See comments</div>
                                <div onClick={() => onDeleteClick(post)}>Delete post</div>
                            </div>

                        </div>
                    ))
                )
            }
        </div>
    )
};

export default PostsList;
//
// const MDB = () => (
// <MDBMedia list className="mt-3" style={{padding: '2em'}}>
//     <MDBMedia tag="li">
//         <MDBMedia left href="#">
//             <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg" alt="Generic placeholder image" />
//         </MDBMedia>
//         <MDBMedia body>
//             <MDBMedia heading>
//                 <h2>{post.title}</h2>
//             </MDBMedia>
//             {post.body}
//         </MDBMedia>
//     </MDBMedia>
//     <MDBMedia list className="mt-3">
//         <MDBMedia tag={'li'}>
//             <MDBMedia body>
//                 <a style={hrefStyle} onClick={() => setManagePostPage(true)}>
//                     Edit post
//                 </a>
//                 <a style={hrefStyle}>
//                     See comments
//                 </a>
//                 <a style={hrefStyle} onClick={() => onDeleteClick(post)}>
//                     Delete post
//                 </a>
//             </MDBMedia>
//         </MDBMedia>
//     </MDBMedia>
// </MDBMedia>)
//