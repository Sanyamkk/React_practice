import React from "react"
import ReactDOM from "react-dom/client"

// making react elem using jsx

const Heading1=<h5 className="h1">hey i am basic react elem using jsx style</h5>;

// making basic react functional comp

const Title=()=>{
    return (
        <h5 className="h2">
            hey i am from Title
        </h5>
    )
}
const Heading2=()=>{
    return (
        <div className="container">
            <h5> hey i am from div of heading2</h5>
            {/* this below is component composition using another comp into another */}
            {Heading1}
            <Title />
        </div>
    )
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2/>);