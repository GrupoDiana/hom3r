//HOM3R API
var Hom3rAPI = {    
    selection: true,
	applicationCB: "",
	Hom3rLoaded: false,
	ProductModelLoaded:false,
	CBRegitered: false,

	SetInfoFromHom3r: function (message, value) {	    
		if (message==="hom3r"){
			if (value==="ok"){
				this.Hom3rLoaded=true;
			}else if (value==="error"){
				this.Hom3rLoaded=false;
			}
		}
		if (message==="product"){			
			if (value==="ok"){
				this.ProductModelLoaded=true;
			}else if (value==="error"){
				this.ProductModelLoaded=false;
			}			
		}
		if (message === "selectPart") {
            var temp = JSON.parse(value);
            value = temp;
		}
		if (message === "deselectPart") {
            var temp = JSON.parse(value);
            value = temp;
		}
		if (message === "SaveSinglePoint") {
            var temp = JSON.parse(value);
            value = temp;
		}
        if (this.CBRegitered){
			this.applicationCB(message, value);
		}
	},

	RegisterCallBack: function(_applicationCB){
        this.applicationCB = _applicationCB;
        this.CBRegitered = true;
	},
	Configuration: function(selection){
		this.selection = selection;		
	},	
	LoadProduct: function (productModelURL, explosionModelURL) {	    
        if (this.Hom3rLoaded) {
            var data = { productModelURL: productModelURL, explosionModelURL: explosionModelURL };	        
            SendMessage("GO_Scripts", "LoadProduct", JSON.stringify(data));
        }
	},
	ModifyProduct: function(urlJson){
		console.log(urlJson);
	},
	ResetProduct: function(urlJson){
		console.log(urlJson);
	},
	SelectPart: function (list_of_parts) {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "SelectPart", JSON.stringify({ data: list_of_parts })); }
	},
	DeselectPart: function (list_of_parts) {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "DeselectPart", JSON.stringify({ data: list_of_parts }));}
	},
	DeselectAllParts: function () {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "DeselectAllParts", ""); }
	},
	ResetSelectionColours: function () {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "ResetSelectionColours", ""); }
	},
	SetMainAxis: function(mainAxis){
		console.log();
	},
	SmartTransparency: function (activate) {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "SmartTransparency", activate); }
	},
	Explosion: function (activate, type, partID) {
        if (this.ProductModelLoaded) {
            var data = { activate: activate, type: type };
            //SendMessage("GO_Scripts", "Explosion", activate);
        }
	},
	CaptureSinglePoint: function (singlePointID, areaID) {
        if (this.ProductModelLoaded){
            var data = { singlepointgroupID: singlePointID, areaID: areaID };
            SendMessage("GO_Scripts", "CaptureSinglePoint", JSON.stringify(data));
        }
	},	
	VisualizeSinglePoint: function (singlePointID, areaID, positions) {
        if (this.ProductModelLoaded) {
            var data = { singlepointgroupID: singlePointID, areaID: areaID, positions: positions};
            SendMessage("GO_Scripts", "VisualizeSinglePoint", JSON.stringify(data));
        }
	},	
	EditSinglePoint: function (singlePointID, areaID, positions) {
        if (this.ProductModelLoaded) {
            var data = { singlepointgroupID: singlePointID, areaID: areaID, positions: positions };
            SendMessage("GO_Scripts", "EditSinglePoint", JSON.stringify(data));
        }
	},
	RemoveSinglePoint: function (singlePointID) {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "RemoveSinglePoint", singlePointID); }
	},
	RemoveAllSinglePoint: function () {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "RemoveAllSinglePoint", ""); }
	},			
	ShowLabel: function (list_of_labels) {
        if (this.ProductModelLoaded) {	        
            SendMessage("GO_Scripts", "ShowLabel", JSON.stringify({ data: list_of_labels }));
        }
	},
	RemoveLabel: function (labelID) {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "RemoveLabel", labelID); }
	},
	RemoveAllLabel: function () {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "RemoveAllLabel", ""); }
	},
	ControlKeyPressed: function (pressed) {
        if (this.Hom3rLoaded) { SendMessage("GO_Scripts", "ControlKeyPressed", pressed); }
	},
	ShowLabelsWithAreaComponentName: function (activate) {
        if (this.ProductModelLoaded) { SendMessage("GO_Scripts", "ShowLabelsWithAreaComponentName", activate); }
	}
};