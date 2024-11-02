import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen text-center">
            <div>
                <h2 className="text-5xl text-red-500 font-bold">PAGE NOT FOUND</h2>
                <p className="text-3xl text-green-400 mt-4">Back to Home page</p>
                <br />
                <button 
                    onClick={handleNavigateHome} 
                    className="btn btn-outline btn-success"
                >
                    Home page
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
