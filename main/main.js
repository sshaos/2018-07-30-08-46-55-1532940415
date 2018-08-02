//1.输入空字符串结果为0
//2.字符串里面有非数字的情况报错
//3.字符串里面有负号的运算“-123，2-13，5-4-”
module.exports = function main(arr) {
  var sum = 0 ;
  for(var i = 0;i<arr.length;i++)
  {
    if(arr[i]=='-')//字符串里面有负号
    {
      i++;
      if(i == arr.length)//负号是否在字符串末尾
      {
        console.error('Please check your input!\n');
        return;
      }
      if(isNaN(arr[i]))//判断当前位是否是数字，否则报错
      {
        console.error('Please check your input!\n')
        return;
      }
      sum -= Number(arr[i]);
      continue;
    }
    if(isNaN(arr[i]))//判断当前位是否是数字，否则报错
    {
      console.error('Please check your input!\n')
      return;
    }
    sum += Number(arr[i]);
  }
  return sum;
};