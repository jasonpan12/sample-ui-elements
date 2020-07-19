import React, {useContext, useEffect} from "react";
import BoxContext from '../context/BoxContext';

const axios = require('axios').default;

export default () => {
	const {token, setToken, tokenState, dispatchToken} = useContext(BoxContext);

	const onInputChange = (e) => {
		dispatchToken({type: "UPDATE_TOKEN", tokenState: e.target.value})
		// setToken(e.target.value);
	}

	return (
		<div>
			<h1>Token Used</h1>
			<input type="text" onChange={onInputChange} className="text-input" spellCheck={false}/>
			<p>{tokenState}</p>
		</div>
	)
};
