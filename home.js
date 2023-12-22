const id = JSON.parse(localStorage.getItem("id"));
console.log(id);

async function renderTodo(){
    let data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    let response = await data.json();
    console.log(response);

}

renderTodo();