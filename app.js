const btn1 = document.querySelector("#add")
const todoList = document.getElementById("todoList");

btn1.addEventListener("click",function(){
    const task = item.value;
  if (task === "") {
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `${task} <span>✖</span>`;
  todoList.appendChild(li);
  item.value = "";
  const span = li.getElementsByTagName("span")[0];
  span.addEventListener("click", function() {
    todoList.removeChild(li);
  });
});
