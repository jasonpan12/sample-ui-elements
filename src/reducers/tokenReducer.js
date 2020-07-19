export default (state, action) => {
	switch (action.type) {
		case 'UPDATE_TOKEN':
			return action.tokenState;
	}
}
