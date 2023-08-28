
const formatoMoneda = (presupuesto) => {
    return presupuesto.toLocaleString("mx", {
      style: "currency",
      currency: "MXN",
      maximunFractionDigits: 2,
    });
  };
  
  const formatoPorcentaje = (porcentajeEgreso) => {
    return porcentajeEgreso.toLocaleString("mx", {
      style: "percent",
      maximunFractionDigits: 1,
    });
  };
  
  /*let ingresos = {
    quincena: 9000,
    venta: 400,
  };
  
  let egresos = {
    renta: 900,
    ropa: 400,
  };*/

  
  const totalIngresos = () => {
    var totalIngreso = 0;
    var ingresosElement = document.getElementById("lista-ingresos");
    var totalElementovalor = ingresosElement.getElementsByClassName("elemento_valor");
    for (var ingreso = 0; ingreso < totalElementovalor.length; ingreso++) {
      totalIngreso =
        totalIngreso + parseFloat(totalElementovalor[ingreso].innerHTML);
    }
    return totalIngreso;
  };
  
  const totalEgresos = () => {
    var totalEgreso = 0;
    var egresosElement = document.getElementById("lista-egresos");
    var totalElementovalor = egresosElement.getElementsByClassName("elemento_valor");
    for (var egreso = 0; egreso < totalElementovalor.length; egreso++) {
      totalEgreso =
        totalEgreso + parseFloat(totalElementovalor[egreso].innerHTML);
    }
    return totalEgreso;
  };
  
  const cargarIngresos = () => {
    var ingresosElement = document.getElementById("presupuesto_ingreso--valor");
    ingresosElement.innerHTML = totalIngresos();
  };
  
  const cargarEgresos = () => {
    var egresosElement = document.getElementById("presupuesto_egreso--valor");
    egresosElement.innerHTML = totalEgresos();
    
  };
  const cargarPresupuesto = () => {
    var presupuestoElement = document.getElementById("presupuesto");
    
    var ingresos = parseFloat(document.getElementById("presupuesto_ingreso--valor").innerHTML);
    var egresos = parseFloat(document.getElementById("presupuesto_egreso--valor").innerHTML);
    
    var presupuesto = ingresos - egresos;
    
    presupuestoElement.innerHTML = presupuesto;
};



  
  const cargarcabecero = () => {
    cargarIngresos();
    cargarEgresos();
    cargarPresupuesto();
    //var presupuesto = totalIngresos() - totalEgresos();

    var porcentajeEgreso = totalEgresos() / totalIngresos();
    
    var presupuestoFormatoMoneda = formatoMoneda(presupuesto);
    var egresoPorcentuado = formatoPorcentaje(porcentajeEgreso);
    
  
    /*console.log("presupuesto:", formatoMoneda(presupuesto));
    console.log("porcentaje de Egreso:", egresoPorcentuado);
    console.log("total de ingresos:", totalIngresos());
    console.log("total de egresos:", totalEgresos());*/
    
  };
  
  cargarcabecero();
  