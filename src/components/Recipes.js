import React from 'react';
import './recipes.css';
import { Link } from 'react-router-dom';

class Recipes extends React.Component{
    render(){
        const details = this.props
        return(
            <div className="card shadow p-3 mb-5 bg-white rounded border border-secondary m-2" style={{}}>
                <img style={{maxHeight:"35vh"}} src={details.details.image_url} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{details.details.title}</h5>
                    <p className="card-text">Publisher : {details.details.publisher}</p>
                    <a href={details.details.publisher_url} className="btn btn-block btn-outline-info" target="_blank">Publisher URL</a>
                    <Link to={{
                        pathname: `/recipe/${details.details.recipe_id}`,
                    }} className="btn btn-block btn-outline-primary" target="_blank">Get Details</Link>
                </div>
            </div>
        )
    }
}

export default Recipes;