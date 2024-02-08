// let TabId=['a1', 'a2', 'a3', 'a4'];
let TabImg=
[
    '1', '1', '2', '2','3', '3', '4', '4','5', '5', 
    '6', '6','7', '7', '8', '8','9', '9', '10', '10',
    '11', '11', '12', '12', '13', '13','14', '14', '15', '15',
    '16', '16','17', '17', '18', '18'
];
let TabPos=
[
    [150,100,0],[250,100,0],[150,200,0],[250,200,0],
    [350,100,0],[450,100,0],[350,200,0],[450,200,0],
    [550,100,0],[650,100,0],[550,200,0],[650,200,0],
    [150,300,0],[250,300,0],[150,400,0],[250,400,0],
    [350,300,0],[450,300,0],[350,400,0],[450,400,0],
    [550,300,0],[650,300,0],[550,400,0],[650,400,0],
    [150,500,0],[250,500,0],[150,600,0],[250,600,0],
    [350,500,0],[450,500,0],[350,600,0],[450,600,0],
    [550,500,0],[650,500,0],[550,600,0],[650,600,0]
];



function Zakryj()
{
    for(let i=0; i<36; i++)
    {
        TabDiv[i].innerHTML="<img src='images/100.jpg'>";
        console.log(TabDiv[i]);
    }
}

function Odkryj(a)
{
    for(let i=0; i<36; i++)
    {
        if(a==TabDiv[i])
        {
            a.innerHTML="<img src='images/" + TabImg[i] + ".jpg'>";
        }  
    }
}

let p=0, one;
function Graj(a)
{

    if(p==0)
    {
        Zakryj();
        Odkryj(a);
        one=a;
        p=1;  
    }
    else
    {
        Odkryj(a);
        if(one.innerHTML==a.innerHTML && one.id!=a.id)
        {
            setTimeout(function()
            {
                one.style.visibility="hidden";
                a.style.visibility="hidden";
            }, 1000)
        }
        p=0;
    }
}

function Losuj()
{
    for(let i=0; i<36; i++)
    {
        TabPos[i][2]=0;
    }
    let x, i=0;
    while(i<36)
    {
        x=Math.floor(Math.random()*36);
        if(TabPos[x][2]==0)
        {
            TabDiv[i].style.left=TabPos[x][0] + 'px';
            TabDiv[i].style.top=TabPos[x][1] + 'px';
            i++;
            TabPos[x][2]=1;
        }
    }
}