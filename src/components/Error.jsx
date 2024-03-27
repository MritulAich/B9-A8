import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h3 className="text-5xl mb-5">Ohh!! The page is not found</h3>
            <Link to='/' className="text-2xl text-teal-600">Go back to home</Link>
        </div>
    );
};

export default Error;