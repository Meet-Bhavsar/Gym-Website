<?php
$servername = "meet";
$username = "root";
$password = "meet";
$database = "wt";
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contact_wt (firstname, lastname, email, message)
VALUES ('$firstname', '$lastname', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    header("Location: contact_form.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
