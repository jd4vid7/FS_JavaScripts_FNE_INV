try {
    /*
        Si ID Registro NO null, se trata de actualización de registro.
        Quitar opción de Actualizar,
        Quitar botones expandir de Listas Externas Solo Lectura,
        Pintar este control de solo lectura despues de SetEnabled(false)
    */
    if(IDTRAMITEOBSERVACION.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI1_");
        const IDTRAMITE_EXPANDBTN = document.getElementById("IDTRAMITE_B-1");
        const FECHAOBSERVACION_EXPANDBTN = document.getElementById("FECHAOBSERVACION_B-1");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, IDTRAMITE_EXPANDBTN, FECHAOBSERVACION_EXPANDBTN], "display", "none");

        s.SetEnabled(false);
        const IDTRAMITE_I = document.getElementById("IDTRAMITE_I");
        const PADRE_IDTRAMITE_I = document.getElementById("IDTRAMITE_I").parentElement;
        cambiarEstiloCtrls([IDTRAMITE_I], "color", "black");
        cambiarEstiloCtrls([IDTRAMITE_I, PADRE_IDTRAMITE_I], "backgroundColor", "#dcdcdc");

        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_USUARIO_I = document.getElementById("CALC_USUARIO_I");
        const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_USUARIO_I, CALC_CICLO_I], "height", "28.8px");
    }
} catch (err) {
    console.log(err);
}