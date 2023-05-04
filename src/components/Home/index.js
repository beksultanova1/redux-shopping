import React from 'react';

const Home = () => {
    return (
        <div className="bg-blue-400">
            <h1 className="text-center py-5 text-6xl text-white">Gucci brand</h1>
            <div className="flex justify-center items-center ">
                <img className="py-16"
                     width={750} src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000/m/df0a/faa8/a9fd/b5fa/1034/ee6c/fd6c/2a89/336b/6ac4/6ac4.jpg" alt=""/>
            </div>
        </div>
    );
};

export default Home;