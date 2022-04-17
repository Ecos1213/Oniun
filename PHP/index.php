<?php
    require './person.php';
    require './store.php';
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

    if(isset($decoded["dataProducts"])) {
        $store = new Store();
        $products= $store->getAllProducts();
        $regis=json_encode($products);
        print_r($regis);
    }

    if(
        isset($decoded["nameProduct"]) AND 
        isset($decoded["stock"]) AND 
        isset($decoded["proveedor"]) AND 
        isset($decoded["referencia"]) AND 
        isset($decoded["descripcionrapida"]) AND 
        isset($decoded["urlfabricante"]) AND 
        isset($decoded["descripciondetallada"]) 
    ) {
        $store = new Store();
        $products= $store->registreProduct(
            $decoded["nameProduct"],
            $decoded["stock"],
            $decoded["proveedor"],
            $decoded["referencia"],
            $decoded["descripcionrapida"],
            $decoded["urlfabricante"],
            $decoded["descripciondetallada"]
        );

        if($products) {
            $allProducts= $store->getAllProducts();
            $regis=json_encode($allProducts);
            print_r($regis);
        }
    }

    if(
        isset($decoded["id"]) AND 
        isset($decoded["editNameProduct"]) AND 
        isset($decoded["editStock"]) AND 
        isset($decoded["editProveedor"]) AND 
        isset($decoded["editReferencia"]) AND 
        isset($decoded["editDescripcionrapida"]) AND 
        isset($decoded["editUrlfabricante"]) AND 
        isset($decoded["editDescripciondetallada"])
    )
    {
        $store = new Store();
        $products= $store->updateProduct(
            $decoded["id"],
            $decoded["editNameProduct"],
            $decoded["editStock"],
            $decoded["editDescripcionrapida"],
            $decoded["editReferencia"],
            $decoded["editProveedor"],
            $decoded["editDescripciondetallada"],
            $decoded["editUrlfabricante"]
        );
        if($products) {
            $allProducts= $store->getAllProducts();
            $regis=json_encode($allProducts);
            print_r($regis);
        }
    }

    if(
        isset($decoded["id"]) AND 
        isset($decoded["isDelete"])
    ){

        $store = new Store();
        $products= $store->deleteProduct($decoded["id"]);
        if($products) {
            $allProducts= $store->getAllProducts();
            $regis=json_encode($allProducts);
            print_r($regis);
        }
        
        
    }
?>