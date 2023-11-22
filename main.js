
let count = 0;
let multiplier = 1;

function add(){
    count += multiplier;
    document.getElementById("clickcount").innerHTML =  count;
}

function buyUpgrade() {
    if (count >= 50) {
        count -= 50;
        multiplier = multiplier * 5;
        document.getElementById("clickcount").innerHTML = count;
    }   
}