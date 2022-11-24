/*
 * @Author: shiruiqiang
 * @Date: 2022-10-19 21:05:05
 * @LastEditTime: 2022-10-20 15:59:23
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import {theme} from '@/assets/theme';
import Section from '@/components/section';
import {useDataMapTab} from '@/hooks/useDataMapTab';
import {hotRecommend} from '@/model/types/hotRecommend';
import {getObjIndexKey, getObjIndexValue} from '@/utils';
import React, {memo, useState} from 'react';

const HotRecommed = memo((props: propsType) => {
	const {hotRecommendInfo} = props;
	const list =
		hotRecommendInfo?.dest_list?.[
			getObjIndexKey(hotRecommendInfo?.dest_list, 0)
		];
	const tabs = useDataMapTab(hotRecommendInfo!)(
		hotRecommendInfo?.dest_address
	);
	const [hotRecommedList, setHotRecommedList] = useState(list);
	const [name, setName] = useState(
		getObjIndexKey(hotRecommendInfo?.dest_list, 0)
	);
	const changeTab = (index: number, payload: string) => {
		if (!tabs.includes(payload)) return;
		setName(payload);
		setHotRecommedList(
			getObjIndexValue(hotRecommendInfo!.dest_list, index)
		);
	};

	return (
		<Section
			sectionInfo={hotRecommedList}
			tabs={tabs}
			changTab={changeTab}
			title={hotRecommendInfo?.title}
			subtitle={hotRecommendInfo?.subtitle}
			sectionItemWidth='calc(100% / 3)'
			sectionFooter={{
				name,
				color: theme.color.secondary,
			}}
		/>
	);
});

interface propsType {
	hotRecommendInfo?: hotRecommend;
}

export default HotRecommed;
