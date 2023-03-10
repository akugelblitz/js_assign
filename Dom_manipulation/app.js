const table = document.getElementById("table"); 
const add = document.getElementById("add");
const remove = document.getElementById("remove")
const border = document.getElementById("border")
const randomizer = document.getElementById("color")
// console.log(add)
add.addEventListener("click",  function(){
    console.log("yo")
    row = document.createElement("tr")
    data1 = document.createElement("td")
    data1.setAttribute('contenteditable', 'true') 
    data1.innerText = "Yeah,";
    data1.classList.add("td-no-border");
    
    data2 = document.createElement("td")
    data2.setAttribute('contenteditable', 'true') 
    data2.innerText = "Awesome";
    data2.classList.add("td-no-border");

    data3 = document.createElement("td")
    data3.setAttribute('contenteditable', 'true') 
    data3.innerText = "right?";
    data3.classList.add("td-no-border");

    row.append(data1)
    row.append(data2)
    row.append(data3)
    table.append(row)
    console.log(add)
});

remove.addEventListener("click", function(){
    child = table.lastChild
    if(child){
        child.remove()
    }
})

border.addEventListener("click", function(){
    console.log('here')
    data = document.querySelectorAll("td")

    for(i=0; i<data.length;  i++){
        if(data[i].classList.contains('td-border')){
            data[i].classList.remove('td-border')
        }
        else{
            data[i].classList.add('td-border')
        }
    }
})

colorList = ["#bf616a", "#d08770", "#ebcb8b", "#a3be8c", "#b48ead"]

randomizer.addEventListener("click", function(){
    data = document.querySelectorAll("td")
    ind = Math.floor(Math.random() * 6)
    for(i=0; i<data.length;  i++){
        data[i].style.backgroundColor = colorList[ind]
    }
})