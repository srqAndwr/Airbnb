"use strict";(self.webpackChunkairbnb=self.webpackChunkairbnb||[]).push([[357],{2357:function(n,i,e){e.r(i),e.d(i,{default:function(){return rn}});var t,o,r,s,l,d,c,a,u=e(2791),x=e(6243),v=e(4165),h=e(5861),f=e(9093),p=e(9829),m=e(7423),g=(0,p.hg)("fetchHomePrice",function(){var n=(0,h.Z)((0,v.Z)().mark((function n(i,e){var t;return(0,v.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.dispatch,(0,f.yB)().then((function(n){t((0,m.rm)(n))})),(0,f.xf)().then((function(n){t((0,m.Zl)(n))})),(0,f.YD)().then((function(n){t((0,m.Li)(n))})),(0,f.AN)().then((function(n){t((0,m.RJ)(n))})),(0,f.fL)().then((function(n){t((0,m.Q2)(n))})),(0,f.Lr)().then((function(n){t((0,m.e0)(n))}));case 7:case"end":return n.stop()}}),n)})));return function(i,e){return n.apply(this,arguments)}}()),b=e(168),j=e(8789),w=j.ZP.div(t||(t=(0,b.Z)(["\n    .banner{\n        background-image: linear-gradient(to bottom,rgba(0, 0, 0, .3) 0%,rgba(0, 0, 0, .0) 300px,rgba(0, 0, 0, 0) 100%),url('./assets/img/home-cover.jpeg');\n    }\n    img{\n        width: 100%;\n        height: 100%;\n    }\n"]))),y=e(5048),N=e(1413),Z=e(9812),k=e(6424),I=e(4508),S=e(7689),_=j.ZP.div(o||(o=(0,b.Z)(["\n    margin-top: 8px;\n    .content{\n        display: flex;\n        align-items: center;\n        width: fit-content;\n        padding: 4px 0;\n        font-size: 17px;\n        cursor: pointer;\n        color: ",";\n        .text{\n            margin-right: 6px;\n        }\n        &:hover{\n            text-decoration: underline;\n        }\n    }\n"])),(function(n){var i;return null!==(i=n.color)&&void 0!==i?i:"#000"})),z=e(184),C=(0,u.memo)((function(n){var i=n.name,e=void 0===i?void 0:i,t=n.color,o=void 0===t?void 0:t,r=(0,S.s0)(),s=(0,x.T)();return(0,z.jsx)(_,{color:o,onClick:function(){r("/entire")},children:(0,z.jsxs)("span",{className:"content",onClick:function(){s((0,I.$q)(!1))},children:[(0,z.jsx)("span",{className:"text",children:e?"\u67e5\u770b".concat(e,"\u623f\u6e90"):"\u663e\u793a\u5168\u90e8"}),(0,z.jsx)(k.Z,{})]})})})),P=j.ZP.div(r||(r=(0,b.Z)(["\n    display: flex;\n    margin-bottom: 24px;\n    .title-box{\n        cursor: pointer;\n        color: ",";\n        .title{\n            font-size: 22px;\n            margin: 0;\n            padding: 0;\n        }\n        .subtitle{\n            font-size: 16px;\n            line-height: 24px;\n            margin-top: 12px;\n            font-weight: 400;\n            margin-bottom: 8px;\n        }\n        &:hover + .arrow{\n            opacity: 1;\n        } \n    }\n    .arrow{\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        opacity: 0;\n        transition: opacity 0.2s ease-out 0s;\n        padding-left: 16px;\n        &:hover{\n            opacity: 1;\n            cursor: pointer;\n        } \n    }\n"])),(function(n){return n.theme.text.primary})),R=(0,u.memo)((function(n){var i=n.title,e=n.subtitle,t=n.isShowArrow,o=void 0===t||t;return(0,z.jsxs)(P,{children:[(0,z.jsxs)("div",{className:"title-box",children:[(0,z.jsx)("h2",{className:"title",children:i}),e&&(0,z.jsx)("div",{className:"subtitle",children:e})]}),o&&(0,z.jsx)("div",{className:"arrow",children:(0,z.jsx)(k.Z,{})})]})})),T=j.ZP.div(s||(s=(0,b.Z)(["\n    margin:40px auto;\n    padding:0 24px;\n    max-width: 1080px;\n    .section-body{\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        margin: 0 -8px;\n    }\n"]))),W=e(885),A=e(1694),F=e.n(A),L=j.ZP.div(l||(l=(0,b.Z)(["\n    padding: 16px 8px;\n    margin:0 -8px;\n    overflow-x: visible;\n    .item{\n        margin-right: 16px;\n        flex-basis: 120px;\n        flex-shrink: 0;\n        height: 48px;\n        padding: 14px 16px;\n        text-align: center;\n        white-space: nowrap;\n        border: 0.5px solid #d8d8d8;\n        border-radius: 3px;\n        background-color: #fff;\n        box-shadow: 0px 1px 2px rgb(0 0 0 / 15%);\n        font-size: 17px;\n        font-weight: bold;\n        transition: box-shadow 0.5s;\n        &:hover{\n            ","\n        }\n        &:last-of-type{\n            margin-right: 0px;\n        }\n        \n    }    \n    .active{\n        color: #fff;\n        box-shadow: none !important;\n        background-color: ",";\n    }\n\n"])),(function(n){return n.theme.mixin.shadow}),(function(n){return n.theme.color.secondary})),B=e(79),O=(0,u.memo)((function(){return(0,z.jsx)("svg",{viewBox:"0 0 18 18",role:"img","aria-hidden":"false","aria-label":"previous",focusable:"false",style:(0,B.t)("height: 12px; width: 12px; display: block; fill: currentcolor;"),children:(0,z.jsx)("path",{d:"m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z",fillRule:"evenodd"})})})),Y=(0,u.memo)((function(){return(0,z.jsx)("svg",{viewBox:"0 0 18 18",role:"img","aria-hidden":"false","aria-label":"next",focusable:"false",style:(0,B.t)("height: 12px; width: 12px; display: block; fill: currentcolor;"),children:(0,z.jsx)("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z",fillRule:"evenodd"})})})),q=j.ZP.div(d||(d=(0,b.Z)(["\n    position: relative;\n    padding: 8px 0;\n    .btn{\n        .left-cover,\n        .right-cover{\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            width: 48px;\n            height: 68px;\n            z-index: 19;\n        }\n        .left-cover{\n            left: 0px;\n            background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);\n        }\n        .right-cover{\n            right: 0px;\n            background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);\n        }\n        .arrow{\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            height: 48px;\n            width: 48px;\n            z-index: 99;\n            .circle{\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                margin-top: 10px;\n                width: 28px;\n                height: 28px;\n                border-radius: 100%;\n                border-style: 2px solid;\n                background-color: #fff;\n                cursor: pointer;\n                box-shadow: rgb(0 0 0 / 14%) 0px 1px 2px 1px;\n            }\n        }\n        .left{\n            left: -14px;\n        }\n        .right{\n            right: -14px; \n            display: flex;\n            justify-content: flex-end;\n            .circle{\n                box-shadow: rgb(0 0 0 / 14%) 0px 1px 2px 1px;\n            }\n        }\n    }\n    .content{\n        overflow-x: hidden;\n        z-index: 9;\n        .tabs{\n            display: flex;\n            transition: -ms-transform 0.5s,-webkit-transform 0.5s,transform 0.5s ;\n        }\n    }\n"]))),E=(0,u.memo)((function(n){var i=n.isShowCover,e=void 0!==i&&i,t=(0,u.useState)(0),o=(0,W.Z)(t,2),r=o[0],s=o[1],l=(0,u.useState)(!1),d=(0,W.Z)(l,2),c=d[0],a=d[1],x=(0,u.useState)(!0),v=(0,W.Z)(x,2),h=v[0],f=v[1],p=(0,u.useRef)(null),m=(0,u.useRef)(0);function g(n){var i,e=(null===(i=p.current)||void 0===i?void 0:i.children[n]).offsetLeft;p.current.style.transform="translate(-".concat(e,"px)"),s(n),f(m.current>e),a(e>0)}return(0,u.useEffect)((function(){var n,i,e,t,o=null!==(n=null===(i=p.current)||void 0===i?void 0:i.scrollWidth)&&void 0!==n?n:0,r=null!==(e=null===(t=p.current)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0;m.current=o-r,f(m.current>0)}),[n.children]),(0,z.jsxs)(q,{children:[(0,z.jsxs)("div",{className:"btn",children:[c&&(0,z.jsxs)(u.Fragment,{children:[e&&(0,z.jsx)("div",{className:"left-cover"}),(0,z.jsx)("div",{className:"arrow left",children:(0,z.jsx)("div",{className:"circle",onClick:function(){g(r-1)},children:(0,z.jsx)(O,{})})})]}),h&&(0,z.jsxs)(u.Fragment,{children:[e&&(0,z.jsx)("div",{className:"right-cover"}),(0,z.jsx)("div",{className:"arrow right",children:(0,z.jsx)("div",{className:"circle",onClick:function(){g(r+1)},children:(0,z.jsx)(Y,{})})})]})]}),(0,z.jsx)("div",{className:"content",children:(0,z.jsx)("div",{className:"tabs",ref:p,children:n.children})})]})})),$=(0,u.memo)((function(n){var i=n.tabs,e=n.changTab,t=(0,u.useState)(0),o=(0,W.Z)(t,2),r=o[0],s=o[1];return(0,z.jsx)(L,{children:(0,z.jsx)(E,{isShowCover:!0,children:i.map((function(n,i){return(0,z.jsx)("div",{className:F()("item",{active:i===r}),onClick:function(){return function(n,i){s(n),e(n,i)}(i,n)},children:n},n)}))})})})),D=(0,u.memo)((function(n){var i=n.sectionInfo,e=n.title,t=n.subtitle,o=void 0===t?void 0:t,r=n.isShowArrow,s=n.sectionItemWidth,l=n.sectionFooter,d=void 0===l?{}:l,c=n.tabs,a=void 0===c?[]:c,u=n.changTab;return(0,z.jsxs)(T,{children:[(0,z.jsx)(R,{title:e,subtitle:o,isShowArrow:r}),0!==a.length&&(0,z.jsx)("div",{className:"tabs",children:(0,z.jsx)($,{tabs:a,changTab:u})}),(0,z.jsx)("div",{className:"section-body",children:null===i||void 0===i?void 0:i.map((function(n,i){return i<8?(0,z.jsx)(Z.Z,{section:n,sectionItemWidth:s},n.id):null}))}),(0,z.jsx)(C,(0,N.Z)({},d))]})})),H=D,J=e(4120),K=function(n){return(0,u.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.map((function(n){return n.name}))}),[n])},Q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return Object.keys(n)[i]},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return n[Object.keys(n)[i]]},G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).length},M=(0,u.memo)((function(n){var i,e=n.hotRecommendInfo,t=null===e||void 0===e||null===(i=e.dest_list)||void 0===i?void 0:i[Q(null===e||void 0===e?void 0:e.dest_list,0)],o=K(e)(null===e||void 0===e?void 0:e.dest_address),r=(0,u.useState)(t),s=(0,W.Z)(r,2),l=s[0],d=s[1],c=(0,u.useState)(Q(null===e||void 0===e?void 0:e.dest_list,0)),a=(0,W.Z)(c,2),x=a[0],v=a[1];return(0,z.jsx)(H,{sectionInfo:l,tabs:o,changTab:function(n,i){o.includes(i)&&(v(i),d(U(e.dest_list,n)))},title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle,sectionItemWidth:"calc(100% / 3)",sectionFooter:{name:x,color:J.r.color.secondary}})})),V=(0,u.memo)((function(n){var i,e=n.discountInfo,t=null===e||void 0===e||null===(i=e.dest_list)||void 0===i?void 0:i[Q(null===e||void 0===e?void 0:e.dest_list,0)],o=K(e)(null===e||void 0===e?void 0:e.dest_address),r=(0,u.useState)(t),s=(0,W.Z)(r,2),l=s[0],d=s[1],c=(0,u.useState)(Q(null===e||void 0===e?void 0:e.dest_list,0)),a=(0,W.Z)(c,2),x=a[0],v=a[1];return(0,z.jsx)(H,{sectionInfo:l,tabs:o,changTab:function(n,i){o.includes(i)&&(v(i),d(U(e.dest_list,n)))},title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle,sectionItemWidth:"calc(100% / 3)",sectionFooter:{name:x,color:J.r.color.secondary}})})),X=j.ZP.div(c||(c=(0,b.Z)(["\n    margin:40px auto;\n    padding:0 24px;\n    max-width: 1080px;\n    .section-body{\n        margin: 0 -8px;\n        .item{\n            position: relative;\n            padding: 8px;\n            flex-shrink: 0;\n            flex-basis: 20%;\n            box-sizing: border-box;\n            >img {\n                object-fit: cover;\n            }\n            .bg-cover {\n                position: absolute;\n                left: 8px;\n                right: 8px;\n                bottom: 8px;\n                height: 60%;\n                background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)\n            }\n            .desc {\n                position: absolute;\n                left: 8px;\n                right: 8px;\n                bottom: 0;\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                padding: 0 24px 32px;\n                color: #fff;\n\n                .city {\n                    font-size: 18px;\n                    font-weight: 600;\n                }\n\n                .price {\n                    font-size: 14px;\n                    margin-top: 5px;\n                }\n            }\n        }\n    }\n"]))),nn=(0,u.memo)((function(n){var i=n.longforInfo;return(0,z.jsxs)(X,{children:[(0,z.jsx)(R,{title:null===i||void 0===i?void 0:i.title,subtitle:null===i||void 0===i?void 0:i.subtitle,isShowArrow:!1}),(0,z.jsx)("div",{className:"section-body",children:(0,z.jsx)("div",{className:"scroll-view",children:(0,z.jsx)(E,{children:null===i||void 0===i?void 0:i.list.map((function(n,i){return(0,z.jsxs)("div",{className:"item",children:[(0,z.jsx)("img",{src:n.picture_url,alt:""}),(0,z.jsx)("div",{className:"bg-cover"}),(0,z.jsxs)("div",{className:"desc",children:[(0,z.jsx)("div",{className:"city",children:n.city}),(0,z.jsxs)("div",{className:"price",children:["\u5747\u4ef7\xa0",n.price]})]})]},n.city)}))})})})]})})),en=j.ZP.div(a||(a=(0,b.Z)(["\n    margin:40px auto;\n    padding:0 24px;\n    max-width: 1080px;\n    .section-body{\n        width: 100%;\n        margin: 0 -8px;\n    }\n"]))),tn=(0,u.memo)((function(n){var i,e=n.plusInfo;return(0,z.jsxs)(en,{children:[(0,z.jsx)(R,{title:null===e||void 0===e?void 0:e.title,subtitle:null===e||void 0===e?void 0:e.subtitle}),(0,z.jsx)("div",{className:"section-body",children:(0,z.jsx)(E,{children:null===e||void 0===e||null===(i=e.list)||void 0===i?void 0:i.map((function(n){return(0,z.jsx)(Z.Z,{section:n,sectionItemWidth:"20%"},n.id)}))})})]})})),on=e(3252),rn=(0,u.memo)((function(){var n=(0,x.T)();(0,u.useEffect)((function(){n(g()),n((0,I.Ky)(!0)),n((0,I.$q)(!0))}),[n]);var i=(0,x.C)((function(n){return n.home}),y.wU),e=i.hotRecommend,t=i.discount,o=i.goodPrice,r=i.highScore,s=i.plus,l=i.longFor;return(0,z.jsxs)(w,{children:[(0,z.jsx)("div",{className:"banner",children:(0,z.jsx)("img",{src:on,alt:"Airbnb"})}),!!G(null===e||void 0===e?void 0:e.dest_list)&&(0,z.jsx)("div",{className:"hot-recommend",children:(0,z.jsx)(M,{hotRecommendInfo:e})}),!!G(null===t||void 0===t?void 0:t.dest_list)&&(0,z.jsx)("div",{className:"discount",children:(0,z.jsx)(V,{discountInfo:t})}),!!G(null===l||void 0===l?void 0:l.list)&&(0,z.jsx)("div",{className:"longfor",children:(0,z.jsx)(nn,{longforInfo:l})}),!!G(null===o||void 0===o?void 0:o.list)&&(0,z.jsx)("div",{className:"good-price",children:(0,z.jsx)(H,{sectionInfo:null===o||void 0===o?void 0:o.list,title:null===o||void 0===o?void 0:o.title,subtitle:null===o||void 0===o?void 0:o.subtitle})}),!!G(null===r||void 0===r?void 0:r.list)&&(0,z.jsx)("div",{className:"high-score",children:(0,z.jsx)(H,{sectionInfo:null===r||void 0===r?void 0:r.list,title:null===r||void 0===r?void 0:r.title,subtitle:null===r||void 0===r?void 0:r.subtitle})}),!!G(null===s||void 0===s?void 0:s.list)&&(0,z.jsx)("div",{className:"plus",children:(0,z.jsx)(tn,{plusInfo:s})})]})}))},3252:function(n,i,e){n.exports=e.p+"static/media/home-cover.293232bc7bb8539118a8.jpeg"}}]);
//# sourceMappingURL=357.992483b9.chunk.js.map