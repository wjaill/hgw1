import React,{Component} from "react"
import ItemCommon from "./item_common"
import ItemSimple from "./item_simple"

class ItemBox extends Component {

    render(){
        let {data} = this.props
        let Item = data.type === '1'?ItemCommon:ItemSimple
        return(
            <div className="item-box">
               <div className="item-head">
                    <span>{data.title}</span>
                    {
                       data.type==='1'?<span>更多</span>:''
                    }
               </div>
               {
                    data.imageId==='0'?'':<img width="100%" src={data.image} alt=""/>
                }
               <div className="item-body">
                    {
                       data.gameList.map(item=>(
                           <Item data={item} key={item.id}/>
                       ))
                    }
               </div>
            </div>
        )
    }
}

export default ItemBox