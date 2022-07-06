try{
    /*
        Número de registro (ID) es el último elemento de s.name.split("_"), y es parte del identificador de los controles pertinentes a cada registro
    */
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];
    
    /*
        Si Representante es principal, inhabilitar Selección.
            -Debe quedar Seleccionado siempre que sea principal.
            -Desde base de datos ya quedan seleccionados todos los principales.
    */
    const vESPRINCIPAL_CBX = document.getElementById('grdGeneralEdicionMultiple_ESPRINCIPAL_' + Nro + '_S').value;
    if(vESPRINCIPAL_CBX == 'C'){
        s.SetEnabled(false);
    }

    /*
        Ocultar botones extender de Lista Externa de Representantes
    */
    const IDREPRESENTANTE_EXTENDBTN = document.getElementById('grdGeneralEdicionMultiple_IDREPRESENTANTE_' + Nro + '_B-1');
    ( IDREPRESENTANTE_EXTENDBTN != null && (IDREPRESENTANTE_EXTENDBTN.style.display = "none") );

    /*
        Obtener elementos para pintar de Solo Lectura
    */
    const CALC_REPEMAIL_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_REPEMAIL_" + Nro + "_I");
    const CALC_REPNUMEROTELEFONO_CTRL = document.getElementById("grdGeneralEdicionMultiple_CALC_REPNUMEROTELEFONO_" + Nro + "_I");
    const IDREPRESENTANTE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDREPRESENTANTE_" + Nro + "_I");
    const PADRE_IDREPRESENTANTE_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDREPRESENTANTE_" + Nro + "_I").parentElement;
    const ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREPRESENTANTE_" + Nro + "_I");
    const PADRE_ID_CTRL = document.getElementById("grdGeneralEdicionMultiple_IDTRAMITEREPRESENTANTE_" + Nro + "_I").parentElement;
        /* Para Campo Email de Representante */
    ( CALC_REPEMAIL_CTRL != null && (CALC_REPEMAIL_CTRL.style.backgroundColor = "#dcdcdc") );
    ( CALC_REPEMAIL_CTRL != null && (CALC_REPEMAIL_CTRL.style.color = "black") );
        /* Para Campo Número Teléfono de Representante */
    ( CALC_REPNUMEROTELEFONO_CTRL != null && (CALC_REPNUMEROTELEFONO_CTRL.style.backgroundColor = "#dcdcdc") );
    ( CALC_REPNUMEROTELEFONO_CTRL != null && (CALC_REPNUMEROTELEFONO_CTRL.style.color = "black") );
        /* Para Campo ID Representante y padre (pues el control IDREPRESENTANTE solo abarca una parte de lo que se desea colorear) */
    ( IDREPRESENTANTE_CTRL != null && (IDREPRESENTANTE_CTRL.style.color = "black") );
    ( IDREPRESENTANTE_CTRL != null && (IDREPRESENTANTE_CTRL.style.backgroundColor = "#dcdcdc") );
    ( PADRE_IDREPRESENTANTE_CTRL != null && (PADRE_IDREPRESENTANTE_CTRL.style.backgroundColor = "#dcdcdc") );
        /* Para Campo ID Trámite Representante y padre (pues el control IDTRAMITEREPRESENTANTE solo abarca una parte de lo que se desea colorear) */
    ( ID_CTRL != null && (ID_CTRL.style.color = "black") );
    ( ID_CTRL != null && (ID_CTRL.style.backgroundColor = "#dcdcdc") );
    ( PADRE_ID_CTRL != null && (PADRE_ID_CTRL.style.backgroundColor = "#dcdcdc") );

    /*
        Width y Height de Campos Calculados por código mientras estos tengan unidad de medida distinta a los No Calculados
    */
        /* Para Campo Email de Representante */
    ( CALC_REPEMAIL_CTRL != null && (CALC_REPEMAIL_CTRL.style.width = "278px") );
    ( CALC_REPEMAIL_CTRL != null && (CALC_REPEMAIL_CTRL.style.height = "28.8px") );
    
        /* Para Campo Número Teléfono de Representante */
    ( CALC_REPNUMEROTELEFONO_CTRL != null && (CALC_REPNUMEROTELEFONO_CTRL.style.width = "163px") );
    ( CALC_REPNUMEROTELEFONO_CTRL != null && (CALC_REPNUMEROTELEFONO_CTRL.style.height = "28.8px") );
}catch(err){
    alert(err);
}