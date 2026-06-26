function tampilError(id, pesan) {
    $(id).html(pesan);
}

function hapusError(id) {
    $(id).html("");
}

function resetForm() {
    $("small").html("");
    $("#hasil").html("");
    $("#previewFoto").hide();
    $("input, select, textarea, .upload-box").removeClass("is-invalid");
}

function tampilSukses(pesan) {
    $("#hasil").html(pesan);
}