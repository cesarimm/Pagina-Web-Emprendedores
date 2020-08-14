function guardar(){


	//Declaración de las variables
	 var varNombre = $('#nombre').val();
     var varEmail = $('#email').val();
     var varEstado = $('#estado').val();
     var varTelefono = $('#telefono').val();

     if(varNombre.length == 0){
     	console.log("Vacia");
     }else{
     	alert("HOLA: "+varNombre);
     }

	
}