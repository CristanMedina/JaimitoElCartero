<?php

include 'connect.php';
include 'includes/functions.php';

session_start();

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $username = sanitizeInput($_POST['username']);
    $email = sanitizeInput($_POST['email']);
    $password = sanitizeInput($_POST['password']);
    $confirmPassword = sanitizeInput($_POST['confirmPassword']);

    if($password === $confirmPassword){
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            $error = "El correo electronico ya esta registrado.";
        } else {
            $sql = "INSERT INTO users (username, email, password) VALUES('$username', '$email', '$hashed_password')";
            if($conn->query($sql) === TRUE){
                $_SESSION['flash-message'] = "Registro de usuario exitoso. Ahora puedes iniciar sesion.";
                header("Location: login.php");
                exit();
            } else {
                $error = "Error en el registro".$conn->error;
            }
        }
    } else {
        $error = "Las contraseñas no coinciden";
    }
}
