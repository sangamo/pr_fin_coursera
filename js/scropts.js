
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    calibres_cu = ["750 MCM, Cu", "600 MCM, Cu", "500 MCM, Cu", "400 MCM, Cu", "350 MCM, Cu", "250 MCM, Cu", "4/0 AWG, Cu",
                "3/0 AWG, Cu", "2/0 AWG, Cu", "1/0 AWG, Cu", "2 AWG, Cu", "4 AWG, Cu", "6 AWG, Cu", "8 AWG, Cu"];
    calibres_bcu = ["750 MCM, bCu", "600 MCM, bCu", "500 MCM, bCu", "400 MCM, bCu", "350 MCM, bCu", "250 MCM, bCu", "4/0 AWG, bCu",
                "3/0 AWG, bCu", "2/0 AWG, bCu", "1/0 AWG, bCu", "2 AWG, bCu", "4 AWG, bCu", "6 AWG, bCu", "8 AWG, bCu"];
    flag = 0;
    for(let i=0; i<calibres_cu.length; i++){
        if(document.getElementById(calibres_cu[i]).selected){
            document.getElementById(calibres_bcu[i-1]).selected=true;
            flag = 1;
        }
        if(flag==1)
            document.getElementById(calibres_bcu[i]).hidden=true;
    }
});

$("#calcModal").on('show.bs.modal', function(){
    document.getElementById("quantity").value="";
    document.getElementById("total").value="";})

function chooseOpt(gauge){    
    document.getElementById(gauge).selected=true;
    gauges = ["750 MCM, Cu", "600 MCM, Cu", "500 MCM, Cu", "400 MCM, Cu", "350 MCM, Cu", "250 MCM, Cu", "4/0 AWG, Cu",
                "3/0 AWG, Cu", "2/0 AWG, Cu", "1/0 AWG, Cu", "2 AWG, Cu", "4 AWG, Cu", "6 AWG, Cu", "8 AWG, Cu", 
                "750 MCM, Al", "600 MCM, Al", "500 MCM, Al", "400 MCM, Al", "350 MCM, Al", "250 MCM, Al", "4/0 AWG, Al",
                "3/0 AWG, Al", "2/0 AWG, Al", "1/0 AWG, Al", "2 AWG, Al", "4 AWG, Al", "6 AWG, Al", "8 AWG, Al"];
    prices = [302555, 281000, 215581, 200000, 152736, 109187, 89551,
              73073, 58024, 46021, 28567, 18429, 11506, 7519, 50000,
              60000, 41303, 35000, 30640, 23554, 21000, 19326, 13729,
              11480, 6997, 4813, 3621, 2500];
    let text="";
    for (let i = 0; i < gauges.length; i++) {
        if(document.getElementById(gauges[i]).selected){ 
            document.getElementById("cost").value=prices[i];
        }            
    }
}
function totalizar(){
    document.getElementById("total").value=document.getElementById("cost").value*document.getElementById("quantity").value;
}

function changePrice(pos){
    prices = [302555, 281000, 215581, 200000, 152736, 109187, 89551,
        73073, 58024, 46021, 28567, 18429, 11506, 7519, 50000,
        60000, 41303, 35000, 30640, 23554, 21000, 19326, 13729,
        11480, 6997, 4813, 3621, 2500];
    document.getElementById("cost").value=prices[pos];
    document.getElementById("total").value=document.getElementById("cost").value*document.getElementById("quantity").value;
}

function chooseBigger(){
    calibres_cu = ["750 MCM, Cu", "600 MCM, Cu", "500 MCM, Cu", "400 MCM, Cu", "350 MCM, Cu", "250 MCM, Cu", "4/0 AWG, Cu",
                "3/0 AWG, Cu", "2/0 AWG, Cu", "1/0 AWG, Cu", "2 AWG, Cu", "4 AWG, Cu", "6 AWG, Cu", "8 AWG, Cu"];
    calibres_bcu = ["750 MCM, bCu", "600 MCM, bCu", "500 MCM, bCu", "400 MCM, bCu", "350 MCM, bCu", "250 MCM, bCu", "4/0 AWG, bCu",
                "3/0 AWG, bCu", "2/0 AWG, bCu", "1/0 AWG, bCu", "2 AWG, bCu", "4 AWG, bCu", "6 AWG, bCu", "8 AWG, bCu"];
    let text="";
    for (let i = 0; i < calibres_cu.length; i++) {
        if(document.getElementById(calibres_cu[i]).selected){ 
            for(let j=i; j<calibres_bcu.length; j++){
                document.getElementById(calibres_bcu[j]).hidden=true;                        
            }
            for (let k=i-1; k>0; k--)
                document.getElementById(calibres_bcu[k]).hidden=false;
            document.getElementById(calibres_bcu[i-1]).selected=true;
        }
    }            
}

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    calibres_cu = ["750 MCM, Cu", "600 MCM, Cu", "500 MCM, Cu", "400 MCM, Cu", "350 MCM, Cu", "250 MCM, Cu", "4/0 AWG, Cu",
                "3/0 AWG, Cu", "2/0 AWG, Cu", "1/0 AWG, Cu", "2 AWG, Cu", "4 AWG, Cu", "6 AWG, Cu", "8 AWG, Cu"];
    calibres_bcu = ["750 MCM, bCu", "600 MCM, bCu", "500 MCM, bCu", "400 MCM, bCu", "350 MCM, bCu", "250 MCM, bCu", "4/0 AWG, bCu",
                "3/0 AWG, bCu", "2/0 AWG, bCu", "1/0 AWG, bCu", "2 AWG, bCu", "4 AWG, bCu", "6 AWG, bCu", "8 AWG, bCu"];
    flag = 0;
    for(let i=0; i<calibres_cu.length; i++){
        if(document.getElementById(calibres_cu[i]).selected){
            document.getElementById(calibres_bcu[i-1]).selected=true;
            flag = 1;
        }
        if(flag==1)
            document.getElementById(calibres_bcu[i]).hidden=true;
    }
    
})
function calculate(){            
    potencia=document.getElementById('pot').value*document.getElementById('fp').value;
    if(potencia>10)
        document.getElementById('350 MCM, Cu').selected=true;
        $(document.getElementById('cantidad').addEventListener("blur", function(){
    document.getElementById('total').value = document.getElementById('precio').value*document.getElementById('cantidad').value
})) 
} 
function activarFactor(){ 
    document.getElementById('alim').disabled=false;            
}
function desactivarFactor(){ 
    document.getElementById('alim').disabled=true;            
}
function activarSep(){ 
    document.getElementById('sep').disabled=false;            
}
function desactivarSep(){ 
    document.getElementById('sep').disabled=true;            
}




