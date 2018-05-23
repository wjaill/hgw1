import React,{Component} from 'react'


class CLassList extends Component {
    
    render(){
        let {data} = this.props
        return(
            <div className="class-list">
                {
                    data.map((item)=>(
                        <a key={item.id}>
                            <img src={item.image} />
                            <span>{item.name}</span>
                        </a>
                    ))
                }
            </div>
        )
    }
}
export default CLassList