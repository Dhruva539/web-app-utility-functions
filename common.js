
/**This method used to convert max length character */

export function convertMaxLenChar(value,maxLen,charToAppend) {
   var returnValue = value;
   if(value&&maxLen&&charToAppend)
   {
     let loopMax= maxLen-value.length;
     for(let i=0;i<loopMax;i++) {
       returnValue= charToAppend + returnValue
     }
   }
   return returnValue;     

}

