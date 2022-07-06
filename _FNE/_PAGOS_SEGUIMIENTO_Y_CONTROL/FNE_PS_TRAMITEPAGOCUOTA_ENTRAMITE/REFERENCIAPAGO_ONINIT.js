try {
    if(IDPAGO.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const FECHAPAGO_EXTENDBTN = document.getElementById("FECHAPAGO_B-1");
        const IDBANCO_EXTENDBTN = document.getElementById("IDBANCO_B-1");
        const CALC_NROCUOTA_I = document.getElementById("CALC_NROCUOTA_I");
        const CALC_CICLO_I = document.getElementById("CALC_CICLO_I");
        cambiarEstiloCtrls([ACTUALIZAR_BTN, FECHAPAGO_EXTENDBTN, IDBANCO_EXTENDBTN], "display", "none");
        cambiarEstiloCtrls([CALC_NROCUOTA_I, CALC_CICLO_I], "height", "28.8px");

        s.SetEnabled(false);
        const REFERENCIAPAGO_I = document.getElementById("REFERENCIAPAGO_I");
        const PADRE_REFERENCIAPAGO_I = document.getElementById("REFERENCIAPAGO_I").parentElement;
        cambiarEstiloCtrls([REFERENCIAPAGO_I], "color", "black");
        cambiarEstiloCtrls([REFERENCIAPAGO_I, PADRE_REFERENCIAPAGO_I], "backgroundColor", "#dcdcdc");

        if(IDDOCUMENTOSOPORTE_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOSOPORTE_txtEditar_.SetVisible(false);
            IDDOCUMENTOSOPORTE_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOSOPORTE_txtEscanear_.SetVisible(false);
            IDDOCUMENTOSOPORTE_txtNuevo_.SetVisible(false);
        }

        let blankSpace = document.getElementById("IDDOCUMENTOSOPORTE_lnkDescripcion_");
        ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([blankSpace], "display", "none");
    }
} catch (err) {
    alert(err);
}