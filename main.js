let pinput=document.querySelector('.principal-input');
let rate=document.querySelector('.rate');
let time=document.querySelector('.time');
let btn=document.querySelector('.calculate-btn');
let pamount=document.querySelector('.principal-amount');
let iamount=document.querySelector('.interest-amount');
let amount=document.querySelector('.value-amount');


btn.addEventListener("click",calculateSI);


function calculateSI(){

    if(pinput.value!=="" && rate.value!=="" && time.value!==""){
    pamount.innerHTML=pinput.value;
    console.log(typeof(pinput.value));
    let si=eval((Number(pinput.value))*(Number(rate.value))*(Number(time.value))/100);
    iamount.innerHTML=si;
    amount.innerHTML=eval(Number(pinput.value)+Number(si));   
    }
    else if(pinput.value!=="" && (rate.value=="" || time.value=="") ){
        pamount.innerHTML=pinput.value;
        iamount.innerHTML="";
        amount.innerHTML="";
    }
    else{

        pamount.innerHTML="";
        iamount.innerHTML="";
        amount.innerHTML="";

    }
}