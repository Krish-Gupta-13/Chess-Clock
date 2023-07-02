let btngreen = document.querySelector('#container1');
let btngray = document.querySelector('#container2');
let player2startimeclick = document.querySelector('#settings2');
let player1startimeclick = document.querySelector('#settings1');

btngreen.addEventListener('click', () => btngray.style.backgroundColor = '#b2e068');
btngreen.addEventListener('click', () => btngreen.style.backgroundColor = 'rgb(221, 216, 216)');

btngray.addEventListener('click', () => btngray.style.backgroundColor = 'rgb(221, 216, 216)');
btngray.addEventListener('click', () => btngreen.style.backgroundColor = '#b2e068');

// let movecount1 = document.getElementById("moves1");
// let movecount2 = document.getElementById("moves2");

var turn = 1;

var timer1 = false; 
var timer2 = false;

var sec1 = 0;
var min1 = 10;
var count1 = 99;

var sec2 = 0;
var min2 = 10;
var count2 = 99;

var movecnt1 = 0;
var movecnt2 = 0;


player1startimeclick.addEventListener('click', () => {
    let player1startime = prompt('Enter Player1 Timer', 10);
    if(player1startime!=null){
        document.getElementById("min1").innerHTML = `${player1startime}`;
        min1 = `${player1startime}`;
    }
    else{
        document.getElementById("min1").innerHTML = 10;
        min1 = 10;
    }
})


player2startimeclick.addEventListener('click', () => {
    // let min22 = 10;
    let player2startime = prompt('Enter Player2 Timer', 10);
    if(player2startime!=null){
        document.getElementById("min2").innerHTML = `${player2startime}`;
        min2 = `${player2startime}`;
    }
    else{
        document.getElementById("min2").innerHTML = `${min2}`;
        min2 = 10;
    }
})


function p2(){
    timer1 = false;
    timer2 = true;
    // if(Math.abs(movecnt1-movecnt2)<=1){
        movecnt1++;
    // }
    document.getElementById("moves1").innerHTML = movecnt1;
    stopwatch2();
}

function stopwatch2(){
    if(timer2==true){
        count2 = count2 - 1;
        if(count2==0){
            sec2 = sec2-1;
            count2=99;
        }
        if(min2==0 && sec2==0){
            btngray.style.backgroundColor = 'rgb(249, 6, 6)';
            timer2 = false;
            document.getElementById("sec2").innerHTML = "00";
            alert('Your time is over!!! Player1 has won');
            return;
        }

        if(sec2==0){
            min2 = min2 - 1;
            sec2 = 59;
        }
        var minstr2 = min2;
        var secstr2 = sec2;
        var countstr2 = count2;

        if(min2<10){
            minstr2 = "0" + minstr2;
        }
        if(sec2<10){
            secstr2 = "0" + secstr2;
        }
        if(count2<10){
            countstr2 = "0" + countstr2;
        }

       

        document.getElementById("min2").innerHTML = minstr2;
        document.getElementById("sec2").innerHTML = secstr2;
        // document.getElementById("count2").innerHTML = countstr2;
        setTimeout("stopwatch2()" ,10);
    }
}


function p1(){
    timer2 = false;
    timer1 = true;
    // if(Math.abs(movecnt1-movecnt2)<=1){
        movecnt2++;
    // }
    document.getElementById("moves2").innerHTML = movecnt2;
    stopwatch1();
}

function stopwatch1(){
    if(timer1==true){
        count1 = count1 - 1;
        if(count1==0){
            sec1 = sec1-1;
            count1=99;
        }
        if(min1==0 && sec1==0){
            btngreen.style.backgroundColor = 'rgb(249, 6, 6)';
            timer1 = false;
            document.getElementById("sec1").innerHTML = "00";
            alert('Your time is over!!! Player2 has won');
            return;
        }

        if(sec1==0){
            min1 = min1 - 1;
            sec1 = 59;
        }

        var minstr1 = min1;
        var secstr1 = sec1;
        var countstr1 = count1;

        if(min1<10){
            minstr1 = "0" + minstr1;
        }
        if(sec1<10){
            secstr1 = "0" + secstr1;
        }
        if(count1<10){
            countstr1 = "0" + countstr1;
        }

        

        document.getElementById("min1").innerHTML = minstr1;
        document.getElementById("sec1").innerHTML = secstr1;
        // document.getElementById("count1").innerHTML = countstr1;
        setTimeout("stopwatch1()" ,10);
    }
}








function start(){
    if(turn==1){
        timer1 = true;
        stopwatch1();
    }
    else if(turn==2){
        timer2 = true;
        stopwatch2();
    }
}

function stop(){
    if(timer1==true){
        timer1 = false;
        turn = 1;
    }
    else if(timer2==true){
        timer2 = false;
        turn = 2;
    }
}







function reset(){

    // alert lagana h to confirm
    let confirmation = confirm('Do you want to reset the clock?')
    if(confirmation){
        timer1 = false;
        min1 = 10;
        sec1 = 0;
        count1 = 99;
        movecnt1 = 0;

        document.getElementById("min1").innerHTML = "10";
        document.getElementById("sec1").innerHTML = "00";
        // document.getElementById("count1").innerHTML = "00";
        document.getElementById("moves1").innerHTML = 0;
    
        timer2 = false;
        min2 = 10;
        sec2 = 0;
        count2 = 99;
        movecnt2 = 0;
    
        document.getElementById("min2").innerHTML = "10";
        document.getElementById("sec2").innerHTML = "00";
        // document.getElementById("count2").innerHTML = "00";
        document.getElementById("moves2").innerHTML = 0;
        btngray.style.backgroundColor = 'rgb(221, 216, 216)';
        btngreen.style.backgroundColor = 'rgb(221, 216, 216)';
    }
}

