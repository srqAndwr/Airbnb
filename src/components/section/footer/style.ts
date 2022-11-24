/*
 * @Author: shiruiqiang
 * @Date: 2022-10-18 11:47:44
 * @LastEditTime: 2022-10-19 16:48:44
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const SectionFooterWarpper = styled.div<{
    color?: string;
}>`
    margin-top: 8px;
    .content{
        display: flex;
        align-items: center;
        width: fit-content;
        padding: 4px 0;
        font-size: 17px;
        cursor: pointer;
        color: ${props => props.color ?? '#000'};
        .text{
            margin-right: 6px;
        }
        &:hover{
            text-decoration: underline;
        }
    }
`;