/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:57:50
 * @LastEditTime: 2022-11-05 22:12:57
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from 'styled-components';
export const LeftWarpper = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.isAlpha?'#fff':props.theme.color.primary};
`;