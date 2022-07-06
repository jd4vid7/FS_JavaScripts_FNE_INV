try{
    MostrarMensaje('ADVERTENCIA$|$ Realizando Ajustes Actualmente.');

    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];

    /*
        Ocultar btn expandir de Lista Externa IDTRAMITE, y Botón Guardar del formulario
    */
    const IDTRAMITE_EXTENDBTN = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITE_" + Nro + "_B-1");
    const GUARDAR_BTN = document.getElementById("splFormulario_cbpPrimario_cmdActualizarLote");
    ( IDTRAMITE_EXTENDBTN != null && (IDTRAMITE_EXTENDBTN.style.display = "none") );
    ( GUARDAR_BTN != null && (GUARDAR_BTN.style.display = "none") );

    /*
        Elementos para pintar de Solo Lectura
    */
        /* Para Campos No Calculados, se desea colorear tanto control como elemento padre, para abarcar todo el 'Control que se Visualiza' */
    const ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREQUISITO_" + Nro + "_I");
    const PADRE_ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREQUISITO_" + Nro + "_I").parentElement;
    const IDTRAMITE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITE_" + Nro + "_I");
    const PADRE_IDTRAMITE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITE_" + Nro + "_I").parentElement;
        /* Para Campos Calculados solo se necesita colorear el control */
    const CALC_CANTDOCS_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_CANTDOCS_" + Nro + "_I");
    const CALC_NOMBREDOC_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_NOMBREDOC_" + Nro + "_I");
    const CALC_DESCRIPCIONREQ_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_DESCRIPCIONREQ_" + Nro + "_I");
        /* Codigo Pintar Campo Calculado Descripción Req */
    ( CALC_DESCRIPCIONREQ_CTRL != null && (CALC_DESCRIPCIONREQ_CTRL.style.backgroundColor = "#dcdcdc") );
    ( CALC_DESCRIPCIONREQ_CTRL != null && (CALC_DESCRIPCIONREQ_CTRL.style.color = "black") );
        /* Codigo Pintar Campo Calculado Nombre Doc. */
    ( CALC_NOMBREDOC_CTRL != null && (CALC_NOMBREDOC_CTRL.style.backgroundColor = "#dcdcdc") );
    ( CALC_NOMBREDOC_CTRL != null && (CALC_NOMBREDOC_CTRL.style.color = "black") );
        /* Codigo Pintar Campo Calculado Cantidad Docs. */
    ( CALC_CANTDOCS_CTRL != null && (CALC_CANTDOCS_CTRL.style.backgroundColor = "#dcdcdc") );
    ( CALC_CANTDOCS_CTRL != null && (CALC_CANTDOCS_CTRL.style.color = "black") );
        /* Codigo Pintar Campo IDTRAMITE y padre */
    ( IDTRAMITE_CTRL != null && (IDTRAMITE_CTRL.style.color = "black") );
    ( IDTRAMITE_CTRL != null && (IDTRAMITE_CTRL.style.backgroundColor = "#dcdcdc") );
    ( PADRE_IDTRAMITE_CTRL != null && (PADRE_IDTRAMITE_CTRL.style.backgroundColor = "#dcdcdc") );
        /* Codigo Pintar Campo ID y padre */
    ( ID_CTRL != null && (ID_CTRL.style.color = "black") );
    ( ID_CTRL != null && (ID_CTRL.style.backgroundColor = "#dcdcdc") );
    ( PADRE_ID_CTRL != null && (PADRE_ID_CTRL.style.backgroundColor = "#dcdcdc") );
    
    /*
        Width y Height de Campos Calculados por código mientras estos tengan unidad de medida distinta a los No Calculados
    */
        /* Para Campo Cantidad Docs. */
    ( CALC_CANTDOCS_CTRL != null && (CALC_CANTDOCS_CTRL.style.width = "53px") );
    ( CALC_CANTDOCS_CTRL != null && (CALC_CANTDOCS_CTRL.style.height = "28.8px") );
        /* Para Campo Nombre Doc. */
    ( CALC_NOMBREDOC_CTRL != null && (CALC_NOMBREDOC_CTRL.style.width = "421px") );
        /* Para Campo Descripcion */
    ( CALC_DESCRIPCIONREQ_CTRL != null && (CALC_DESCRIPCIONREQ_CTRL.style.width = "421px") );
    
    s.SetEnabled(false);
}catch(err){
    alert(err);
}