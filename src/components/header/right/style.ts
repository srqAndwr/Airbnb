/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 17:00:45
 * @LastEditTime: 2022-11-05 22:17:58
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from 'styled-components'
export const RightWarpper = styled.div`
   position: relative;
   display: flex;
   justify-content: flex-end;
   height: 100%;
   width: 100%;
   flex:1;
   color: ${props => props.theme.isAlpha?'#fff':props.theme.text.secondary};
   .nav{
      display: flex;
      align-items: center;
      margin-right: 8px;
      .nav-item{
         position: relative;
         padding: 12px;
         background-color: transparent;
         transition: color 250ms ease;
         cursor: pointer;
         z-index: 1;
         &::before{
            position: absolute;
            top: 0;
            bottom: 0;
            content: '';
            z-index: -1;
            border-radius: 22px;
            left: -3px;
            right: -3px;
         }
         &:hover::before{
            background-color: ${props => props.theme.isAlpha?'rgba(255,255,255,.15)':'#f7f7f7'};
         }
      }
   }
   .menu{
      display: flex;
      align-items: center;
      .box{
         display: flex;
         align-items: center;
         background-color: #fff;
         border: 1px solid #dddddd;
         border-radius: 21px;
         padding: 5px 5px 5px 12px;
         transition: box-shadow 0.2s ease;
         color: #717171;
         ${props => props.theme.mixin.shadow}
         .avatar{
            margin-left: 12px;
         }
      }
      
   }
   .drop-down{
      position: absolute;
      min-width: 240px;
      top: 50%;
      right: 0;
      padding: 8px 0;
      margin-top: 34px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 0 36px 4px rgb(0 0 0 / 12%);
      z-index: 2;
      color: ${props => props.theme.text.primary};
      .top,.bottom{
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
      }
      .item{
         padding: 12px 16px;
         &:not(.register){
            font-weight: 400;
         }
         &:hover:not(:active){
            background-color: #f7f7f7;
            cursor: pointer;
         }
      }
      .line{
         margin: 8px 0;
         height: 1px;
         background-color: #ddd;
      }
   }
`;


