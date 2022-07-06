//V1 SE CAMBIA INFO. EMPRESA POR INFO. USUARIO
try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        /*
            Ocultamiento de Botones Expandir de Listas Externas y Estilos
        */
        const fechaRadExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, fechaRadExpandirBtn], "display", "none");
    
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, RADENTRADA_CTRL_PADRE], "backgroundColor", "#dcdcdc");

        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        const CALC_USER = document.getElementById("CALC_PRIMER_USUARIO_TRAZA_I");
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        cambiarEstiloCtrls([CALC_TOT_REQ_I, CALC_USER, CALC_ESTADOTRAMITE_I], "height", "28.8px");

        OcultarFila("SEC_AT", "TEXTONOTIFICACION", true);
    }
}catch(err){
    alert(err);
}


//V0
try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        /*
            Ocultamiento de Botones Expandir de Listas Externas y Estilos
        */
        const fechaRadExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, fechaRadExpandirBtn], "display", "none");
    
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, RADENTRADA_CTRL_PADRE], "backgroundColor", "#dcdcdc");

        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        cambiarEstiloCtrls([CALC_TOT_REQ_I, CALC_NOMBREEMPRESA_I, CALC_ESTADOTRAMITE_I], "height", "28.8px");

        OcultarFila("SEC_AT", "TEXTONOTIFICACION", true);
    }
}catch(err){
    alert(err);
}



try{
    /*
      Ocultar botones expandir de listas externas y ocultar Texto Notificacion inicialmente
    */
    const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
    const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
    const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
    const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
  
    IDENTIDAD_ExpandirBtn.style.display = 'none';
    TIPOTRAMITE_ExpandirBtn.style.display = 'none';
    CLASETRAMITE_ExpandirBtn.style.display = 'none';
    FECHARADENTR_ExpandirBtn.style.display = 'none';
  
    const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
    const RADENTRADA_CTRL_PADRE = document.getElementById("RADICADOENTRADA_I").parentElement;
    RADENTRADA_CTRL.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL.style.color = 'black';
    RADENTRADA_CTRL_PADRE.style.backgroundColor = '#dcdcdc';
    RADENTRADA_CTRL_PADRE.style.color = 'black';

    OcultarFila("SEC_AT", "TEXTONOTIFICACION", true);
}catch(err){
    alert(err);
}