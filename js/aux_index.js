
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
