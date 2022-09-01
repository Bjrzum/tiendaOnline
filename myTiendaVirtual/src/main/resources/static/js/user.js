let btnCancel = $('.cancel');
//prevenir el comportamiento por defecto del boton cancelar
btnCancel.click(function(e) {
    e.preventDefault();

    $('.emergent-edit').removeClass('emergent-edit-active');
});

$('.btn-edit').click(function() {
    $('.emergent-edit').addClass('emergent-edit-active');
});

$('.btn-delete').click(function() {
    $('.emergent-delete').addClass('emergent-delete-active');
});
$('.btn-delete-no').click(function() {
    $('.emergent-delete').removeClass('emergent-delete-active');
});