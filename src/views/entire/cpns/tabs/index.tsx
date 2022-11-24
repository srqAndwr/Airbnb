/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 09:44:03
 * @LastEditTime: 2022-10-27 10:19:24
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import classNames from 'classnames';
import React, {memo, useState} from 'react';
import {EntireTabsWarpper} from './style';

const EntireTabs = memo((props: propsType) => {
	const {tabs, isFixed} = props;
	const [selectedTab, setSelectedTab] = useState<string[]>([]);
	const handleClick = (name: string) => {
		if (selectedTab.includes(name)) {
			const index = selectedTab.findIndex((item) => item === name);
			const tempArr = [...selectedTab];
			tempArr.splice(index, 1);
			setSelectedTab(tempArr);
		} else {
			setSelectedTab([...selectedTab, name]);
		}
	};
	return (
		<EntireTabsWarpper isFixed={isFixed}>
			{tabs.map((item) => {
				return (
					<div
						className={classNames('item', {
							active: selectedTab.includes(item),
						})}
						key={item}
						onClick={() => handleClick(item)}
					>
						{item}
					</div>
				);
			})}
		</EntireTabsWarpper>
	);
});

interface propsType {
	tabs: string[];
	isFixed: boolean;
}

export default EntireTabs;
