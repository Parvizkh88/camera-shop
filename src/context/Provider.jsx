import { useEffect, useState } from "react";
import MainContext from "./MainContext";

const Provider = ({ children }) => {


    const [goods, setGoods] = useState([])
    const [basket, setBasket] = useState([])

    useEffect(() => {
        setGoods([
            { id: 1, categoryId: 1, title: "Samsung A51", price: "1000", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid accusantium deleniti minima assumenda delectus officiis ipsum eos, adipisci porro similique et tempora, magni recusandae possimus vel cumque, atque obcaecati!" },
            { id: 2, categoryId: 1, title: "Samsung A71", price: "500", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid accusantium deleniti minima assumenda delectus officiis ipsum eos, adipisci porro similique et tempora, magni recusandae possimus vel cumque, atque obcaecati!" },
            { id: 3, categoryId: 1, title: "Samsung S21", price: "700", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid accusantium deleniti minima assumenda delectus officiis ipsum eos, adipisci porro similique et tempora, magni recusandae possimus vel cumque, atque obcaecati!" },
            { id: 4, categoryId: 1, title: "Samsung S52", price: "400", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid accusantium deleniti minima assumenda delectus officiis ipsum eos, adipisci porro similique et tempora, magni recusandae possimus vel cumque, atque obcaecati!" },
            { id: 5, categoryId: 2, title: "LG 50 inch", price: "200", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid accusantium deleniti minima assumenda delectus officiis ipsum eos, adipisci porro similique et tempora, magni recusandae possimus vel cumque, atque obcaecati!" },
            { id: 6, categoryId: 2, title: "Samsung 40 inch", price: "500", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid accusantium deleniti minima assumenda delectus officiis ipsum eos, adipisci porro similique et tempora, magni recusandae possimus vel cumque, atque obcaecati!" },
        ])
    }, [])

    return (
        <MainContext.Provider value={{ goods, basket, setBasket }}>
            {children}
        </MainContext.Provider>
    );
}

export default Provider;