function createTask(){

	var listAreaId = document.getElementById("toDoListArea");
	//creates checkbox for net task
	var newTaskCB = document.createElement("INPUT");
    newTaskCB.setAttribute("type", "checkbox");
	newTaskCB.setAttribute("class", "hos");
    listAreaId.appendChild(newTaskCB);
	//creates new lable for text box
	var taskName = document.getElementById("myText").value;	
	 //var taskLable = document.createTextNode(taskName);
	var taskLable = document.createElement("p");
	taskLable.textContent = taskName;
	taskLable.setAttribute("class", "hos");
	listAreaId.appendChild(taskLable);
	
}



function approve(){
	$( document ).ready(createTask());
}

function showOrHide(){
	$( ".hos" ).remove();
}
