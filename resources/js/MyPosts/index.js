import React from "react";
import Post from "./Post";
import Api from '../Utils/Api';

const MyPosts = () => {

    const posts = await Api.getPosts();
    console.log(posts)

    return <div>hola</div>
};
export default MyPosts;
