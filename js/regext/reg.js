var reg = /(【一淘推荐)】【(.*】.*)/;
var str = '【一淘推荐】【一淘陪你玩转双十二】卓欧纯色修身毛呢大衣女';
var str2 = '【一淘推荐】一淘陪你玩转双十二【卓欧】纯色修身毛呢大衣女';

str = str.replace(reg, '$1 $2');
console.log(str);

str2 = str2.replace(reg, '$1 $2');
console.log(str2);