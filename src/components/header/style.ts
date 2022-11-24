/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:39:42
 * @LastEditTime: 2022-11-05 22:11:57
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from 'styled-components'
export const HeaderWarpper = styled.div<{
    isFixed: boolean;
}>`
    top:0;
    position: ${props => props.isFixed ? 'fixed' : 'static'};
    z-index: 999;
    .outer{
        position: relative;
        padding: 0 24px;
        width: 100vw;
        z-index: 9;
        background-color: ${props => props.theme.isAlpha?'rgba(255,255,255,0)':'#fff'};
        box-shadow: rgb(0 0 0 / 8%) 0 1px 1px;
        .content{
            display:flex;
            height: 80px;
        }
    }
    .cover{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        background-color: rgba(0,0,0,0.25);
    }
`;

export const HeaderExtendWarpper = styled.div<{
    isExtend: boolean;
}>`
    height: ${props => props.isExtend ? '100px' : '0px'};
    transition: height 250ms ease;
`;