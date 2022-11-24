/*
 * @Author: shiruiqiang
 * @Date: 2022-10-31 10:54:51
 * @LastEditTime: 2022-11-05 22:21:37
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const HeaderExtendTabsWarpper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .tabs{
        display: flex;
        align-items: center;

        .tab{
            margin: 10px 16px;
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
            opacity: 1;
            color: ${props => props.theme.isAlpha?'#fff':props => props.theme.text.primary};
            &:hover > span:not(.active){
                opacity: 0.65;
                &::after{
                    opacity: 0.65;
                    transform: scaleX(1);
                } 
            }
            span{
                position: relative;
                &::after{
                    position: absolute;
                    top: calc(100% + 8px);
                    left: 0;
                    content: '';
                    width: 100%;
                    height: 2px;
                    transform: scaleX(0);
                    transition: transform 200ms ease;
                    background-color: ${props => props.theme.isAlpha?'#fff':props => props.theme.text.primary};
                }
            }
            .active{
                position: relative;
                &::after{
                    position: absolute;
                    top: calc(100% + 8px);
                    left: 0;
                    content: '';
                    width: 100%;
                    height: 2px;
                    transform: scaleX(1);
                    background-color: ${props => props.theme.isAlpha?'#fff':props => props.theme.text.primary};
                }
            }
        }
    }
`;