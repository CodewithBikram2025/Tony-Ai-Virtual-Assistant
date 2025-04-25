let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("how are you")){
        speak("i am good ,how about you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant ,created by Bikramjit Sir")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("open Chatgpt")){
        speak("opening Chatgpt..")
        window.open("Chatgpt://")
    }
    else if(message.includes("open online game")){
        speak("opening online game..")
        window.open("onlinegame://")
    }
    else if(message.includes("open telegram")){
        speak("opening telegram..")
        window.open("https://www.bing.com/ck/a?!&&p=b5366b0722de64a97637099eeed63796d22ddb92a5ddd065d619e63d7c0d092bJmltdHM9MTc0NTUzOTIwMA&ptn=3&ver=2&hsh=4&fclid=17fb63fc-f41a-6031-2225-76d1f5f2617e&psq=telegram+web&u=a1aHR0cHM6Ly93ZWIudGVsZWdyYW0ub3JnLw&ntb=1")    
    }
    else if(message.includes("open amazon")){
        speak("opening amazon..")
        window.open("https://amazon.com/","_blank")
    }
    else if(message.includes("open today cheak weather")){
        speak("opening weather..")
        window.open("https://support.google.com/websearch/answer/13687874","_blank")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Tony","") || message.replace("Tony","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Tony","")}`,"_blank")
    }
}