// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get the form element
  const form = document.getElementById("create-task-form");

  // Get the task list element
  const taskList = document.getElementById("tasks");

  // Add an event listener to the form for the "submit" event
  form.addEventListener("submit", (event) => {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    // Create a new list item for the task
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Add the task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field after adding the task
    document.getElementById("new-task-description").value = "";
  });
});