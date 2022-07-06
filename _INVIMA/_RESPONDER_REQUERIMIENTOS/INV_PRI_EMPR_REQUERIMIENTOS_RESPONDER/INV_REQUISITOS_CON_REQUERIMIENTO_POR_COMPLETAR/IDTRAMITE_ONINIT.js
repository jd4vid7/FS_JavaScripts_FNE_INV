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
    /* Ocultar btn expandir de Lista Externa IDTRAMITE, y Botón Guardar del formulario */
    const IDTRAMITE_EXTENDBTN = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITE_" + Nro + "_B-1");
    const GUARDAR_BTN = document.getElementById("splFormulario_cbpPrimario_cmdActualizarLote");
    cambiarEstiloCtrls([IDTRAMITE_EXTENDBTN, GUARDAR_BTN], "display", "none");

    /* Elementos para pintar de Solo Lectura */
        /* Para Campos No Calculados, se desea colorear tanto control como elemento padre, para abarcar todo el 'Control que se Visualiza' */
    const ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREQUISITO_" + Nro + "_I");
    const PADRE_ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREQUISITO_" + Nro + "_I").parentElement;
    const IDTRAMITE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITE_" + Nro + "_I");
    const PADRE_IDTRAMITE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITE_" + Nro + "_I").parentElement;
        /* Para Campos Calculados solo se necesita colorear el control */
    const CALC_CANTDOCS_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_CANTDOCS_" + Nro + "_I");
    const CALC_NOMBREDOC_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_NOMBREDOC_" + Nro + "_I");
    const CALC_DESCRIPCIONREQ_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_DESCRIPCIONREQ_" + Nro + "_I");
    cambiarEstiloCtrls(
        [CALC_DESCRIPCIONREQ_CTRL, CALC_NOMBREDOC_CTRL, CALC_CANTDOCS_CTRL,
        IDTRAMITE_CTRL, PADRE_IDTRAMITE_CTRL, ID_CTRL, PADRE_ID_CTRL], "backgroundColor", "#dcdcdc");
    cambiarEstiloCtrls(
        [CALC_DESCRIPCIONREQ_CTRL, CALC_NOMBREDOC_CTRL,
        CALC_CANTDOCS_CTRL, IDTRAMITE_CTRL, ID_CTRL], "color", "black");
    
    /* Width y Height de Campos Calculados por código mientras estos tengan unidad de medida distinta a los No Calculados */
    cambiarEstiloCtrls([CALC_CANTDOCS_CTRL], "width", "53px");
    cambiarEstiloCtrls([CALC_CANTDOCS_CTRL], "height", "28.8px");
    cambiarEstiloCtrls([CALC_NOMBREDOC_CTRL, CALC_DESCRIPCIONREQ_CTRL], "width", "421px");
    
    s.SetEnabled(false);
}catch(err){
    alert(err);
}