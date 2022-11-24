/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 15:58:11
 * @LastEditTime: 2022-10-20 17:36:34
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo} from 'react';
import {FooterWarpper} from './style';
import footerData from '@/contants/footer.json';
import LinkSection from './link-section';
import IconFooterLog from '@/assets/svg/icon-footer-log';
import IconWeibo from '@/assets/svg/icon-weibo';
import IconWeixin from '@/assets/svg/icon-weixin';
const Footer = memo(() => {
	return (
		<FooterWarpper>
			<div className='outer'>
				<footer>
					<div className='top'>
						{footerData.map((item) => {
							return (
								<LinkSection key={item.id} sectionInfo={item} />
							);
						})}
					</div>
					<div className='bottom'>
						<div className='left-info'>
							<IconFooterLog />
							<div className='text-area'>
								<div>
									京ICP备16017121号&nbsp;&nbsp;京ICP证
									160773号&nbsp;&nbsp;京公网安备
									11010502032345号&nbsp;&nbsp;
									安彼迎网络（北京）有限公司&nbsp;&nbsp;
								</div>
								<div>
									© 2022 Airbnb, Inc. All rights
									reserved.&nbsp;&nbsp;条款&nbsp;·&nbsp;隐私政策&nbsp;·&nbsp;网站地图&nbsp;·&nbsp;全国旅游投诉渠道
									12301
								</div>
							</div>
						</div>
						<div className='right-info'>
							<IconWeibo />
							<IconWeixin />
						</div>
					</div>
				</footer>
			</div>
		</FooterWarpper>
	);
});

export default Footer;
