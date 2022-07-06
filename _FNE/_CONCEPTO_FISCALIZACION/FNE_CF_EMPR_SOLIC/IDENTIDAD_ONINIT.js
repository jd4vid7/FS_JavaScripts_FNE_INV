try{
    /*
        Si IDTRAMITE es nulo, se trata de insercion
    */
    if(IDTRAMITE.GetValue() === null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const EntidadExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const EstadoExpandirBtn = document.getElementById('IDESTADOTRAMITE_B-1');
        const UsuarioExpandirBtn = document.getElementById('USUARIOACTUAL_B-1');
        cambiarEstiloCtrls([claseTramiteExpandirBtn, EntidadExpandirBtn, TipoTramiteExpandirBtn, EstadoExpandirBtn, UsuarioExpandirBtn], "display", "none");
      
        /*
            Estado 127 => Creado, Concepto Fiscalizacion (FNE4CRE)
        */
        IDESTADOTRAMITE.SetValue(127);
        IDESTADOTRAMITE.SetText("Creado");

        /* Deshabilitar este control */
        s.SetEnabled(false);
        const IDENTIDAD_I = document.getElementById("IDENTIDAD_I");
        const PADRE_IDENTIDAD_I = document.getElementById("IDENTIDAD_I").parentElement;
        cambiarEstiloCtrls([IDENTIDAD_I], "color", "black");
        cambiarEstiloCtrls([IDENTIDAD_I, PADRE_IDENTIDAD_I], "backgroundColor", "#dcdcdc");
    }
}catch(err){
    alert(err);
}