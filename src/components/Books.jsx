import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-9">Books</h2>

            <div className="grid lg:grid-cols-3 gap-6">
                {
                    books.map(book =>
                        <div key={book.id}>

                            <Link to={`/book/${book.id}`} className="card w-96 border-[1px] border-solid
                                               rounded-2xl p-6">
                                <figure className="px-8 py-8 rounded-xl bg-slate-200">
                                    <img src={book.image} className=" w-full" />
                                </figure>

                                <div className="flex mt-6 ml-8 gap-3">
                                    <p className="text-base rounded-3xl px-4 py-2 bg-gray-100 text-[#23BE0A]">{book.tags[0]}</p>
                                    <p className="text-base rounded-3xl px-4 py-2 bg-gray-100 text-[#23BE0A]">{book.tags[1]}</p>
                                </div>
                                <div className="card-body text-left">
                                    <h2 className="font-bold text-2xl">{book.bookName}</h2>
                                    <p className="font-medium my-2">By : {book.author}</p>
                                    <div className="border border-dashed w-80"></div>

                                    <div className="flex flex-row justify-between gap-48">
                                        <p>{book.category}</p>
                                        <div className="flex flex-row gap-2">
                                            <p>{book.rating}</p><img src="../../public/images/Frame (1).svg" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Books;