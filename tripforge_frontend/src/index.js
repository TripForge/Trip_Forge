import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/Store/store";
import App from "./App";
import Navbar from "./Components/Navbar";
import UserProfile from "./Pages/UserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
<<<<<<< HEAD
      <Provider store={store}>
        <App />
      </Provider>
=======
    <Provider store={store}>
      <Navbar></Navbar>
      {/* <App /> */}
      <UserProfile></UserProfile>
    </Provider>
>>>>>>> e4592116b3b0531dc7c929c0ad11f260067329cd
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
