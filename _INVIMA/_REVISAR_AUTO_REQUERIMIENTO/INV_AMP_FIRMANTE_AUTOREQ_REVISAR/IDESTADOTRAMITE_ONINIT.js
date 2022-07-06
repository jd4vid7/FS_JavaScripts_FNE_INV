//v1
try{
    if(IDTRAMITE.GetValue() != null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        const IDTRAMITEMODIFICADO_ExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn, IDTRAMITEMODIFICADO_ExpandirBtn], "display", "none");
      
        const RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I');
        const PADRE_RADICADOENTRADA_I = document.getElementById('RADICADOENTRADA_I').parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");
    
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_TOT_REQ_I = document.getElementById('CALC_TOT_REQ_I');
        const CALC_J_PEND_I = document.getElementById('CALC_J_PEND_I');
        const CALC_SOLREQJ_I = document.getElementById('CALC_SOLREQJ_I');
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_TOT_REQ_I, CALC_J_PEND_I, CALC_SOLREQJ_I], "height", "28.8px");
    
        OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);
        RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
    }
}catch(err){
    alert(err);
}

//v0
try{
    const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
  
    IDENTIDAD_ExpandirBtn.style.display = 'none';
    TIPOTRAMITE_ExpandirBtn.style.display = 'none';
    CLASETRAMITE_ExpandirBtn.style.display = 'none';
    FECHARADENTR_ExpandirBtn.style.display = 'none';
  
    RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
  }catch(err){
    alert(err);
  }