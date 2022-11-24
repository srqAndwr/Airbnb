/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:33:41
 * @LastEditTime: 2022-11-22 16:56:33
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, { memo, lazy } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
	RouteProps,
	RouteObject,
} from 'react-router-dom';
import Header from 'components/header/';
import Footer from 'components/footer/';
const Home = lazy(() => import('views/home'));
const Entire = lazy(() => import('views/entire'));
const Detail = lazy(() => import('views/detail'));
// const AppRouter = memo(() => {
// 	return (
// 		<Router>
// 			<Header />
// 			<Routes>
// 				<Route
// 					path='/'
// 					element={<Navigate to='/home'></Navigate>}
// 				></Route>
// 				<Route path='/home' element={<Home />}></Route>
// 				<Route path='/entire' element={<Entire />}></Route>
// 				<Route path='/detail' element={<Detail />}></Route>
// 			</Routes>
// 			<Footer />
// 		</Router>
// 	);
// });

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to={'/home'} />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/entire',
		element: <Entire />,
	},
	{
		path: '/detail',
		element: <Detail />,
	},
];

// export default AppRouter;
