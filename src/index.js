import App from './js/components/App'
import ReactDOM from "react-dom";

const wrapper = document.getElementById("react-meteo-app");

wrapper 
    ? ReactDOM.render(<App />, wrapper) 
    : false;