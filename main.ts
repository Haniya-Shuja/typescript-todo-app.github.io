
import inquirer from "inquirer";

// Define todos array
let todos: string[] = ["Hassan", "Farhan"];

// Define createTodo function
async function createTodo() {
    do{
        try {
            const ans = await inquirer.prompt({
                type: "list",
                message: "Select an Operation",
                name: "todo",
                choices: ["Add", "Update", "View", "Delete"]
            });
    
            if (ans.todo === "Add") {
                let addTodo = await inquirer.prompt({
                    type: "input",
                    message: "Add item to the list",
                    name: "todo"
                });
                todos.push(addTodo.todo);
                console.log("Item added to the list:", todos);
            }
    
            if (ans.todo === "Update") {
                let updateTodo = await inquirer.prompt({
                    type: "list",
                    message: "Select item to update",
                    name: "todo",
                    choices: todos
                });
    
                let index = todos.indexOf(updateTodo.todo);
    
                let newTodo = await inquirer.prompt({
                    type: "input",
                    message: "Enter new item",
                    name: "newTodo"
                });
    
                todos[index] = newTodo.newTodo;
                console.log("Item updated:", todos);
            }
    
            if (ans.todo.toLowerCase() === "view") {
                console.log("***  To Do ***");
                console.log(todos);
                console.log("**************");
            }
    
            if (ans.todo === "Delete") {
                let deleteTodo = await inquirer.prompt({
                    type: "list",
                    message: "Select item to delete",
                    name: "todo",
                    choices: todos
                });
    
                const index = todos.indexOf(deleteTodo.todo);
                if (index !== -1) {
                    todos.splice(index, 1);
                    console.log("Item deleted:", deleteTodo.todo);
                } else {
                    console.log("Item not found:", deleteTodo.todo);
                }
            }

        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

     while(true)
     } 

    

// Call createTodo function
createTodo();
