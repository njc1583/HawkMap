window.onload = function(){
    var MAP_WIDTH  = 760;
    var MAP_HEIGHT = 645;

    var paper = Raphael(0, 0, MAP_WIDTH, MAP_HEIGHT);

    //Creation of all styles for rooms
    //Bathrooms: Grey
    var bathStyle = {
        fill: "#a9a9a9",
        stroke: "#696969",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };  
    //Administrative/Other non-academic rooms: Brown
    var miscNARoomstyle = {
        fill: "#915b15",
        stroke: "#442a08",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Unknown Rooms (will later become just stairs): Black and Grey
    var unknownRoomStyle = {
        fill: "#3a3a3a",
        stroke: "#000000",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Math: Blue
    var mathRoomStyle = {
        fill: "#0be8dd",
        stroke: "#0e726d",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //English: Red
    var engRoomStyle = {
        fill: "#c40b0b",          
        stroke: "#6d0d0d",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Science: Green
    var sciRoomStyle = {
        fill: "#1b9b17",
        stroke: "#093d07",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Social Science: Orange
    var socSciRoomStyle = {
        fill: "#dd800d",
        stroke: "#96570a",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Foreign Language: Yellow
    var langRoomStyle = {
        fill: "#f7ec20",
        stroke: "#a59f2b",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    //Miscellanious rooms (such as art electives): Purple
    var miscRoomStyle = {
        fill: "#ff66ff",
        stroke: "#660066",
        "stoke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
      
    var hundredBarriersStyle = {
        fill: "#ffffff",
        stroke: "#000000",
        "stroke-width": 1,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    //Put all region names with locations and stuff in here
    var mathRooms = {}, engRooms = {}, sciRooms = {}, socSciRooms = {}, langRooms = {}, miscRooms = {}, unknownRooms = {}, miscNARooms = {}, bathrooms = {};

    //Not sure this is necessary
    //var regions = {mathRooms, engRooms, sciRooms, histRooms, langRooms, miscRooms};
      
    //Temporary rectangles to be used as a coordinate system for other room placement
    var hundredBarriers = {};
    hundredBarriers["0-100, 0-100"] = paper.rect(0, 0, 100, 100);
    hundredBarriers["100-200"] = paper.rect(100, 0, 100, 20);
    hundredBarriers["200-300"] = paper.rect(200, 0, 100, 20);
    hundredBarriers["300-400"] = paper.rect(300, 0, 100, 20);
    hundredBarriers["400-500"] = paper.rect(400, 0, 100, 20);
    hundredBarriers["500-600"] = paper.rect(500, 0, 100, 20);
    hundredBarriers["600-700"] = paper.rect(600, 0, 100, 20);
    hundredBarriers["700-760"] = paper.rect(700, 0, 100, 20);
      
    hundredBarriers["100-200"] = paper.rect(0, 100, 20, 100);
    hundredBarriers["200-300"] = paper.rect(0, 200, 20, 100);
    hundredBarriers["300-400"] = paper.rect(0, 300, 20, 100);
    hundredBarriers["400-500"] = paper.rect(0, 400, 20, 100);
    hundredBarriers["500-600"] = paper.rect(0, 500, 20, 100);
    hundredBarriers["600-645"] = paper.rect(0, 600, 20, 100);
    
    //East side even-numbered 1st Floor A-wing rooms
    unknownRooms["East A-Wing Stairs (1st Floor)"] = paper.rect(708, 333, 39, 11);
    mathRooms["A128"] = paper.rect(708, 346, 39, 14);
    mathRooms["A126"] = paper.rect(708, 361, 39, 17);
    mathRooms["A124"] = paper.rect(708, 379, 39, 17);
    mathRooms["A122"] = paper.rect(708, 397, 39, 17);
    mathRooms["A120"] = paper.rect(708, 415, 39, 14);
    miscRooms["A118 (Driver's Ed)"] = paper.rect(708, 431, 39, 13);
    miscNARooms["A116"] = paper.rect(708, 446, 39, 15);
    mathRooms["A114"] = paper.rect(708, 463, 39, 18); 
    unknownRooms["Main A-Wing Stairs (1st Floor)"] = paper.rect(708, 483, 39, 21);
      
    //West side even-numbered First Floor A-wing rooms
    mathRooms["A112"] = paper.rect(708, 524, 39, 10);
    mathRooms["A110"] = paper.rect(708, 535, 39, 10);
    mathRooms["A108 (Math Department Chair)"] = paper.rect(708, 546, 39, 6);
    unknownRooms["A106-A"] = paper.rect(708, 554, 39, 7);
    unknownRooms["A106-B"] = paper.rect(708, 562, 39, 6);
    engRooms["A104 and A104-A"] = paper.rect(708, 570, 39, 9);  
    unknownRooms["West A-Wing Stairs (1st Floor)"] = paper.rect(708, 581, 39, 10);
    engRooms["A102"] = paper.rect(708, 593, 39, 8);
      
    //East side odd-numbered 1st Floor A-Wing rooms
    mathRooms["A127"] = paper.rect(668, 342, 25, 17);  
    mathRooms["A125"] = paper.rect(668, 360, 25, 17);
    mathRooms["A123"] = paper.rect(668, 378, 25, 17);  
    mathRooms["A121"] = paper.rect(668, 396, 25, 17);
    unknownRooms["North A-Wing Stairs (1st Floor)"] = paper.rect(668, 415, 25, 9);  
    mathRooms["A119"] = paper.rect(668, 426, 25, 18);
    mathRooms["A117"] = paper.rect(668, 445, 25, 15);
    mathRooms["A115"] = paper.rect(668, 461, 25, 18);
    bathrooms["1st Floor A-Wing Bathrooms"] = paper.rect(668, 481, 25, 23);
    
    //West side odd-numbered 1st Floor A-wing rooms
    mathRooms["A113"] = paper.rect(668, 524, 25, 10);
    mathRooms["A111"] = paper.rect(668, 535, 25, 8);
    mathRooms["A109"] = paper.rect(668, 544, 25, 8);  
    mathRooms["A107"] = paper.rect(668, 553, 25, 10);
    engRooms["A105"] = paper.rect(668, 565, 25, 8);
    mathRooms["A103"] = paper.rect(668, 575, 25, 8);
    mathRooms["A101"] = paper.rect(668, 584, 25, 8);
    mathRooms["A101-A (Math lab)"] = paper.rect(668, 593, 25, 8);
      
    //Even-numbered 2nd Floor A-wing rooms 
    unknownRooms["East A-Wing Stairs (2nd Floor)"] = paper.rect(711, 25, 42, 16);  
    sciRooms["A230"] = paper.rect();  
      
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

    for(var roomName in socSciRooms){
        socSciRooms[roomName].attr(sciRoomStyle);
    }

    for(var roomName in langRooms){
        langRooms[roomName].attr(langRoomStyle);
    }   

    for(var roomName in miscRooms){
        miscRooms[roomName].attr(miscRoomStyle);
    }
      
    for(var roomName in hundredBarriers){
        hundredBarriers[roomName].attr(hundredBarriersStyle);
    }
      
    for(var roomName in miscNARooms){
        miscNARooms[roomName].attr(miscNARoomstyle);
    }
      
    for(var roomName in unknownRooms){
        unknownRooms[roomName].attr(unknownRoomStyle);
    }
      
    for(var roomName in bathrooms){
        bathrooms[roomName].attr(bathStyle);
    }

  }