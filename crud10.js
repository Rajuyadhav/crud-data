let data= [
    {id:1, name:"raju", email:"raju123@gmail.com"},
    {id:2, name:"chandu", email:"chandu123@gmail.com"}
];
function readAll(){
    let tableDate= document.querySelector(".table_data")
    let elements= '';

    data.map(obj =>(
        elements+= `<tr>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td><button onclick={edit(${obj.id})}>update</button>
        <button onclick={delet(${obj.id})}>Delete</button></td>
        
        </tr>`
    ))
    tableDate.innerHTML= elements
}
readAll();

function delet(id){
    data = data.filter( d => d.id !== id);
    readAll()
}

function update(){
    var name= document.querySelector('.uname').value
    var email= document.querySelector('.uemail').value
    var id=parseInt(document.querySelector('.id').value)
    var index = data.findIndex(d => d.id === id)
    data[index] = {id, name, email}
    document.querySelector('.create-form').style.display = "block";
    document.querySelector('.update-form').style.display = "none";
    readAll()
}
function edit(id){
    document.querySelector('.create-form').style.display = "none";
     document.querySelector('.update-form').style.display = "block";
    var object= data.find(obj => obj.id === id);
    document.querySelector('.uname').value= object.name;
    document.querySelector('.uemail').value= object.email;
    document.querySelector('.id').value= object.id;
}
function create(){
    let name= document.querySelector(".name").value;
    let email= document.querySelector(".email").value;
    let obj = {id:3, name:name, email:email};
    data.push(obj)
    readAll();
    document.querySelector(".name").value="";
    document.querySelector(".email").value="";
}