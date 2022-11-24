/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:52:43
 * @LastEditTime: 2022-11-12 20:03:17
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo, useEffect, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import HeaderExtendTabs from '../extend/tabs';
import {CenterWarpper} from './style';
import SearchData from '@/contants/search_titles.json';
import IconSearch from '@/assets/svg/icon-search';
import HeaderExtend from '../extend';

const HeaderCenter = memo((props: PropsType) => {
	const [currentTab, setCurrentTab] = useState(0);
	const tabs = SearchData.map((item) => item.title);
	let searchInfos = SearchData.map((item) => item.searchInfos);
	const handleTabChange = (index: number) => {
		setCurrentTab(index);
	};
	const {isExtend = false, ClickCallBack = () => {}} = props;
	useEffect(() => {
		if (!isExtend) setCurrentTab(0);
	}, [isExtend]);
	return (
		<CenterWarpper>
			<CSSTransition
				in={!isExtend}
				timeout={250}
				classNames='bar'
				unmountOnExit={true}
			>
				<div className='search-bar' onClick={ClickCallBack}>
					<div className='input-box'>
						<div className='search-placeholder'>搜索房源和体验</div>
						<div className='search-btn'>
							<IconSearch />
						</div>
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={isExtend}
				timeout={250}
				classNames='detail'
				unmountOnExit={true}
			>
				<div className='search-detail'>
					<HeaderExtendTabs
						tabs={tabs}
						indexChange={handleTabChange}
					/>
					<div className='infos'>
						<HeaderExtend searchInfo={searchInfos[currentTab]} />
					</div>
				</div>
			</CSSTransition>
		</CenterWarpper>
	);
});

interface PropsType {
	isExtend: boolean;
	ClickCallBack?: (...args: any) => void;
}

export default HeaderCenter;
