/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
// creates and returns a <span> element
let arrlength=document.querySelectorAll('section').length;
let blocking=true;
function createNavElements(){
  //console.log(arrlength);
  let listitem=[];
  let listitemlink=[];
  let ItemLinkFlag;
  for(let x=0;x<arrlength;x++){
  listitem[x]=document.createElement('li');
  listitemlink[x]=document.createElement('a');
  let xinc=x+1;
  listitem[x].setAttribute("class","listnavelement"+xinc);
  listitemlink[x].setAttribute("class","listnavlinkelement"+xinc);
  listitemlink[x].setAttribute("onclick","clickElement(event)"); // can be performed also using addEventListener
  listitemlink[x].setAttribute("onmouseover","hoverElement(event)"); // can be performed also using addEventListener
  listitemlink[x].setAttribute("onmouseout","hoveroutElement(event)"); // can be performed also using addEventListener
  listitemlink[x].textContent=document.querySelector('#section'+xinc).getAttribute('data-nav');
  }
  for(let o=0;o<listitem.length;o++){
  document.querySelector('#navbar__list').appendChild(listitem[o]);
  ItemLinkFlag=listitem[o].className;
  document.querySelector('.'+ItemLinkFlag).appendChild(listitemlink[o]);
  }
}

createNavElements();

var r = document.querySelector(':root');
var rs = getComputedStyle(r);
var rss=rs.getPropertyValue('--color-val');
var rsst=rs.getPropertyValue('--color-backgr');

let dimension1=document.querySelector('.page__header').getBoundingClientRect().top;
let dimensionRound1=Math.floor(dimension1);
console.log(dimensionRound1);
window.onscroll = function() {myFunction()};
let sections=[];
for (let y=1;y<=arrlength;y++){
  sections.push("#section"+y);
}
console.log(sections);
function myFunction() {

  if (blocking) {
    let arrflag=sections;
    for (let variable of sections) {
      console.log(variable);
      console.log(Math.floor(document.querySelector(variable).getBoundingClientRect().top));
      if (Math.floor(document.querySelector(variable).getBoundingClientRect().top)>-250 && Math.floor(document.querySelector(variable).getBoundingClientRect().top)<=250) {
        strx=document.querySelector(variable).id;
        let matches = strx.match(/\d+/g);
        let num=matches[0];
        console.log("number is equal to "+num);
        document.querySelector(".listnavlinkelement"+num).style.backgroundColor=rsst;
        document.querySelector(".listnavlinkelement"+num).style.borderRadius="0.5rem";
        document.querySelector('#section'+num).style.border = "1px solid yellow";
        var filtered = arrflag.filter(function(value, index, arr){
               return index+1!= num;});
        console.log(filtered);
        for (var value of filtered) {
          let vallink=value.replace("#section","");
          document.querySelector('.listnavlinkelement'+vallink).style.removeProperty("background-color");
          document.querySelector('.listnavlinkelement'+vallink).style.color=rss;
          document.querySelector('.listnavlinkelement'+vallink).style.textDecorationLine="none";
          document.querySelector('#section'+vallink).style.removeProperty("border");

        }

      }
    }
  }
  if (Math.floor(document.querySelector(".anyclass h1").getBoundingClientRect().top)>0) {
    document.querySelector('.listnavlinkelement'+1).style.removeProperty("background-color");
    document.querySelector('.listnavlinkelement'+1).style.color=rss;
    document.querySelector('.listnavlinkelement'+1).style.textDecorationLine="none";
    document.querySelector('#section'+1).style.removeProperty("border");
  }

}

// function addHoverClass(){
//   document.querySelector('.linavbar').classList.add('onHoverClass')
//   //console.log(document.querySelector('.linavbar').classList);
// }
// addHoverClass();


function clickElement(e){
  blocking=false;
  console.log(blocking);
  let variable=e.target.className;
  let arr2=[];
  let elementColor=e.target.style.color;
  var matches = variable.match(/(\d+)/);
  e.target.setAttribute("href","#section"+matches[0]);

  e.target.style.backgroundColor=rsst;
  e.target.style.borderRadius="0.5rem";
  //e.target.style.background="linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%)";
  for(let k=1;k<=arrlength;k++){
    arr2.push(k);
  }

  //arr=document.querySelector('.listnavlinkelement'+matches[0]);
  //document.querySelector('.listnavlinkelement'+matches[0]).style.backgroundColor="yellow";
  document.querySelector('#section'+matches[0]).style.border = "1px solid yellow";

  var filtered = arr2.filter(function(value, index, arr){
         return matches[0] != value;});

  for(const alt of filtered){
    altinc=parseInt(alt);
    document.querySelector('.listnavlinkelement'+altinc).style.removeProperty("background-color");
    document.querySelector('.listnavlinkelement'+altinc).style.color=rss;
    document.querySelector('.listnavlinkelement'+altinc).style.textDecorationLine="none";
    document.querySelector('#section'+altinc).style.removeProperty("border");
  }


blocking=true;
}

///////////////////////////////////////////////////

function hoverElement(e){
e.target.style.color="#333";
e.target.style.cursor="pointer";
e.target.style.textDecorationLine="none";
}
function hoveroutElement(e){
e.target.style.color=rss;
}

// measuring performance
let t = performance.now();
 console.log(t);
