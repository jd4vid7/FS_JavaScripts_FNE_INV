try {
    /* Si es actualización */
    if(IDTRAMITE.GetValue() !== null){

        // EL_Visualiza_Modifica -> Array [Visualiza?, Modifica?]
        const MapaEstadosOC = {
            42: {
                Abreviatura: "FREQPROFIL",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [37, 47]
            },
            47: {
                Abreviatura: "FREQABO",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: []
            },
            54: {
                Abreviatura: "FRESPROFIL",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [37, 59]
            },
            59: {
                Abreviatura: "FASIASEJ",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: [62]
            },
            62: {
                Abreviatura: "FREVPROJUR",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: [64]
            },
            64: {
                Abreviatura: "FREVPROJURP",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: []
            },
            65: {
                Abreviatura: "FREVASEJ",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [62]
            },
            67: {
                Abreviatura: "FNOTASIPRO",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: []
            },
            69: {
                Abreviatura: "FNOTREVPROFIL",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [67, 72]
            },
            72: {
                Abreviatura: "FNOTASIABO",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: []
            },
            140: {
                Abreviatura: "FEJEPRO",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: []
            },
            82: {
                Abreviatura: "FEJEPROFIL",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [140, 141]
            },
            141: {
                Abreviatura: "FEJEABO",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: []
            },
            44: {
                Abreviatura: "FREQCOOR",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [37]
            },
            66: {
                Abreviatura: "FFIRDIR",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [67]
            },
            75: {
                Abreviatura: "FNOTREVCOO",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [67, 140]
            },
            83: {
                Abreviatura: "FEJEREVCOO",
                EstadoRecibeUsr: false,
                Estados_Asigna_Usr: [140]
            },
            37: {
                Abreviatura: "FEVPRO",
                EstadoRecibeUsr: true,
                Estados_Asigna_Usr: []
            }
        }

        let vEstadoAsignado = parseInt(s.GetValue());
        /*
            Estados trámite asignados que puede que permitan Asignación de Usuario
        */
        if(MapaEstadosOC[vEstadoAsignado] != null){
            if(MapaEstadosOC[vEstadoAsignado].EstadoRecibeUsr){
                const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
                let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
                if(arrRes.length > 0){
                    let EstadTram = parseInt(arrRes[0].IDESTADOTRAMITE);
                    if(MapaEstadosOC[EstadTram].Estados_Asigna_Usr.includes(vEstadoAsignado) ){
                        OcultarFila("SEC_AT", "USUARIOACTUAL", false);
                        RecargarLista(USUARIOACTUAL, s.GetValue(), false);
                    }
                }else{
                    OcultarFila("SEC_AT", "USUARIOACTUAL", true);
                    ( e.isValid && (e.isValid = false) );
                }
            }else{
                OcultarFila("SEC_AT", "USUARIOACTUAL", true);
            }
        }
    }
}catch (err){
    alert(err);
}


































































































try {
    /* Si es actualización */
    if(IDTRAMITE.GetValue() !== null){
        let vEstadoAsignado = s.GetValue();
        /*
            Estados trámite asignados que puede que permitan Asignación de Usuario
        */
        if(vEstadoAsignado == 37 || vEstadoAsignado == 47 || vEstadoAsignado == 59 || vEstadoAsignado == 62 || vEstadoAsignado == 64 || vEstadoAsignado == 67 || vEstadoAsignado == 72 || vEstadoAsignado == 140 || vEstadoAsignado == 141){
            const items2 = [{Key: "IDTRAMITE", Value: IDTRAMITE.GetValue()}];
            let arrRes = InvocarComando("ENT_CMD_VAL_IDESTADOTRAMITE", items2, false);
            /*
                Si Array de Comando válido y Estados trámite actuales autorizados para Asignar Usuario, mostrar usuarios y recargar lista
            */
            if(arrRes.length > 0){
                let EstadTram = arrRes[0].IDESTADOTRAMITE;
                if( EstadTram == 42 || EstadTram == 44 || EstadTram == 54 || EstadTram == 59 || EstadTram == 62 || EstadTram == 65 || EstadTram == 66 || EstadTram == 69 || EstadTram == 75 || EstadTram == 82 || EstadTram == 83){
                    console.log("mostrar user, recargar");
                    OcultarFila("SEC_AT", "USUARIOACTUAL", false);
                    RecargarLista(USUARIOACTUAL, s.GetValue(), false);
                }
            }else{
                console.log("ocultar user, arrRes.l es 0");
                OcultarFila("SEC_AT", "USUARIOACTUAL", true);
                ( e.isValid && (e.isValid = false) );
            }
        }else{
            console.log("estado asignado no asigna usuario, ocultar user");
            OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        }
    }
}catch (err){
    alert(err);
}
       