import { useState } from "react";
import Goods from "./Goods";

const CategoryShower = ({ category, goods }) => {


    return (
        <div className='row my-3'>
            <h3 className='fw-bolder'>{category.name}</h3>
            {goods.map((item, index) => (
                <Goods key={item.id} title={item.title} description={item.description} goodsId={item.id} />
            ))}
        </div>
    );
}

export default CategoryShower;