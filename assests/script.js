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

$('#exampleModal').click(function (e) {
    e.preventDefault();
    if (e.target.classList.contains('del')) {
        function callback() {
            $(this).remove()
        }
        $(".notesArea").hide("pulsate", 1000, callback);
    }
});

$(document).on("click", ".zoomBtn", function (event) {
    const $note = $(this).closest(".notesArea");
    const $clone = $note.clone(true, true);
    $clone.find(".deleteBtn, .moveBtn,.zoomBtn,.notesBottom,.ui-draggable").remove();
    $clone.removeClass("col-md-3");
    $clone.addClass("zoomed-note");
    /* $clone.find('.notesContent').removeAttr("contenteditable"); */
    $(".zoomContent").empty().append($clone);
    const modal = new bootstrap.Modal(document.getElementById("zoomModal"));
    modal.show();
    $('.close').on("click",function(){
        $note.find('.notesContent').empty().append($clone.find('.notesContent').text())
    })
    /* if(.classList.contains('close')){
        $note.find('.notesContent').empty().append($clone.find('.notesContent').text());
    } */ 
});
