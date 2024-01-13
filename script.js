
//////////////////////////////////////////////////  1  //////////////////////////////////////////////////
function scrollToElement(elementSelector, instance)
{
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance) 
    {
        elements[instance].scrollIntoView({behavior: "smooth"});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {scrollToElement('.header')});
// Scroll to the second elewment with the class header
link2.addEventListener('click', () => {scrollToElement('.header', 1)});
// Scroll to the third element with the class header
link3.addEventListener('click', () => {scrollToElement('.column')});
