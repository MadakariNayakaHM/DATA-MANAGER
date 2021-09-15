
let globalTaskData=[];

 taskContents = document.getElementById("taskContent");

const addCard = () => {
    const newTaskDetails = {
        id: `${Date.now()}`,
        studentname: document.getElementById("name").value,
        studentsem: document.getElementById("sem").value,
        studentUSN: document.getElementById("USN").value,
        branch: document.getElementById("branch").value
    };

   
    taskContents.insertAdjacentHTML('beforeend', generateTaskCard(newTaskDetails));
    
    globalTaskData.push(newTaskDetails);
    SaveToLocalStorage();
}

const generateTaskCard = ({id, studentname,  studentsem, studentUSN, branch}) => {
    return (`<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card">
            <div class="card-header">
                <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-info">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button type="button" class="btn btn-outline-danger name=${id} onclick="deleteTask(this)" >
                        <i class="far fa-trash-alt"name=${id} onclick="deleteTask(this)"></i>
                    </button>
                </div>
            </div>
            
            <div class="card-body">
                <h5 class="card-title">${studentname}</h5>
                <h5 class="card-title">${ studentsem}</h5>
                <p class="card-text">${studentUSN}</p>
                <span class="badge bg-primary">${branch}</span>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-primary float-end">OPEN INFO</button>
            </div>
        </div>
    </div>`)
}

const SaveToLocalStorage=()=>{
    localStorage.setItem("madakari",JSON.stringify({nayaka:globalTaskData}));
}

const ReloadTaskCard=()=>{
    const localStorageCopy=JSON.parse(localStorage.getItem("madakari"));
    
    if(localStorageCopy){
        globalTaskData=localStorageCopy.nayaka;
        
    }
    console.log(globalTaskData);

globalTaskData.map((cardData)=>{
    taskContents.insertAdjacentHTML('beforeend', generateTaskCard(cardData));

})


}
const deleteTask=(e)=>{
    const TargerID=e.getAttribute("name");
    globalTaskData=globalTaskData.filter((cardData)=> cardData.id!==TargerID);
    SaveToLocalStorage();
    window.location.reload();
}