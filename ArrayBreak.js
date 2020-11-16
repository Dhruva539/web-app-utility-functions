// Function to break big array into small arrays

function getBreakedArrays(originalArray,chunkSize) {
    const resultArray=[];
    for(let i=0;i<originalArray.length;i+=chunkSize) {
        resultArray.push(originalArray.slice(i,i+chunkSize))
    }
    return resultArray;
}

const alpaArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(getBreakedArrays(alpaArray,2))
