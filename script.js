var counter = 0;
var classNames = [];

function createTask(){
counter ++;
	var listAreaId = document.getElementById("toDoListArea");
	//creates checkbox for net task
	var newTaskCB = document.createElement("INPUT");
    newTaskCB.setAttribute("type", "checkbox");
	newTaskCB.setAttribute("class", counter);
    listAreaId.appendChild(newTaskCB);
	//creates new lable for text box
	var taskName = document.getElementById("myText").value;	
	 //var taskLable = document.createTextNode(taskName);
	var taskLable = document.createElement("p");
	taskLable.textContent = taskName;
	taskLable.setAttribute("class", counter);
	listAreaId.appendChild(taskLable);
	
	classNames.push(counter);
}

function approve(){
	$( document ).ready(createTask());
}

function showOrHide(){
	var arrayLength = classNames.length;
	var checked;
	
	for(var i = 0; i < arrayLength; i++){
		console.log(classNames[i]);
		checked = ($('.' + classNames[i] + '').prop("checked"));
		if(checked == true){
			$('.' + classNames[i] + '').toggle();
		}
	}
}
