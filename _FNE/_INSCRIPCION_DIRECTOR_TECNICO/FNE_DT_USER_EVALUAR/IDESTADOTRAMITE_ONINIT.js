try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const fechaRadExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
    const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    cambiarEstiloCtrls([fechaRadExpandirBtn, claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn], "display", "none");

    const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
    const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
    cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
    cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

    const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
    const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
    const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
    cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I, CALC_ESTADOTRAMITE_I], "height", "28.8px");

    OcultarFila("SEC_AT", "TEXTONOTIFICACION", true);
}catch(err){
    alert(err);
}




//snippet
try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const FECHACARGUE_ExpandirBtn = document.getElementById('FECHACARGUE_B-1');
    const CICLO_ExpandirBtn = document.getElementById('CICLO_B-1');
    const CICLO_I = document.getElementById('CICLO_I');
    const PADRE_CICLO_I = document.getElementById('CICLO_I').parentElement;
    const Actualizar_Btn = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI0_');
    cambiarEstiloCtrls([FECHACARGUE_ExpandirBtn, CICLO_ExpandirBtn, Actualizar_Btn], "display", "none");

    ( IDDOCUMENTOFS_txtEditar_ && IDDOCUMENTOFS_txtEditar_.SetVisible(false) );
    ( IDDOCUMENTOFS_txtEditarEscanear_ && IDDOCUMENTOFS_txtEditarEscanear_.SetVisible(false) );
    let blankSpace = document.getElementById("IDDOCUMENTOFS_lnkDescripcion__ET");
    ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
    cambiarEstiloCtrls([blankSpace], "display", "none");

    s.SetEnabled(false);
    cambiarEstiloCtrls([CICLO_I], "color", "black");
    cambiarEstiloCtrls([CICLO_I, PADRE_CICLO_I], "backgroundColor", "#dcdcdc");
}catch(err){
    alert(err);
}




