import React from "react";

function CarouselItem(props){
    return(
        <div className={"carousel-item"} style={{width: props.wd+"%"}}>
            {props.data}
        </div>
    )
}
export default CarouselItem;