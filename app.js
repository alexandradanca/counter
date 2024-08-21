let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll("button");

btns.forEach((btn)=>{
    btn.addEventListener('click', (btn_clicked)=>{
        const ev = btn_clicked.currentTarget.classList;
        if(ev.contains('decrease') && count !== 0){
            count--;
        } else if(ev.contains('increase')){
            count++;
        } else if(ev.contains('reset')){
            count = 0;
        }

       value.textContent = count; 
    })
})