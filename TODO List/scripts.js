console.log("CONNECTED");

var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
  //handle input
if (input === "list") {
  listToDo();
} else if (input === "new") {
  addToDo();
} else if (input === "delete") {
  deleteToDO();
}
  //ask again for new input
  input = prompt("What would you like to do?");
}
  console.log("OK, YOU QUIT THE APP");

function listToDo(){
  console.log('*******');
  todos.forEach(function(todo, i){
    console.log(i + ': ' + todo);
  });
  console.log('*******');
}

function addToDo(){
  //ask for new todo
  var item = prompt("Enter an item");
  //add to todos
  todos.push(item);
}

function deleteToDO(){
  //ask for index of todo to delete
  var index = prompt("Enter index of todo to delete");
  //delete the todo
  todos.splice(index,1);
  console.log("todo deleted");
}
