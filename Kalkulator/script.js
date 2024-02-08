function wstaw(cos)
{
    document.form.dzial.value=document.form.dzial.value+cos;
}
    
function oblicz()
{
    document.form2.wyn.value=eval(document.form.dzial.value);
}
    
function czysc()
{
    document.form.dzial.value="";
    document.form2.wyn.value="";
}
    
let memoryliczba = "Brak zapisu";
    
function dodajm()
{
    memoryliczba=document.form.dzial.value;
}
    
function odejmijm()
{
    memoryliczba="Brak zapisu";
}
    
function memory()
{
    document.form.dzial.value=memoryliczba;
}

function Pierwiastek()
{
    let a=document.form3.liczx.value;
    document.form5.wyn_2.value=Math.sqrt(a);
}

function Silnia()
{
    let a=document.form3.liczx.value;
    let c=1;
    for(let i=1; i<=a; i++)
    {
        c=c*i;
    }
    document.form5.wyn_2.value=c;
}

function Potega()
{
    let a=document.form3.liczx.value;
    let b=document.form4.liczy.value;
    let c=Math.pow(a, b);
    document.form5.wyn_2.value=c;
}

function czysc2()
{
    document.form3.liczx.value="";
    document.form4.liczy.value="";
    document.form5.wyn_2.value="";
}
    
szer1=document.documentElement.clientWidth-380;
wys1=document.documentElement.clientHeight-500;
szer2=document.documentElement.clientWidth-380;
wys2=document.documentElement.clientHeight-230;

let slider1 = document.getElementById('myRange1');
let slider2 = document.getElementById('myRange2');
let slider3 = document.getElementById('myRange3');
let slider4= document.getElementById('myRange4');

let kalkulator = document.getElementById('divmain');
let kalkulator2 = document.getElementById('div2');

slider1.addEventListener('input', x => {
    kalkulator.style.left = x.target.value * 0.01 * szer1 + 'px';
})

slider2.addEventListener('input', x => {
    kalkulator.style.top = x.target.value * 0.01 * wys1 + 80 + 'px';
})

slider3.addEventListener('input', x => {
    kalkulator2.style.left = x.target.value * 0.01 * szer2 + 'px';
})

slider4.addEventListener('input', x => {
    kalkulator2.style.top = x.target.value * 0.01 * wys2 + 80 + 'px';
})
