import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import RecipeDetails from './components/RecipeDetails';

class Routes extends React.Component{
    render(){
        return(
            <Router basename="{process.env.PUBLIC_URL}">
                <Switch>
                    <Route path="/" exact render={(props) => <App {...props} />}/>
                    <Route path="/recipe/:id" render={(props) => <RecipeDetails {...props} />}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;