import { useContext } from "react";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";
import MainContext from "../../context/MainContext";
import useLogin from './../../hooks/useLogin';

const Header = () => {

    let { basket } = useContext(MainContext)
    let navigate = useNavigate()
    let token = useLogin()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container d-flex justify-content-between'>
                <div className='flex-grow-1'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink
                                    className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
                                    to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {token ?
                    <div className='d-flex justify-content-center align-items-center'>
                        <button className="btn btn-success" onClick={() => navigate("/basket")}>Basket</button>
                        <p className='mx-3 my-0 py-0'>{basket.length}</p>
                    </div> :
                    <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button>
                }
            </div>
        </nav>
    );
}

export default Header;