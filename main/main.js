module.exports = function main(str) {
  //字符串转化为数组
  const arr = str;
  arr.split("");
  var len = arr.length;
  var sum = 0 ;
  for(var i = 0;i<len;i++)
  {
    sum += Number(arr[i]);
  }
 
  //arr.map((a)=> Number(a));map遍历方式
  //var sum = Number(arr[0])+Number(arr[1])+Number(arr[2]);
  //const sum = arr.reduce((a,x) => a += x,0);
  return sum;
};