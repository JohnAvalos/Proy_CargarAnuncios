var modValidate = (function(){
    //methods private
        var validateName = function(){
        var key = true;
        var name = $(".name").val();
        name = $.trim(name);
        var patronName = /^[A-Za-z ]+$/;
        if( name.length > 0 )
        {
            if( patronName.test( name ) )
            {
                key = true;
                $(".name").removeClass("border-red").addClass("border-black");
                $(".error_name").text("");
                return key;
            }else{
                key = false;
                $(".error_name").text(" Revisa el nombre .Este campo solo acepta letras ");
                $(".name").removeClass("border-black").addClass("border-red");
                return key;
            }
        }else{
            
            $(".error_name").text("Este campo es obligatorio");
            $(".name").removeClass("border-black").addClass("border-red");
            key = false;
            return key;
        }
        
    };
    
    var blurName = function(){
        $(".name").blur(function(){
            var name = $(".name").val();
            name = $.trim( name );
            var patronName = /^[A-Za-z ]+$/;
            if( name.length > 0 ){
                if( patronName.test(name) ){
                    $(".error_name").text("");
                    $(".name").removeClass("border-red").addClass("border-black");
                }else{
                    $(".error_name").text("Revisa el nombre .Este campo solo acepta letras");
                    $(".name").removeClass("border-black").addClass("border-red");
                }
            }else{
                 $(".error_name").text("Este campo es obligatorio");
                 $(".name").removeClass("border-black").addClass("border-red");
            }
        });
    };
    
    var validateEmail = function(){
        var key = true;
        var email = $(".correo").val();
        email = $.trim( email );
        var patronEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if( email.length > 0 )
        {
            if( patronEmail.test( email ) )
            {
                key = true;
                $(".error_email").text("");
                $(".correo").removeClass("border-red").addClass("border-black");
                return key;
            }else{
                key = false;
                $(".error_email").text(" Correo no valido ");
                $(".correo").removeClass("border-black").addClass("border-red");
                return key;
            }
        }else{
            
            $(".error_email").text("Este campo es obligatorio");
            $(".correo").removeClass("border-black").addClass("border-red");
            key = false;
            return key;
        }
    };
    
    var blurEmail = function(){
         $(".correo").blur(function(){
            var patronEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var name = $(".correo").val();
             name = $.trim( name );
            if( name.length > 0 ){
                if( patronEmail.test( name ) ){
                     $(".error_email").text("");
                     $(".correo").removeClass("border-red").addClass("border-black");
                }else{
                    $(".error_email").text("Correo no valido");
                    $(".correo").removeClass("border-black").addClass("border-red");
                }
            }else{
                 $(".error_email").text("Este campo es obligatorio");
                 $(".correo").removeClass("border-black").addClass("border-red");
            }
        });
        
    };
    
    var validateEdad = function(){
         var key = true;
        var edad = $(".edad").val();
        edad = $.trim( edad );
        var patronEdad = /^[0-9]{2}$/;
        if( edad.length > 1 )
        {
            if( patronEdad.test( edad ) )
            {
                key = true;
                $(".error_edad").text("");
                $(".edad").removeClass("border-red").addClass("border-black");
                return key;
            }else{
                key = false;
                $(".error_edad").text(" Edad no valida ");
                $(".edad").removeClass("border-black").addClass("border-red");
                return key;
            }
        }else{
            
            $(".error_edad").text("Este campo es obligatorio");
            $(".edad").removeClass("border-black").addClass("border-red");
            key = false;
            return key;
        }
    }
    
    var blurEdad = function(){
         $(".edad").blur(function(){
            var patronEdad = /^[0-9]{2}$/;
            var edad = $(".edad").val();
             edad = $.trim( edad );
            if( edad.length > 1 ){
                if( patronEdad.test( edad ) ){
                     $(".error_edad").text("");
                     $(".edad").removeClass("border-red").addClass("border-black");
                }else{
                    $(".error_edad").text("Edad no valido");
                    $(".edad").removeClass("border-black").addClass("border-red");
                }
            }else{
                 $(".error_edad").text("Este campo es obligatorio");
                 $(".edad").removeClass("border-black").addClass("border-red");
            }
        });
    };
    
     var validateObservacion = function(){
         var key = true;
        var observacion = $(".observacion").val();
        observacion = $.trim( observacion );
        var patronObservacion = /^[A-Za-z0-9 ]+$/;
        if( observacion.length >= 50 )
        {   
            key = true;
            $(".error_observacion").text("");
            $(".observacion").removeClass("border-red").addClass("border-black");
            return key;
        }else{
            $(".error_observacion").text("No cumple con los caracteres limitados");
            $(".observacion").removeClass("border-black").addClass("border-red");
            key = false;
            return key;
        }
    }
     var blurObservacion = function(){
         $(".observacion").blur(function(){
            var patronObservacion = /^[A-Za-z0-9 ]+$/;
            var observacion = $(".observacion").val();
            observacion = $.trim( observacion );
             var longitudPalabras = observacion.length;
            if( longitudPalabras >= 50 ){
                 $(".error_observacion").text("");
                 $(".observacion").removeClass("border-black").addClass("border-red");
            }else{
                 $(".error_observacion").text("No cumple con los caracteres limitados");
                 $(".observacion").removeClass("border-black").addClass("border-red");
            }
        });
    };
    
    
    
    
    
    var validateGeneral = function(){
         $(".boton").click(function(){
            var keyName = validateName();
            var keyEmail = validateEmail();
            var keyEdad = validateEdad();
            var keyObservacion = validateObservacion();
            if( keyName && keyEmail && keyEdad && keyObservacion  ){
                $("#formGame").submit();
            } 
             return false;
        })};
    
    var validateGeneralBlur = function(){
         blurName();
         blurEmail();
         blurEdad();
         blurObservacion();
    }
    
    var initialize = function(){
        //method publics
        validateGeneral();
        validateGeneralBlur();
    }
    
    return{
        init:initialize
    }
})();

modValidate.init();