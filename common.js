

/**
 *  This function will decide whether window to open window left or right 
 *   If flag is not passed, window will open on right 
 *   @param {boolean} flag-True, if the widow open left side
 */

 export function windowPosition(flag) {
   const wWidth= window.screen.availWidth;
   const wHeight= screen.availHeight-40;
   let leftMar= wHeight/2;
   if(flag) {
     leftMar=0;
   }
   return "titlebar=no,toolbar=no,location=no,width="+(wWidth/2-20)+",height="+wHeight+",scrollbars=1,resizable=1,left="+leftMar+",top=0";
 }


 /**
  *  this function will close all the images
  * 
  */

  export function closeAllImages() {
    let i;
    for(i=0;i<imageCount;i++) {
      let windowObj= imageObj['imageName' +i];
      if(windowObj) {
        windowObj.close();
      }
    }
    imageCount=0;
    imageObj={}
  }

/**
 *  function to get selectedRadioButton Value 
 */
  export function getRadioButtonValue(radioName) {
    var selectedValue='';
    var radioList= document.getElementById(radioName);
    for(let i=0;i<radioList.length;i++) {
         if(radioList[i].checked) {
           selectedValue=radioList[i].value;
           break;
         }
    } 
    return selectedValue;
  }

export function getResultObj(parentObj) {
  var result=[];
  result= JSON.parse(JSON.stringify(parentObj));
  delete result["checked"];
  delete result["rowColor"];
  return result;

}


/**
 *  This method adds zeros to the begining of number if numer size is less than 6
 *  @param {string} value - Input value 
 */
export function prependZeros(value='0') {
  var returnValue=value;
  for(let i=0;i<6-value.length;i++) {
    returnValue='0'+value;
  }
  return returnValue;
}

/**
 *  This method is used for checkForEqual error 
    @param {firstdata} json - first data
    @param {secondata} json-  second data
 */

 function checkForEqual(firstdata,secondata) {
   var checkkeys=[];
   var checkKeyEqualValue=0;
   for(var key in firstdata) {
     if(firstdata.hasOwnProperty(key)) {
       checkkeys.push(key);
     }
   }

   for(let i=0;i<checkkeys.length;i++) {
         if(firstdata[checkkeys[i]] === secondata[checkkeys[i]]) {
           checkKeyEqualValue ++;
         }
   }
    if(checkKeyEqualValue === checkkeys.length) {
      return true;
    }
 
     return false;
 }



/**
 *  This function will add the blank spache at the end to make the length equal to     *  totalchar
 *  @param {string} str- input string 
 *  @param {number} totalChar- Total length of characters 
 */
  export function addBlankAtEnd(str='',totalChar ) {
      
      let returnValue = str;
      if(str && totalChar) {
        let loopMax= totalChar-str.length;
        for(let i=0;i<loopMax;i++) {
          returnValue=returnValue +'';  
        }
      }
     return returnValue;
  }
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