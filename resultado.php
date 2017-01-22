<!DOCTYPE html>
<html lang="es">
<head>   
   <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pro Game</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/styleResultado.css">
    <link rel="icon" type="image/png" href="images/game.png" /> 
</head>
<body>
    <div class="container mg-50 border-pro">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
   <?php
    
        //comprobamos que las variables existan para visualizarlos
        if( isset($_POST["nombre"]) && isset($_POST["txtCorreo"]) && isset($_POST["txtEdad"]) && isset($_POST["observaciones"]) ){
            echo "<div class='text-center title'>Felicitacion sus datos se han enviado correctamente</div>"."<br/>";
            echo "Los datos Cargados son los siguienes:";
            echo "Nombre: ".$_POST["nombre"]."<br/>";
            echo "Correo: ".$_POST["txtCorreo"]."<br/>";
            echo "Edad: ".$_POST["txtEdad"]."<br/>";
            echo "Observacion: ".$_POST["observaciones"]."<br/>";
        }else{
            echo "Disculpe las molestias sus datos no sean cargado vuelva a intentarlo";
        }
    ?>
           </div>
        </div>
    </div>
</body>
</html>