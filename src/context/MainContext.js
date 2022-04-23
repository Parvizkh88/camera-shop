import { createContext } from "react";

const MainContext = createContext({
    goods: [],
    basket: [],
    setBasket: () => { }
})

export default MainContext;