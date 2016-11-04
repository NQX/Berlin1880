
var canvas = document.getElementById('gl');
var gl = canvas.getContext('experimental-webgl',{alpha:false, depth:false});
var can8k = false;
var isMobile = false;

var actConfig = {};




if(gl.getParameter(gl.MAX_TEXTURE_SIZE) >= 8192){
    console.log('can 8k');
    can8k = true;
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
}


console.log('max texture width ' + gl.getParameter(gl.MAX_TEXTURE_SIZE));


        

		var actImage = 1;
        var imageInt = 1;

		var actViewer = null;

        var navbarValue = ["one", "two", "three", "four", "five"];



		

        var config = {
            
                "type": "equirectangular",
                //"panorama": "https://pannellum.org/images/alma.jpg"
                "panorama": "/360_images/" + actImage + ".jpg",

                "showFullscreenCtrl" : true,
                "showZoomCtrl" : true,
                "autoLoad" : true,
                //"hotSpotDebug": true,
               /* "hotSpots": [
                    {
                        "pitch": -5.1,
                        "yaw": -135.5,
                        "type": "info",
                        "text": "Damals gang und gäbe: Fliegende Menschen",
                        "URL": "http://sfglobe.com/?id=3638"
                    }
                    ]
                    */
            
        };

        var configMobile = {
                "type": "equirectangular",
                //"panorama": "https://pannellum.org/images/alma.jpg"
                "panorama": "/360_images/" + actImage + ".jpg",

                "showFullscreenCtrl" : false,
                "showZoomCtrl" : false,
                "autoLoad" : true,
                //"hotSpotDebug": true,
               /* "hotSpots": [
                    {
                        "pitch": -5.1,
                        "yaw": -135.5,
                        "type": "info",
                        "text": "Damals gang und gäbe: Fliegende Menschen",
                        "URL": "http://sfglobe.com/?id=3638"
                    }
                    ]
                    */
            
        };



	function setImage(value){
        

		console.log('set image ' + navbarValue[value]);

        $('#'+navbarValue[imageInt-1]).removeClass('active');

        console.log(imageInt);
        console.log("old value " + navbarValue[imageInt-1]);
        $('#'+navbarValue[value]).addClass("active");
        

		actImage = value + 1;

    	unloadViewer();
    	loadViewer();

	};


	function loadViewer(){
        if(!isMobile){
            actConfig = config;
        } else {
            actConfig = configMobile;
        }
        

       

		var elm = document.getElementById('panorama');


		console.log('load viewer ' + elm);


                //elm.width = 50;
                //elm.height = 50;

                imageInt = actImage;
                if(!can8k){
                    actImage = '4k_' + actImage;
                }


                /***
                * Fallback, till 8k Images are ready
                *
                */
                if(actImage == 3 || actImage == 4){
                    actImage = '4k_' + actImage;   
                }


                actConfig["panorama"] = "/360_images/" + actImage + ".jpg";
             

                elm.setAttribute("style", "height:" + window.innerHeight + "px;");

                actViewer = pannellum.viewer('panorama', actConfig);

                
}

	function unloadViewer(){
		console.log('unload viewer');
        if(actViewer != null){
            console.log("act renderer " + actViewer.getRenderer());
            actViewer.getRenderer().destroy();
	       actViewer = null;
        }
	}


	//loadViewer();
    setImage(0);
