function addRedBorder(id)
{
    Element = document.querySelector("#" + id);
    Element.style.border = "5px solid red";
}

function highlightCard(selector) 
{
    var element = document.querySelector(selector);
    Element.classList.toggle("card-highlight");
    
}