window.addEventListener('load', () => {
"use strict"
const todoInput = document.querySelector(".todo-input")
const listElm = document.querySelectorAll(".todo")
const listsElements = document.querySelector(".new-todos")
const pined = document.querySelector(".fixed-todos")
console.log(listsElements);
todoInput.onkeydown = (e) => {
    if(e.keyCode === 8){
        if(todoInput.value.length <= 6){
            todoInput.style.border = "1px solid #2E3238";
            if(todoInput.value.length == 0){
                todoInput.style.border = "1px solid #2E3238";
            }
        }
    }
}

todoInput.addEventListener('keypress', function(e) {
    if(todoInput.value.length >= 6){
        todoInput.style.border = "1px solid #0088CC";
        if (e.keyCode === 13) {
            e.preventDefault();
            todoInput.style.border = "1px solid #2E3238";
            let inputValue = todoInput.value
            const todo = document.createElement('div')
            todo.classList.add("todo")

            const todoTask =  document.createElement('div')
            todoTask.classList.add("task")
            todo.appendChild(todoTask)

            const checkBox = document.createElement("input")
            checkBox.setAttribute("type", 'checkbox')
            todoTask.appendChild(checkBox)
            console.log(checkBox)
            console.log(todoTask)

            const todoInnerTexts = document.createElement('div')
            todoInnerTexts.classList.add('text')
            todoTask.appendChild(todoInnerTexts)

            let textInput = document.createElement("input")
            textInput.setAttribute("type", 'text');
            textInput.setAttribute('readonly', "");
            textInput.setAttribute("value", inputValue);
            todoInnerTexts.appendChild(textInput)

            const spanDate = document.createElement("span")
            const nowDate = new Date().toLocaleTimeString() + " - " + new Date().toLocaleDateString();
                spanDate.innerText = nowDate
            todoInnerTexts.appendChild(spanDate)



            //Actions
            const actionDiv = document.createElement('div')
            actionDiv.classList.add('more')
            actionDiv.innerHTML = `<img src="./img/more.svg" alt="">`
            todo.appendChild(actionDiv)

            const blockDiv = document.createElement('div')
            blockDiv.classList.add("block")
            actionDiv.appendChild(blockDiv)

            const blockInnerUl = document.createElement('ul')
            blockDiv.appendChild(blockInnerUl)




            const blockInnerLi1 = document.createElement('li')
            blockInnerLi1.innerHTML = `<img src="./img/pin.svg" alt="">`
            blockInnerUl.appendChild(blockInnerLi1)

            const btnPin = document.createElement("button")
            btnPin.classList.add("btn")
            btnPin.innerText = "Pin on the top"
            blockInnerLi1.appendChild(btnPin)


            const blockInnerLi3 = document.createElement('li')
            blockInnerLi3.innerHTML = `<img src="./img/trash.svg" alt="">`
            blockInnerUl.appendChild(blockInnerLi3)

            const btnDelete = document.createElement("button")
            btnDelete.classList.add("btn")
            btnDelete.innerText = "Delete"
            blockInnerLi3.appendChild(btnDelete)
            console.log(listElm.length);

            if(listElm.length === 0){
                listsElements.appendChild(todo)
                todoInput.value = ""
            }else{
                console.log('asdasdas')
                listsElements.parentNode.insertBefore(todo, listElm)
                todoInput.value = ""
                console.log(listsElements);
            }

            textInput.addEventListener("dblclick", function (e){
                textInput.removeAttribute("readonly");
                textInput.style.border = "1px solid #0088CC";
                textInput.focus()
            })
            
            textInput.onkeydown = (e) => {
                if(e.key == "Enter"){
                    console.log("asdasdas");
                    textInput.setAttribute('readonly', "");
                    textInput.style.border = "none"
                }
            }
            btnPin.addEventListener('click', (e) => {
                listsElements.removeChild(todo);
                pined.appendChild(todo)
            })

            btnDelete.addEventListener('click', (e) => {
                listsElements.removeChild(todo);
            });

            checkBox.addEventListener('click', function(e){
                console.log("asdasd")
                textInput.style.textDecoration = "line-through"
            })
        }
    }
})
})

