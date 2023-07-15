var texxt1=[

    "You miss 100% of the shots you don't take.",
    " --Wayne Gretzy",
    "Resentment is like drinking poison and waiting for your enemies to die."

   
]
var texxt2=[

    `"Resentment is like drinking poison and waiting for your enemies to die."

    --Nelson Mandela`
]
var texxt3=[
    `"Do not take life too seriously. You will not get out alive."

    --Elbert Hubbard`
]
function btn(){
    var box=Math.floor(Math.random()*texxt1.length)
    document.getElementById('pragr1').innerHTML=texxt1[box]
    document.getElementById('pragr2').innerHTML=texxt2[box]
}