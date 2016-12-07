var counter = 0;
var classNames = [];

function createTask(){
	//get id for toDo area
	var ToDoListAreaId = $("#toDoListArea");
	//console.log(ToDoListAreaId);
	var lableName = $("#myText").val();
	//prevent user from submitting empty task
	if(lableName == ""){
		alert("Please enter a task before submitting");
	}else{
		//create div for each new task
		$("#toDoListArea").append("<div class =" + counter + "></div>");
		//create check box and text that each is a child of the dev
		$("."+counter+"").append("<input type='checkBox', id =cb" + counter + ">");
		var taskLable = document.createTextNode(lableName);
		$("."+counter+"").append(taskLable);
		classNames.push(counter);
		counter ++;
		
		//clear data from checkbox and reset to placeholder
		$("#myText").attr("placeholder", "Please enter task").val("").focus().blur();
	}
}

function approve(){
	$( document ).ready(createTask());
}

function showOrHide(){
	//initialise variables
	var arrayLength = classNames.length;
	var checked;
	
	for(var i = 0; i < arrayLength; i++){
		//console.log(checked = $(".1 > .cb").val());
		checked = ($('#cb' + classNames[i] + '').prop("checked"));
		//console.log($('#id' + classNames[i] + ''));
		if(checked == true){
			$('.' + classNames[i] + '').toggle();
		}
	}
}




		
		