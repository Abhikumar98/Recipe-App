import React from 'react';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';
// import data from './JsonData';
import './components/recipes.css';
import Loading from './components/Loading';


class App extends React.Component{
    constructor(props) {
        super()
        this.state = {
            loaded: false, //when not using api change to true
            recipes: [],
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.API = "8fa7f295c64d17abad9e518afcf0999a"
    }
    handleSearch(query = "") {
        this.setState({
            loaded: false
        })
        const modifiedQuery = query.trim().replace(/ /g, "%20")
        fetch(`https://www.food2fork.com/api/search?key=${this.API}&q=${modifiedQuery}`)
            .then((result) => result.json())
            .then((data) => {
                this.setState({
                    loaded: true,
                    recipes: data,
                })
            })
    }
    componentDidMount()
    {
        this.handleSearch()
    }
    render(){
        if(!this.state.loaded)
        {
            return <Loading />
        }
        else{
            return(
                <div>
                <SearchBar handleSearch={this.handleSearch} />
                <div className="d-flex flex-wrap justify-content-center m-2">
                    {
                        this.state.recipes.recipes ? this.state.recipes.recipes.map((item,i) => <Recipes details={item} key={i} />) 
                        : <h3>Sorry API Usage Limit is Crossed.<br/> Go to <a href="https://www.food2fork.com/register?_next=http%3A%2F%2Fwww.food2fork.com%2F" target="_blank">www.food2fork.com</a> and generate a new API-key and replace in the code. </h3>
                        // (data.recipes).map((item,i) => <Recipes details={item} key={i} />)
                    }
                </div>
                
            </div>
            )
        }
    }
}

export default App;