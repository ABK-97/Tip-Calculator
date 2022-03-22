let bill = document.getElementById("bill");
let tipContainer = document.querySelector(".tip-container");
let custom = document.getElementById("custom");
let people = document.getElementById("people");
let cant = document.querySelector(".cant");
let tipAmount = document.querySelector(".out-1");
let total = document.querySelector(".out-2");
let resetBtn = document.querySelector(".reset-btn");

tipContainer.addEventListener("click",function(e){
    if (bill.value != "" && bill.value > 0){
        if(e.target.classList.contains("five")){
            calculation(5);
            
        }if (e.target.classList.contains("ten")){
            calculation(10);
        }if (e.target.classList.contains("fifteen")){
            calculation(15);
        }if (e.target.classList.contains("twenty-five")){
            calculation(25);
        }if (e.target.classList.contains("fifty")){
            calculation(50);
        }
    } 
})
custom.addEventListener("input",function(){
    console.log(custom.value)
    calculation(custom.value);
})
function calculation(e){
    let tipOutPut = (bill.value*e)/100;
    if (people.value != "" && people.value > 0){
        tipAmount.innerHTML = (tipOutPut/people.value).toFixed(2) ;
        let totalOutPut = (+bill.value + tipOutPut) / +people.value ;
        total.innerHTML = (totalOutPut).toFixed(2) ; 
        toggleClass(0)
    }else {
        toggleClass(1)
    }
    
}
function toggleClass(a){
    if (a == 1){
        people.classList.add("cant-in");
        cant.style.display = "block";
    }
    if (a == 0){
        people.classList.remove("cant-in");
        cant.style.display = "none";
    }
    
}
resetBtn.addEventListener("click",function(){
    bill.value = "";
    people.value = "";
    custom.value = "";
    tipAmount.innerHTML = "$0.00" ; 
    total.innerHTML = "$0.00" ; 
})