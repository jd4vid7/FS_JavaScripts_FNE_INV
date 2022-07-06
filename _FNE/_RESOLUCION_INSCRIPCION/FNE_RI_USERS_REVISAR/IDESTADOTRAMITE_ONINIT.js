try{
    /*
    Si IDTRAMITE NO es nulo (es decir es actualizacion de registro)
    */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn], "display", "none");
  
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");

        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_ESTADOTRAMITE_I, CALC_TOT_REQ_I], "height", "28.8px");

        /* EL_Visualiza_Modifica -> Array [Visualiza?, Modifica?] */
        const MapaEstadosOI = {
            44: {
                Abreviatura: "FREQCOOR",
                TNotif_Visualiza_Modifica: [false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [false],
                DocEjec_Visualiza_Modifica: [false],
            },
            66: {
                Abreviatura: "FFIRDIR",
                TNotif_Visualiza_Modifica: [false],
                DocBorrador_Visualiza_Modifica: [true, false],
                DocFinal_Visualiza_Modifica: [true, true],
                DocEjec_Visualiza_Modifica: [false],
            },
            75: {
                Abreviatura: "FNOTREVCOO",
                TNotif_Visualiza_Modifica: [true, false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [true, false],
                DocEjec_Visualiza_Modifica: [false],
            },
            83: {
                Abreviatura: "FEJEREVCOO",
                TNotif_Visualiza_Modifica: [true, false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [true, false],
                DocEjec_Visualiza_Modifica: [true, false],
            }
        }

        let vEstadoTramite = parseInt(s.GetValue());
        let cuentaDocsOcultos = 0;
        if(MapaEstadosOI[vEstadoTramite] != null){
            if(MapaEstadosOI[vEstadoTramite].TNotif_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_DG", "TEXTONOTIFICACION", true);
            }else if(MapaEstadosOI[vEstadoTramite].TNotif_Visualiza_Modifica[1] === false){
                const TEXTONOTIFICACION_I = document.getElementById("TEXTONOTIFICACION_I");
                ( TEXTONOTIFICACION != null && TEXTONOTIFICACION.SetEnabled(false) );
                cambiarEstiloCtrls([TEXTONOTIFICACION_I], "color", "black");
                cambiarEstiloCtrls([TEXTONOTIFICACION_I], "backgroundColor", "#dcdcdc");
            }
    
            
            if(MapaEstadosOI[vEstadoTramite].DocBorrador_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
                cuentaDocsOcultos++;
            }else if(MapaEstadosOI[vEstadoTramite].DocBorrador_Visualiza_Modifica[1] === false){
                ( IDDOCUMENTOBORRADOR_txtEditar_ != null && IDDOCUMENTOBORRADOR_txtEditar_.SetVisible(false) );
                ( IDDOCUMENTOBORRADOR_txtEditarEscanear_ != null && IDDOCUMENTOBORRADOR_txtEditarEscanear_.SetVisible(false) );
                const docEsObligatorio_BTN = document.getElementById("IDDOCUMENTOBORRADOR_lnkDescripcion__EC");
                let blankSpace = document.getElementById("IDDOCUMENTOBORRADOR_lnkDescripcion__ET");
                ( blankSpace != null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
                cambiarEstiloCtrls([blankSpace, docEsObligatorio_BTN], "display", "none");
            }
    
            if(MapaEstadosOI[vEstadoTramite].DocFinal_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_D", "IDDOCUMENTOFINAL", true);
                cuentaDocsOcultos++;
            }else if(MapaEstadosOI[vEstadoTramite].DocFinal_Visualiza_Modifica[1] === false){
                ( IDDOCUMENTOFINAL_txtEditar_ != null && IDDOCUMENTOFINAL_txtEditar_.SetVisible(false) );
                ( IDDOCUMENTOFINAL_txtEditarEscanear_ != null && IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false) );
                const docEsObligatorio_BTN = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion__EC");
                let blankSpace = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion__ET");
                ( blankSpace != null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
                cambiarEstiloCtrls([blankSpace, docEsObligatorio_BTN], "display", "none");
            }
    
            if(MapaEstadosOI[vEstadoTramite].DocEjec_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_D", "IDDOCUMENTOEJECUTORIA", true);
                cuentaDocsOcultos++;
            }else if(MapaEstadosOI[vEstadoTramite].DocEjec_Visualiza_Modifica[1] === false){
                ( IDDOCUMENTOEJECUTORIA_txtEditar_ != null && IDDOCUMENTOEJECUTORIA_txtEditar_.SetVisible(false) );
                ( IDDOCUMENTOEJECUTORIA_txtEditarEscanear_ != null && IDDOCUMENTOEJECUTORIA_txtEditarEscanear_.SetVisible(false) );
                const docEsObligatorio_BTN = document.getElementById("IDDOCUMENTOEJECUTORIA_lnkDescripcion__EC");
                let blankSpace = document.getElementById("IDDOCUMENTOEJECUTORIA_lnkDescripcion__ET");
                ( blankSpace != null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
                cambiarEstiloCtrls([blankSpace, docEsObligatorio_BTN], "display", "none");
            }
        }

        if(cuentaDocsOcultos === 3){
            tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
        }

        /*
        Ocultar Asignar Usuario inicialmente, y recargar lista de Estados posibles a Asignar
        */
        OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        InvocarComandoLista(IDESTADOTRAMITE, null, "FNE_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);
    }
}catch(err){
    alert(err);
}























try{
    /*
    Si IDTRAMITE NO es nulo (es decir es actualizacion de registro)
    */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn], "display", "none");
  
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");

        const CALC_NOMBREEMPRESA_I = document.getElementById("CALC_NOMBREEMPRESA_I");
        const CALC_ESTADOTRAMITE_I = document.getElementById("CALC_ESTADOTRAMITE_I");
        const CALC_TOT_REQ_I = document.getElementById("CALC_TOT_REQ_I");
        cambiarEstiloCtrls([CALC_NOMBREEMPRESA_I, CALC_ESTADOTRAMITE_I, CALC_TOT_REQ_I], "height", "28.8px");

        /* EL_Visualiza_Modifica -> Array [Visualiza?, Modifica?] */
        const MapaEstadosOI = {
            44: {
                Abreviatura: "FREQCOOR",
                TNotif_Visualiza_Modifica: [false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [false],
                DocEjec_Visualiza_Modifica: [false],
            },
            66: {
                Abreviatura: "FFIRDIR",
                TNotif_Visualiza_Modifica: [false],
                DocBorrador_Visualiza_Modifica: [true, false],
                DocFinal_Visualiza_Modifica: [true, true],
                DocEjec_Visualiza_Modifica: [false],
            },
            75: {
                Abreviatura: "FNOTREVCOO",
                TNotif_Visualiza_Modifica: [true, false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [true, false],
                DocEjec_Visualiza_Modifica: [false],
            },
            83: {
                Abreviatura: "FEJEREVCOO",
                TNotif_Visualiza_Modifica: [true, false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [true, false],
                DocEjec_Visualiza_Modifica: [true, false],
            }
        }

        let vEstadoTramite = parseInt(s.GetValue());
        let cuentaDocsOcultos = 0;
        if(MapaEstadosOI[vEstadoTramite] != null){
            if(MapaEstadosOI[vEstadoTramite].TNotif_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_DG", "TEXTONOTIFICACION", true);
            }else if(MapaEstadosOI[vEstadoTramite].TNotif_Visualiza_Modifica[1] === false){
                const TEXTONOTIFICACION_I = document.getElementById("TEXTONOTIFICACION_I");
                ( TEXTONOTIFICACION && TEXTONOTIFICACION.SetEnabled(false) );
                cambiarEstiloCtrls([TEXTONOTIFICACION_I], "color", "black");
                cambiarEstiloCtrls([TEXTONOTIFICACION_I], "backgroundColor", "#dcdcdc");
            }
    
            
            if(MapaEstadosOI[vEstadoTramite].DocBorrador_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
                cuentaDocsOcultos++;
            }else if(MapaEstadosOI[vEstadoTramite].DocBorrador_Visualiza_Modifica[1] === false){
                ( IDDOCUMENTOBORRADOR_txtEditar_ && IDDOCUMENTOBORRADOR_txtEditar_.SetVisible(false) );
                ( IDDOCUMENTOBORRADOR_txtEditarEscanear_ && IDDOCUMENTOBORRADOR_txtEditarEscanear_.SetVisible(false) );
                const docEsObligatorio_BTN = document.getElementById("IDDOCUMENTOBORRADOR_lnkDescripcion__EC");
                let blankSpace = document.getElementById("IDDOCUMENTOBORRADOR_lnkDescripcion__ET");
                ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
                cambiarEstiloCtrls([blankSpace, docEsObligatorio_BTN], "display", "none");
            }
    
            if(MapaEstadosOI[vEstadoTramite].DocFinal_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_D", "IDDOCUMENTOFINAL", true);
                cuentaDocsOcultos++;
            }else if(MapaEstadosOI[vEstadoTramite].DocFinal_Visualiza_Modifica[1] === false){
                ( IDDOCUMENTOFINAL_txtEditar_ && IDDOCUMENTOFINAL_txtEditar_.SetVisible(false) );
                ( IDDOCUMENTOFINAL_txtEditarEscanear_ && IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false) );
                const docEsObligatorio_BTN = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion__EC");
                let blankSpace = document.getElementById("IDDOCUMENTOFINAL_lnkDescripcion__ET");
                ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
                cambiarEstiloCtrls([blankSpace, docEsObligatorio_BTN], "display", "none");
            }
    
            if(MapaEstadosOI[vEstadoTramite].DocEjec_Visualiza_Modifica[0] === false){
                OcultarFila("SEC_D", "IDDOCUMENTOEJECUTORIA", true);
                cuentaDocsOcultos++;
            }else if(MapaEstadosOI[vEstadoTramite].DocEjec_Visualiza_Modifica[1] === false){
                ( IDDOCUMENTOEJECUTORIA_txtEditar_ && IDDOCUMENTOEJECUTORIA_txtEditar_.SetVisible(false) );
                ( IDDOCUMENTOEJECUTORIA_txtEditarEscanear_ && IDDOCUMENTOEJECUTORIA_txtEditarEscanear_.SetVisible(false) );
                const docEsObligatorio_BTN = document.getElementById("IDDOCUMENTOEJECUTORIA_lnkDescripcion__EC");
                let blankSpace = document.getElementById("IDDOCUMENTOEJECUTORIA_lnkDescripcion__ET");
                ( blankSpace !== null && (blankSpace = blankSpace.parentElement.previousElementSibling) );
                cambiarEstiloCtrls([blankSpace, docEsObligatorio_BTN], "display", "none");
            }
        }

        if(cuentaDocsOcultos === 3){
            tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
        }

        /*
        Ocultar Asignar Usuario inicialmente, y recargar lista de Estados posibles a Asignar
        */
        OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        InvocarComandoLista(IDESTADOTRAMITE, null, "FNE_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);
    }
}catch(err){
    alert(err);
}












try{
    /*
    Si IDTRAMITE NO es nulo (es decir es actualizacion de registro)
    */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn], "display", "none");
  
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");

        /* EL_Visualiza_Modifica -> Array [Visualiza?, Modifica?] */
        const MapaEstadosOI = {
            44: {
                Abreviatura: "FREQCOOR",
                TNotif_Visualiza_Modifica: [false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [false],
                DocEjec_Visualiza_Modifica: [false],
            },
            66: {
                Abreviatura: "FFIRDIR",
                TNotif_Visualiza_Modifica: [false],
                DocBorrador_Visualiza_Modifica: [true, false],
                DocFinal_Visualiza_Modifica: [true, true],
                DocEjec_Visualiza_Modifica: [false],
            },
            75: {
                Abreviatura: "FNOTREVCOO",
                TNotif_Visualiza_Modifica: [true, false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [true, false],
                DocEjec_Visualiza_Modifica: [false],
            },
            83: {
                Abreviatura: "FEJEREVCOO",
                TNotif_Visualiza_Modifica: [true, false],
                DocBorrador_Visualiza_Modifica: [false],
                DocFinal_Visualiza_Modifica: [true, false],
                DocEjec_Visualiza_Modifica: [true, false],
            }
        }

        let vEstadoTramite = parseInt(s.GetValue());
 
        if(MapaEstadosOI[vEstadoTramite].TNotif_Visualiza_Modifica[0] === false){
            OcultarFila("SEC_DG", "TEXTONOTIFICACION", true);
        }else if(MapaEstadosOI[vEstadoTramite].TNotif_Visualiza_Modifica[1] === false){
            const TEXTONOTIFICACION_I = document.getElementById("TEXTONOTIFICACION_I");
            TEXTONOTIFICACION.SetEnabled(false);
            cambiarEstiloCtrls([TEXTONOTIFICACION_I], "color", "black");
            cambiarEstiloCtrls([TEXTONOTIFICACION_I], "backgroundColor", "#dcdcdc");
        }

        let cuentaDocsOcultos = 0;
        if(MapaEstadosOI[vEstadoTramite].DocBorrador_Visualiza_Modifica[0] === false){
            OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
            cuentaDocsOcultos++;
        }else if(MapaEstadosOI[vEstadoTramite].DocBorrador_Visualiza_Modifica[1] === false){
            IDDOCUMENTOBORRADOR_txtEditar_.SetVisible(false);
            IDDOCUMENTOBORRADOR_txtEditarEscanear_.SetVisible(false);
        }

        if(MapaEstadosOI[vEstadoTramite].DocFinal_Visualiza_Modifica[0] === false){
            OcultarFila("SEC_D", "IDDOCUMENTOFINAL", true);
            cuentaDocsOcultos++;
        }else if(MapaEstadosOI[vEstadoTramite].DocFinal_Visualiza_Modifica[1] === false){
            IDDOCUMENTOFINAL_txtEditar_.SetVisible(false);
            IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false);
        }

        if(MapaEstadosOI[vEstadoTramite].DocEjec_Visualiza_Modifica[0] === false){
            OcultarFila("SEC_D", "IDDOCUMENTOEJECUTORIA", true);
            cuentaDocsOcultos++;
        }else if(MapaEstadosOI[vEstadoTramite].DocEjec_Visualiza_Modifica[1] === false){
            IDDOCUMENTOEJECUTORIA_txtEditar_.SetVisible(false);
            IDDOCUMENTOEJECUTORIA_txtEditarEscanear_.SetVisible(false);
        }

        if(cuentaDocsOcultos === 3){
            tabTablaDatosR.GetItemByName("SECCION_SEC_D").SetVisible(false);
        }

        /*
        Ocultar Asignar Usuario inicialmente, y recargar lista de Estados posibles a Asignar
        */
        OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        InvocarComandoLista(IDESTADOTRAMITE, null, "FNE_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);
    }
}catch(err){
    alert(err);
}
















































try{
    /*
    Si IDTRAMITE NO es nulo (es decir es actualizacion de registro)
    */
    if(IDTRAMITE.GetValue() !== null){
        const cambiarEstiloCtrls = (arrCtrls, estilo, valor) => {
            for(ctrl of arrCtrls){
                ( ctrl != null && (ctrl.style[estilo] = valor) );
            }
        }
        const IDENTIDAD_ExpandirBtn = document.getElementById('IDENTIDAD_B-1');
        const TIPOTRAMITE_ExpandirBtn = document.getElementById('IDTIPOTRAMITE_B-1');
        const CLASETRAMITE_ExpandirBtn = document.getElementById('IDCLASETRAMITE_B-1');
        const FECHARADENTR_ExpandirBtn = document.getElementById('FECHARADICADOENTRADA_B-1');
        cambiarEstiloCtrls([IDENTIDAD_ExpandirBtn, TIPOTRAMITE_ExpandirBtn, CLASETRAMITE_ExpandirBtn, FECHARADENTR_ExpandirBtn], "display", "none");
  
        const RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I");
        const PADRE_RADENTRADA_CTRL = document.getElementById("RADICADOENTRADA_I").parentElement;
        cambiarEstiloCtrls([RADENTRADA_CTRL], "color", "black");
        cambiarEstiloCtrls([RADENTRADA_CTRL, PADRE_RADENTRADA_CTRL], "backgroundColor", "#dcdcdc");

        /* Borrador de proyección siempre será nulo, pues viene cargada desde Evaluación */
        if(IDDOCUMENTOBORRADOR_HFValorID_.Get("ID") != ""){
            IDDOCUMENTOBORRADOR_txtEditar_.SetVisible(false);
            IDDOCUMENTOBORRADOR_txtEditarEscanear_.SetVisible(false);
        }else{
            IDDOCUMENTOBORRADOR_txtEscanear_.SetVisible(false);
            IDDOCUMENTOBORRADOR_txtNuevo_.SetVisible(false);
        }

        let vEstadoTramite = parseInt(s.GetValue());
        /*
        A menos que se esté en estados que muestran borrador proyección, ocultarla.
        */
        if(vEstadoTramite !== 54 && vEstadoTramite !== 59 && vEstadoTramite !== 62 && vEstadoTramite !== 64 && vEstadoTramite !== 65 && vEstadoTramite !== 66){
            OcultarFila("SEC_D", "IDDOCUMENTOBORRADOR", true);
        }

        /*
        A menos que se esté en estados que muestran proyección, ocultarla.
        */
        if(vEstadoTramite !== 66 && vEstadoTramite !== 67 && vEstadoTramite !== 69 && vEstadoTramite !== 72 && vEstadoTramite !== 75 && vEstadoTramite !== 140 && vEstadoTramite !== 82 && vEstadoTramite !== 141 && vEstadoTramite !== 83){
            OcultarFila("SEC_D", "IDDOCUMENTOFINAL", true);
        }
        /* Sino, si no está en firmante, proyección será solo lectura */
        else if(vEstadoTramite !== 66){
            if(IDDOCUMENTOFINAL_HFValorID_.Get("ID") != ""){
                IDDOCUMENTOFINAL_txtEditar_.SetVisible(false);
                IDDOCUMENTOFINAL_txtEditarEscanear_.SetVisible(false);
            }else{
                IDDOCUMENTOFINAL_txtEscanear_.SetVisible(false);
                IDDOCUMENTOFINAL_txtNuevo_.SetVisible(false);
            }
        }

        /*
        A menos que se esté en estados que muestran Texto Notificación, ocultarlo.
        */
        if(vEstadoTramite !== 67 && vEstadoTramite !== 69 && vEstadoTramite !== 72 && vEstadoTramite !== 75 && vEstadoTramite !== 140 && vEstadoTramite !== 82 && vEstadoTramite !== 141 && vEstadoTramite !== 83){
            OcultarFila("SEC_DG", "TEXTONOTIFICACION", true);
        }
        /* Sino, si no está en profesional, Texto Notif. será solo lectura */
        else if(vEstadoTramite !== 67){
            TEXTONOTIFICACION.SetEnabled(false);
            const TEXTONOTIFICACION_I = document.getElementById("TEXTONOTIFICACION_I");
            cambiarEstiloCtrls([TEXTONOTIFICACION_I], "color", "black");
            cambiarEstiloCtrls([TEXTONOTIFICACION_I], "backgroundColor", "#dcdcdc");
        }

        /*
        A menos que se esté en estados que muestran constancia ejecutoria, ocultarla.
        */
        if(vEstadoTramite !== 140 && vEstadoTramite !== 82 && vEstadoTramite !== 141 && vEstadoTramite !== 83){
            OcultarFila("SEC_D", "IDDOCUMENTOEJECUTORIA", true);
        }
        /* Sino, si no está en profesional, constancia ejecutoria será solo lectura */
        else if(vEstadoTramite !== 140){
            if(IDDOCUMENTOEJECUTORIA_HFValorID_.Get("ID") != ""){
                IDDOCUMENTOEJECUTORIA_txtEditar_.SetVisible(false);
                IDDOCUMENTOEJECUTORIA_txtEditarEscanear_.SetVisible(false);
            }else{
                IDDOCUMENTOEJECUTORIA_txtEscanear_.SetVisible(false);
                IDDOCUMENTOEJECUTORIA_txtNuevo_.SetVisible(false);
            }
        }

        /*
        Ocultar Asignar Usuario inicialmente, y recargar lista de Estados posibles a Asignar
        */
        OcultarFila("SEC_AT", "USUARIOACTUAL", true);
        InvocarComandoLista(IDESTADOTRAMITE, null, "FNE_CMD_Recargar_Valores_Lista_Estado", IDTRAMITE.GetValue(), null, null, null, null);
    }
}catch(err){
    alert(err);
}