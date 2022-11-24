/*
 * @Author: shiruiqiang
 * @Date: 2022-10-13 11:44:26
 * @LastEditTime: 2022-11-22 17:17:18
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import ReactDOM from 'react-dom/client';
import App from '@/App';
import 'normalize.css';
import '@/assets/css/index.less';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { theme } from '@/assets/theme';
import { store } from 'model/index';
import { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Suspense fallback={<div>loading</div>}>
				<Router>
					<App />
				</Router>
			</Suspense>
		</ThemeProvider>
	</Provider>
);
