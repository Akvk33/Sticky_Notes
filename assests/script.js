const notesArea =
    `<div class="notesArea col-md-3 px-0">
                <div class="notesContent" contenteditable="true">Enter Your Notes Here...</div>
                <div class="notesBottom d-flex justify-content-center py-3">
                </div>
                <i class="bi bi-trash-fill deleteBtn dragHandle p-0"></i>
                <i class="bi bi-arrows-move moveBtn dragHandle p-0"></i>
                <i class="bi bi-arrows-angle-expand dragHandle zoomBtn p-0 "></i>
            </div>
            `

$(document).click(function (event) {
    const tar = event.target;
    if (tar.classList.contains('add')) {
        const $note = $(notesArea).hide().appendTo(".heroBody").show("clip", 500, function () {
            $(this).draggable({
                cancel: ".notesContent,.deleteBtn,.notesBottom,.zoomBtn",
                containment: ".heroBody",
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

$(document).on("click", '.delAll', function () {
    if (document.querySelector('.heroBody').children.length == 0) {
        $('.delete').find('.modal-title').empty().text("Empty!!!");
        $('.delete').find('.modal-body').empty().text('There is nothing to DELETE...');
        $('.delete').find('.del').css("display", "none");
        $('.delete').find('.bg-secondary').css("display", "block");
    }
    else {
        $('.delete').find('.modal-title').empty().text("Are you sure...");
        $('.delete').find('.modal-body').empty().text('Please Think A Second Before Delete All NOTES!!!');
        $('.delete').find('.bg-secondary').css("display", "none");
        $('.delete').find('.del').css("display", "block");
    }
})

$('#exampleModal').click(function (e) {
    e.preventDefault();
    if (e.target.classList.contains('del')) {
        function callback() {
            $(this).remove()
        }
        $(".notesArea").hide("pulsate", 1000, callback);
    }
});

$(document).on("click", ".zoomBtn", function () {
    const $note = $(this).closest(".notesArea");
    const $clone = $note.clone(true, true);
    $clone.find(".deleteBtn, .moveBtn,.zoomBtn,.notesBottom,.ui-draggable").remove();
    $clone.removeClass("col-md-3");
    $clone.addClass("zoomed-note");
    /* $clone.find('.notesContent').removeAttr("contenteditable"); */
    $(".zoomContent").empty().append($clone);
    const modal = new bootstrap.Modal(document.getElementById("zoomModal"));
    modal.show();
    $('.close').on("click", function () {
        $note.find('.notesContent').empty().append($clone.find('.notesContent').text())
    })
});
