import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import RestroCard from "./components/RestroCard"
import Body from "./components/Body"
import "../style.css"

const AppLayout=()=>{
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/*
we are using restor card for all restro hence we need to send data 
dynamically we can not fill all the data in the card hence we need
to send data as props to the card and we can use that data to fill 
the card


props are just normal arguments to a functon 
passing a prop to a comp is same as passing a argument to a function 
in cpp 

we can do destructuring in props as well like we do in normal js objects
like ({resName,cusine}) and then we can use resName and cusine directly in the card
*/
/*
config driven UI like i have some offers in swiggy for dehradun 
but these offers are not same for all the cities. 
so we can not hardcode these offers in the code so we can create
a config file and then we can use that config file to render the 
offers in the UI.

*/