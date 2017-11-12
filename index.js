$(document).ready(function() {
  $("#add-new-todo-button").click(function(){
   // Assign the todo description and pomodoro estimate to variables
   var todoBlock = $(this).closest("#new-todo-block")
   var description = todoBlock.find("#new-todo-description")
   // Append the new todo to the list of todos
   $("ul").append("<li class='body3'> <input type='checkbox'/> " + description.val() + "</li>")
   // Clear the input fields for new-todo-description and pomdoro-estimate by entering an empty string as the value
   description.val("")
 })
})
