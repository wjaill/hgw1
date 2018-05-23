import React,{Component} from "react"
import ItemBox from "../Item-box"

class Content extends Component {
    render(){
        let {data} = this.props
        return(
            <div>
                {
                    data.map(item=>(
                        <ItemBox data={item} key={item.id}/>
                    ))
                }
            </div>
        )
    }
}

export default Content