import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



const Passengers = () => {

    let [data, setData] = useState([])
    let [count, setCount] = useState(0)
    let [currentPage, setCurrentPage] = useState(0)


    const handleGetData = async () => {
        const { data: items } = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=100`)
        setData(items.data)
        setCount(items.totalPages)
    }

    const onPageChange = (data) => {
        setCurrentPage(data.selected)
    }

    useEffect(handleGetData, [currentPage])


    return (
        <div className='container'>
            {data.map(item =>
                <p>{item.name}</p>
            )}

            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={count}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
                onPageChange={onPageChange}
            />
        </div>
    );
}

export default Passengers;