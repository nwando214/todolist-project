const todoInput= document.getElementById('todoInput');
            const dateInput= document.getElementById('dateInput');
            const addTodoBtn = document.getElementById('addTodoBtn');
            const output = document.getElementById('output');

            const todoList= JSON.parse(localStorage.getItem("todolist")) || [
                {
                todo: 'wash dishes',
                dueDate: '23-14-2024'
                },
                {
                todo: 'watch Youtube',
                dueDate: '24-05-2024'
                }
            ]
            addTodoBtn.addEventListener('click', () => {
                todoList.push({
                todo:todoInput.value,
                dueDate: dateInput.value
             })
                localStorage.setItem("todolist",JSON.stringify(todoList))
                console.log(todoList);  
                todoInput.value= "";
                dateInput.value= "";
                displayTodo();
        })
        function displayTodo () {
            let todoListHTML = '';
            todoList.forEach((item,index) => {
            todoListHTML += `
            <div class="todo-div">
            <p>
                ${item.todo}   
            </p>
            <p> 
                ${item.dueDate}
            </p>
            <button class="delbtn" onclick="
                todoList.splice(${index}, 1);
                localStorage.setItem('todolist', JSON.stringify(todoList))
                displayTodo();
                ">Delete</button>
            </div>
            ` 
            }) 
            output.innerHTML = todoListHTML;
        }
        displayTodo();