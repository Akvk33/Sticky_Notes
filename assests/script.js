const notesArea = `<div class="notesArea col-md-3 px-0">
                <div class="notesContent" contenteditable="true" >Enter Your Notes Here...</div>
                <div class="notesBottom d-flex justify-content-center dragHandle">
                    <i class="bi bi-trash3-fill deleteBtn text-danger btn btn-secondary"></i>
                </div>
            </div>`

$(document).click(function (event) {
    const tar = event.target;
    if (tar.classList.contains('add')) {
        const $note = $(notesArea).hide().appendTo(".heroBody").show("clip", 500, function () {
            $(this).draggable({
                cancel: ".notesContent,.deleteBtn",
                containment: ".heroBody",
                cursor: "move",
                revert: "invalid"
            });
        });
    }
    if (tar.closest(".notesContent")) {
        $('.notesArea').removeClass('bord');
        $(tar.closest(".notesArea")).addClass('bord');
    }
    else {
        $('.notesArea').removeClass('bord');
    }

    if (tar.classList.contains('deleteBtn')) {
        function callback() {
            $(this).remove()
        }
        $(tar.closest('.notesArea')).hide("clip", 1000, callback);
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
/* $(document).on("click", function (event) {
    
}); */
