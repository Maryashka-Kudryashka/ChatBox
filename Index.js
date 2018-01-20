
var textarea = document.querySelector('textarea');
console.log(textarea)
textarea.addEventListener('keydown', autosize);
console.log('ttt')
function autosize(){
  console.log("fff")
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
