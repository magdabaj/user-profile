import {MDBBtn} from "mdbreact";
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {toast} from "react-toastify";
import NewPostFrame from './NewPostFrame';
import {loadUsers, setUser, setActiveUser} from "../redux/actions/fetchActions";
import {deletePost, setPost, loadPosts, savePost} from "../redux/actions/postActions";
import PostsList from './PostsList';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import AddPost from './AddPost';
import './PostsContainer.css';

const Container = styled.div`
    width: 100%;
    text-align: center;
`;

const Header = styled.div`
    text-align: center;
    margin: 0 1em;
    padding: 1em 0.25em;
`;


const UserFunctionsContainer = styled.div`
    position: relative;
text-align: center;
    // display: flex;
    // align-items: center;
    // justify-content: space-around; 
    border: 1px 1px outset #3f51b5;
    // box-shadow:  0 0 5px #3f51b5;
    // vertical-align: middle;
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 40px;
    width: 100%;
`;


export const PostsContainer = ({
                                   usersError,
                                   postError,
                                   posts,
                                   users,
                                   user,
                                   loadUsers,
                                   setUser,
                                   loadingPosts,
                                   deletePost,
                                   deletingPost,
                                   setActiveUser,
                                   activeUser,
                                   newPost,
                                   loadPosts,
                                   ...props
}) => {
    console.log('posts', posts);
    console.log(user);
    console.log(user.id);
    const [userId, setUserId] = useState({...user.id});
    const [isHidden, setIsHidden] = useState(true);
    const [opacity, changeOpacity] = useState(1);

    useEffect(() => {
        if(users.length === 0) {
            loadUsers();
            setUser(user);
            if (activeUser === null) {
                setActiveUser(user.id)
            }
        } else {
            setUser(user);
            if(activeUser===null) {
                setActiveUser(user.id)
            }
        }
        //
        if(posts.length === 0 ) {
            loadPosts();
        }
    },[/*users,posts*/]);

    console.log('activeUser', activeUser);

    const handleDeletePost = async (post) => {
        try {
            deletePost(post);
        } catch (error) {
            toast.error('Delete failed. ' + error.message, {autoClose: false})
        }
    };
    if(deletingPost) {
        toast.success('Post deleted. ');
    }

    const changeVisibility = () => {
        setIsHidden(!isHidden);
        if(isHidden === true) {
            changeOpacity(0.4);
        } else {
            changeOpacity(1);
        }
    };

    if(props.savingPost && !isHidden) {
        changeVisibility();
        toast.success('Post saved.')
    }

    return (
        <div style={{ position: 'relative'}} >
            {!isHidden && <AddPost savingPost={props.savingPost} posts={posts} users={users} post={newPost} activeUser={activeUser} setPost={setPost} savePost={props.savePost} {...props}/>}
        <Container style={{opacity: `${opacity}`}} onClick={!isHidden ? () => changeVisibility() : null}>
            <UserProfile user={user}/>
            {loadingPosts && posts
                ? (
                    <div style={{padding: '1em'}}>
                        <div  style={{padding: '1em'}}>
                            {isHidden &&
                                <div onClick={() => changeVisibility()}>
                                    <NewPostFrame/>
                                </div>
                            }
                        </div>
                        <div style={{padding: '1em'}} >
                            <PostsList
                                posts={posts}
                                id={user.id}
                                activeUser={activeUser}
                                setActiveUser={setActiveUser}
                                onDeleteClick={handleDeletePost}
                            />
                        </div>
                    </div>
                ) : <Header className={'h1 indigo-text'}>Loading...</Header>
            }
            {postError && toast.error('Error occurred: ' + JSON.stringify(postError))}
            {usersError && toast.error('Error occurred: ' + JSON.stringify(usersError))}
        </Container>
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
        posts: state.posts,
        newPost: state.newPost,
        loadingPosts: state.loadingPosts,
        deletingPost: state.deletingPost,
        activeUser: state.activeUser,
        postError: state.postError,
        usersError: state.usersError,
        savingPost: state.savingPost
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => {
            dispatch(loadUsers())
        },
        setUser: (user) => {
            dispatch(setUser(user));
        },
        deletePost: (post) => {
            dispatch(deletePost(post))
        },
        setActiveUser: id => {
            dispatch(setActiveUser(id))
        },
        loadPosts: () => {
            dispatch(loadPosts())
        },
        setPost: post => {
            dispatch(setPost(post))
        },
        savePost: (post, userId) => {
            dispatch(savePost(post, userId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);