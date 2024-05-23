<?php
// Configuration de la base de données
$host = 'localhost'; // Votre hôte de base de données (e.g., localhost)
$dbname = 'potfolio'; // Nom de votre base de données
$username = 'root'; // Nom d'utilisateur de votre base de données
$password = ''; // Mot de passe de votre base de données

// Créer une connexion
$conn = new mysqli($host, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Vérifier si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Préparer et lier
    $stmt = $conn->prepare("INSERT INTO user (fullname, email, comment) VALUES (?, ?, ?)");
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }
    $stmt->bind_param("sss", $fullname, $email, $comment);

    // Définir les paramètres et exécuter
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Fermer la déclaration
    $stmt->close();
}

// Fermer la connexion
$conn->close();
?>
