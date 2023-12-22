// console.log("hello world");


const div = document.getElementById("div");

async function renderTodo() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos')
    let response = await data.json();
   response.map((ele)=>{
    div.innerHTML +=  `
    <h2>id : ${ele.id}</h2>
    <h2>title : ${ele.title}</h2>
    <button onclick = "todoId(${ele.id})">read More</button>
    `
    
   })
        
};

renderTodo();


function todoId(id){
    console.log(id);
    localStorage.setItem("id",(id))
    window.location = "home.html"
};

