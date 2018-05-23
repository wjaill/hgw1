import React,{Component} from 'react'
import Header from "../header"
import Footer from "../footer/footer"
import Banner from "./Banner"
import ClassList from "./ClassList"
import Content from "./Content"
import axios from "axios"


const HeaderBtn = (props)=>(
	<a className={props.className}><i className={`fa fa-${props.type}`}></i></a>
)


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:{
                bannerList:[],
                classList:[],
                themeList:[]
            },
            count:0
        }
    }

    componentWillMount(){
        let that = this

        axios.post('/dola/app/mainpage/newgetmainpagelist', {
            page:1
        }).then(function ({data}) {
            that.setState({data:data.data}) 
        })
    }
    render(){
        let {pathname} = this.props.location
        let {data,count} = this.state
        return(
            <div>
                <Header 					
					right={<HeaderBtn className="right" type="search" />}
					text={'首页'}
				/>
                <Banner data={data.bannerList}/>
                <ClassList data={data.classList}/>
                <Content data={data.themeList}/>
                <Footer pathname={pathname}/>
            </div>
        )
    }

}
export default Home 