try {
    e.isValid = true;
    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];
  
    const IdInmuebleExpandirBtn = document.getElementById("grdGeneralEdicionMultiple_IDINMUEBLE_" + Nro + "_B-1");

    ( IdInmuebleExpandirBtn != null && (IdInmuebleExpandirBtn.style.display = "none") );

    /*
        Obtener elementos para pintar de Solo Lectura
    */
    const INFOINMDPTOCIUDAD_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_INFOINMDPTOCIUDAD_" + Nro + "_I");
    const INFOINMMATICEDC_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_INFOINMMATICEDC_" + Nro + "_I");
    const IDINMUEBLE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDINMUEBLE_" + Nro + "_I");
    const PADRE_IDINMUEBLE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDINMUEBLE_" + Nro + "_I").parentElement;
    const ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEINMUEBLE_" + Nro + "_I");
    const PADRE_ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEINMUEBLE_" + Nro + "_I").parentElement;
        /* Para Campo Dpto y Ciudad */
    ( INFOINMDPTOCIUDAD_CTRL != null && (INFOINMDPTOCIUDAD_CTRL.style.backgroundColor = "#dcdcdc") );
    ( INFOINMDPTOCIUDAD_CTRL != null && (INFOINMDPTOCIUDAD_CTRL.style.color = "black") );
        /* Para Campo Matricula y/o Cedula Cat. */
    ( INFOINMMATICEDC_CTRL != null && (INFOINMMATICEDC_CTRL.style.backgroundColor = "#dcdcdc") );
    ( INFOINMMATICEDC_CTRL != null && (INFOINMMATICEDC_CTRL.style.color = "black") );
        /* Para Campo IDINMUEBLE y padre (pues el control IDINMUEBLE solo abarca parte de lo que se desea colorear) */
    ( IDINMUEBLE_CTRL != null && (IDINMUEBLE_CTRL.style.backgroundColor = "#dcdcdc") );
    ( IDINMUEBLE_CTRL != null && (IDINMUEBLE_CTRL.style.color = "black") );
    ( PADRE_IDINMUEBLE_CTRL != null && (PADRE_IDINMUEBLE_CTRL.style.backgroundColor = "#dcdcdc") );
        /* Para Campo IDTRAMITEINMUEBLE y padre (pues el control IDTRAMITEINMUEBLE solo abarca parte de lo que se desea colorear) */
    ( ID_CTRL != null && (ID_CTRL.style.backgroundColor = "#dcdcdc") );
    ( ID_CTRL != null && (ID_CTRL.style.color = "black") );
    ( PADRE_ID_CTRL != null && (PADRE_ID_CTRL.style.backgroundColor = "#dcdcdc") );

    /*
        Width y Height de Campos Calculados por código mientras estos tengan unidad de medida distinta a los No Calculados
    */
        /* Para Campo Dpto y Ciudad */
    ( INFOINMDPTOCIUDAD_CTRL != null && (INFOINMDPTOCIUDAD_CTRL.style.width = "201px") );
    ( INFOINMDPTOCIUDAD_CTRL != null && (INFOINMDPTOCIUDAD_CTRL.style.height = "28.8px") );
        /* Para Campo Matricula y/o Cedula Cat. */
    ( INFOINMMATICEDC_CTRL != null && (INFOINMMATICEDC_CTRL.style.width = "317px") );
    ( INFOINMMATICEDC_CTRL != null && (INFOINMMATICEDC_CTRL.style.height = "28.8px") );
} catch (err) {
    alert(err);
}