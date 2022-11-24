/*
 * @Author: shiruiqiang
 * @Date: 2022-10-13 11:44:26
 * @LastEditTime: 2022-10-26 11:14:32
 * @LastEditors: shiruiqiang
 * @FilePath: App.tsx
 * @Description:
 */
import {routes} from './router';
import {useRoutes} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import {Fragment} from 'react';
import {useScrollTop} from './hooks/useScrollTop';

function App() {
	useScrollTop();
	return (
		<Fragment>
			<Header />
			<div>{useRoutes(routes)}</div>
			<Footer />
		</Fragment>
	);
}

export default App;
