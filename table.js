/*var inc =document.getElementById("inc").addEventListener("clicl",dispatchEvent);
var dec =document.getElementById("dec").addEventListener("click",dispatchEvent);
var row =1;
function dispatchEvent(){
    var inc=document.getElementById("inc").value;
    var dec=document.getElementById("dec").value;
    var id=document.getElementById("id").value;
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    if(! id || !name || !email || !mobile || !inc || !dec){
        alert("plese fill all the box");
        return;
    }
var display =document.getElementById("tbl")
var newRow=display.insertRow(row);
var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);
var cell5=newRow.insertCell(4);
var cell6=newRow.insertCell(5);
}
*/
function createTable(){
    var text=document.createElement("input")
    text.setAttribute("type","text")
    text.setAttribute("class","control")
    return text;
}
document.getElementById("inc").addEventListener("click",function(){
    var x = createTable()
    document.body.appendChild(x)
})

// function removeTable(){
//     var text=document.removeElement("remove")
//     text.setAttribute("type","text")
//     text.setAttribute("class","control")
//     return text;
// }
// document.getElementById("dec").addEventListener("click",function(){
//     var x = removeTable()
//     document.body.removeChild(x)
// })