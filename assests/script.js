const notesArea = `<div class="notesArea col-md-3 px-0">
                <div class="notesContent" contenteditable="true" >Enter Your Notes Here...</div>
                <div class="notesBottom d-flex justify-content-center dragHandle">
                    <i class="bi bi-trash3-fill deleteBtn text-danger btn btn-secondary"></i>
                </div>
            </div>`

$('.hero').click(function (event) {
    const tar = event.target;
    if (tar.classList.contains('add')) {
        /* $('.heroBody').append(notesArea); */
        const $note = $(notesArea).hide().appendTo(".heroBody").slideDown(300).delay(800).fadeTo(400, 1);
        $(".notesArea").draggable({
            cancel: ".notesContent,.deleteBtn",
            containment: ".heroBody",
            cursor: "move"
        });
    }

    if (tar.classList.contains('del')) {
        $('.notesArea').remove()
    }

    if (tar.classList.contains('deleteBtn')) {
        $(tar.closest('.notesArea')).slideUp(300).delay(800).fadeOut(100, function () {
            $(this).remove();
        });
    }
});

