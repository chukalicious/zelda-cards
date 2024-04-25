import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate("/")
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://live.staticflickr.com/65535/53677961430_011a51ff32_o.png)' }}>
            <div className=""></div>
            <div className="hero-content text-center text-primary-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Error 404: Page Not Found</h1>
                    <p className="mb-5">Oops! You seem to have stepped wrong. Not to worry, just click below and we'll get you back home in no time!  </p>
                    <button onClick={goBack} className="btn btn-primary mt-5">Go Back</button>
                </div>
            </div>
        </div>
    )
}

export default Error



