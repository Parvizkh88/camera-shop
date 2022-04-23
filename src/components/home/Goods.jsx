import { useNavigate } from "react-router";

const Goods = ({ title, description, goodsId }) => {

    let navigate = useNavigate();

    const handleGoToDetail = () => {
        navigate(`/goods/${goodsId}`)
    }

    return (
        <div className='col-12 col-md-6 col-lg-4 my-2'>
            <div className="card " >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-primary" onClick={handleGoToDetail}>Detail</button>
                </div>
            </div>
        </div>
    );
}

export default Goods;