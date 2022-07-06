try{
    if(IDTRAMITEDOCUMENTO.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const ACTUALIZAR_BTN = document.getElementById("splFormulario_cbpSecundario_tlbOpciones_DXI0_");
        const FECHACARGUE_EXPANDBTN = document.getElementById("FECHACARGUE_B-1");
        if(IDDOCUMENTOFS_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOFS_txtEditar_.SetVisible(false);
            IDDOCUMENTOFS_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOFS_txtEscanear_.SetVisible(false);
            IDDOCUMENTOFS_txtNuevo_.SetVisible(false);
        }  
        let blankSpace = document.getElementById("IDDOCUMENTOFS_lnkDescripcion_");
        ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
        cambiarEstiloCtrls([ACTUALIZAR_BTN, FECHACARGUE_EXPANDBTN, blankSpace], "display", "none");
        s.SetEnabled(false);
        const FECHACARGUE_CTRL = document.getElementById("FECHACARGUE_I");
        const PADRE_FECHACARGUE_CTRL = document.getElementById("FECHACARGUE_I").parentElement;
        cambiarEstiloCtrls([FECHACARGUE_CTRL], "color", "black");
        cambiarEstiloCtrls([FECHACARGUE_CTRL, PADRE_FECHACARGUE_CTRL], "backgroundColor", "#dcdcdc");
    }
}catch(err){
    alert(err);
}