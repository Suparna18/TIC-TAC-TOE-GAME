var count=1;
function fill(control)
{
    if(count<=9)
    {

    if(count%2!=0)
    {
        document.getElementById(control.id).innerHTML="X";

    }else
    {
        document.getElementById(control.id).innerHTML="0"; 
    }
    count++;
    if(checkWin())
    {
        alert("winner");
        reset();
    }
}else
{
    alert("SORRY TRY AGAIN");
    reset();
}
}
function reset()
{
    for(var i=1; i<=9; i++)
    {
        document.getElementById('div'+i).innerHTML="";
    }
    count=1;
}
function checkWin()
{
    if(checkCondition('div1','div2','div3')|| checkCondition('div1', 'div5', 'div9')||checkCondition('div4', 'div5', 'div6')||checkCondition('div7', 'div8', 'div9')
    ||checkCondition('div1', 'div4', 'div7')||checkCondition('div2', 'div5', 'div8')||checkCondition('div3', 'div6', 'div9')||checkCondition('div3', 'div5', 'div7'))
{
    return true;
}
}

function checkCondition(div1,div2,div3)
{
    if(getData(div1)!="" && getData(div2)!="" && getData(div3)!="" && getData(div1)==getData(div2) && getData(div2)==getData(div3))
    {
        return true;
    }
}





   /* if(document.getElementById('div1').innerHTML!="" && document.getElementById('div2').innerHTML!="" && 
    document.getElementById('div3').innerHTML!="" && 
    document.getElementById('div1').innerHTML==document.getElementById('div2').innerHTML && document.getElementById('div2').
    innerHTML==document.getElementById('div3').innerHTML)
    
    {
        return true;
    }
    }*/


    function getData(div)
    {
        return document.getElementById(div).innerHTML;
    }


