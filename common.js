
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

/** Convert to proper length */

export function convertToProperLen(value,charToBeRemoved) {

   var returnValue=value;
   var found=true;
   if(value && charToBeRemoved) {
   while(found) {

      if(returnValue.charCodeAt(0) === charToBeRemoved) {
         returnValue= returnValue.substr(1)
      } else {
        found =false;
      }
   }
   return returnValue;
  }
}

/** this method is used to validate the errors */