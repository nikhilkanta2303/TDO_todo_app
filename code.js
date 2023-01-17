let add_todobutton = document.getElementById('addtodo')
add_todobutton.addEventListener('click',async function(){
    
    let to_do = document.getElementById('tdinp').value
    if (to_do == ""){
        alert('Add a task, Field is Empty')
    }
    else{
    var todo = document.createElement('li');
    todo.innerText=to_do + "";
    
    var rmbutton = document.createElement('button');
    var dnbtn = document.createElement('button');
    var undobtn = document.createElement('button');

    rmbutton.innerHTML = 'Remove';
    undobtn.innerHTML = 'Undo';
    dnbtn.innerHTML = 'Done';
    rmbutton.style.backgroundColor = "red"
    rmbutton.style.color = "white"
    dnbtn.style.backgroundColor = "green"
    dnbtn.style.color = "white"
    undobtn.style.backgroundColor = "skyblue"
    undobtn.style.color = "white"
    let ul = document.querySelector('ul');

    ul.appendChild(todo)
    todo.appendChild(rmbutton)
    todo.appendChild(dnbtn)
    todo.appendChild(undobtn)
    document.getElementById('tdinp').value = ""
    rmbutton.addEventListener('click',()=>{
        todo.remove()
    })
    dnbtn.addEventListener('click',()=>{
        todo.style.textDecoration = "line-through"
    })
    undobtn.addEventListener('click',()=>{
        todo.style.textDecoration = "none"
    })}
})
