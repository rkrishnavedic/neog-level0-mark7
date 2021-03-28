const serverURL = 'https://api.funtranslations.com/translate/minion.json';

let input = document.querySelector('#text-input')
let output = document.querySelector('#text-output')

let btn = document.querySelector('#btn-translate');

function fetchURL(txt){
return serverURL+'?text='+txt;
}

function somethingWentWrong(){
    output.innerText = "Sorry, Something went wrong! Try Again..."
}

btn.addEventListener("click", function eventHandler(){
    //console.log(input.value);
    fetch(fetchURL(input.value))
    .then(res => res.json())
    .then(res =>{
        //console.log(res);
        output.innerText = res.contents.translated;
    })
    .catch(err=>{
        somethingWentWrong();
    })
});
