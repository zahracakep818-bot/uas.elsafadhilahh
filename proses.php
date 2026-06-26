<?php
// Matikan semua error output agar tidak merusak JSON
error_reporting(0);
ini_set('display_errors', 0);

header('Content-Type: application/json');

$response = ['status' => 'gagal', 'pesan' => '', 'namaFile' => ''];

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    $response['pesan'] = 'Request tidak valid!';
    echo json_encode($response);
    exit;
}

// Cek foto
if (!isset($_FILES['foto']) || $_FILES['foto']['error'] !== UPLOAD_ERR_OK) {
    $response['pesan'] = 'Foto gagal diunggah! Error: ' . $_FILES['foto']['error'];
    echo json_encode($response);
    exit;
}

$file    = $_FILES['foto'];
$ukuran  = $file['size'];
$tmpName = $file['tmp_name'];
$ext     = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$nim     = isset($_POST['nim']) ? preg_replace('/[^0-9]/', '', $_POST['nim']) : 'unknown';

// Cek format
if (!in_array($ext, ['jpg', 'jpeg', 'png'])) {
    $response['pesan'] = 'Format foto harus JPG atau PNG!';
    echo json_encode($response);
    exit;
}

// Cek ukuran
if ($ukuran > 2097152) {
    $response['pesan'] = 'Ukuran foto maksimal 2MB!';
    echo json_encode($response);
    exit;
}

// Buat folder uploads
$folderUpload = __DIR__ . '/uploads/';
if (!is_dir($folderUpload)) {
    mkdir($folderUpload, 0755, true);
}

$namaFile = $nim . '_' . time() . '.' . $ext;
$tujuan   = $folderUpload . $namaFile;

if (move_uploaded_file($tmpName, $tujuan)) {
    $response['status']   = 'berhasil';
    $response['pesan']    = 'Pendaftaran berhasil!';
    $response['namaFile'] = $namaFile;
} else {
    $response['pesan'] = 'Gagal menyimpan foto ke folder uploads!';
}

echo json_encode($response);
?>