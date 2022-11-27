import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <>
            <div className="not-found">
                <div className="not-found-container">
                    <h1>404</h1>
                    <h2>Opps! Lights off, PAGE NOT FOUND</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.<a href='/'>Return to homepage</a></p>
                </div>
            </div>
        </>
    );
}

export default NotFound;