import { useLoaderData, useParams } from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);
    const book = books.find(b => b.id === idInt);

    const handleRead =()=>{
        toast('Book added to read list')
    }
    const handleAddToWishlist =()=>{
        toast('Book added to wishlist')
    }

    return (
        <div className="flex flex-row gap-14">
            <div className="w-2/5 p-20 rounded-2xl bg-[#1313130D] bg-opacity-5">
                <img className="" src={book.image} />
            </div>
            <div className="space-y-4">
                <h1 className="font-bold text-4xl">{book.bookName}</h1>
                <p className="font-medium text-xl">By : {book.author}</p>
                <div className="divider"></div>
                <p className="font-medium text-xl">{book.category}</p>
                <div className="divider"></div>
                <p><span className="font-bold">Review</span> : {book.review}</p>

                <div className="flex flex-row gap-4">
                    <span className="font-bold">Tag</span>
                    <p className="text-base rounded-3xl px-4 py-2 bg-gray-100 text-[#23BE0A]">{book.tags[0]}</p>
                    <p className="text-base rounded-3xl px-4 py-2 bg-gray-100 text-[#23BE0A]">{book.tags[1]}</p>
                </div>
                <div className="divider"></div>

                <div className="flex flex-row gap-16"><p>Number of Pages:</p> <p className="font-semibold">{book.totalPages}</p></div>
                <div className="flex flex-row gap-[120px]"><p>Publisher:</p> <p className="font-semibold">{book.publisher}</p></div>
                <div className="flex flex-row gap-14"><p>Year of Publishing:</p> <p className="font-semibold">{book.yearOfPublishing}</p></div>
                <div className="flex flex-row gap-36"><p>Rating:</p> <p className="font-semibold">{book.rating}</p></div>


                <div className="space-x-4 space-y-4">
                    <button onClick={handleRead} className="btn btn-outline btn-info">Read</button>
                    <button onClick={handleAddToWishlist} className="btn btn-primary">Wishlist</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;