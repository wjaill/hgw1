import React from "react"

const ItemBut =(props)=>{
    return (
        <button className="theme-button">开始</button>
    )
}

const ItemCommon =(props)=>{
    let {data} = props
    return(
        <div className="item-cen">
            <div className="item-cenone">
                <img src={data.image}/>
                <div>
                    <span>{data.name}</span>
                    <span>
                        {
                            data.labelList.map((item,i)=>(
                                <label style={{background:item.color}} key={i}>{item.name}</label>
                            ))
                        }
                    </span>           
                    <span>{data.description}</span>                                            
                </div>
                <ItemBut/>
            </div>
            
        </div>
    )
}

export default ItemCommon