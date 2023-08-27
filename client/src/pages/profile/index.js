import React, { useState, useEffect } from "react";
import axiosInstance from "../../apis/axiosInstance.js";
import "./profile.css";

const Profile = () => {
    return (
        <section>
            <div className="container relative">
                <div className="cover-image h-48">
                    <img src="cover-image.jpg" alt="Cover Image" className="object-cover w-full h-full rounded-lg bg-red-500" />
                </div>
                <div className="avatar absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden">
                    <img src="avatar.jpg" alt="Avatar" className="object-cover w-full h-full bg-blue-500" />
                </div>
                <div className="profile-content px-4 mt-20 mb-10">
                    <h1 className="text-center text-2xl font-bold">John Doe</h1>
                    <p className="text-center text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquam nulla. Nullam ac facilisis nisi.</p>
                    <div className="flex justify-center">
                        <div className="flex">
                            <ul className="grid grid-cols-3">
                                <li className="text-lg font-semibold">10 Posts</li>
                                <li className="text-lg font-semibold">185 Likes</li>
                                <li className="text-lg font-semibold">124 Followers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-1/3 h-[2px] bg-black my-2"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-1/3">
                            <div className="flex justify-around">
                                <button className="text-lg font-semibold text-blue-500">Followed</button>
                                <button className="text-lg font-semibold">Message</button>
                                <button className="text-lg font-semibold text-red-500">Block</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Post />
                {/* <PostList /> */}
                {/* <ScrollForMore /> */}
            </div>
        </section>
    );
};

const Post = () => {
    return (
        <div className="flex justify-center">
            <div className="w-1/2">
                <div className="flex border rounded-lg shadow-lg p-3">
                    <img src="" alt="" className="w-32 h-36 bg-yellow-500 mr-5" />
                    <div>
                        <h3 className="text-2xl font-bold mb-5">Title</h3>
                        <ul className="flex mb-3">
                            <li className="text-lg font-medium mr-5">20 Likes</li>
                            <li className="text-lg font-medium">5 Comments</li>
                        </ul>
                        <ul className="flex">
                            <li className="italic mr-3">#hastag1</li>
                            <li className="italic">#hastag2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState([]);

    return (
        <div>
            {visiblePosts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
};


const ScrollForMore = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 200;

            if (scrollPosition > scrollThreshold) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="flex justify-center mt-5">
            {isScrolling ? (
                <p className="text-blue-500">Scrolling...</p>
            ) : (
                <p className="text-blue-500">Scroll For More</p>
            )}
        </div>
    );
};

export default Profile;