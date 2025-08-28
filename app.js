let inp= document.getElementById("taskInput");
let btn= document.getElementById("addBtn");
let lis= document.getElementById("taskList");
let tasks= JSON.parse(localStorage.getItem("tasks"))||[];
tasks.forEach(task => {
    addTasktoDOM(task);
});
btn.addEventListener("click", function(){
    if(inp.value==""){
        alert("add a task");
    }else{
        addTasktoDOM(inp.value);
        inp.value = "";
    }
})
function addTasktoDOM(value){
    var li= document.createElement("li");
    let taskText = document.createTextNode(value);
    li.appendChild(taskText);
    var dltBTn= document.createElement("button");
    dltBTn.innerText="Delete";
    dltBTn.classList.add("deleteBtn");
    li.innerText=value;
    li.appendChild(dltBTn);
    lis.appendChild(li);
    dltBTn.addEventListener("click", function(){
        li.remove();
        let index =tasks.indexOf(value);
        if(index>-1){
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
        }
    })
}
