import { useContext, useEffect, useState } from "react";
import Advertisement from "../components/home/Advertisement";
import MainContext from "../context/MainContext";
import CategoryShower from './../components/home/CategoryShower';

const Home = () => {

    const [category, setCategory] = useState([])

    const { goods } = useContext(MainContext)


    useEffect(() => {
        setCategory([
            { id: 1, name: "Mobile" },
            { id: 2, name: "TV" }
        ])
    }, [])

    return (
        <div className='container mt-3'>
            <Advertisement />
            {category.map(item =>
                <CategoryShower key={item.id} goods={goods.filter(i => i.categoryId == item.id)} category={item} />
            )}
        </div>
    );
}

export default Home;