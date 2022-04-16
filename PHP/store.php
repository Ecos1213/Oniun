<?php
    class Store {

        public function __construct()
        {
            
        }

        public function getAllProducts() {
            $mysqli = new mysqli("localhost", "root", "", "oniun");
            if ($mysqli->connect_errno) {
                $this->resp_message["error"] = true;
                $this->resp_message["message"] = $mysqli->connect_error;
                return $this->resp_message;
            }

            if ($resultado = $mysqli->query("SELECT * FROM `products`")) {
                if($resultado->num_rows > 0){
                    $this->resp_message["error"] = false;
                    $productos= array();
                    while($fila = mysqli_fetch_assoc($resultado)){
                        $json = array();
                        $json["id"] = $fila["id"];
                        $json["nombreproducto"] = $fila["nombreproducto"];
                        $json["disponible"] = $fila["disponible"];
                        $json["descripcionrapida"] = $fila["descripcionrapida"];
                        $json["referencia"] = $fila["referencia"];
                        $json["descripciondetallada"] = $fila["descripciondetallada"];
                        $json["url"] = $fila["url"];
                        $json["proveedor"] = $fila["proveedor"];
                        
                        $productos[] = $json;
                    }  
                    $this->resp_message["productos"] = $productos;

                    /* liberar el conjunto de resultados */
                    $resultado->close();

                }else {
                    $this->resp_message["error"] = false;
                    $this->resp_message["message"] = "products no found";

                    /* liberar el conjunto de resultados */
                    $resultado->close();
                }
                
                $mysqli->close();
                return $this->resp_message;
            }else {
                $this->resp_message["error"] = false;
                $this->resp_message["message"] = "products no found";
                $this->resp_message["isRegistred"] = false;
                return $this->resp_message;
            }
        }
    }
?>