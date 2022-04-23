import Carousel from "react-multi-carousel";
import adver1 from '../../asset/image/adver1.jpg'
import adver2 from '../../asset/image/adver2.jpg'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Advertisement = () => {


    return (
        <div style={{ maxWidth: "500px", margin: "auto" }}>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <img src={adver1} className='text-center d-flex mx-auto' />
                <img src={adver2} className='text-center d-flex mx-auto' />
            </Carousel>
        </div>


    );
}

export default Advertisement;