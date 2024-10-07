<?php
include 'connect.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
}

$hashedPassword = password_hash($password, PASSWORD_BCRYPT);
