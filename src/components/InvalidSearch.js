import React from 'react';

const InvalidSearch = () => {
    return(
        <div id="error-msg">
            <span>Sorry, we don't have any food that could be made 
                    out of this ingredient
            <br/> Try searching another ingredient/recipe something else.
            </span>
        </div>
    )
}

export default InvalidSearch;