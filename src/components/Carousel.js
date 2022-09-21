import React from "react";
import CarouselItem from "./Carousel-Item";

function Carousel(props) {

    const [carousel, setCarousel] = React.useState(0);


    React.useEffect(()=>{
        if (carousel < 0) {
            setCarousel(props.data.length - 1)
        }else if (carousel >= props.data.length) {
            setCarousel(0)
        }
    }, [carousel,props.data.length])

    return (
        <div className={"carousel"}>
            <div className="carouselWrapper" style={{width: 100 * props.data.length + "%", left: -100*carousel+"%"}}>
                {props.data.map((itm, idx) =>
                    <CarouselItem key={idx} data={itm} wd={100 / props.data.length}/>
                )}
            </div>
            <div className={"arrows"}>
                <div className="arrow left" onClick={() => setCarousel(carousel-1)}>Left</div>
                <div className="arrow right" onClick={() => setCarousel(carousel+1)}>Right</div>
            </div>

        </div>
    )
}

export default Carousel;