//console.log(listAreaId);
//create elements

function createTask(){
	var listAreaId = document.getElementById("toDoListArea");
	console.log(listAreaId);
	//creates checkbox for net task
	var newTaskCB = document.createElement("INPUT");
    newTaskCB.setAttribute("type", "checkbox");
    listAreaId.appendChild(newTaskCB);
	/* //gets taskName from text box
	var textBoxId = document.getElementByid("taskTextBox");
	var taskName = textBoxId.getAttribute("value"); */
	//creates new lable for text box
	var taskName = "My task";
	var taskLable = document.createTextNode(taskName);
	listAreaId.appendChild(taskLable);
}














/* <!DOCTYPE html>
<html>
<body>

<p>Click the button to create a Checkbox.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}
</script>

</body>
</html>
 */