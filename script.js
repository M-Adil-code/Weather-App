let inputfield=document.querySelector('input')
let tempresult=document.querySelector('#tempresult');
let weathresult=document.querySelector('#weathresult');
let conresult=document.querySelector('#conresult');
let part1=document.querySelector('.part1')
let part2=document.querySelector('.part2')
let confirm=document.querySelector('.confirm')
let arrow=document.querySelector('.con h3 i')
let part3=document.querySelector('.part3')
let key=`b83fe0240b1ebd582d0da10cf9a1fe70`
let city;
//let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

let getweather=async function(){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    await fetch(url).then(res => {
        return res.json()
    }).then(res =>{
       gettemp(res)
    }).catch(re =>{
        
       console.log(re)
       confirm.innerText='Something went wrong . Please try again later.'
        
    })
}


function gettemp(data){
    part1.classList.add('blocker')
    part2.classList.remove('blocker')
    console.log(data)
    tempresult.innerHTML=`${data.main.temp} °C`
    weathresult.innerHTML=data.weather[0].main
    conresult.innerHTML=`<i class="fa-solid fa-location-dot"></i> ${data.sys.country}`
    document.querySelector('img').src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    gettemp()
}

inputfield.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'&&inputfield.value!==''){
        confirm.innerText='Getting information...'
        confirm.classList.remove('blocker')
        console.log(inputfield.value)
        city=inputfield.value
        
        getweather()
        inputfield.value=''
    }
})
arrow.addEventListener('click',()=>{
    part1.classList.remove('blocker')
    part2.classList.add('blocker')
    part3.classList.add('blocker')
    confirm.classList.add('blocker')

})

