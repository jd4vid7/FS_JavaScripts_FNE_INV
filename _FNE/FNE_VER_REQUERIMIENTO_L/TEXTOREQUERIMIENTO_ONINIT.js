try{
    if(IDTRAMITEREQUERIMIENTO.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const IDTRAMITE_ExpandirBtn = document.getElementById("IDTRAMITE_B-1");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, IDTRAMITE_ExpandirBtn], "display", "none");

        const CALC_CICLO = document.getElementById("CALC_CICLO_I");
        const CALC_USUARIORADICANTE = document.getElementById("CALC_USUARIORADICANTE_I");
        const CALC_ESTADOTRAMITE = document.getElementById("CALC_ESTADOTRAMITE_ACTUALIZAR_I");
        const CALC_FECHARESPUESTA = document.getElementById("CALC_FECHARESPUESTA_I");
        cambiarEstiloCtrls([CALC_CICLO, CALC_USUARIORADICANTE, CALC_ESTADOTRAMITE, CALC_FECHARESPUESTA], "height", "28.8px");

        s.SetEnabled(false);
        const TEXTOREQUERIMIENTO_CTRL = document.getElementById("TEXTOREQUERIMIENTO_I");
        (TEXTOREQUERIMIENTO_CTRL != null && (TEXTOREQUERIMIENTO_CTRL.style.backgroundColor = "#dcdcdc") );
        (TEXTOREQUERIMIENTO_CTRL != null && (TEXTOREQUERIMIENTO_CTRL.style.color = "black") );
        e.isValid = false;
    }
}catch(err){
    alert(err);
}