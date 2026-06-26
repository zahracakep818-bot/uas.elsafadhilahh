function validasi() {
    let status = true;
    let polaAngka = /^[0-9]+$/;
    let polaEmail = /^\S+@\S+\.\S+$/;

    // NIM
    let nim = $("#nim").val().trim();
    if (nim === "") {
        $("#errorNim").html("NIM wajib diisi!");
        $("#nim").addClass("is-invalid");
        status = false;
    } else if (!polaAngka.test(nim)) {
        $("#errorNim").html("Harus berupa angka");
        $("#nim").addClass("is-invalid");
        status = false;
    } else if (nim.length < 8) {
        $("#errorNim").html("Minimal 8 digit");
        $("#nim").addClass("is-invalid");
        status = false;
    } else {
        $("#errorNim").html("");
        $("#nim").removeClass("is-invalid");
    }

    // Nama
    let nama = $("#nama").val().trim();
    if (nama === "") {
        $("#errorNama").html("Nama lengkap wajib diisi!");
        $("#nama").addClass("is-invalid");
        status = false;
    } else if (nama.length < 5) {
        $("#errorNama").html("Minimal 5 karakter");
        $("#nama").addClass("is-invalid");
        status = false;
    } else {
        $("#errorNama").html("");
        $("#nama").removeClass("is-invalid");
    }

    // Email
    let email = $("#email").val().trim();
    if (email === "") {
        $("#errorEmail").html("Email wajib diisi!");
        $("#email").addClass("is-invalid");
        status = false;
    } else if (!polaEmail.test(email)) {
        $("#errorEmail").html("Format email tidak valid");
        $("#email").addClass("is-invalid");
        status = false;
    } else {
        $("#errorEmail").html("");
        $("#email").removeClass("is-invalid");
    }

    // HP
    let hp = $("#hp").val().trim();
    if (hp === "") {
        $("#errorHp").html("Nomor HP wajib diisi!");
        $("#hp").addClass("is-invalid");
        status = false;
    } else if (!polaAngka.test(hp)) {
        $("#errorHp").html("Harus berupa angka");
        $("#hp").addClass("is-invalid");
        status = false;
    } else if (hp.length < 10) {
        $("#errorHp").html("Minimal 10 digit");
        $("#hp").addClass("is-invalid");
        status = false;
    } else {
        $("#errorHp").html("");
        $("#hp").removeClass("is-invalid");
    }

    // Jenis Kelamin
    if (!$("input[name='jk']:checked").val()) {
        $("#errorJk").html("Silakan pilih jenis kelamin Anda!");
        status = false;
    } else {
        $("#errorJk").html("");
    }

    // Program Studi
    if ($("#prodi").val() === "" || $("#prodi").val() === null) {
        $("#errorProdi").html("Silakan pilih program studi Anda!");
        $("#prodi").addClass("is-invalid");
        status = false;
    } else {
        $("#errorProdi").html("");
        $("#prodi").removeClass("is-invalid");
    }

    // Alamat
    let alamat = $("#alamat").val().trim();
    if (alamat === "") {
        $("#errorAlamat").html("Alamat wajib diisi!");
        $("#alamat").addClass("is-invalid");
        status = false;
    } else if (alamat.length < 10) {
        $("#errorAlamat").html("Minimal 10 karakter");
        $("#alamat").addClass("is-invalid");
        status = false;
    } else {
        $("#errorAlamat").html("");
        $("#alamat").removeClass("is-invalid");
    }

    // Foto
    if ($("#foto").val() === "") {
        $("#errorFoto").html("Silakan unggah pas foto terlebih dahulu!");
        $(".upload-box, .preview-box").addClass("is-invalid");
        status = false;
    } else {
        $("#errorFoto").html("");
        $(".upload-box, .preview-box").removeClass("is-invalid");
    }

    return status;
}

$(document).ready(function () {
    let polaAngka = /^[0-9]+$/;
    let polaEmail = /^\S+@\S+\.\S+$/;

    // NIM
    $("#nim").blur(function () {
        let nim = $(this).val().trim();
        if (nim === "") return;
        if (!polaAngka.test(nim)) {
            $("#errorNim").html("Harus berupa angka");
            $(this).addClass("is-invalid");
        } else if (nim.length < 8) {
            $("#errorNim").html("Minimal 8 digit");
            $(this).addClass("is-invalid");
        } else {
            $("#errorNim").html("");
            $(this).removeClass("is-invalid");
        }
    }).on("input", function () {
        let nim = $(this).val().trim();
        if (nim === "") return;
        if (!polaAngka.test(nim)) {
            $("#errorNim").html("Harus berupa angka");
            $(this).addClass("is-invalid");
        } else if (nim.length < 8) {
            $("#errorNim").html("Minimal 8 digit");
            $(this).addClass("is-invalid");
        } else {
            $("#errorNim").html("");
            $(this).removeClass("is-invalid");
        }
    });

    // Nama
    $("#nama").blur(function () {
        let nama = $(this).val().trim();
        if (nama === "") return;
        if (nama.length < 5) {
            $("#errorNama").html("Minimal 5 karakter");
            $(this).addClass("is-invalid");
        } else {
            $("#errorNama").html("");
            $(this).removeClass("is-invalid");
        }
    }).on("input", function () {
        let nama = $(this).val().trim();
        if (nama === "") return;
        if (nama.length < 5) {
            $("#errorNama").html("Minimal 5 karakter");
            $(this).addClass("is-invalid");
        } else {
            $("#errorNama").html("");
            $(this).removeClass("is-invalid");
        }
    });

    // Email
    $("#email").blur(function () {
        let email = $(this).val().trim();
        if (email === "") return;
        if (!polaEmail.test(email)) {
            $("#errorEmail").html("Format email tidak valid");
            $(this).addClass("is-invalid");
        } else {
            $("#errorEmail").html("");
            $(this).removeClass("is-invalid");
        }
    }).on("input", function () {
        let email = $(this).val().trim();
        if (email === "") return;
        if (!polaEmail.test(email)) {
            $("#errorEmail").html("Format email tidak valid");
            $(this).addClass("is-invalid");
        } else {
            $("#errorEmail").html("");
            $(this).removeClass("is-invalid");
        }
    });

    // HP
    $("#hp").blur(function () {
        let hp = $(this).val().trim();
        if (hp === "") return;
        if (!polaAngka.test(hp)) {
            $("#errorHp").html("Harus berupa angka");
            $(this).addClass("is-invalid");
        } else if (hp.length < 10) {
            $("#errorHp").html("Minimal 10 digit");
            $(this).addClass("is-invalid");
        } else {
            $("#errorHp").html("");
            $(this).removeClass("is-invalid");
        }
    }).on("input", function () {
        let hp = $(this).val().trim();
        if (hp === "") return;
        if (!polaAngka.test(hp)) {
            $("#errorHp").html("Harus berupa angka");
            $(this).addClass("is-invalid");
        } else if (hp.length < 10) {
            $("#errorHp").html("Minimal 10 digit");
            $(this).addClass("is-invalid");
        } else {
            $("#errorHp").html("");
            $(this).removeClass("is-invalid");
        }
    });

    // Alamat
    $("#alamat").blur(function () {
        let alamat = $(this).val().trim();
        if (alamat === "") return;
        if (alamat.length < 10) {
            $("#errorAlamat").html("Minimal 10 karakter");
            $(this).addClass("is-invalid");
        } else {
            $("#errorAlamat").html("");
            $(this).removeClass("is-invalid");
        }
    }).on("input", function () {
        let alamat = $(this).val().trim();
        if (alamat === "") return;
        if (alamat.length < 10) {
            $("#errorAlamat").html("Minimal 10 karakter");
            $(this).addClass("is-invalid");
        } else {
            $("#errorAlamat").html("");
            $(this).removeClass("is-invalid");
        }
    });

    // Prodi
    $("#prodi").change(function () {
        if ($(this).val() !== "") {
            $("#errorProdi").html("");
            $(this).removeClass("is-invalid");
        }
    });
});