import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const getDetails = () => {
        return axios(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setDetails(res.data))
    }
    useEffect(() => {
        getDetails()
    }, [])
    return (
            <div className="flex justify-center items-center mx-64  m-20 shadow dark:bg-gray-900 dark:border-gray-700 rounded-3xl">
                <img className="bg-purple-800 m-24 rounded-3xl" src={details.image} width={250}alt="#"/>
                <div className="text-white  text-2xl py-5">
                    <p className="m-3 text-amber-400">{details.category}</p>
                    <h6>{details.description}</h6>
                    <h1>{details.title}</h1>
                    <div className="flex justify-between">
                        <p className="text-amber-300 w-1/6 rounded-xl text-center border-r-amber-800">{details.price}$</p>
                        <Link to={"/product"}>
                            <button className="focus:outline-none text-white bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2 mr-8 m-5  dark:focus:ring-yellow-900">cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default ProductDetails;