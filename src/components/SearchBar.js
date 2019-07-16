import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component{
    constructor(props)
    {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {
        this.props.handleSearch(this.inputRef.value)
    }
    handleSubmit(e){
        e.preventDefault();
        this.formRef.reset()
    }
    render(){
        return(
            <div>
                <h1 style={{textAlign : "center"}}>Recipe Search</h1>
                <form className="d-flex justify-content-center" onSubmit={this.handleSubmit} ref = {input => this.formRef = input}>
                    <input style={{width : "50vw"}} type="text" placeholder="Recipe to search" className="form-control" ref={input => this.inputRef = input} />
                    <button className="btn btn-primary ml-2" onClick={this.handleClick}>Search</button>
                    <Link to="/">
                        <button className="btn btn-primary ml-2" onClick={this.handleClick}>Home</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default SearchBar;