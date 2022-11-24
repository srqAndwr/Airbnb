
/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 17:34:42
 * @LastEditTime: 2022-10-14 17:36:59
 * @LastEditors: shiruiqiang
 * @FilePath: utils.ts
 * @Description: 
 */
export function styleStrToObject(styleStr:string) {
    const obj:any = {}
    const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    }).replace(/;\s?$/g,"").split(/:|;/g)
    for (var i = 0; i < s.length; i += 2) {
      obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"")
    }
  
    return obj
  }
  
  