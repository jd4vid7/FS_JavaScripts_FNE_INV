try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        /*
          Ocultar botones expandir de listas externas y ocultar Texto Notificacion inicialmente
        */
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn], "display", "none");
      
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");
    
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_ESTADOTRAMITE_I, CALC_TOT_REQ_I], "height", "28.8px");

        OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
        tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
    }
}catch(err){
    alert(err);
}








try{
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        /*
          Ocultar botones expandir de listas externas y ocultar Texto Notificacion inicialmente
        */
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn], "display", "none");
      
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");
    
        OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
        tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
    }
}catch(err){
    alert(err);
}




//CODIGO DEPRECADO
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

    OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
    tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
}catch(err){
    alert(err);
}