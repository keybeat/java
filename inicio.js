/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("#oprimir").click(function(){
    
    alert("Me has apachurrado!!");
});
//AGREGAMOS LA PLANTILLA PARA PODER CONSUMIR EL SERVICIO DE LA NASA

    $.get('https://data.ny.gov/resource/vz4f-yrf8.json' ,function(json){
        
        console.log(json.length);
        $("#tamano").html("Numero de elementos: "+json.length);
    });

