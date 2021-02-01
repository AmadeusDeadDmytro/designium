import React from 'react';
import App from 'next/app';
import GlobalStyles from '../styles/globalStyles'
import { AnimateSharedLayout } from 'framer-motion'

import 'antd/dist/antd.css';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<AnimateSharedLayout>
				<GlobalStyles />
				<Component {...pageProps} />
			</AnimateSharedLayout>
		);
	}
}

export default MyApp;