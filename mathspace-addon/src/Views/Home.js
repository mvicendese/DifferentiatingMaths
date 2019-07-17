import React from 'react';
import ReactDOM from "react-dom";
import UnitSelect from "../Components/UnitSelect"
import MesGeo from "../Topics/MesGeo"
import NumAlg from "../Topics/NumAlg";
import StatProb from "../Topics/StatProb";



function Home() {
    var topics = ["Numbers and Algebra", "Measurements and Geometry", "Statistics and Probability"];
    var links = [NavNumAlg, NavMesGeo,NavStatProb];
    var numItems = 3;
    return (

        //create array and pass that into var on Unit select component

        <div className={"app"}>
        <label for = "unitSelect">Select a study topic for your class</label>
        <nav><UnitSelect topics={topics} links={links} numItems={numItems} ></UnitSelect></nav>
        </div>
    );

}
function NavNumAlg(){
    ReactDOM.render(<NumAlg />, document.getElementById('root'))
};

function NavMesGeo() {
    ReactDOM.render(<MesGeo />, document.getElementById('root'))
}
function NavStatProb() {
    ReactDOM.render(<StatProb />, document.getElementById('root'))
}


export default Home;
