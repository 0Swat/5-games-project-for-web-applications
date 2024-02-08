function Mieszaj()
        {
            for(let i=0; i<16; i++)
            {
                TabPos[i][2]=0;
            }
            let x, i=0;
            while(i<16)
            {
                x=Math.floor(Math.random()*16);
                if(TabPos[x][2]==0)
                {
                    TabDiv[i].style.left=TabPos[x][0];
                    TabDiv[i].style.top=TabPos[x][1];
                    i++;
                    TabPos[x][2]=1;
                }
            }
        }  

function Restart()
        {
            for(let i=0; i<4; i++)
            {
                for(let j=0; j<4; j++)
                {
                    let square = "a" + i + j;
                    document.getElementById(square).style.top = 200 + 100*i + "px";
                    document.getElementById(square).style.left = 100 + 100*j + "px";
                }
            }
        }

    function Graj(x)
    {
        let bufor1;
        let bufor2;

        if(a33.style.left==x.style.left)
        {
            bufor1=a33.style.top;
            a33.style.top=x.style.top;
            x.style.top=bufor1;
        }
        if(a33.style.top==x.style.top)
        {
            bufor2=a33.style.left;
            a33.style.left=x.style.left;
            x.style.left=bufor2;
        }
    }