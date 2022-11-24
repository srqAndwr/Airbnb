/*
 * @Author: shiruiqiang
 * @Date: 2022-10-19 16:18:47
 * @LastEditTime: 2022-11-13 11:24:10
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo} from 'react';
import {useState} from 'react';
import classnames from 'classnames';

import {SectionTabsWarpper} from './style';
import ScrollView from '@/components/scroll-view';

const SectionTabs = memo((props: propsType) => {
	const {tabs, changTab} = props;
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleClick = (index: number, currentName: string) => {
		setCurrentIndex(index);
		changTab(index, currentName);
	};
	return (
		<SectionTabsWarpper>
			<ScrollView isShowCover={true}>
				{tabs.map((item, index) => {
					return (
						<div
							key={item}
							className={classnames('item', {
								active: index === currentIndex,
							})}
							onClick={() => handleClick(index, item)}
						>
							{item}
						</div>
					);
				})}
			</ScrollView>
		</SectionTabsWarpper>
	);
});

interface propsType {
	tabs: string[];
	changTab: (index: number, payload: string) => void;
}

export default SectionTabs;
