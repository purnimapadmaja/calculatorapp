function clickbtn(value){
    document.getElementById("calvalue").value+=value
}
function clearScreen(){
    document.getElementById("calvalue").value=" "
}
function sequal(){
    let equl= document.getElementById("calvalue").value
    let equals=eval(equl)
    document.getElementById("calvalue").value=equals
    return equals

}
