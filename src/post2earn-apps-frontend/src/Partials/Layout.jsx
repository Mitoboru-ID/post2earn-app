import Home from "./Home"
import Navbar from "./Navbar"
export default function Layout({isAuthenticated, login, logout}){
    return (
        <>
        <Navbar isAuthenticated={isAuthenticated} login={login} logout={logout}/>
         <Home/>
        </>
    )
}