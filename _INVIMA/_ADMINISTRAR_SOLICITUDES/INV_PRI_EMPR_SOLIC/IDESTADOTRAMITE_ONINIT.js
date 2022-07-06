try{
    if (IDTRAMITE.GetValue() !== null) {
        const claseTramiteExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const TipoTramiteExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const EmpresaExpandirBtn = document.getElementById('IDEMPRESA_B-1');

        ( claseTramiteExpandirBtn != null && (claseTramiteExpandirBtn.style.display = 'none') );
        ( TipoTramiteExpandirBtn != null && (TipoTramiteExpandirBtn.style.display = 'none') );
        ( EmpresaExpandirBtn != null && (EmpresaExpandirBtn.style.display = 'none') );

        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_CANTMODALIDAD_I = document.getElementById("CALC_CANTMODALIDAD_I");
        const CALC_CANTREPRESENTANTE_I = document.getElementById("CALC_CANTREPRESENTANTE_I");
        const CALC_CANTINMUEBLE_I = document.getElementById("CALC_CANTINMUEBLE_I");
        const CALC_REQSFALTANTES_I = document.getElementById("CALC_REQSFALTANTES_I");

        ( CALC_ESTADOTRAMITE_I != null && (CALC_ESTADOTRAMITE_I.style.height = '28.8px') );
        ( CALC_CANTMODALIDAD_I != null && (CALC_CANTMODALIDAD_I.style.height = '28.8px') );
        ( CALC_CANTREPRESENTANTE_I != null && (CALC_CANTREPRESENTANTE_I.style.height = '28.8px') );
        ( CALC_CANTINMUEBLE_I != null && (CALC_CANTINMUEBLE_I.style.height = '28.8px') );
        ( CALC_REQSFALTANTES_I != null && (CALC_REQSFALTANTES_I.style.height = '28.8px') );

        RecargarLista(IDESTADOTRAMITE, IDTIPOTRAMITE.GetValue(), false);
    }
}catch(err){
    alert(err);
}