try{
    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];

    const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
        for(ctrl of arrCtrls){
            ( ctrl != null && (ctrl.style[estilo] = valor) );
        }
    }

    /* Pintar controles Solo Lectura */
    const ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREQUISITO_" + Nro + "_I");
        /* Para colorear campos No Calculados tambien se desea abarcar el elemento padre */
    const PADRE_ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREQUISITO_" + Nro + "_I").parentElement;

    const NDOCS_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_CANTDOCS_" + Nro + "_I");
    const DESCRIPCION_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_DESCRIPCIONREQ_" + Nro + "_I");
    const COMENTARIO_CTRL = document.getElementById("grdGeneralEdicionMultiple_ROL2_COMENTARIO_" + Nro + "_I");

    cambiarEstiloCtrls([ID_CTRL, NDOCS_CTRL, DESCRIPCION_CTRL], "color", "black");
    cambiarEstiloCtrls([PADRE_ID_CTRL, ID_CTRL, NDOCS_CTRL, DESCRIPCION_CTRL], "backgroundColor", "#dcdcdc");

    /* Corregir altura de calculados: Alto 1 debería ser 28.8px APROX.  */
    cambiarEstiloCtrls([NDOCS_CTRL], "height", "28.8px");

    /* Corregir ancho de Calculados y Texto Areas: Actualmente su Ancho Control no está en pixeles, y varía dependiendo del navegador en que se use Factory. */
    cambiarEstiloCtrls([COMENTARIO_CTRL, DESCRIPCION_CTRL], "width", "403px");
    cambiarEstiloCtrls([NDOCS_CTRL], "width", "53px");
}catch(err){
    alert(err);
}