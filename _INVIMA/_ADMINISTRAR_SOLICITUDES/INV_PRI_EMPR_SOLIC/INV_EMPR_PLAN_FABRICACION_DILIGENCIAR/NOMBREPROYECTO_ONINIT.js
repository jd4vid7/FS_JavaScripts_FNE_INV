try{
    if(IDPLANFABRICACION.GetValue() == null){
      MostrarMensaje("ADVERTENCIA$|$ Registros del plan de fabricación se irán añadiendo o eliminando según la selección de inmuebles asociados a la solicitud.");
    }
    if(IDPLANFABRICACION.GetValue() != null){
        const CALC_CIUDADDIRECCINMUEBLE_CTR = document.getElementById("CALC_CIUDADDIRECCINMUEBLE_I");
        ( CALC_CIUDADDIRECCINMUEBLE_CTR != null && (CALC_CIUDADDIRECCINMUEBLE_CTR.style.height = "28.8px") );
    }
}catch(err){
    alert(err);
}