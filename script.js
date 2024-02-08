function mouseOver1()
{
    TabDiv[0].style.width = "32%";
    TabDiv[1].style.width = "17%";
    TabDiv[2].style.width = "17%";
    TabDiv[3].style.width = "17%";
    TabDiv[4].style.width = "17%";

    TabDiv[0].style.left = "0%";
    TabDiv[1].style.left = "32%";
    TabDiv[2].style.left = "49%";
    TabDiv[3].style.left = "66%";
    TabDiv[4].style.left = "83%";

    document.getElementById("sub1").style.visibility = "visible";
    TabDiv[0].style.filter = "brightness(333%)";
    document.getElementById("sub1").style.cursor = "pointer";
    TabDiv[0].style.cursor = "pointer";
}

function mouseOver2()
{
    TabDiv[0].style.width = "17%";
    TabDiv[1].style.width = "35%";
    TabDiv[2].style.width = "17%";
    TabDiv[3].style.width = "17%";
    TabDiv[4].style.width = "17%";

    TabDiv[0].style.left = "0%";
    TabDiv[1].style.left = "14%";
    TabDiv[2].style.left = "49%";
    TabDiv[3].style.left = "66%";
    TabDiv[4].style.left = "83%";

    document.getElementById("sub2").style.visibility = "visible";
    TabDiv[1].style.filter = "brightness(333%)";
    document.getElementById("sub2").style.cursor = "pointer";
    TabDiv[1].style.cursor = "pointer";
}

function mouseOver3()
{
    TabDiv[0].style.width = "17%";
    TabDiv[1].style.width = "17%";
    TabDiv[2].style.width = "35%";
    TabDiv[3].style.width = "17%";
    TabDiv[4].style.width = "17%";

    TabDiv[0].style.left = "0%";
    TabDiv[1].style.left = "17%";
    TabDiv[2].style.left = "31%";
    TabDiv[3].style.left = "66%";
    TabDiv[4].style.left = "83%";

    document.getElementById("sub3").style.visibility = "visible";
    TabDiv[2].style.filter = "brightness(333%)";
    document.getElementById("sub3").style.cursor = "pointer";
    TabDiv[2].style.cursor = "pointer";
}

function mouseOver4()
{
    TabDiv[0].style.width = "17%"; 
    TabDiv[1].style.width = "17%";
    TabDiv[2].style.width = "17%";
    TabDiv[3].style.width = "35%";
    TabDiv[4].style.width = "17%";

    TabDiv[0].style.left = "0%";
    TabDiv[1].style.left = "17%";
    TabDiv[2].style.left = "34%";
    TabDiv[3].style.left = "48%";
    TabDiv[4].style.left = "83%";

    document.getElementById("sub4").style.visibility = "visible";
    TabDiv[3].style.filter = "brightness(333%)";
    document.getElementById("sub4").style.cursor = "pointer";
    TabDiv[3].style.cursor = "pointer";
}

function mouseOver5()
{
    TabDiv[0].style.width = "17%"; 
    TabDiv[1].style.width = "17%";
    TabDiv[2].style.width = "17%";
    TabDiv[3].style.width = "17%";
    TabDiv[4].style.width = "32%";

    TabDiv[0].style.left = "0%";
    TabDiv[1].style.left = "17%";
    TabDiv[2].style.left = "34%";
    TabDiv[3].style.left = "51%";
    TabDiv[4].style.left = "68%";

    document.getElementById("sub5").style.visibility = "visible";
    TabDiv[4].style.filter = "brightness(333%)";
    document.getElementById("sub5").style.cursor = "pointer";
    TabDiv[4].style.cursor = "pointer";
}

function mouseOut()
{
    for(let i=0; i<5; i++)
    {
       TabDiv[i].style.width = "20%"; 
       TabDiv[i].style.left = i*20 + "%";
       TabDiv[i].style.filter = "brightness(100%)";
    }

    document.getElementById("sub1").style.visibility = "hidden";
    document.getElementById("sub2").style.visibility = "hidden";
    document.getElementById("sub3").style.visibility = "hidden";
    document.getElementById("sub4").style.visibility = "hidden";
    document.getElementById("sub5").style.visibility = "hidden";
}
