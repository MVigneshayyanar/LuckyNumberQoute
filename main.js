const list=[0,1,2,3,4,5,6,7,8,9]
const qoute=["I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.", 
            "Some people graduate with honors, I am just honored to graduate.",
            "My diet plan: make all my friends cookies and eat half of them before they find out.",
            "Why don’t skeletons fight each other? They don’t have the guts.", 
            "I’m on a seafood diet. I see food, and I eat it.",
            "I asked the waiter if the menu was kid-friendly. He brought crayons and left me to color.", 
            "I tried to be normal once. Worst two minutes of my life.", "The fridge is a clear example that what’s inside matters more than the packaging.",
            "I hate it when people call me lazy. I’m not lazy, I’m just on energy-saving mode.",
            "My bed and I have a special relationship – it’s mutual. I love it, and it loves me back!"]
const fun=document.getElementById("fun")
function findnumber()
{
    const number=Math.ceil(Math.random()*9)
    const ran=list[number]
    fun.innerHTML=list[ran]
    para.innerHTML=qoute[ran]
}
function findqoute()
{
    const para=document.getElementById("para")
    const num=document.getElementById("bel")
    const value=num.value
    para.innerHTML=qoute[value]
    input.value=""

}
