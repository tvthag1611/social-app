import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    return (
        <div>
            <div className="p-5">
                <Tile />
                <div className="flex justify-between mb-3">
                    <p className="text-lg font-medium">Recent Posts</p>
                    <Link to="" className="text-lg font-medium text-blue-500">View all</Link>
                </div>
                <PostList />
            </div>
        </div>
    );
};

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const mockData = [
                { id: 1, title: "First Post", likes: 10, comments: 5, hashtags: ["hastag1", "hastag2"] },
                { id: 2, title: "Second Post", likes: 20, comments: 8, hashtags: ["hastag3", "hastag4"] },
                { id: 3, title: "Third Post", likes: 15, comments: 3, hashtags: ["hastag5", "hastag6"] },
            ];

            setPosts(mockData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setVisiblePosts(posts.slice(0, 3));
    }, [posts]);

    return (
        <div>
            {visiblePosts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

const Post = ({ post }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="w-full">
                <div className="flex border border-black rounded-3xl shadow-lg p-3">
                    <div>
                        <h3 className="text-2xl font-bold mb-5">{post.title}</h3>
                        <ul className="flex mb-3">
                            <li className="text-lg font-medium mr-5">{post.likes} Likes</li>
                            <li className="text-lg font-medium">{post.comments} Comments</li>
                        </ul>
                        <ul className="flex">
                            {post.hashtags.map((hashtag) => (
                                <li key={hashtag} className="italic mr-3">#{hashtag}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Tile = () => {
    return (
        <div className="grid grid-cols-4 gap-5 mb-10">
            <div className="col-span-1 flex justify-center items-center border border-black rounded-3xl shadow-lg h-32">
                <p className="text-black text-2xl font-semibold">10 Posts</p>
            </div>
            <div className="col-span-1 flex justify-center items-center border border-black rounded-3xl shadow-lg">
                <p className="text-black text-2xl font-semibold">185 Likes</p>
            </div>
            <div className="col-span-1 flex justify-center items-center border border-black rounded-3xl shadow-lg">
                <p className="text-black text-2xl font-semibold">67 Comments</p>
            </div>
            <div className="col-span-1 flex justify-center items-center border border-black rounded-3xl shadow-lg">
                <p className="text-black text-2xl font-semibold">24 Followers</p>
            </div>
        </div>
    );
};


export default Profile;