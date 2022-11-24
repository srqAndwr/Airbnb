/*
 * @Author: shiruiqiang
 * @Date: 2022-10-19 21:05:05
 * @LastEditTime: 2022-10-20 15:59:58
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import {theme} from '@/assets/theme';
import Section from '@/components/section';
import {useDataMapTab} from '@/hooks/useDataMapTab';
import {discount} from '@/model/types/discount';
import {getObjIndexKey, getObjIndexValue} from '@/utils';
import React, {memo, useState} from 'react';

const Discount = memo((props: propsType) => {
	const {discountInfo} = props;
	const list =
		discountInfo?.dest_list?.[getObjIndexKey(discountInfo?.dest_list, 0)];
	const tabs = useDataMapTab(discountInfo!)(discountInfo?.dest_address);
	const [discountList, setDiscountList] = useState(list);
	const [name, setName] = useState(
		getObjIndexKey(discountInfo?.dest_list, 0)
	);
	const changTab = (index: number, payload: string) => {
		if (!tabs.includes(payload)) return;
		setName(payload);
		setDiscountList(getObjIndexValue(discountInfo!.dest_list, index));
	};
	return (
		<Section
			sectionInfo={discountList}
			tabs={tabs}
			changTab={changTab}
			title={discountInfo?.title}
			subtitle={discountInfo?.subtitle}
			sectionItemWidth='calc(100% / 3)'
			sectionFooter={{
				name,
				color: theme.color.secondary,
			}}
		/>
	);
});

interface propsType {
	discountInfo?: discount;
}

export default Discount;
