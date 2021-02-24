module.exports = function toReadable (number) {
    let preStr = '';
    const numInt = new Map ([
       [0, ''],  
       [1, 'one'],
       [2, 'two'],
       [3, 'three'],
       [4, 'four'],
       [5, 'five'],
       [6, 'six'],
       [7, 'seven'],
       [8, 'eight'],
       [9, 'nine'],
       [10, 'ten'],
       [11, 'eleven'],
       [12, 'twelve'],
       [13, 'thirteen'],
       [14, 'fourteen'],
       [15, 'fifteen'],
       [16, 'sixteen'],
       [17, 'seventeen'],
       [18, 'eighteen'],
       [19, 'nineteen'],
       [20, 'twenty'],  
       [30, 'thirty'],
       [40, 'forty'],
       [50, 'fifty'],
       [60, 'sixty'],
       [70, 'seventy'],
       [80, 'eighty'],
       [90, 'ninety'],
       [100, 'hundred'],
    ]) 
   if (number === 0) return 'zero';
   if (number <= 20) return numInt.get(number);
   if (number>20 && number<100) {
      preStr = numInt.get(Math.floor(number/10)*10) + ' ' + numInt.get(number%10) 
   };
    if (number>=100 && number<1000) {
              
       let decimalThree =  Math.floor(number / 100)*100;      
       let decimalTwo = ((Math.floor((number - decimalThree)/10)*10) >= 20) ? (Math.floor((number - decimalThree)/10)*10) : 0;
       let decimalOne = number - decimalThree - decimalTwo;
       
           preStr = numInt.get(Math.floor(number/100)) + ' ' 
                        + numInt.get(100) + ' '  
                        + numInt.get(decimalTwo) + ' ' 
                        + numInt.get(decimalOne);   
     }
  const numStr = preStr.split(' ').filter(element => element !== '').join(' ');
  return numStr;
}
