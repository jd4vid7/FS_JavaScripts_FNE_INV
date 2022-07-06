/* DEPRECADO; CODIGO YA NO SE USA */
try {
    e.isValid = true;
    let Nro = s.name.split("_");
    Nro = Nro[Nro.length - 1];
    let CUMPLE = document.getElementById("grdGeneralEdicionMultiple_ROL1_CUMPLE_" + Nro + "_I");
    /* Cumple ID
        3 => Con Requerimiento 
        2 => No Cumple
    */
    if(CUMPLE.GetValue() != "Seleccionar" && vCUMPLE.value != "CUMPLE" && s.GetText() == ""){
      e.isValid = false;
      alert('Comentario es requerido para estados "NO CUMPLE" y "CON REQUERIMIENTO"');
    }
} catch (err) {
    console.log("Error: " + err);
}



//LEGACY
try {
    e.isValid = true;
    function getElID() {
      const Nro = s.name.split("_");
      return Nro[Nro.length - 1];
    }
    var vID = getElID();
    var TRANSC_ATR = "ROL1_CUMPLE";
    var vCUMPLE = document.getElementById("grdGeneralEdicionMultiple_" + TRANSC_ATR + "_" + vID + "_I");
    alert(vCUMPLE.GetValue(), typeof vCUMPLE.GetValue());
    if(vCUMPLE.value != "Seleccionar" && vCUMPLE.value != "CUMPLE" && s.GetText() == ""){
      e.isValid = false;
      alert('Comentario es requerido para estados "NO CUMPLE" y "CON REQUERIMIENTO"');
    }
} catch (err) {
    console.log("Error: " + err);
}


