<?php
    $base_file_path = '';

    function upload_file($file, $dir) {
        global $base_file_path;

        $upload_path = $_SERVER['DOCUMENT_ROOT'] . '/' .$base_file_path . $dir . '/' . basename($file['name']);

        move_uploaded_file($file['tmp_name'], $upload_path);
    }

    function delete_file($file) {
        global $base_file_path;
        
        $file_path = $_SERVER['DOCUMENT_ROOT'] . '/' .$base_file_path . '/' . $file;
        
        unlink($file_path);
    }
?>