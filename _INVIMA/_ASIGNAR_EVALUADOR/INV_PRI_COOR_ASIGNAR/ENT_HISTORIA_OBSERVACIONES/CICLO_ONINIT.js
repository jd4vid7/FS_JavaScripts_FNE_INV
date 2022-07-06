try {
    /*
        Si ID Registro null, se trata de inserción de registro.
        Quitar botones expandir de Listas Externas Solo Lecrtura,
        Pintar este control de solo lectura despues de SetEnabled(false)
    */
    if(IDTRAMITEOBSERVACION.GetValue() === null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDTRAMITE_EXPANDBTN = document.getElementById("IDTRAMITE_B-1");
        const FECHAOBSERVACION_EXPANDBTN = document.getElementById("FECHAOBSERVACION_B-1");
        const USUARIOGENERA_EXPANDBTN = document.getElementById("USUARIOGENERA_B-1");
        const IDESTADOTRAMITE_EXPANDBTN = document.getElementById("IDESTADOTRAMITE_B-1");
        const CICLO_EXPANDBTN = document.getElementById("CICLO_B-1");
        cambiarEstiloCtrls([IDTRAMITE_EXPANDBTN, FECHAOBSERVACION_EXPANDBTN, USUARIOGENERA_EXPANDBTN, IDESTADOTRAMITE_EXPANDBTN, CICLO_EXPANDBTN], "display", "none");
  
        s.SetEnabled(false);
        const CICLO_I = document.getElementById("CICLO_I");
        const PADRE_CICLO_I = document.getElementById("CICLO_I").parentElement;
        cambiarEstiloCtrls([CICLO_I], "color", "black");
        cambiarEstiloCtrls([CICLO_I, PADRE_CICLO_I], "backgroundColor", "#dcdcdc");

        ( OBSERVACION != null && (OBSERVACION.Focus()) );
    }
} catch (err) {
    console.log(err);
}