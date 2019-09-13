import {MDBMedia} from "mdbreact";
import React, {useEffect, useState} from 'react';

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
            {posts['user' + id].length > 0
                ? (
                    posts['user' + id].map(post => (
                        <MDBMedia list className="mt-3" key={post.id}>
                            <MDBMedia tag="li">
                                <MDBMedia body>
                                    <MDBMedia heading>
                                        {post.title}
                                    </MDBMedia>
                                    {post.body}
                                </MDBMedia>
                            </MDBMedia>
                        </MDBMedia>
                    ))
                )
                : (<div>User has no posts yet</div>)
            }
        </div>
    )
};

export default PostsList;