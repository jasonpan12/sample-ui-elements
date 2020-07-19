import React, {useContext, useState} from "react";
import {ContentExplorer} from "box-ui-elements";
import {IntlProvider} from "react-intl";
import BoxContext from "../context/BoxContext";

export default () => {
	const {tokenState} = useContext(BoxContext);
	// const {token} = useContext(BoxContext);

	return (
		<IntlProvider locale="en">
			<ContentExplorer token={tokenState}/>
		</IntlProvider>
	);
}
