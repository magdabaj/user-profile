import cupcake from '../images/cupcake-1133146_1920.jpg';
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './PostsList.css';
import Comments from './Comments';
import styled from "styled-components";

const Header = styled.div`
    text-align: center;
    margin: 1em;
    padding: 1em;
`;

const Img = styled.img`
    width: 100%;
    height: auto    
`;

const PostsList = ({id, posts, onDeleteClick, activeUser, setActiveUser}) => {

    const [comments, seeComments] = useState(false);
    const [description, setDescription] = useState(false);

    useEffect(() => {
        setActiveUser(id)
    }, []);

    const changeVisibility = () => {
        seeComments(!comments);
    };

    const seeDescription = () => {
        setDescription(!description);
    }

    return (
        <div >
            { posts === undefined
                ?  (<Header className={'h1 indigo-text'}>User has no posts yet</Header>)
                : (
                    posts.map(post => (
                        post.userId === activeUser
                            ? (
                                <div style={{paddingBottom: '1em'}}>
                                <div key={post.id} className={'post-container'}>
                                    <div className={'h5 indigo-text post-title'}>{post.title}</div>
                                    <Img src={cupcake}/>
                                    <div
                                        className={'post-description-toggle'}
                                        onClick={() => seeDescription()}
                                    >
                                        {!description ? 'See' : 'Toggle'} description
                                    </div>
                                    {description && <div className={'post-body'}>{post.body}</div>}
                                    <div className={'post-options'}>
                                        <div className={'h5 indigo-text'} >
                                            <Link
                                                to={'/editpost/' + post.id}
                                            >
                                                Edit post
                                            </Link>
                                        </div>
                                        <div
                                            className={'h5 indigo-text'}
                                             onClick={() => changeVisibility()}
                                        >
                                            See comments
                                        </div>
                                        <div
                                            className={'h5 indigo-text'}
                                            onClick={() => onDeleteClick(post)}
                                        >
                                            Delete post
                                        </div>
                                    </div>
                                    {comments && <Comments/>}
                                </div>
                                </div>)
                            : null
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