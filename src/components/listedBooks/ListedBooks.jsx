import { useState } from "react";
import { Link } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className="py-9 px-96 bg-[#1313130D] bg-opacity-5 rounded-2xl text-3xl font-bold text-center">Books</div>

            <div className="text-center mt-8 mb-14">
                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="bg-green-500 text-white btn m-1">Sort by <img src="../../../public/images/drop.svg" /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Published year</a></li>
                    </ul>
                </div>
            </div>

            
            <div className={`flex -mx-4 overflow-x-auto overflow-y-hidden 
            flex-nowrap dark:bg-gray-100 dark:text-gray-800`}>
                <Link to='/readBooks' onClick={()=> setTabIndex(0)} className={`${tabIndex === 0? 'border border-b-0' :'border-b' }`}>
                    <a rel="noopener noreferrer" href="#" className="flex flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-600">
                        <span>Read Books</span>
                    </a>
                </Link>
                <Link to='/wishListBooks' onClick={()=> setTabIndex(1)} className={`${tabIndex === 1? 'border border-b-0' :'border-b' }`}>
                    <a rel="noopener noreferrer" href="#" className="flex flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                        <span>Wishlist Books</span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default ListedBooks;