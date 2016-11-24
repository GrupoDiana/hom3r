var totalMemory = 			134217728;	//128Mb
var totalMemoryChrome = 	125829120;	//128Mb
//var totalMemory = 		268435456;	//256Mb
//var totalMemoryChrome = 	262144000;	//256Mb
//var totalMemory = 		536870912;	//512Mb
//var totalMemoryChrome = 	524288000;	//512Mb
//var totalMemory =         805306368;	//750Mb
//var totalMemoryChrome =   786432000;  //750Mb
//var totalMemory = 		1073741824;	//1024Mb
//var totalMemoryChrome = 	1003741824; //1024Mb

var Module = {
    //TOTAL_MEMORY: 16,
    errorhandler: null,			// arguments: err, url, line. This function must return 'true' if the error is handled, otherwise 'false'
    compatibilitycheck: function () {
        // check compatibility ...
        console.log(navigator.userAgent);
        var userAgent = navigator.userAgent;
        if (userAgent.indexOf("OPR") !== -1){            
			Module.TOTAL_MEMORY = totalMemory;
            console.log("Opera web browser detected");
        }
		else if (userAgent.indexOf("Chrome") !== -1) {
            Module.TOTAL_MEMORY = totalMemoryChrome;
            console.log("Chrome web browser detected");
        }        
		else {            
			Module.TOTAL_MEMORY = totalMemory;
            console.log("Firefox or Other web browsers detected");
        }
        console.log("Total memory allocated: " +Module.TOTAL_MEMORY);
    },
    dataUrl: "Release/hom3r.data",
    codeUrl: "Release/hom3r.js",
    memUrl: "Release/hom3r.mem",
};