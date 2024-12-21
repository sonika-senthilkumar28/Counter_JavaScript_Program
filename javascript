let count =0;
const decreasebtn = document.getElementById("dec_btn");
const reset = document.getElementById("reset_btn");
const increasebtn = document.getElementById("inc_btn");

decreasebtn.onclick = function(){
    count--;
    document.getElementById("labelId").textContent=count;
};

increasebtn.onclick = function(){
    count++;
    document.getElementById("labelId").textContent=count;
};

reset.onclick = function(){
    count=0;
    document.getElementById("labelId").textContent=count;
}; 
