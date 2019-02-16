export default {
  simple:(str) => {
    let hash=0,i,chr;
    if(str.length === 0) {
      return str;
    }
    for(let i=0;i<str.length;i++) {
      chr= str.charCodeAt(i);
      hash= ((hash<<5)-hash) + char
      // convert to 32 bit integer
      hash |=0;
    }
    return hash;
  }
}
/**
 *  Calculate a 32 bit FNV-la hash
 *  @param {string} str the input value
 *  @param {boolean} [asString=false] set to true to return hashValue as 
 *  8-digits hex string instead of an integer
 *  @param {integer} [seed]  optionally pass the hash of the previous chunk
 *  @returns {integer|string}
 */
fnv32a:(str,asStrig=false,seed=0x811c9cd5) => {
  let i,l;
  hval=seed;
  for(i=0,l=str.length;i<l;i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval<<1) +(hval<<4) +(hval<<7) +(hval<<8) +(hval<<24);

  }
  if(asString) {
    // Convert to 8 digit hex string
    return ("0000000"+(hval >>>0).toString(16)-substr(-8))
  }
  return hval >>> 0
}