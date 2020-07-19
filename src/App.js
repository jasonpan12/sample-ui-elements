import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.scss';
import UIElement from './components/UIElement';
import TokenInfo from "./components/TokenInfo";
import BoxContext from './context/BoxContext';

function App() {
    let [token, setToken] = useState('')

    return (
        <div className="App content-container">
            <BoxContext.Provider value={{token, setToken}}>
            <TokenInfo/>
            <div className="ui-element">
                {token ? <UIElement/> : <div></div>}
            </div>
            </BoxContext.Provider>
        </div>
    );
}

export default App;
