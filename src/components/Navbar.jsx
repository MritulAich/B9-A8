import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between mb-16">

            <div>
                <h2 className="font-extrabold text-3xl">Book Plaza</h2>
            </div>

            <div className="gap-4 flex flex-row ">
                <button className='btn border-solid border-[1px] border-[#23BE0A] font-semibold py-4 px-5 rounded-lg'><NavLink>Home</NavLink></button>
                <button className='btn border-solid border-[1px] border-[#23BE0A] font-semibold py-4 px-5 rounded-lg'><NavLink to='/listedBooks'>Listed Books</NavLink></button>
                <button className='btn border-solid border-[1px] border-[#23BE0A] font-semibold py-4 px-5 rounded-lg'><NavLink to='/pagesToRead'>Pages to Read</NavLink></button>
            </div>

            <div className="flex flex-row gap-4">
                <div>
                    <a className="btn btn-success text-white">Sign In</a>
                </div>
                <div>
                    <a className="btn btn-info text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;