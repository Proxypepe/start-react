import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFatching";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);


    const [fetchPostById, isLoading, ] = useFetching( async (id) => {
        const response = await PostService.getById(params.id)
        console.log(response.data)
        setPost(response.data)
    });

    const [fetchComments, isCommentsLoading, ] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        console.log(response.data)
        setComments(response.data)
    });


    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div>
            <h1>
                U opened post with ID = {params.id}
            </h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }

            <h1>
                Comments
            </h1>
            {isCommentsLoading
                ? <Loader/>
                :  comments.map( comm =>
                    <div key={comm.id} style={{marginTop: 15,}}>
                        <h5>
                            {comm.email}
                        </h5>
                        <div>
                            {comm.body}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default PostIdPage;