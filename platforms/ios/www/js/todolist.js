$( document ).ready(function(){
    var $newTaskInput = $('#newTaskInput');
    var $taskList = $('#taskList');
    var $taskTouchStart;
    var taskTouchEnd;
    var taskTouchStartX;
    var taskTouchEndX;

    $('#addNewTask').on('click', function(){
        var key = Date.now();
        var newTask = '<li data-key=" ' + key + '"><span>' + $newTaskInput.val() + '</span></li>';
        $taskList.append( newTask );
        $newTaskInput.val('');
    });

    $taskList.on('touchstart', 'li', function(e){
        var start = document.elementFromPoint(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
        $taskTouchStart = $(start).attr('data-key');
        alert($taskTouchStart);

    });

 });