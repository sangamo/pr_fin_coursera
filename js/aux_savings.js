$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
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