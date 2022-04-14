<?php 

    class Person{
        private $resp_message = array("error" => false, "message" => "", "isRegistred" => false);
        private $email;
        protected $password;
        
        public function __construct($email, $password) {
            $this->email = $email;
            $this->password = $password;
        }

        public function isRegistered() {
            $mysqli = new mysqli("localhost", "root", "", "oniun");
            if ($mysqli->connect_errno) {
                //printf("Falló la conexión: %s\n", $mysqli->connect_error);
                $this->resp_message["error"] = true;
                $this->resp_message["message"] = $mysqli->connect_error;
                $this->resp_message["isRegistred"] = false;
                return $this->resp_message;
            }


            if ($resultado = $mysqli->query("SELECT * FROM `users` WHERE `email` = '".$this->email."' AND `password` = '".$this->password."';")) {
                //printf("La selección devolvió %d filas.\n", $resultado->num_rows);
                if($resultado->num_rows > 0){
                    $this->resp_message["error"] = false;
                    $this->resp_message["message"] = $resultado->num_rows;
                    $this->resp_message["isRegistred"] = true;
                    /* liberar el conjunto de resultados */
                    $resultado->close();
                }else {
                    $this->resp_message["error"] = false;
                    $this->resp_message["message"] = "Usuario no autorizado";
                    $this->resp_message["isRegistred"] = false;
                    /* liberar el conjunto de resultados */
                    $resultado->close();
                }
                
                return $this->resp_message;
            }else {
                $this->resp_message["error"] = false;
                $this->resp_message["message"] = "Usuario no autorizado";
                $this->resp_message["isRegistred"] = false;
                return $this->resp_message;
            }
        }
    }

?>