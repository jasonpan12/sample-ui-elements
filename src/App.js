import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.scss';
import UIElement from './components/UIElement';
import TokenInfo from "./components/TokenInfo";
import BoxContext from './context/BoxContext';
import tokenReducer from "./reducers/tokenReducer";

function App() {
    let [token, setToken] = useState('');
    let [tokenState, dispatchToken] = useReducer(tokenReducer, '')

    return (
        <div className="App content-container">
            <BoxContext.Provider value={{token, setToken, tokenState, dispatchToken}}>
            <TokenInfo/>
            <div className="ui-element">
                {tokenState ? <UIElement/> : <div></div>}
            </div>
            </BoxContext.Provider>
        </div>
    );
}

export default App;
