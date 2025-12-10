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
        const $note = $(notesArea).hide().appendTo(".heroBody")/* .slideDown(300).delay(800).fadeTo(400, 1); */.show("clip", 500);
        $(".notesArea").draggable({
            cancel: ".notesContent,.deleteBtn",
            containment: ".heroBody",
            cursor: "move"
        });
    }

    if (tar.classList.contains('deleteBtn')) {
        function callback() {
            $(this).remove()
        }
        $(tar.closest('.notesArea'))/* .slideUp(300).delay(800).fadeOut(100, function () {
            $(this).remove();
        }); */.hide("clip", 1000, callback);
    }
});
$('#exampleModal').click(function (e) {
    e.preventDefault();
    if (e.target.classList.contains('del')) {
        function callback() {
            $(this).remove()
        }
        $(".notesArea")/* .slideUp(300).delay(800).fadeOut(100, function () {
            $(this).remove();
        }); */.hide("pulsate", 1000, callback);


    }
});
