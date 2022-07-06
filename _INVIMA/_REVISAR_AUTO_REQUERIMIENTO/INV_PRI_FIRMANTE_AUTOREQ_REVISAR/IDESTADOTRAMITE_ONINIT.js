try{
    /* Si IDTRAMITE NO nulo, es actualización de Registro */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }

        /* Ocultar botón expandir de Listas Externas Solo Lectura */
        const IDENTIDAD_EXPANDBTN = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_EXPANDBTN = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_EXPANDBTN = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_EXPANDBTN = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_EXPANDBTN, TIPOTRAMITE_EXPANDBTN, CLASETRAMITE_EXPANDBTN, FECHARADENTR_EXPANDBTN], "display", "none");
      
        /* Arreglar altura de Calculados (Al tiempo que se escribe este código, Calculados Inician menos alto que otros tipos de Campo) */
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_T_PEND_I = document.getElementById("CALC_T_PEND_I");
        const CALC_J_PEND_I = document.getElementById("CALC_J_PEND_I");
        const CALC_SOLREQT_I = document.getElementById("CALC_SOLREQT_I");
        const CALC_SOLREQJ_I = document.getElementById("CALC_SOLREQJ_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_T_PEND_I, CALC_J_PEND_I, CALC_SOLREQT_I, CALC_SOLREQJ_I, CALC_TOT_REQ_I], "height", "28.8px");

        /*
        Arreglar color Solo Lectura de campo tipo Texto
        (Al tiempo que se escribe este código, campos tipo Texto Solo Lectura tienen bg blanco y texto gris, que resulta dificil de leer)
        */
        const RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADICADOENTRADA_I = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADICADOENTRADA_I], "color", "black");
        cambiarEstiloCtrls([RADICADOENTRADA_I, PADRE_RADICADOENTRADA_I], "backgroundColor", "#dcdcdc");

        /* Ocultar campo Auto Req temporalmente, hasta que escoga Estado Requerimiento Licenciatario */
        OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);
        RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
    }
}catch(err){
    alert(err);
}



//LEGACY
try{
    const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
  
    IDENTIDAD_ExpandirBtn.style.display = 'none';
    TIPOTRAMITE_ExpandirBtn.style.display = 'none';
    CLASETRAMITE_ExpandirBtn.style.display = 'none';
    FECHARADENTR_ExpandirBtn.style.display = 'none';
  
    OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);

    RecargarLista("IDESTADOTRAMITE", IDTIPOTRAMITE.GetValue(), false);
}catch(err){
    alert(err);
}