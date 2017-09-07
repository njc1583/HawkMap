var MAP_WIDTH = 760;
var MAP_HEIGHT = 645;

var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

var style = {
  fill: "#ff66ff",
  stroke: "#660066",
  "stoke-width": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};

//Put all region names with locations and stuff in here
var regions = {};
regions["auditorium"] = map.rect("m 100, 600, 20, 20 z");

for(var regionName in regions){
  regions[regionName].attr(style);
}
