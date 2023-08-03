import React from "react";
import Card from "./card";
function Component(props) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie Review</h1> 
                <Card movname="The Dark Knight" year="2008" />
                <Card movname="Moonfall" year="2022"/>
                
            </header>
        </div>
    );
}
export default Component;