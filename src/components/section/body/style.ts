/*
 * @Author: shiruiqiang
 * @Date: 2022-10-18 08:53:11
 * @LastEditTime: 2022-10-29 09:57:22
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const SectionBodyWarpper = styled.div<{
    sectionItemWidth: string;
    verifyInfoColor?: string;
    rateStyle?: { color?: string; size?: string; };
}>`
    padding: 8px 8px 12px 8px;
    cursor: pointer;
    width: ${props => props.sectionItemWidth};
    flex-shrink: 0;
    flex-basis: ${props => props.sectionItemWidth};
    .cover{
        width: 100%;
        aspect-ratio: 3 / 2;
        border-radius: 3px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .description{
        padding-top: 8px;
        .verify-info{
            display: flex;
            align-items: center;
            font-size: 12px;
            color: ${props => props.verifyInfoColor ?? '#767676'};
            .plus-box{
                margin-right: 4px;
                padding: 1px 2px;
                border-radius: 3.2px;
                color: #fff;
                font-size: 10px;
                font-weight: 700;
                background-color: ${props => props.verifyInfoColor ?? '#767676'};
            }
        }
        .name{
            margin-top: 4px;
            font-size: 16px;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .price{
            vertical-align: middle;
            margin-top: 4px;
            font-weight:400;
            font-size: 12px;
            font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
        }
        .rate{
            display: flex;
            align-items: center;
            font-size: ${props => `${props?.rateStyle?.size ?? 10}px`};
            color: ${props => props?.rateStyle?.color ?? props.theme.text.secondary};
            z-index:1;
            .review{
                margin-left:2px;
            }
        }
    }
`;