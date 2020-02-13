  let myArray = [];
  function range ( start, end)
  {
for(let i = start; i <= end; i++)
{
    myArray.push(i);
};
  return myArray
}
console.log(range(1,10));
////////////////////////////////////////////////////// 
const sum = function(arrayNum)
{
    let aSum = 0;
    for(let j = 0; j <= arrayNum.length-1; j++)
    {
        aSum += arrayNum[j];
    };
    return aSum
};
console.log(sum(range(1, 10)));

