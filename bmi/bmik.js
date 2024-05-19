const fristpagecont = document.querySelector('.cont')
const manpagecont = document.querySelector('#manpage');
const femalepagecont= document.querySelector('#femalepage');

manpagecont.style.display="none"
femalepagecont.style.display="none"
// let inputbmitext =document.querySelector('.dip').innerHTML;

// console.log(inputbmitext);
function numberbmi(){
    const checkedmale = document.querySelector('#checkmale').checked;
    const checkfemale = document.querySelector('#checkfemale').checked;
    const inputheight = document.querySelector('#inputheight').value;
    const inputweight = document.querySelector('#inputweight').value;
    let   vlauebmi = inputweight/(inputheight*inputheight)
    let   vlauebmi2 =  vlauebmi*10000;
    if(checkedmale==true){
       
        // console.log();
    femalepagecont.style.display="none"
    fristpagecont.style.display="none"
    manpagecont.style.display="flex"
    document.querySelector('.dip').innerHTML= `Your BMI is ${ vlauebmi2.toFixed(2)}`
    };
    if(checkfemale==true) {
        femalepagecont.style.display="flex"
        fristpagecont.style.display="none"
        manpagecont.style.display="none"
        document.querySelector('.dip2').innerHTML=`Your BMI is ${ vlauebmi2.toFixed(2)}`
    }

}
function togoback(){
    femalepagecont.style.display="none"
    fristpagecont.style.display="flex"
    manpagecont.style.display="none"
}
