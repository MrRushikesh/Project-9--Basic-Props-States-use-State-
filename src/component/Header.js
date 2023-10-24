import React, { Component } from "react";
import './header.css';


class Header extends Component{
    constructor(){
        super() 

        this.state = {
            rname : "F-Street",
            keyword : "user text here"
        }
    }

    handleChange = (event) => {
        this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value)
    }


    render(){
        return(
            <>
            <header>
                {/* <!--Navbar Section Start From Here--> */}
                <nav className="navbar">
                    <div className="left">
                        <h1>{this.state.rname}</h1>
                    </div>
                    <div className="right">
                        <input type="text" onChange={this.handleChange} placeholder="Search You'r Dish"/>
                    </div>
                </nav>
                {/* <!--Navbar Section Close Here--> */}
            </header>
            </>
        )
    }    
}

export default Header;