import { NavLink } from "react-router-dom";


const handleViewList = ()=>{
    
}

const Banner = () => {
    return (
        <div className="flex flex-row justify-around rounded-3xl bg-[#1313130D] bg-opacity-5 mb-24 pt-20 pb-16">
            <div className="space-y-12">
                <h2 className="font-bold text-5xl mb-12 leading-[70px]">Books to freshen up <br />your bookshelf</h2>
                <NavLink to='/listedBooks' className="bg-[#23BE0A] text-white rounded-lg py-5
                                   px-7 font-bold">View The List</NavLink>
            </div>
            <div>
                <img src="../../public/images/datingbook.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;