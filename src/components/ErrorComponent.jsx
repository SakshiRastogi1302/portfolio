import React from 'react'
import errorImage from "../assets/error-image.png"
import HeaderComponent from './HeaderComponent'
import { Link, useNavigate } from 'react-router-dom'

const ErrorComponent = () => {
   const navigate = useNavigate();
   return (
        <div>
            <HeaderComponent />
            <div className="bg-purple-900 w-full min-h-screen flex flex-col items-center justify-center text-white px-6">
                {/* Error Image */}
                <img
                    src={errorImage}
                    alt="Error Illustration"
                    className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain mb-6"
                />

                {/* Error Text */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg text-center">
                    Oops! Page Not Found
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-center max-w-lg">
                    The page you’re looking for doesn’t exist or may have been moved.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link
                    to="/"
                    className="bg-lime-600 px-6 py-2 rounded-lg font-semibold text-sm sm:text-base border-2 border-white hover:bg-lime-500 transition-transform duration-200 hover:scale-105">Go Back Home <i className="fa-solid fa-arrow-right ml-2"></i>
                    </Link>
                    {/* Go Back Previous */}
                    <button
                    onClick={() => navigate(-1)}
                    className="bg-yellow-600 px-6 py-2 ml-5 rounded-lg font-semibold text-sm sm:text-base border-2 border-white hover:bg-yellow-500 transition-transform duration-200 hover:scale-105"><i className="fa-solid fa-arrow-left mr-2"></i> Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorComponent