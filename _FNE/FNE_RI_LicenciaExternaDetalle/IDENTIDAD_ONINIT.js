try{
    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }
    const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
    const IDESTADOTRAMITE_ExpandirBtn = document.getElementById('IDESTADOTRAMITE_B-1');
    const actualizarBTN = document.getElementById('splFormulario_cbpSecundario_tlbOpciones_DXI0_');
    cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn, IDESTADOTRAMITE_ExpandirBtn, actualizarBTN], "display", "none");
  
    const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
    const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
    cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
    cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");

    const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
    cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I], "height", "28.8px");

    s.SetEnabled(false);
    const IDENTIDAD_CTRL = document.getElementById("IDENTIDAD_I");
    const PADRE_IDENTIDAD_CTRL = document.getElementById("IDENTIDAD_I").parentElement;
    cambiarEstiloCtrls([IDENTIDAD_CTRL], "color", "black");
    cambiarEstiloCtrls([IDENTIDAD_CTRL, PADRE_IDENTIDAD_CTRL], "backgroundColor", "#dcdcdc");

    if(IDDOCUMENTOFINAL_HFValorID_.Get("ID") != ""){
        IDDOCUMENTOFINAL_txtEditar_.SetVisible(false);
        IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false);
    }else{
        IDDOCUMENTOFINAL_txtEscanear_.SetVisible(false);
        IDDOCUMENTOFINAL_txtNuevo_.SetVisible(false);
    }

    if(IDDOCUMENTOEJECUTORIA_HFValorID_.Get("ID") != ""){
        IDDOCUMENTOEJECUTORIA_txtEditar_.SetVisible(false);
        IDDOCUMENTOEJECUTORIA_txtEditarEscanear_.SetVisible(false);
    }else{
        IDDOCUMENTOEJECUTORIA_txtEscanear_.SetVisible(false);
        IDDOCUMENTOEJECUTORIA_txtNuevo_.SetVisible(false);
    }
    
    let blankSpace = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion_");
    ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
    cambiarEstiloCtrls([blankSpace], "display", "none");
    
    let blankSpace2 = document.getElementById("IDDOCUMENTOEJECUTORIA_lnkDescripcion_");
    ( blankSpace2 !== null && (blankSpace2 = blankSpace2.parentElement.previousElementSibling) );
    cambiarEstiloCtrls([blankSpace2], "display", "none");
}catch(err){
    alert(err);
}