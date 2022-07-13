const formTask = document.getElementById('form-task');

formTask.addEventListener('submit', (e) => {
    e.preventDefault();

    var addTask = document.getElementById('task').value;
    var list = document.getElementById('task-content');

    if (addTask === '') {
        alert('Escriba la tarea');
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarea agregada',
            showConfirmButton: false,
            timer: 1200
          })
        var html = `<div class="task-content">
                    <p class="text-task">${addTask}</p>
                    <div class="buttons">
                        <button id="btn-delete" onclick="deleteTask(event)">
                            <lord-icon
                                src="https://cdn.lordicon.com/dovoajyj.json"
                                trigger="hover"
                                style="width:20px;height:20px">
                            </lord-icon>
                        </button>

                        <button id="btn-complete" onclick="taskComplete(event)">
                            <lord-icon
                                src="https://cdn.lordicon.com/hjeefwhm.json"
                                trigger="hover"
                                style="width:20px;height:20px">
                            </lord-icon>
                        </button>
                    </div>
                </div>`;

        list.innerHTML += html;
        cleanInput();
    }
})

function deleteTask(e) {
    if (e.target.id === 'btn-delete') {
        Swal.fire({
            title: 'Seguro que desea eliminar la tarea?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'La tarea ha sido eliminada.',
                'success'
              )
              e.target.parentElement.parentElement.remove();
            }
          })
    }
}

function taskComplete(e) {
    if (e.target.id === 'btn-complete') {
        e.target.parentElement.parentElement.classList.toggle('complete');
        alert('Tarea completada');

    }
}

function cleanInput() {
    document.getElementById('task').value = '';
}