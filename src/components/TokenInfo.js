import React, {useContext} from "react";
import BoxContext from '../context/BoxContext';

export default () => {
	const {token, setToken} = useContext(BoxContext);

	const onInputChange = (e) => {
		setToken(e.target.value);
		console.log('set token');
	}

	return (
		<div>
			<h1>Token Used</h1>
				<input type="text" onChange={onInputChange} className="text-input" spellCheck={false}/>
		</div>
	)
};
