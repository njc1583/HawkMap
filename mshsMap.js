import "raphael.js";
var MAP_WIDTH = 760;
var MAP_HEIGHT = 645;


var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);

//Creation of all styles for rooms
//Math: Blue
var mathRoomStyle = {
  fill: "#d81515",
  stroke: "#660f0f",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//English: Red
var engRoomStyle = {
  fill: "#c40b0b",
  stroke: "#6d0d0d",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//Science: Green
var sciRoomStyle = {
  fill: "#1b9b17",
  stroke: "#093d07",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//History: Orange
var histRoomStyle = {
  fill: "#dd800d",
  stroke: "#96570a",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//Foreign Language: Yellow
var langRoomStyle = {
  fill: "#f7ec20",
  stroke: "#a59f2b",
  "stroke-wdith": 1,
  "stroke-linejoin": "miter",
  cursor: "pointer"
};
//Miscellanious rooms (such as art electives): Purple
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
var langRooms = {};
var miscRooms = {};

//Not sure this is necessary
var regions = {mathRooms, engRooms, sciRooms, histRooms, langRooms, miscRooms};

//These are test rooms to ensure styling, room creation, and display all work
map.beginPath();
map.rect(188, 50, 200, 100);
map.fillStyle = 'yellow';
map.fill();
map.lineWidth = 7;
map.strokeStyle = 'black';
map.stroke();
mathRooms["A126"] = map.rect(100, 100, 10, 10);
engRooms["C141"] = map.rect(100, 100, 20, 20);
sciRooms["A310"] = map.rect(100, 100, 30, 30);
histRooms["A222"] = map.rect(100, 100, 40, 40);
langRooms["A208"] = map.rect(100, 100, 50, 50);
miscRooms["auditorium"] = map.rect(100, 100, 60, 60);


//Set each rooms to different styles
for(var roomName in mathRooms){
  mathRooms[roomName].attr(mathRoomStyle);  
}

for(var roomName in engRooms){
  engRooms[roomName].attr(engRoomStyle);
}

for(var roomName in sciRooms){
  sciRooms[roomName].attr(sciRoomStyle);
}

for(var roomName in histRooms){
  histRooms[roomName].attr(histRoomStyle);
}

for(var roomName in langRooms){
  langRooms[roomName].attr(langRoomStyle);
}

for(var roomName in miscRooms){
  miscRooms[roonName].attr(miscRoomStyle);
}
