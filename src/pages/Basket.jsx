import { useContext } from "react";
import MainContext from "../context/MainContext";
import useLogin from './../hooks/useLogin';
import { useNavigate } from 'react-router';

const Basket = () => {
    let token = useLogin()
    let navigate = useNavigate()
    if (!token) navigate("/login")

    const { basket } = useContext(MainContext)


    let totalAmount = 0;
    for (let item of basket) {
        totalAmount += parseInt(item.price)
    }

    return (
        <div className='container'>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {basket.map((item, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='d-flex justify-content-end align-items-center'>
                <p className='mx-2'>Total Amount:</p>
                <p className='fw-bold'>{totalAmount}</p>
            </div>
        </div>
    );
}

export default Basket;