import Spinner from "./common/Spinner";
import React,{useState, useEffect} from 'react';
import PostForm from './PostFrom';


const AddPost = ({posts, users,  post, setPost, savePost, activeUser, ...props}) => {
    console.log(props);
    console.log('post', post);

    const [_post, _setPost] = useState(null);

    useEffect(() => {
        _setPost({...post});
        setPost(post)
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;

        _setPost( prevPost => ({
            ...prevPost,
            [name] : value
        }))
    }
    console.log(_post);

    function handleSave(event) {
        event.preventDefault();
        savePost(_post, activeUser);
    }

    return (
        users.length === 0 || props.user === null || !_post
            ? (
                <Spinner/>
            )
            :(
                <div>
                    <PostForm post={_post} onChange={handleChange} onSave={handleSave}/>
                </div>
            )
    )
};

export default AddPost;