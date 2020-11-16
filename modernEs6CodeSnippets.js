//1. Hide All Elements
const hide =(...el) => 
[...el].forEach(e => (e.style.display === 'none'))

// Example 
hide(document.querySelector('img'))
// Hides all <img> elements on page

//#########################################################


// 2.check if the element has class or not
const hasClass =(el, className) => (el.classList.contains(className)) 
// Example 
hasClass(document.querySelector('p.special'),'special')

//########################################################

//3. Toggle class Name
const toggleClass=(el,className) => (el.classList.toggle(className));
// Example
toggleClass(document.querySelector('p.special'),'special')
//###########################################################

// 4. Get scroll position of current page

const getScrollPosition =(el=window)=>(
    {
        x:el.pageXOffset !== 'undefined' ? el.pageXOffset:el.scrollLeft,
        y:el.pageYOffset !== 'undefined' ? el.pageYOffset:el.scrollTop
    }
)
// getScroll Position
  getScrollPosition()
  //#########################################################

  // 5. Smooth scroll Top function
  const scrollTop = () =>{
      const c= document.documentElement.scrollTop || document.body.scrollTop
      if(c > 0) {
          window.requestAnimationFrame(scrollTop);
          window.scrollTo(0,c -c/8);
      }
  }
  // Example
  scrollTop();
  //#########################################################

  //6 Check if parent element contains Child element

  const elementContains =(parent, child) => (parent !== child) && parent.contains(child)
  elementContains(documnet.querySelector('head'),document.querySelector('title'))
//#########################################################################

 //7 
 const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };
  
  // Examples
  elementIsVisibleInViewport(el); // (not fully visible)
  elementIsVisibleInViewport(el, true); // (partially visible)

  //########################################################################

  // 8. Invoke Provided function  after wait seconds

    const delay =(fn,wait,...args) => setTimeout(fn,wait,...args)

    delay(function(text){console.log(text)},1000,'later')

  //########################################################################

  // 9 . Fetch all Images with in element
   const fetchImages= (el,includeDuplicates) => {
       const images= [...el.getElementByTagName('img')].map(imgEl => imgEl.getAttribute('src'));
       return includeDuplicates?images:[...new Set(images)]
   }

   fetchImages(document,false)