export const states = {
    logged : false,
    tasks : [
        {id : 4 , title : "hola" , complete : false}
    ],
    user : null,
    accounts : 
    [

        {
            user : "antonio",
            password : 12345
        },

        {
            user : "pepe",
            password : 54321
        }

    ]
}


export function validarUser(userName,userPassword){
    for (const  account of states.accounts){
        if (userName === account.user && userPassword == account.password){
            states.logged = true;
            states.user = userName;
            return true
        }
    }
    return false
}



export function addTask(title){
    const task = {id: crypto.randomUUID, title : title, complete : false}
    states.tasks.push(task);
    return task;
}

export function editTask(id){
    const task = states.tasks.find( t => t.id == id);
    task.complete = true;
    
}