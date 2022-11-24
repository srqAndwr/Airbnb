/*
 * @Author: shiruiqiang
 * @Date: 2022-10-31 10:54:47
 * @LastEditTime: 2022-11-05 20:35:09
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo, useState} from 'react';
import classNames from 'classnames';

import {HeaderExtendTabsWarpper} from './style';
const HeaderExtendTabs = memo((props: PropsType) => {
	const {tabs, indexChange} = props;
	const [currentIndex, setCurrentIndex] = useState(0);
	const handleTabChange = (index: number) => {
		setCurrentIndex(index);
		indexChange(index);
	};
	return (
		<HeaderExtendTabsWarpper>
			<div className='tabs'>
				{tabs.map((tab, index) => {
					return (
						<div
							className='tab'
							key={tab}
							onClick={() => handleTabChange(index)}
						>
							<span
								className={classNames({
									active: index === currentIndex,
								})}
							>
								{tab}
							</span>
						</div>
					);
				})}
			</div>
		</HeaderExtendTabsWarpper>
	);
});

interface PropsType {
	tabs: string[];
	indexChange: (index: number) => void;
}

export default HeaderExtendTabs;
