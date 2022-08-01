payload = document.getElementById("payload")
btn = document.getElementById("btn")
jsonText = document.getElementById("jsontext")



btn.addEventListener("click", function(){
    data = {
        "payload":payload.value
    }
    jsonText.innerText = JSON.stringify(data)
})