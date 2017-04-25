
function moveTheTrees() {
    var treesTable = ["img/tree1.png", "img/tree2.png", "img/tree3.png", "img/tree4.png"];
    var pos = -300;
    var poss = -220;
    function moveFast() {
            document.getElementById('tree1').style.left = pos + 'px';
            pos= pos + 5;
                if (pos >= (window.innerWidth + 100)) {
                    pos=-300;
                    var treeNew = (treesTable.length*(Math.random()));
		            treeNew = parseInt(treeNew);
                    document.getElementById('tree1').src = randomTree();
                }
            }
    
        function moveSlower () {
            document.getElementById('tree2').style.left = poss + 'px';
            poss= poss + 3;
                if (poss >= (window.innerWidth + 100)) {
                    poss=-220;
                    var treeNew = (treesTable.length*(Math.random()));
		            treeNew = parseInt(treeNew);
                    document.getElementById('tree2').src = randomTree();
                }
        }
    
        function randomTree () {
            var treeNew = (treesTable.length*(Math.random()));
		    treeNew = parseInt(treeNew);
            return treesTable[treeNew];
        }
    
   var intTree1 = setInterval(moveFast,10);
   var intTree2 = setInterval(moveSlower,10);
}
moveTheTrees();

function moveTheClouds () {
    var posC1=-200;
    var posC2=-500;
    var posC3=-900;
    
        function moveC1 () {
            document.getElementById('cloud1').style.left = posC1 + 'px';
            posC1= posC1 + 0.7;
                if (posC1 >= (window.innerWidth + 100)) {
                    posC1=-211;
                }
            }
    
        function moveC2 () {
            document.getElementById('cloud2').style.left = posC2 + 'px';
            posC2= posC2 + 0.7;
                if (posC2 >= (window.innerWidth + 100)) {
                    posC2=-324;
                }
            }
    
        function moveC3 () {
            document.getElementById('cloud3').style.left = posC3 + 'px';
            posC3= posC3 + 0.7;
                if (posC3 >= (window.innerWidth + 100)) {
                    posC3=-432;
                }
            }
        function randomCloud () {
            var cloudNew = (cloudsTable.length*(Math.random()));
		    cloudNew = parseInt(cloudNew);
            return cloudsTable[cloudNew];
        }
   var intCloud1 = setInterval(moveC1,10);
   var intCloud2 = setInterval(moveC2,10);
   var intCloud3 = setInterval(moveC3,10);
}
moveTheClouds();
    
function comments() {
	var fruits = ["Uszanowanko!", "Podróż, że hej", "Jak to kapeć?", "Ja nie prowadzę!", "Hue hue", "Urlop trochę krótki", "#najlepiej", "#jedziem", "#vanemprzezpółEU", "Bedzie na snapa", "Jaki mandat?", "Zabytki i miasta", "Przygoda tak duża", "Rób zdjęcie!", "Iś kome from...", "Torba z biedry", "Stop, jest wifi"];
	function startDissapear() {
		$("#comms").fadeOut(500, swap);
	}
    function swap () {
        document.getElementById("comms").style.visibility = "visible";
		var fLen = (fruits.length*(Math.random()));
		fLen=parseInt(fLen);
		var posX = (window.innerWidth)/2+Math.random()*400-300;
		posX=parseInt(posX);
		document.getElementById("comms").innerHTML =fruits[fLen];
		document.getElementById("comms").style.left = posX+"px";
		$("#comms").fadeIn(500);
	}
	
	var id = setInterval(startDissapear, 3000);
}
comments();




var places= [
        {lat: 51.590780, lng: 19.131722},
        {lat: 47.070529, lng: 15.441445},
        {lat: 45.649675, lng: 13.776280},
        {lat: 45.442204, lng: 12.310325},
        {lat: 44.405298, lng: 8.945762},
        {lat: 43.709246, lng: 7.259456},
        {lat: 41.384981, lng: 2.173829},
        {lat: 37.388597, lng: -5.985099},
        {lat: 36.140657, lng: -5.354168},
        {lat: 41.158340, lng: -8.629407},
        {lat: 40.501097, lng: -3.670786}
      ];        

var markers = [];
var path = [];
var map;
var dropped = false; 
function initMap() {
        var myOptions = {
          zoom: 4,
          center: {lat: 45.709246, lng: 7.259456},
          mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        map = new google.maps.Map(document.getElementById("map"), myOptions);
    }

      function drop() {
        for (var i = 0; i < places.length; i++) {
          addMarkerWithTimeout(places[i], i * 200);
        
      }
      }

      function addMarkerWithTimeout(position, timeout) {
        window.setTimeout(function() {
          var marker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
          });
        markers.push(marker); 
        }, timeout);
      }

var x = document.getElementById('what');
var y = document.getElementById('who');
$(window).scroll(function() {
        var h = x.offsetHeight + y.offsetHeight +700;

        if( window.scrollY>h && !dropped ) {
            drop();
            dropped = true;
        }
});

        