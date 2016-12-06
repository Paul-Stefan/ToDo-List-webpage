function createTask(){
	var listAreaId = document.getElementById("toDoListArea");
	console.log(listAreaId);
	//creates checkbox for net task
	var newTaskCB = document.createElement("INPUT");
    newTaskCB.setAttribute("type", "checkbox");
    listAreaId.appendChild(newTaskCB);
	//creates new lable for text box
	var taskName = document.getElementById("myText").value;
	//var taskName = textBoxId.getAttribute("value");
	
	var taskLable = document.createTextNode(taskName);
	listAreaId.appendChild(taskLable);
}

function approve(){
	$( document ).ready(createTask());
}
