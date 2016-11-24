function MyCallBackFunction(message, value) {
    //console.log(message);
    //console.log(value);
    if (message === "hom3r") {
        if (value === "ok") {
            LoadProduct();
        } else if (value === "error")
        {
            console.log(value);
        }
    }
	if (message === "product") {
        if (value === "ok") {
            console.log("Product model loaded correctly!!!");
        } else if (value === "error") {
            console.log("Error: Product model cannot be loaded.");
        }
    }
    if (message === "selectPart") {
        FromHom3r_SelectPartWithID(value);
    }
    if (message === "deselectPart") {        
        FromHom3r_DeselectPartWithID(value);
    }
    if (message === "deselectAllParts") {
        FromHom3r_DeselectAllParts();
    }
    if (message === "RemoveLabel") {
        FromHom3r_RemoveLabel(value);
    }
}

function LoadProduct() {   
	//Modify next lines with your models url, or insert your code according to your application needs
	var productModelURL = "model/ProductModelHom3r_Saturn5.json";
    var explosionModelURL = "model/Hom3r_Saturn5_Explosion.xml";
	//Load  Model in hom3r.
    Hom3rAPI.LoadProduct(productModelURL, explosionModelURL);	
}

//Register Callback at the begining.
Hom3rAPI.RegisterCallBack(MyCallBackFunction);

//Keyboard Control
var lastKeyDown = "";
document.onkeydown = function (data) {
    if (data.keyCode === 17 && lastKeyDown !== data.keyCode) {        
        Hom3rAPI.ControlKeyPressed("true");
        lastKeyDown = data.keyCode;
    }
};
document.onkeyup = function (_data) {    
    Hom3rAPI.ControlKeyPressed("false");
    lastKeyDown = "";
};


//Functions to get information from Hom3r
function FromHom3r_SelectPartWithID(list_of_parts){	    
    for (var i = 0; i < list_of_parts.data.length; i++) {                        
		//Modify next lines to insert your code according to your application needs
		console.log("This area ID has been selected using the 3D interaction : "+list_of_parts.data[i].areaID);	
    }	
}		
function FromHom3r_DeselectPartWithID(list_of_parts){	    
    for (var i = 0; i < list_of_parts.data.length; i++) {  
		//Modify next lines to insert your code according to your application needs	
		console.log("This area ID has been des-selected using the 3D interaction : "+list_of_parts.data[i].areaID);		
    }    	
}
function FromHom3r_DeselectAllParts(){
	//Modify next lines to insert your code according to your application needs
	console.log("All the areasID has been de-selected using the 3D interaction : ");	
}
function FromHom3r_RemoveLabel(value){
	//Modify next lines to insert your code according to your application needs
	console.log("FromHom3r_RemoveLabel : "+ value);
}


//Funtions to send information to Hom3r. Call them in your code application according to your application needs.
function SelectObjectfromNavigatorTree(partID, colour)
{    
	var data = [];
	data.push({ "areaID": partID, "colour": colour });    
	Hom3rAPI.SelectPart(data);    
}
function DeselectObjectFromNavigatorTree(partID, colour) 
{
	var data = [];
	data.push({ "areaID": partID, "colour": colour }); 
    Hom3rAPI.DeselectPart(data);    
}
