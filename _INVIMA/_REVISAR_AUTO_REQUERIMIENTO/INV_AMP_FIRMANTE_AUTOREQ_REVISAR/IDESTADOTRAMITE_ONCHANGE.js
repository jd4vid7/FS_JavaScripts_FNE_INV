try{
    if(IDTRAMITE.GetValue() != null){
        /* Mostrar opcion de subir AUTOREQ si se quiere pasar a empresa (IDS 14,15 > En Requerimiento Empresa) */
        if(s.GetValue() == 14 || s.GetValue() == 15){
            OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", false);
        }else{
            OcultarFila("SEC_AT", "IDDOCUMENTOAUTOREQ", true);
        }
    }
}catch(err){
    alert(err);
}