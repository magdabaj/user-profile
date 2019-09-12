import React from 'react';
import {connect} from 'react-redux';

export const PostsContainer = ({posts}) => {
    // const key = "user" + props.userId;
    console.log('posts', posts);
    return (
        <div>
            <div>Posts</div>
            {/*{posts.user1.map(post =>*/}
            {/*    <div>{post.title}</div>*/}
            {/*)}*/}
        </div>
    )
};

function getLeaveBySlug(users, slug) {
    return users.find(user => user.email === slug) || null
}

const mapStateToProps = (state, ownProps) => {
    console.log("state", state);
    const slug = ownProps.match.params.slug;
    const user =
        slug && state.users.length > 0
            ? getLeaveBySlug(state.users, slug)
            : state.newUser;

    return {
        user,
        newUser: state.newUser,
        users: state.users,
        posts: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    
}

export default PostsContainer