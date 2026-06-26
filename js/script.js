$(document).ready(function () {

    let polaAngka = /^[0-9]+$/;
    let polaEmail = /^\S+@\S+\.\S+$/;

    // =====================
    // VALIDASI FUNGSI
    // =====================
    function validasi() {
        let status = true;

        // NIM
        let nim = $("#nim").val().trim();
        if (nim === "") {
            $("#errorNim").html("NIM wajib diisi!");
            $("#nim").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else if (!polaAngka.test(nim)) {
            $("#errorNim").html("NIM harus berupa angka!");
            $("#nim").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else if (nim.length < 8) {
            $("#errorNim").html("NIM minimal 8 digit!");
            $("#nim").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else {
            $("#errorNim").html("");
            $("#nim").css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }

        // Nama
        let nama = $("#nama").val().trim();
        if (nama === "") {
            $("#errorNama").html("Nama lengkap wajib diisi!");
            $("#nama").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else if (nama.length < 5) {
            $("#errorNama").html("Nama minimal 5 karakter!");
            $("#nama").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else {
            $("#errorNama").html("");
            $("#nama").css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }

        // Email
        let email = $("#email").val().trim();
        if (email === "") {
            $("#errorEmail").html("Email wajib diisi!");
            $("#email").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else if (!polaEmail.test(email)) {
            $("#errorEmail").html("Format email tidak valid!");
            $("#email").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else {
            $("#errorEmail").html("");
            $("#email").css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }

        // HP
        let hp = $("#hp").val().trim();
        if (hp === "") {
            $("#errorHp").html("Nomor HP wajib diisi!");
            $("#hp").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else if (!polaAngka.test(hp)) {
            $("#errorHp").html("Nomor HP harus berupa angka!");
            $("#hp").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else if (hp.length < 10) {
            $("#errorHp").html("Nomor HP minimal 10 digit!");
            $("#hp").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else {
            $("#errorHp").html("");
            $("#hp").css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }

        // Jenis Kelamin
        if (!$("input[name='jk']:checked").val()) {
            $("#errorJk").html("Jenis kelamin wajib dipilih!");
            status = false;
        } else {
            $("#errorJk").html("");
        }

        // Prodi
        if (!$("#prodi").val()) {
            $("#errorProdi").html("Program studi wajib dipilih!");
            $("#prodi").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else {
            $("#errorProdi").html("");
            $("#prodi").css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }

        // Alamat
        let alamat = $("#alamat").val().trim();
        if (alamat === "") {
            $("#errorAlamat").html("Alamat wajib diisi!");
            $("#alamat").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else if (alamat.length < 10) {
            $("#errorAlamat").html("Alamat minimal 10 karakter!");
            $("#alamat").css({ "border-color": "#ff5252", "background-color": "#ffebee" });
            status = false;
        } else {
            $("#errorAlamat").html("");
            $("#alamat").css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }

        // Foto
        if ($("#foto").val() === "") {
            $("#errorFoto").html("Pas foto wajib diunggah!");
            status = false;
        } else {
            $("#errorFoto").html("");
        }

        return status;
    }

    // =====================
    // REAL-TIME VALIDASI
    // =====================
    $("#nim").on("blur input", function () {
        let nim = $(this).val().trim();
        if (nim === "") return;
        if (!polaAngka.test(nim)) {
            $("#errorNim").html("NIM harus berupa angka!");
            $(this).css({ "border-color": "#ff5252", "background-color": "#ffebee" });
        } else if (nim.length < 8) {
            $("#errorNim").html("NIM minimal 8 digit!");
            $(this).css({ "border-color": "#ff5252", "background-color": "#ffebee" });
        } else {
            $("#errorNim").html("");
            $(this).css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }
    });

    $("#nama").on("blur input", function () {
        let nama = $(this).val().trim();
        if (nama === "") return;
        if (nama.length < 5) {
            $("#errorNama").html("Nama minimal 5 karakter!");
            $(this).css({ "border-color": "#ff5252", "background-color": "#ffebee" });
        } else {
            $("#errorNama").html("");
            $(this).css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }
    });

    $("#email").on("blur input", function () {
        let email = $(this).val().trim();
        if (email === "") return;
        if (!polaEmail.test(email)) {
            $("#errorEmail").html("Format email tidak valid!");
            $(this).css({ "border-color": "#ff5252", "background-color": "#ffebee" });
        } else {
            $("#errorEmail").html("");
            $(this).css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }
    });

    $("#hp").on("blur input", function () {
        let hp = $(this).val().trim();
        if (hp === "") return;
        if (!polaAngka.test(hp)) {
            $("#errorHp").html("Nomor HP harus berupa angka!");
            $(this).css({ "border-color": "#ff5252", "background-color": "#ffebee" });
        } else if (hp.length < 10) {
            $("#errorHp").html("Nomor HP minimal 10 digit!");
            $(this).css({ "border-color": "#ff5252", "background-color": "#ffebee" });
        } else {
            $("#errorHp").html("");
            $(this).css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }
    });

    $("#alamat").on("blur input", function () {
        let alamat = $(this).val().trim();
        if (alamat === "") return;
        if (alamat.length < 10) {
            $("#errorAlamat").html("Alamat minimal 10 karakter!");
            $(this).css({ "border-color": "#ff5252", "background-color": "#ffebee" });
        } else {
            $("#errorAlamat").html("");
            $(this).css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }
    });

    $("#prodi").change(function () {
        if ($(this).val()) {
            $("#errorProdi").html("");
            $(this).css({ "border-color": "#ffd54f", "background-color": "#fff" });
        }
    });

    // =====================
    // PREVIEW FOTO
    // =====================
    $("#foto").change(function () {
        let file = this.files[0];
        if (!file) return;

        let ext = file.name.split(".").pop().toLowerCase();
        let ukuran = file.size;

        if (ext !== "jpg" && ext !== "jpeg" && ext !== "png") {
            $("#errorFoto").html("Format harus JPG / PNG!");
            $("#previewFoto").hide();
            return;
        }

        if (ukuran > 2097152) {
            $("#errorFoto").html("Ukuran maksimal 2 MB!");
            $("#previewFoto").hide();
            return;
        }

        $("#errorFoto").html("");
        let reader = new FileReader();
        reader.onload = function (e) {
            $("#previewFoto").attr("src", e.target.result).show();
        };
        reader.readAsDataURL(file);
    });

    // =====================
    // RESET
    // =====================
    $("#btnReset").click(function () {
        $("span.text-danger").html("");
        $("#previewFoto").hide().attr("src", "");
        $("input, select, textarea").css({ "border-color": "#ffd54f", "background-color": "#fff" });
        $("#hasil").html("");
    });

    // =====================
    // SUBMIT + KIRIM KE PHP
    // =====================
    $("#formMahasiswa").submit(function (e) {
        e.preventDefault();

        if (!validasi()) {
            $("#hasil").html("<span style='color:red; font-weight:bold;'>❌ Gagal! Silakan lengkapi data yang berwarna merah.</span>");
            return false;
        }

        $("#hasil").html("<span style='color:#cca000; font-weight:bold;'>⏳ Sedang memproses...</span>");

        let formData = new FormData();
        formData.append('nim',    $("#nim").val().trim());
        formData.append('nama',   $("#nama").val().trim());
        formData.append('email',  $("#email").val().trim());
        formData.append('hp',     $("#hp").val().trim());
        formData.append('jk',     $("input[name='jk']:checked").val());
        formData.append('prodi',  $("#prodi").val());
        formData.append('alamat', $("#alamat").val().trim());
        formData.append('foto',   $("#foto")[0].files[0]);

        $.ajax({
            url: 'proses.php',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.status === 'berhasil') {
                    let nim    = $("#nim").val().trim();
                    let nama   = $("#nama").val().trim();
                    let email  = $("#email").val().trim();
                    let hp     = $("#hp").val().trim();
                    let jk     = $("input[name='jk']:checked").val();
                    let prodi  = $("#prodi").val();
                    let alamat = $("#alamat").val().trim();
                    let foto   = 'uploads/' + res.namaFile;

                    $("#hasil").html("");
                    $("#formMahasiswa").hide();

                    $("#cardData").html(`
                        <div style="background:#fffde7; border:2px solid #ffd54f; padding:30px; border-radius:30px;">
                            <h2 style="color:#cca000; text-align:center; margin-bottom:25px;">Daftar Berhasil ✨</h2>
                            <div style="display:flex; gap:30px; align-items:flex-start; flex-wrap:wrap;">
                                <div style="text-align:center; min-width:160px;">
                                    <img src="${foto}" style="width:160px; height:160px; object-fit:cover; border-radius:20px; border:3px solid #ffd54f;">
                                </div>
                                <div style="line-height:2; font-size:16px;">
                                    <p><b>NIM:</b> ${nim}</p>
                                    <p><b>Nama:</b> ${nama}</p>
                                    <p><b>Email:</b> ${email}</p>
                                    <p><b>No HP:</b> ${hp}</p>
                                    <p><b>Jenis Kelamin:</b> ${jk}</p>
                                    <p><b>Program Studi:</b> ${prodi}</p>
                                    <p><b>Alamat:</b> ${alamat}</p>
                                </div>
                            </div>
                            <button id="btnEdit" style="margin-top:30px; width:100%; background:#ffd54f; color:#444; padding:15px; border:none; border-radius:50px; font-weight:bold; font-size:16px; cursor:pointer;">✏️ Edit Data</button>
                        </div>
                    `).show();

                } else {
                    $("#hasil").html("<span style='color:red; font-weight:bold;'>❌ " + res.pesan + "</span>");
                }
            },
            error: function () {
                $("#hasil").html("<span style='color:red; font-weight:bold;'>❌ Koneksi ke server gagal!</span>");
            }
        });
    });

    // Edit Data
    $(document).on("click", "#btnEdit", function () {
        $("#cardData").hide();
        $("#formMahasiswa").show();
    });

});