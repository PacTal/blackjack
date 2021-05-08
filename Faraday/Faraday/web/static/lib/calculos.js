
function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
}
function ResG(AcU){
              var D=[1,2,3]; //--Números escogidos para sumar, el dominio
              var C=[1,5,9,13,17,21]; //--Números claves que es necesario decir para ganar
              var Busqueda=false; //--Si no encuentra un número apropiado para apoderarse de un número clave
              var increm=0;
              var n_acu;

              //---------
              for (var k = 0; k < C.length; k++){ //--recorre la lista de claves
                  if(C[k]<=AcU &&  AcU<C[k+1]){  //---Ubica el acumulado en un intervalo C[k]<=AcU<C[k+1]:  C[k]<=AcU &&  AcU<C[k+1] 
                      //document.write("Paseeeeeeeeeee"+"<br>")
                      for (var j=0;j<D.length;j++){   //--recorre el dominio 1,2,3
                          if (AcU+D[j]==C[k+1]){   //-condición para encontrar un número del dominio que permita apropiarse de uno clave
                              increm=D[j];      //--El incremento de la maquina
                              n_acu=C[k+1];  //--El nuevo acumulado
                              Busqueda=true; //--Aviso de número y apropiación encontrada
                             // document.write("Tengo estrategia G "+"<br>")
                          }
                     }
                  } 
              }
              //--Como no hay donde hacer una jugada ganadora, tira al azar
              if (Busqueda==false){ //--En caso de no encontrar un número del dominio para apropiarse de una clave
                  increm=getRandomInt(1,4);       //--la MQ elige una al azar de D
                  n_acu=AcU+increm;
                  //document.write("Sin estrategia G---Lancé dado"+"<br>")
                  //document.write("Sumo "+increm+ ", nuevo acumulado "+n_acu+"<br>")
              } 
              return [increm,n_acu];  //--La función retorna incremento y nuevo acumulado
}
var genero;
var Resp=document.getElementById("resultado");
function inizio(){
    var AcuM=document.getElementById("acumulado");  //--captura el acumulado
    var One=document.getElementById("uno");       //--captura el numero del boton
    var Due=document.getElementById("dos");
    var Tre=document.getElementById("tres");
    var JM=document.getElementById("play");
    AcuM.textContent="0";
    uno.onclick=function(e){
        var x1=parseInt(AcuM.textContent)+1;
        uno.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton a rojo
        dos.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton
        tres.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton
        AcuM.style.color = 'rgb(255, 0, 0)';
        AcuM.textContent=x1;
        Resp.textContent="Jugó el humano";
        uno.disabled=true;
        dos.disabled=true;
        tres.disabled=true;
        JM.disabled=false;
        if (x1>=21){
            Resp.textContent="Ganó el humano";
            JM.disabled=true;
        }
    }
    dos.onclick=function(e){
        var x2=parseInt(AcuM.textContent)+2;
        uno.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton a rojo
        dos.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton
        tres.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton
        AcuM.style.color = 'rgb(255, 0, 0)';
        AcuM.textContent=x2;
        Resp.textContent="Jugó el humano";
        uno.disabled=true;
        dos.disabled=true;
        tres.disabled=true;
        JM.disabled=false;
        if (x2>=21){
            Resp.textContent="Ganó el humano";
            JM.disabled=true;
        }

    }
    tres.onclick=function(e){
        var x3=parseInt(AcuM.textContent)+3;
        uno.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton a rojo
        dos.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton
        tres.style.color = 'rgb(255, 0, 0)'; //--cambia el color del texto del boton
        AcuM.style.color = 'rgb(255, 0, 0)';
        AcuM.textContent=x3;
        Resp.textContent="Jugó humano";
        uno.disabled=true;
        dos.disabled=true;
        tres.disabled=true;
        JM.disabled=false;
        if (x3>=21){
            Resp.textContent="Ganó el humano";
            JM.disabled=true;
        }

    }
    JM.onclick=function(e){
        var Hoard =parseInt(AcuM.textContent); //--captura el acumulado en el panel
        uno.disabled=false; //--habilita los números
        dos.disabled=false;
        tres.disabled=false;
        const [Inc,Total]=ResG(Hoard);
        Resp.textContent="Jugó el robot";
        switch(Inc){
            case 1:
                uno.style.color = 'rgb(0, 0, 255)'; //--cambia el color del texto del boton
                break;
            case 2:
                dos.style.color = 'rgb(0, 0, 255)';
                break;
            case 3:
                tres.style.color = 'rgb(0, 0, 255)';
                break;
        }
        AcuM.textContent=Total;
        AcuM.style.color = 'rgb(0, 0, 255)';
        JM.disabled=true;
        if(Total>=21){
            Resp.textContent="Ganó el robot";
            uno.disabled=true;
            dos.disabled=true;
            tres.disabled=true;
        }
       // End(Total,0);
    }
}
//-----------------------------------------------------

/*
function End(acumul,genero){
    if (acumul>=21){
        switch(genero){
            case 0:
                Resp.textContent="Ganó el robot";
                uno.disabled=true;
                dos.disabled=true;
                tres.disabled=true;
                JM.disabled=true;
                break;
            case 1:
                Resp.textContent="Ganó el humano";
                JM.disabled=true; 
                uno.disabled=true;
                dos.disabled=true;
                tres.disabled=true;
                break;
        }
        
//---------
    }
}*/