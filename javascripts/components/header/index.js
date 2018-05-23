import React,{Component} from 'react'

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let {left,right,text} = this.props
        return(
            <div className="header">
                {left||<div className="left"></div>}
                <h1>{text}</h1>
                {right||<div className="right"></div>}
            </div>
        )
    }
}
export default Home 