<?php
    require './person.php';
    $decoded = "";
    $dominioPermitido = "http://localhost:3000";
    header("Access-Control-Allow-Origin: $dominioPermitido");
    header("Access-Control-Allow-Headers: content-type");
    header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if ($contentType === "application/json") {
        $content = trim(file_get_contents("php://input"));

        $decoded = json_decode($content, true);

    }  

    if(isset($decoded["email"]) AND isset($decoded["password"])) {
        $user = new Person($decoded["email"],$decoded["password"]);
        $regis=json_encode($user->isRegistered());
        print_r($regis);
    }
   
?>