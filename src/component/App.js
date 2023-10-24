import React,{Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import JSON from './db.json'

class App extends Component{
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }


    filterData=(keyword) => {
        let output = this.state.productData.filter((item) => {
            return (item.menu_name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })

        this.setState({filteredData:output})
    }



   render(){
        return(
            <>
                <Header userInput={(data) => {this.filterData(data)}}/>
                <Product prodData={this.state.filteredData}/>
                <Footer rname="F-Street" dname="Rushikesh Ingale"/>
            </>         
        )
    }
   
}

export default App;
