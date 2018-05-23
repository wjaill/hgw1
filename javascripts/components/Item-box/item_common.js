import React from "react"

const ItemSimple = (props)=>{
    let {data} = props
    return(
        <div className="item-sim">
            <img src={data.image}/>
            <span>{data.name}</span>
        </div>
    )
}
export default ItemSimple