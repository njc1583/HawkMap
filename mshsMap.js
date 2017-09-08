var MAP_WIDTH = 760;
var MAP_HEIGHT = 645;

var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

var miscRoomStyle = {
  fill: "#ff66ff",
  stroke: "#660066",
  "stoke-width": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};

//Put all region names with locations and stuff in here
var mathRooms = {};
var engRooms = {};
var sciRooms = {};
var histRooms = {};
var miscRooms = {};

var regions = {mathRooms, engRooms, sciRooms, histRooms, miscRooms};

miscRooms["auditorium"] = map.rect("m 100, 600, 20, 20 z");

//Set each rooms to different styles
for(var roomName in miscRooms){
  regions[roomName].attr(miscRoomStyle);
}
