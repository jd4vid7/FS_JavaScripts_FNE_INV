//v1
try{
    if(IDTRAMITE.GetValue() != null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        const IDTRAMITEMODIFICADO_ExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');
        cambiarEstiloCtrls([TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn, IDTRAMITEMODIFICADO_ExpandirBtn], "display", "none");
      
        const RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I');
        const PADRE_RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I').parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");
    
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_J_PEND_I = document.getElementById('CALC_J_PEND_I');
        const CALC_SOLREQJ_I = document.getElementById('CALC_SOLREQJ_I');
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_J_PEND_I, CALC_SOLREQJ_I], "height", "28.8px");
    
        InvocarComandoLista(IDESTADOTRAMITE, null, "INV_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);
    }
}catch(err){
    alert(err);
}

//v0
InvocarComandoLista(IDESTADOTRAMITE, null, "INV_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);