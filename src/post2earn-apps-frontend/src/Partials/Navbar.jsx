export default function Navbar({isAuthenticated,login,logout}){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-transparent">
                <div className="container">
                    <a className="navbar-brand" href="#">Jeckie</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        {isAuthenticated ? (
                            
                            <li className="nav-item">
                            <a href='#' onClick={logout} data-bs-toggle="logout" className="nav-link">Sign Out</a>
                            
                            

                        </li>

                        ) : (
                            <li className="nav-item">
                                <a className="nav-link login" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Sign in</a>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Connect with Us!</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <button onClick={login} className="btn btn-outline-primary">
                                            <img src="https://cryptologos.cc/logos/internet-computer-icp-logo.png?v=035"  width="50" height="50" alt=""/>Connect with ICP
                                        </button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </li>
                        )}
                        
                    </ul>
                    </div>
                </div>
        </nav>

            

        </>
    )
}