document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
    alert("Kindly Enter Task Name!!!!")
  }

  else{
    document.querySelector('#tasks').innerHTML += `
            <div class="task">
            <input class="form-check-input me-5" type="checkbox" />
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">Удалить
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
      current_tasks[i].onclick = function(){
        this.parentNode.remove();
      }
    }
  }
}
