
let chat_static = document.getElementById("static1");
let chat_dynamic = document.getElementById("dynamic1")

chat_static.onclick = function()
{
    chat_static.style.cssText = "display: none"
    chat_dynamic.style.cssText = "display : flex ;"

    let handeler = setTimeout(startanimation,1000)
    function startanimation()
    {
        chat_static.style.cssText = "display: flex"
        chat_dynamic.style.cssText = "display : none"
    }
};



let setting_static = document.getElementById("static2");
let setting_dynamic = document.getElementById("dynamic2")

setting_static.onclick = function()
{
    setting_static.style.cssText = "display: none ;"
    setting_dynamic.style.cssText = "display : flex ;"
    
    let handeler = setTimeout(startanimation,1000)
    function startanimation()
    {
        setting_static.style.cssText = "display: flex"
        setting_dynamic.style.cssText = "display : none"
    }    
};









// setting_static.onmouseleave = function()
// {
//     setting_static.style.cssText = "display: felx"
//     setting_dynamic.style.cssText = "display : none"
// };




