//V2
try{
    /*
        Si IDTRAMITE NO es nulo, se trata de actualizacion
    */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');  
        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, TramModifExpandirBtn], "display", "none");

        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_USERNAME_I = document.getElementById("CALC_USERNAME_I");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_NOMBREEMPRESA_I, CALC_USERNAME_I], "height", "28.8px");
    }
}catch(err){
    alert(err);
}

//V1
try{
    /*
        Si IDTRAMITE NO es nulo, se trata de actualizacion
    */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');  
        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, TramModifExpandirBtn], "display", "none");

        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        cambiarEstiloCtrls([CALC_ESTADOTRAMITE_I, CALC_NOMBREEMPRESA_I], "height", "28.8px");
    }
}catch(err){
    alert(err);
}


//V0
try{
    /*
        Si IDTRAMITE NO es nulo, se trata de actualizacion
    */
    if(IDTRAMITE.GetValue() != null){
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const TramModifExpandirBtn = document.getElementById('IDTRAMITEMODIFICADO_B-1');  

        claseTramiteExpandirBtn.style.display = 'none';
        EntidadExpandirBtn.style.display = 'none';
        TipoTramiteExpandirBtn.style.display = 'none';
        TramModifExpandirBtn.style.display = 'none';
    }
}catch(err){
    alert(err);
}