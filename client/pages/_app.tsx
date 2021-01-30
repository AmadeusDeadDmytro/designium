import React from 'react';
import App from 'next/app';
import GlobalStyles from '../styles/globalStyles'

import '../styles/antd.less'

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<React.Fragment>
				<GlobalStyles />
				<Component {...pageProps} />
			</React.Fragment>
		);
	}
}

export default MyApp;