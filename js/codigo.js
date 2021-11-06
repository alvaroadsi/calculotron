
  function areaRectangulo() {
    var base,altura,area;
    
    base=document.getElementById("cajaBase").value;
    altura=document.getElementById("cajaAltura").value;
    area=base*altura;
    alert('El resultado es ' + area);
    document.getElementById("cajaSalida").value = area;
  }