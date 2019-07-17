import React from 'react';
import Loading from './Loading.js';
import Ingredients from './Ingredients';

class RecipeDetails extends React.Component{
    constructor(props) {
        super()
        this.state = {
            loaded: false, //when not using api change to true
            recipeDetail: []
        }
        this.handleDetailSearch = this.handleDetailSearch.bind(this);
        this.API = "8fa7f295c64d17abad9e518afcf0999a"
    }
    async handleDetailSearch() {
        this.setState({
            loaded: false
        })
        const id = (this.props.location.pathname).split("/")[2]
        console.log("url params ======>", id)
        const response = await fetch(`https://www.food2fork.com/api/get?key=${this.API}&rId=${id}`)
        const json = await response.json()
        this.setState({
            loaded: true,
            recipeDetail: json
            })
    }
    componentDidMount(){
        this.handleDetailSearch()
    }
    render(){
        const recipe = this.state.recipeDetail.recipe;
        if(!this.state.loaded)
        {
            console.log("loading")
            return <Loading />
        }
        else{
            return(
                <div>
                {
                    this.state.recipeDetail.recipe ? 
                    <div id="recipe-detail" className="row shadow p-3 mb-5 bg-white rounded border border-secondary m-2">
                        <div style={{textAlign: "center"}} className="col">
                            <img responsive rounded style={{width:"44vw",alignSelf : "center"}} src={recipe.image_url} className="m-2" alt="" />
                        </div>
                        <div className="col">
                            {console.log(recipe.ingredients)}
                            <h5 className="card-title">{recipe.title}</h5>                            
                            <p className="card-text">Publisher : {recipe.publisher}</p>
                            <Ingredients ingredients={recipe.ingredients}/>
                            <a href={recipe.publisher_url} bsSize="large" className="btn btn-outline-info m-2" target="_blank">Publisher</a>
                            <a href={recipe.source_url} bsSize="large" className="btn  btn-outline-primary m-2" target="_blank">Go to Recipe</a>
                        </div>
                    </div>
                    
                    : <h1>API usage over </h1>
                }
            </div>
        )
            }
    }
}

export default RecipeDetails;