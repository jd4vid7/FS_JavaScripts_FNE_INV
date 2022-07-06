//CODIGO ORIGINAL DEPRECADO
try {
    e.isValid = true;
    function getElID() {
      const Nro = s.name.split("_");
      return Nro[Nro.length - 1];
    }
    var vID = getElID();
    var TRANSC_ATR = "ROL2_CUMPLE";
    var vCUMPLE = document.getElementById("grdGeneralEdicionMultiple_" + TRANSC_ATR + "_" + vID + "_I");
    
    console.log("ST" + s.GetText()+"@STR");
    console.log("CThtlm" + vCUMPLE.value);
    if(vCUMPLE.value != "Seleccionar" && vCUMPLE.value != "CUMPLE" && s.GetText() == ""){
      e.isValid = false;
      alert('Comentario es requerido para estados "NO CUMPLE" y "CON REQUERIMIENTO"');
    }
} catch (err) {
    console.log("Error: " + err);
}