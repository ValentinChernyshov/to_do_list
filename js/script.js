//Pop UP
$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpShow2(){
    $("#popup2").show();
}
function PopUpHide(){
	$(".b-popup").hide();
}

//Drag and Drop  
$( function() {
    $( "#list1" ).sortable({
      connectWith: ".all_tasks"
    }).disableSelection();
  } );

//List View
function listView(){
  $(".all_tasks").removeClass('alltasks_tableview');
  $(".task_wrapper").removeClass('taskwrapper_tableview');
}

//Table View
function tableView(){
  $(".all_tasks").addClass('alltasks_tableview');
  $(".task_wrapper").addClass('taskwrapper_tableview');
}

//Change Color Theme
function colorTheme(color1,color2,color3,color4,color5){
  document.getElementById("mySidenav").style.background = color1;
  document.getElementById("main_block").style.background = color2;
  document.getElementById("myBtn").style.color = color3;
  document.getElementById("footer").style.background = color4;
  document.getElementById("header").style.background = color5;
}


//Menu adaptive
if (screen.width >= '1280') {
  document.getElementById("myBtn").addEventListener("click", openclose);    
    var menuState = 0
    function openclose(){
      if(menuState === 1){
         menuState = 0;
         document.getElementById("mySidenav").style.left = "0px";
         document.getElementById("main").style.marginLeft = "316px";
      }
      else {
         menuState = 1;
         document.getElementById("mySidenav").style.left= "-316px";
         document.getElementById("main").style.marginLeft = "0";
      }
    } 
} else if (screen.width >= '768') {
    document.getElementById("myBtn").addEventListener("click", openclose);    
    var menuState = 1
    function openclose(){
      if(menuState === 1){
         menuState = 0;
         this.style.left = "316px";
         document.getElementById("mySidenav").style.left = "0px";
      }
      else {
         menuState = 1;
         this.style.left = "0";
         document.getElementById("mySidenav").style.left = "-316px";
      }
    } 
} else if (screen.width >= '200') {
      document.getElementById("myBtn").addEventListener("click", openclose);    
    var menuState = 1
    function openclose(){
      if(menuState === 1){
         menuState = 0;
         this.style.left = "75%";
         document.getElementById("mySidenav").style.left = "0px";
      }
      else {
         menuState = 1;
         this.style.left = "0";
         document.getElementById("mySidenav").style.left = "-316px";
      }
    } 
}


//Submenu opening
$(".submenu").click(function(){
    $(this).find('ul').toggle();
});


//Adding New Task
var userTasks = [{
      "text1": "Task #1",
      "text2": "1",
      "text3": "2018-04-01",
      "text4": "Описание"
    }, {
      "text1": "Task #2",
      "text2": "2",
      "text3": "2018-02-01",
      "text4": "Описание"
    }, {
      "text1": "Task #3",
      "text2": "3",
      "text3": "2017-03-01",
      "text4": "Описание"
    }]; 
    
    function changeToDoNumber() {
      var tasks_number = userTasks.length;
      document.getElementById("tasks_number").innerHTML = "(" + tasks_number + ")";
    }
    
    
    $(document).ready(function() {
      generateMarkup(userTasks);
    });
    
    var ul = document.getElementById("list1");  
    
    function createData(){
        var heading = headingInput.value;
        var priority = priorityInput.value;
        var date = dateInput.value;
        var description = descriptionInput.value;

        var taskObj = {
            text1: heading,
            text2: priority,
            text3: date,
            text4: description,
	    }
    
        userTasks.push(taskObj);
        headingInput.value = "";
        priorityInput.text = "Normal";
        dateInput.value = "";
        descriptionInput.value = "";
        generateMarkup(userTasks);
    }
    
    
    function generateMarkup(arr) {
      document.getElementById("tasks_number").innerHTML = "(" + tasks_number + ")";
      ul.innerHTML = "";
      arr.map(function(item, index, arr){
      var arr2 = [1,2,3,4];
      arr2[0]= item.text1;
      arr2[1]= item.text2;
      arr2[2]= item.text3;
      arr2[3]= item.text4;
      createLi(arr2[0],arr2[1],arr2[2],arr2[3],index, arr)	
      })
      changeToDoNumber();
    }
    
    function createLi(text1,text2,text3,text4,text5,index,arr){
      var li = document.createElement("li");
      li.setAttribute('class','task_wrapper');

      var task = document.createElement('div');
      task.setAttribute('class','task');

      var task_heading = document.createElement('span');
      task_heading.setAttribute('class','task_heading');

      var task_priority = document.createElement('span');
      task_priority.setAttribute('class','task_priority');
      
      var task_date = document.createElement('span');
      task_date.setAttribute('class','task_date');
      
      var completeBtn = document.createElement('button');
      completeBtn.textContent = "Complete!";
      task.appendChild(completeBtn);

      completeBtn.onclick = function(){
      	var completed = userTasks.splice(index, 1); ///////////////////////// Here is the error
      	completedTasks.push(completed);
		generateMarkup(userTasks);
		generateMarkup2(completedTasks)
      }
      
      var delBtn = document.createElement("button");
      delBtn.textContent = "X";
      task.appendChild(delBtn);
      
      delBtn.onclick = function(){
        userTasks.splice(index, 1);  //////////////////////////////////////// Here is the error
		generateMarkup(userTasks);
      }

      var editBtn = document.createElement("button");
      editBtn.textContent = "edit";
      task.appendChild(editBtn);
      
      editBtn.onclick = function(){
      	PopUpShow2();
        headingInput2.value = text1;
        priorityInput2.value = text2;
        dateInput2.value = text3;
        descriptionInput2.value = text4;
        arr[index].text1 = headingInput2.value;
        arr[index].text2 = priorityInput2.value;
        arr[index].text3 = dateInput2.value;
        arr[index].text4 = descriptionInput2.value;
		generateMarkup(userTasks);
      }
      
      var task_description = document.createElement('p');
      task_description.setAttribute('class','task_description');

      li.appendChild(task);
      task.appendChild(task_heading);
      task.appendChild(task_priority);
      task.appendChild(task_date);
      task.appendChild(task_description);
      task.appendChild(completeBtn);

      task_heading.textContent = text1 ;
        if (text2 == 1) {
        	task_priority.textContent = "Low"
        } else if (text2 == 2) {
        	task_priority.textContent = "Normal"
        } else if (text2 == 3) {
        	task_priority.textContent = "High"
        };
      task_date.textContent = text3;
      task_description.textContent = text4;
      ul.appendChild(li);
      }
  
// Completed Tasks
	var completedTasks = [{
      "text1": "Сompleted Task #1",
      "text2": "3",
      "text3": "2016-04-01",
      "text4": "Описание"
    }, {
      "text1": "Сompleted Task #2",
      "text2": "2",
      "text3": "2017-03-01",
      "text4": "Описание"
    }];

    function changeCompleteNumber() {
      var tasks_number2 = completedTasks.length;
      document.getElementById("tasks_number2").innerHTML = "(" + tasks_number2 + ")";
    }
    
    $(document).ready(function() {
      generateMarkup2(completedTasks);
    });
    
    var ul2 = document.getElementById("list2");

    function generateMarkup2(arr) {
      document.getElementById("tasks_number2").innerHTML = "(" + tasks_number + ")";
      ul2.innerHTML = "";
      arr.map(function(item, index, arr){
      var arr3 = [1,2,3,4];
      arr3[0]= item.text1;
      arr3[1]= item.text2;
      arr3[2]= item.text3;
      arr3[3]= item.text4;
      createLi2(arr3[0],arr3[1],arr3[2],arr3[3],index, arr)	
      })
      changeCompleteNumber();
    }

        function createLi2(text1,text2,text3,text4,text5,index,arr){
      var li = document.createElement("li");
      li.setAttribute('class','task_wrapper');

      var task = document.createElement('div');
      task.setAttribute('class','task');

      var task_heading = document.createElement('span');
      task_heading.setAttribute('class','task_heading');

      var task_priority = document.createElement('span');
      task_priority.setAttribute('class','task_priority');
      
      var task_date = document.createElement('span');
      task_date.setAttribute('class','task_date');
      
      var delBtn = document.createElement("button");
      delBtn.textContent = "X";
      task.appendChild(delBtn);
      
      delBtn.onclick = function(){
        arr.splice(index, 1);
		generateMarkup(completedTasks);
      }
      
      var task_description = document.createElement('p');
      task_description.setAttribute('class','task_description');

      li.appendChild(task);
      task.appendChild(task_heading);
      task.appendChild(task_priority);
      task.appendChild(task_date);
      task.appendChild(task_description);

      task_heading.textContent = text1 ;
        if (text2 == 1) {
        	task_priority.textContent = "Low"
        } else if (text2 == 2) {
        	task_priority.textContent = "Normal"
        } else if (text2 == 3) {
        	task_priority.textContent = "High"
        };
      task_date.textContent = text3;
      task_description.textContent = text4;
      ul2.appendChild(li);
      }

// Sort By Date
  var reverse = 0;
  function sortByDate(){
	  	if (reverse == 1) {
		  	userTasks.sort(function(date1,date2){
			    var dat1 = new Date(date1.text3);
			    var dat2 = new Date(date2.text3);
			    reverse = 0;
			    return dat2.getTime() - dat1.getTime()
		    });
		  	generateMarkup(userTasks);
		} else if (reverse == 0) {
			userTasks.sort(function(date1,date2){
			    var dat1 = new Date(date1.text3);
			    var dat2 = new Date(date2.text3);
			    reverse = 1;
			    return dat1.getTime() - dat2.getTime()
			});
		    generateMarkup(userTasks);
	  	};
	};

// Sort By Priority
  function sortByPriority(){
    userTasks.sort(function(priority1,priority2){
    var pri1 = priority1.text2;
    var pri2 = priority2.text2;
    return pri2 - pri1 
  });
    generateMarkup(userTasks);
  }
  function sortByPriority2(){
    userTasks.sort(function(priority1,priority2){
    var pri1 = priority1.text2;
    var pri2 = priority2.text2;
    return pri1 - pri2 
  });
    generateMarkup(userTasks);
  }

  edited_task.onclick = createData;  
  new_task.onclick = createData;