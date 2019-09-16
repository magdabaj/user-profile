import {MDBBtn, MDBMedia} from "mdbreact";
import React, {useEffect, useState} from 'react';
const hrefStyle = {
    padding: 10,
}

const PostsList = ({id, posts}) => {
    // console.log('user id', id);
    // const [userId, setUserId] = useState(id);
    // useEffect(() => {
    //     setUserId('user' + id);
    //     console.log('userId', userId)
    // });
    // console.log('userId', userId);
    return (
        <div>
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
                                        <a style={hrefStyle} >
                                            Edit post
                                        </a>
                                        <a style={hrefStyle} >
                                            See comments
                                        </a>
                                        <a style={hrefStyle} >
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