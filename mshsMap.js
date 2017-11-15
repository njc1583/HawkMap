window.onload = function () {
    var MAP_WIDTH = 770;
    var MAP_HEIGHT = 653;

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
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    var barriersStyle = {
        fill: "#ffffff",
        stroke: "#000000",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
    };

    //Put all region names with locations and stuff in here
    var mathRooms = [],
        engRooms = [],
        sciRooms = [],
        socSciRooms = [],
        langRooms = [],
        miscRooms = [],
        unknownRooms = [],
        miscNARooms = [],
        bathrooms = [],
        specialRooms = [],
        extraNonHoverRooms = [];

    //specialRooms is for rooms with distinct features and/or designs, and may have their own style on a case-by-case basis.

    //Not sure this is necessary
    var allRoomTypes = [
        mathRooms,
        engRooms,
        sciRooms,
        socSciRooms,
        langRooms,
        miscRooms,
        unknownRooms,
        miscNARooms,
        bathrooms,
        specialRooms,
    ];

    var allRooms = [];

    //Temporary rectangles to be used as a coordinate system for other room placement
    var barriers = [];
    extraNonHoverRooms["Entire Map"] = paper.rect(1, 1, MAP_WIDTH - 2, MAP_HEIGHT - 2);
    
    var entireMapStyle = {
        fill: "#e2e2e2",
        stroke: "#000000",
        "stroke-width": 2,
        "stroke-linejoin": "miter"
    };
    
    extraNonHoverRooms["Entire Map"].attr(entireMapStyle);
    extraNonHoverRooms["Entire Map"].styleID = entireMapStyle;
    
    barriers["A-Wing 3rd Floor Outline"] = paper.rect(529, 24, 91, 273);
    barriers["A-Wing 2nd Floor Outline"] = paper.path("M 661,38 L 697,38 L 697,24 L 753,24 L 753,297 L 661,297 Z");
    barriers["The rest of the dang school"] = paper.path("M 146,135 L 316,135 L 316,274 L 371,274 L 371,347 L 316,347 L 316,389 L 616,389 L 616,505 L 667,505 L 667,342 L 693,342 L 693,332 L 747,332 L 747,601 L 667,601 L 667,520 L 311,520 L 311,609 L 146,609 L 146,481 L 131,481 L 131,379 L 147,379 L 147,314 L 128,314 L 128,349 L 031,349 L 031,222 L 128,222 L 128,267 L 146,267 L Z");
    
    specialRooms["The Famous Maine South Pond"] = paper.path("M 330,643 L 653,643 C 653,643 491.5,510 330,643 Z");
    
    var pondStyle = {
        fill: "#68eaff",
        stroke: "#0f7677",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["The Famous Maine South Pond"].attr(pondStyle);
    specialRooms["The Famous Maine South Pond"].styleID = pondStyle;
    
    /*specialRooms["Circle Drive"] = paper.path("M 313,522 L 313,643 L 328,643 C 328,643 466,506 657,643 L 665,643 L 665,522 Z");
    
    var parkingLotStyle = {
        fill: "#f2f2f2",
        stroke: "#878787",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Circle Drive"].attr(parkingLotStyle);
    specialRooms["Circle Drive"].styleID = parkingLotStyle;*/
    
    //East side even-numbered 1st Floor A-wing rooms
    unknownRooms["East A-Wing Stairs (1st Floor)"] = paper.rect(707, 332, 40, 12);
    mathRooms["A128"] = paper.rect(707, 346, 40, 14);
    mathRooms["A126"] = paper.rect(707, 361, 40, 17);
    mathRooms["A124"] = paper.rect(707, 379, 40, 17);
    mathRooms["A122"] = paper.rect(707, 397, 40, 17);
    mathRooms["A120 (One-on-one help)"] = paper.rect(707, 415, 40, 14);
    miscRooms["A118 (Driver's Ed)"] = paper.rect(707, 431, 40, 13);
    miscNARooms["A116"] = paper.rect(707, 446, 40, 15);
    mathRooms["A114"] = paper.rect(707, 463, 40, 18);
    unknownRooms["Main A-Wing Stairs (1st Floor)"] = paper.rect(707, 483, 40, 22);

    //West side even-numbered First Floor A-wing rooms
    mathRooms["A112"] = paper.rect(707, 524, 40, 10);
    mathRooms["A110"] = paper.rect(707, 535, 40, 10);
    mathRooms["A108 (Math Department Chair)"] = paper.rect(707, 546, 40, 6);
    engRooms["A106-A (Seminar)"] = paper.rect(707, 554, 40, 7);
    engRooms["A106-B"] = paper.rect(707, 562, 40, 6);
    engRooms["A104 and A104-A"] = paper.rect(707, 570, 40, 9);
    unknownRooms["West A-Wing Stairs (1st Floor)"] = paper.rect(707, 581, 40, 10);
    engRooms["A102"] = paper.rect(707, 593, 40, 8);

    //East side odd-numbered 1st Floor A-Wing rooms
    mathRooms["A127"] = paper.rect(667, 342, 26, 17);
    mathRooms["A125"] = paper.rect(667, 360, 26, 17);
    mathRooms["A123"] = paper.rect(667, 378, 26, 17);
    mathRooms["A121"] = paper.rect(667, 396, 26, 17);
    unknownRooms["North A-Wing Stairs (1st Floor)"] = paper.rect(667, 415, 26, 9);
    mathRooms["A119"] = paper.rect(667, 426, 26, 18);
    mathRooms["A117"] = paper.rect(667, 445, 26, 15);
    mathRooms["A115"] = paper.rect(667, 461, 26, 18);
    bathrooms["1st Floor A-Wing Bathrooms"] = paper.rect(667, 481, 26, 24);

    //West side odd-numbered 1st Floor A-wing rooms
    mathRooms["A113"] = paper.rect(667, 524, 26, 10);
    mathRooms["A111"] = paper.rect(667, 535, 26, 8);
    mathRooms["A109"] = paper.rect(667, 544, 26, 8);
    mathRooms["A107"] = paper.rect(667, 553, 26, 10);
    engRooms["A105"] = paper.rect(667, 565, 26, 8);
    mathRooms["A103"] = paper.rect(667, 575, 26, 8);
    mathRooms["A101"] = paper.rect(667, 584, 26, 8);
    mathRooms["A101-A (Math lab)"] = paper.rect(667, 593, 26, 8);

    //Even-numbered 2nd Floor A-wing rooms 
    unknownRooms["East A-Wing Stairs (2nd Floor)"] = paper.rect(710, 24, 43, 17);
    sciRooms["A230"] = paper.rect(710, 43, 43, 23);
    miscNARooms["Chemistry Prep Room (Staff Only)"] = paper.rect(710, 68, 43, 9);
    sciRooms["A228"] = paper.rect(710, 79, 43, 27);
    socSciRooms["A224"] = paper.rect(710, 108, 43, 20);
    socSciRooms["A222"] = paper.rect(710, 129, 43, 8);
    socSciRooms["A220"] = paper.rect(710, 138, 43, 19);
    langRooms["A218"] = paper.rect(710, 159, 43, 12);
    unknownRooms["Main A-Wing Stairs (2nd Floor)"] = paper.rect(710, 173, 43, 14);
    socSciRooms["A216"] = paper.rect(710, 189, 43, 8);
    langRooms["A214"] = paper.rect(710, 199, 43, 9);
    langRooms["A212"] = paper.rect(710, 209, 43, 9);
    langRooms["A210"] = paper.rect(710, 219, 43, 9);
    langRooms["A208"] = paper.rect(710, 229, 43, 12);
    langRooms["A206"] = paper.rect(710, 242, 43, 12);
    langRooms["A204"] = paper.rect(710, 255, 43, 12);
    unknownRooms["West A-Wing Stairs (2nd Floor)"] = paper.rect(710, 269, 43, 9);
    socSciRooms["A202"] = paper.rect(710, 280, 43, 17);

    //Odd-numbered 2nd Floor A-wing rooms
    socSciRooms["A233"] = paper.rect(661, 38, 36, 13);
    //A231 and A229 are sometimes conjoined to serve both English and Social Science classes. For this program, A231 will be considered a social science room only, and A229 will be considered an English-only room.
    socSciRooms["A231"] = paper.rect(661, 52, 36, 20);
    engRooms["A229"] = paper.rect(661, 74, 36, 18);
    socSciRooms["A227"] = paper.rect(661, 94, 36, 14);
    unknownRooms["North A-Wing Stairs (2nd Floor)"] = paper.rect(661, 110, 36, 10);
    engRooms["A225"] = paper.rect(661, 122, 36, 10);
    socSciRooms["A223"] = paper.rect(661, 134, 36, 14);
    socSciRooms["A221"] = paper.rect(661, 149, 36, 12);
    langRooms["A219"] = paper.rect(661, 163, 36, 12);
    bathrooms["2nd Floor A-Wing Bathrooms (Staff Only)"] = paper.rect(661, 177, 36, 10);
    miscNARooms["A217 (Social Science and Foreign Language Department Chairs)"] = paper.rect(661, 189, 36, 10);
    miscNARooms["A215 (Social Science Department Office)"] = paper.rect(661, 200, 36, 10);
    miscNARooms["A213 (Foreign Language Department Office)"] = paper.rect(661, 211, 36, 10);
    engRooms["A211"] = paper.rect(661, 223, 36, 10);
    socSciRooms["A209"] = paper.rect(661, 235, 36, 10);
    socSciRooms["A207"] = paper.rect(661, 246, 36, 10);
    socSciRooms["A205"] = paper.rect(661, 257, 36, 10);
    langRooms["A203"] = paper.rect(661, 269, 36, 12);
    socSciRooms["A201 and A201-A (Social Worker)"] = paper.rect(661, 283, 36, 14);

    //Even-numbered 3rd Floor A-wing rooms
    unknownRooms["East A-Wing Stairs (3rd Floor)"] = paper.rect(580, 24, 40, 15);
    sciRooms["A320"] = paper.rect(580, 41, 40, 34);
    sciRooms["A318"] = paper.rect(580, 76, 40, 28);
    miscNARooms["A318-A (Science Office)"] = paper.rect(580, 106, 40, 10);
    sciRooms["A316"] = paper.rect(580, 118, 40, 32);
    sciRooms["A314"] = paper.rect(580, 151, 40, 30);
    unknownRooms["Main A-Wing Stairs (3rd Floor)"] = paper.rect(580, 183, 40, 18);
    miscNARooms["A312 Chemistry Storage (Staff Only)"] = paper.rect(580, 203, 40, 12);
    sciRooms["A310"] = paper.rect(580, 217, 40, 14);
    sciRooms["A308"] = paper.rect(580, 232, 40, 14);
    sciRooms["A306"] = paper.rect(580, 247, 40, 14);
    sciRooms["A304"] = paper.rect(580, 262, 40, 12);
    unknownRooms["West A-Wing Stairs (3rd Floor)"] = paper.rect(580, 276, 40, 10);
    //This will be spaced differently than other same-color adjacent rooms, because this will be discovere dwhat type later
    unknownRooms["A300"] = paper.rect(580, 288, 40, 9);

    //Odd-numbered A-Wing Rooms
    miscNARooms["A321 (Social Worker)"] = paper.rect(529, 24, 37, 15);
    sciRooms["A319"] = paper.rect(529, 41, 37, 32);
    sciRooms["A317"] = paper.rect(529, 74, 37, 28);
    miscNARooms["A317-A (Teachers' Office)"] = paper.rect(529, 104, 37, 8);
    unknownRooms["North A-Wing Stairs (3rd Floor)"] = paper.rect(529, 114, 37, 9);
    sciRooms["A315"] = paper.rect(529, 125, 37, 17);
    miscNARooms["A313-A (Teachers' Office)"] = paper.rect(529, 144, 37, 8);
    sciRooms["A313"] = paper.rect(529, 154, 37, 22);
    bathrooms["3rd Floor A-wiing Bathrooms"] = paper.rect(529, 178, 37, 14);
    miscNARooms["A311 (Science Department Chair)"] = paper.rect(529, 194, 37, 8);
    sciRooms["A309"] = paper.rect(529, 204, 37, 14);
    miscNARooms["A307 (Teachers' Office)"] = paper.rect(529, 220, 37, 6);
    sciRooms["A305"] = paper.rect(529, 228, 37, 19);
    sciRooms["A303"] = paper.rect(529, 248, 37, 21);
    miscNARooms["A301-A (Teacher's Office)"] = paper.rect(529, 271, 37, 12);
    sciRooms["A301"] = paper.rect(529, 285, 37, 12);

    //Office, SPS, B-Wing
    //Main Office and SPS polygon declaration 
    specialRooms["Main Office and SPS"] = paper.path("M 571,389 L 616,389 616,505 571,505 571,440 591,440 591,402 571,402 Z");

    var officeStyle = {
        fill: "#00ffbb",
        stroke: "#124739",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["Main Office and SPS"].attr(officeStyle);
    specialRooms["Main Office and SPS"].styleID = officeStyle;

    unknownRooms["B117"] = paper.rect(571, 404, 18, 10);
    engRooms["B116"] = paper.rect(571, 416, 18, 10);
    unknownRooms["B118"] = paper.rect(571, 428, 18, 10);

    //C-Wing, Library (Some details inaccurate)
    //C114 and C114-A will have to be polygons to accomodate bathrooms
    //miscRooms["C114-A (Computer Lab)"] = paper.rect(512, 492, 22, 13);
    //miscRooms["C114 (Computer Lab)"] = paper.rect(534, 492, 22, 13);
    miscRooms["C114-A (Computer Lab)"] = paper.path("M 512,491 L 534,491 534,498 527,498 527,505 512,505 Z");
    miscRooms["C114 (Computer Lab)"] = paper.path("M 535,492 L 556,492 556,505 542,505 542,498 535,498 Z");
    bathrooms["C-Wing Male Bathroom (Staff Only)"] = paper.rect(529, 500, 5, 5);
    bathrooms["C-Wing Female Bathroom (Staff Only)"] = paper.rect(535, 500, 5, 5);
    miscRooms["C115 (Computer Lab) (Entrance through C114-A only)"] = paper.rect(512, 479, 12, 11);
    miscRooms["C116 (Computer Lab) (Entrance through C114-A only)"] = paper.rect(524, 479, 10, 11);
    engRooms["C117 (Entrance through hallway only)"] = paper.rect(536, 479, 20, 11);
    //Writing Lab declaration
    specialRooms["Writing Lab"] = paper.rect(512, 466, 44, 11);
    var writingLabStyle = {
        fill: "#9e0b0b",
        stroke: "#4f0505",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    specialRooms["Writing Lab"].attr(writingLabStyle);
    specialRooms["Writing Lab"].styleID = writingLabStyle;
    //Library declaration
    specialRooms["Library"] = paper.path("M 461,497 L 471,497 471,505 510,505 510,464 556,464 556,454 511,454 511,435 442,435 442,444 461,444 Z");

    var libraryStyle = {
        fill: "#7c0ad8",
        stroke: "#350d5e",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["Library"].attr(libraryStyle);
    specialRooms["Library"].styleID = libraryStyle;

    bathrooms["C-Wing Male Bathrooms"] = paper.rect(461, 499, 4, 6);
    bathrooms["C-Wing Female Bathrooms"] = paper.rect(465, 499, 4, 6);
    engRooms["Literacy Center"] = paper.rect(513, 435, 20, 17);
    langRooms["Foreign Language Lab"] = paper.rect(535, 435, 21, 17);
    //C-Wing "L"-shaped hallway polygon declaration (will be an unknown)
    specialRooms["C-Wing Hallway ('L'-shaped)"] = paper.path("M 516,408 L 516,422 L 556,422 L 556,418 L 523,418 L 523,408 Z");
    specialRooms["C-Wing Hallway ('L'-shaped)"].attr(bathStyle);
    specialRooms["C-Wing Hallway ('L'-shaped)"].styleID = bathStyle;
    engRooms["C128"] = paper.rect(527, 424, 14, 9);
    engRooms["C126"] = paper.rect(542, 424, 14, 9);
    engRooms["C129"] = paper.rect(525, 408, 15, 8);
    engRooms["C127"] = paper.rect(541, 408, 15, 8);
    miscNARooms["English Office (With Department Chair)"] = paper.rect(516, 424, 9, 9);
    engRooms["C134-A (Entrance through hallway only)"] = paper.rect(506, 408, 8, 14);
    unknownRooms["C135 (Entrance through C134-A only)"] = paper.rect(506, 424, 8, 9);
    bathrooms["C-Wing Female Bathroom"] = paper.rect(500, 408, 4, 14);
    miscRooms["C134 (Study Hall)"] = paper.rect(483, 408, 15, 14);
    miscRooms["C140-A (Study Hall)"] = paper.rect(468, 408, 7, 14);
    bathrooms["C-Wing Male Bathroom"] = paper.rect(477, 408, 4, 14);
    miscRooms["C140 (Study Hall)"] = paper.rect(442, 408, 25, 14);
    engRooms["C136 (Entrance through C134 only)"] = paper.rect(490, 424, 14, 9);
    engRooms["C137 (Entrance through C134 only)"] = paper.rect(477, 424, 12, 9);
    engRooms["C141 (Entrance through C140-A only)"] = paper.rect(468, 424, 8, 9);
    engRooms["C142 (Entrance through C140 only)"] = paper.rect(456, 424, 11, 9);
    engRooms["C143 (Entrance through C140 only)"] = paper.rect(442, 424, 13, 9);
    //Rooms adjacent to library (C103 through C108)
    unknownRooms["C108"] = paper.rect(442, 446, 17, 6);
    specialRooms["C107 (Chrome Depot)"] = paper.rect(442, 454, 17, 9);

    var chromeDepotStyle = {
        fill: "#afa011",
        stroke: "#56501c",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["C107 (Chrome Depot)"].attr(chromeDepotStyle);
    specialRooms["C107 (Chrome Depot)"].styleID = chromeDepotStyle;

    miscNARooms["C106 (Tech Offices)"] = paper.rect(442, 465, 17, 9);
    miscNARooms["C105"] = paper.rect(442, 475, 17, 8);
    miscRooms["C104"] = paper.rect(442, 485, 17, 9);
    unknownRooms["C103"] = paper.rect(442, 496, 17, 9);

    //North C-Wing Block
    //Barier for North C-wing; wiill be removed later
    barriers["North C-Wing Barrier"] = paper.rect(387, 406, 45, 100);

    miscRooms["C145-A"] = paper.rect(387, 406, 22, 10);
    miscRooms["C145-B"] = paper.rect(410, 406, 22, 10);
    miscRooms["C147-A"] = paper.rect(387, 417, 22, 9);
    bathrooms["Male Bathroom (Staff Only)"] = paper.rect(411, 418, 21, 8);

    specialRooms["C147-B (Career Resource Center AKA: \"CRC\")"] = paper.rect(387, 428, 22, 10);

    var crcStyle = {
        fill: "#1a4275",
        stroke: "#091d38",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["C147-B (Career Resource Center AKA: \"CRC\")"].attr(crcStyle);
    specialRooms["C147-B (Career Resource Center AKA: \"CRC\")"].styleID = crcStyle;

    miscNARooms["C146 (Vision, Oritentation & Mobility)"] = paper.rect(411, 428, 21, 10);
    specialRooms["Dean's Office"] = paper.rect(387, 440, 22, 10);

    //Will be used later for Red and Black team buildings
    var counselorTeamStyle = {
        fill: "#af0a52",
        stroke: "#660d33",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    }

    specialRooms["Dean's Office"].attr(counselorTeamStyle);
    specialRooms["Dean's Office"].styleID = counselorTeamStyle;

    miscNARooms["C147-C (Meeting room)"] = paper.rect(411, 439, 21, 11);
    miscRooms["C148"] = paper.rect(387, 452, 22, 8);
    unknownRooms["C148-D"] = paper.rect(411, 452, 21, 8);
    miscRooms["C101-B"] = paper.rect(387, 461, 22, 8);
    unknownRooms["Truly Unknown Room"] = paper.rect(411, 461, 21, 8);
    miscNARooms["C150 (Offices)"] = paper.rect(387, 471, 22, 8);
    miscRooms["C101-C"] = paper.rect(411, 471, 21, 8);
    miscRooms["C101 (Study Hall)"] = paper.rect(387, 481, 45, 11);
    miscRooms["C100-A"] = paper.rect(387, 493, 22, 13);
    miscNARooms["C101-A (Access through C101 only)"] = paper.rect(411, 494, 10, 3);
    bathrooms["Female Bathroom (Staff Only)"] = paper.rect(423, 494, 9, 3);
    miscNARooms["C100-C"] = paper.rect(423, 499, 9, 3);
    miscRooms["C100-B"] = paper.path("M 410,499 L 421,499 L 421,504 L 432,504 L 432,506 L 410,506 Z");

    //South V-Wing 
    barriers["South V-Wing Barrier"] = paper.rect(273, 406, 102, 100);
    miscRooms["V114"] = paper.rect(273, 406, 20, 8);
    miscNARooms["V115 (Business Department Chair)"] = paper.rect(295, 406, 12, 8);
    unknownRooms["V113-A"] = paper.rect(273, 416, 33, 8);
    specialRooms["V113 (Preschool)"] = paper.rect(273, 426, 33, 9);

    var preschoolStyle = {
        fill: "#e06f0d",
        stroke: "#633002",
        "stroke-width": 2,
        "Stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["V113 (Preschool)"].attr(preschoolStyle);
    specialRooms["V113 (Preschool)"].styleID = preschoolStyle;
    miscRooms["V112"] = paper.rect(273, 437, 33, 9);
    miscRooms["V111"] = paper.rect(273, 447, 33, 9);
    miscRooms["V110"] = paper.rect(273, 457, 33, 9);
    miscRooms["V109"] = paper.rect(273, 467, 33, 9);
    miscRooms["V108"] = paper.rect(273, 477, 33, 9);
    miscRooms["V107"] = paper.rect(273, 487, 33, 9);
    miscRooms["V106"] = paper.rect(273, 497, 33, 9);
    miscNARooms["V116-A (Business Office [Entrance through hallway only])"] = paper.rect(308, 406, 20, 8);
    miscRooms["V116-B (Entrance through hall only)"] = paper.rect(308, 416, 20, 8);
    miscRooms["V117 (Entrance through hall only)"] = paper.rect(308, 425, 20, 10);
    miscNARooms["V115 (Business and Technical Education Department Chair [Entrance through hall only])"] = paper.rect(338, 406, 12, 8);
    unknownRooms["V119 (Entrance through hall only)"] = paper.rect(338, 416, 12, 8);
    miscRooms["V118 (Entrance through hall only)"] = paper.rect(342, 426, 18, 9);
    miscNARooms["V100-A (Speech and Language Patohologist; Assistive Tech)"] = paper.rect(362, 426, 13, 9);
    miscNARooms["V100-B (Storage)"] = paper.rect(365, 406, 10, 10);
    miscRooms["V100"] = paper.path("M 352,406 L 352,424 L 375,424 L 375,418 L 363,418 L 363,406 Z");
    specialRooms["Courtyard (Staff Only)"] = paper.path("M 308,437 L 308,470 L 375,470 L 375,460 L 363,460 L 363,450 L 375,450 L 375,437 Z");

    var courtyardStyle = {
        fill: "#195918",
        stroke: "#0d2d0d",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["Courtyard (Staff Only)"].attr(courtyardStyle);
    specialRooms["Courtyard (Staff Only)"].styleID = courtyardStyle;
    miscNARooms["V101-C (Police Officer)"] = paper.rect(365, 452, 10, 6);

    specialRooms["V103 (Black Team)"] = paper.path("M 308,472 L 308,506 L 325,506 L 325,490 L 342,490 L 342,472 Z");
    specialRooms["V103 (Black Team)"].attr(counselorTeamStyle);
    specialRooms["V103 (Black Team)"].styleID = counselorTeamStyle;

    specialRooms["V102 (Red Team)"] = paper.path("M 343,472 L 343,490 L 360,490 L 360,498 L 375,498 L 375,472 Z");
    specialRooms["V102 (Red Team)"].attr(counselorTeamStyle);
    specialRooms["V102 (Red Team)"].styleID = counselorTeamStyle;

    specialRooms["V104 (Nurse's Office)"] = paper.rect(327, 492, 10, 14);

    var nurseStyle = {
        fill: "#ed76e3",
        stroke: "#b225a6",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["V104 (Nurse's Office)"].attr(nurseStyle);
    specialRooms["V104 (Nurse's Office)"].styleID = nurseStyle;

    specialRooms["V105 (Book Store)"] = paper.rect(339, 492, 10, 14);

    var bookStoreStyle = {
        fill: "#ffc17a",
        stroke: "#7c5a33",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["V105 (Book Store)"].attr(bookStoreStyle);
    specialRooms["V105 (Book Store)"].styleID = bookStoreStyle;

    specialRooms["V105 (Book Store Storage)"] = paper.rect(350, 492, 8, 14);
    specialRooms["V105 (Book Store Storage)"].attr(bookStoreStyle);
    specialRooms["V105 (Book Store Storage)"].styleID = bookStoreStyle;

    specialRooms["Front Desk"] = paper.rect(360, 500, 15, 6);

    var frontDeskStyle = {
        fill: "#87b5ff",
        stroke: "#3e6199",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };

    specialRooms["Front Desk"].attr(frontDeskStyle);
    specialRooms["Front Desk"].styleID = frontDeskStyle;

    specialRooms["V-Wing Hallway"] = paper.path("M 330,406 L 330,435 L 340,435 L 340,426 L 336,426 L 336,406 Z");
    specialRooms["V-Wing Hallway"].attr(bathStyle);
    specialRooms["V-Wing Hallway"].styleID = bathStyle;

    //Northmost V-Wing 
    barriers["Northmost V-Wing"] = paper.rect(131, 406, 132, 100);
    unknownRooms["V130 (Unkown Purpose)"] = paper.rect(131, 406, 9, 20);
    unknownRooms["V131 (Unkown Purpose)"] = paper.rect(141, 406, 9, 20);
    unknownRooms["Mech Rooms (Yeah these are called the mech rooms but buddy, I have /no/ idea what these are.)"] = paper.rect(151, 406, 29, 20);
    unknownRooms["V134 (No idea here either)"] = paper.rect(181, 406, 19, 20);
    specialRooms["Kitchen"] = paper.rect(202, 406, 61, 20);
    
    var kitchenStyle = {
        fill: "#1ec7ed",
        stroke: "#10414c",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Kitchen"].attr(kitchenStyle);
    specialRooms["Kitchen"].styleID = kitchenStyle;
    
    specialRooms["Loading Bay"] = paper.path("M 131,428 L 200,428 L 200,476 L 172,476 L 172,466 L 131,466 Z");
    
    var loadingBayStyle = {
        fill: "#662c04",
        stroke: "#281304",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Loading Bay"].attr(loadingBayStyle);
    specialRooms["Loading Bay"].styleID = loadingBayStyle;
    
    specialRooms["Hallway to Loading Bay"] = paper.rect(201, 428, 62, 9);
    specialRooms["Hallway to Loading Bay"].attr(loadingBayStyle);
    specialRooms["Hallway to Loading Bay"].styleID = loadingBayStyle;
    miscRooms["V120-C"] = paper.rect(131, 468, 19, 12);
    miscRooms["V120-B"] = paper.rect(131, 481, 19, 12);
    miscRooms["V120-A"] = paper.rect(131, 494, 19, 12);
    bathrooms["Hallway to V120's"] = paper.rect(152, 468, 9, 38);
    unknownRooms["V120-D"] = paper.rect(163, 468, 7, 19);
    miscNARooms["V121-D (Storage)"] = paper.rect(163, 489, 7, 17);
    miscRooms["V121-B (Auto Lab)"] = paper.rect(172, 478, 28, 28);
    miscRooms["V122"] = paper.rect(201, 478, 28, 28);
    miscRooms["V123"] = paper.rect(230, 488, 33, 18);
    specialRooms["V124 Wing"] = paper.rect(202, 439, 61, 13);
    
    var v124WingStyle = {
        fill: "#fcac00",
        stroke: "#684700",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["V124 Wing"].attr(v124WingStyle);
    specialRooms["V124 Wing"].styleID = v124WingStyle;
    miscRooms["V125 (Entrance Through Hallway)"] = paper.rect(202, 454, 27, 11);
    miscRooms["V126 (Entrance Through Hallway)"] = paper.rect(202, 466, 27, 11);
    bathrooms["Hallway to V125, V126, V127"] = paper.path("M 231,454 L 263,454 L 263,464 L 241,464 L 241,486 L 231,486 Z");
    miscRooms["V127"] = paper.rect(243, 466, 20, 21);
    
    //PA-Wing
    barriers["V-Wing Barrier"] = paper.rect(146, 520, 165, 89);
    
    specialRooms["Auditorium"] = paper.rect(195, 530, 58, 62);
    
    var audiStyle = {
        fill: "#af0896",
        stroke: "#470b3e",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Auditorium"].attr(audiStyle);
    specialRooms["Auditorium"].styleID = audiStyle;
    specialRooms["Backstage Entrance"] = paper.rect(195, 520, 10, 9);
    specialRooms["Backstage Entrance"].attr(audiStyle);
    specialRooms["Backstage Entrance"].styleID = audiStyle;
    bathrooms["PA-Wing Male Bathroom"] = paper.rect(207, 520, 16, 8);
    bathrooms["PA-Wing Female Bathroom"] = paper.rect(224, 520, 16, 8);
    miscNARooms["Custodial Closet"] = paper.rect(242, 520, 11, 8);
    
    bathrooms["PA-Wing Hallway"] = paper.path("M 182,520 L 193,520  L 193,594 L 255,594 L 255,520 L 268,520 L 268,603 L 258,603 L 258,609 L 192,609 L 192,603 L 182,603 Z");
    bathrooms["Lobby Male Bathroom"] = paper.rect(182, 604, 9, 5);
    bathrooms["Lobby Female Bathroom"] = paper.rect(259, 604, 9, 5);
    
    miscNARooms["PA111 (Fine Arts Department Chair)"] = paper.rect(146, 520, 34, 8);
    miscNARooms["PA110 (Fine Arts Office)"] = paper.rect(146, 529, 34, 8);
    miscNARooms["PA109-A (Office of Mr. Hutter)"] = paper.rect(146, 538, 34, 8);
    miscRooms["PA109"] = paper.rect(146, 548, 34, 8);
    miscNARooms["PA109-B (Orchestra Direction Office) PA109-C (Not a clue)"] = paper.rect(146, 558, 34, 8);
    miscRooms["PA108-PA109 (Includes costume shops, and several practice rooms)"] = paper.rect(146, 568, 34, 8);
    miscRooms["PA107 (Orchestra Room)"] = paper.rect(146, 577, 34, 16);
    miscNARooms["Uniform Storage"] = paper.rect(146, 595, 34, 7);
    miscNARooms["Instrument Storage"] = paper.rect(146, 603, 34, 6);
    
    miscNARooms["PA101 (Theatre) and PA101-A (Stage manager's office)"] = paper.rect(270, 520, 41, 8);
    miscRooms["PA102"] = paper.rect(270, 530, 41, 8);
    miscRooms["PA103 D-G"] = paper.rect(270, 539, 41, 8);
    miscNARooms["PA104 (Choral library)"] = paper.rect(270, 549, 41, 8);
    miscNARooms["PA105-D (Storage)"] = paper.rect(270, 558, 41, 8);
    miscRooms["PA105"] = paper.rect(270, 568, 41, 20);
    unknownRooms["PA105 A-B"] = paper.rect(270, 590, 41, 8);
    miscRooms["PA105-UV (MIDI Lab; John Conradi's Playground)"] = paper.rect(270, 600, 41, 9);
    
    //Gym and Cafe declarations
    specialRooms["Spec Gym"] = paper.rect(31, 221, 97, 128);
    
    var specStyle = {
        fill: "#b7ab09",
        stroke: "#3a3710",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Spec Gym"].attr(specStyle);
    specialRooms["Spec Gym"].styleID = specStyle;
    
    specialRooms["Cafeteria"] = paper.rect(316, 274, 55, 74);
    
    var cafStyle = {
        fill: "#0d913d",
        stroke: "#0f4221",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Cafeteria"].attr(cafStyle);
    specialRooms["Cafeteria"].styleID = cafStyle;
    miscRooms["Weight Room"] = paper.rect(146, 198, 46, 34);
    specialRooms["Field House"] = paper.path("M 146,135 L 316,135 L 316,155 L 287,155 L 287,216 L 316,216 L 316,232 L 194,232 L 194,196 L 146,196 Z");
    
    var gymStyle = {
        fill: "#a8a8a8",
        stroke: "#2b2a29",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Field House"].attr(gymStyle);
    specialRooms["Field House"].styleID = gymStyle;
    miscRooms["Wrestling Room"] = paper.rect(289, 157, 27, 57);
    miscNARooms["Office of Some Description"] = paper.rect(146, 234, 55, 33);
    specialRooms["Boys' Locker Room"] = paper.rect(203, 234, 97, 33);
    
    var lockStyle = {
        fill: "#850791",
        stroke: "#2a072d",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Boys' Locker Room"].attr(lockStyle);
    specialRooms["Boys' Locker Room"].styleID = lockStyle;
    specialRooms["Pool"] = paper.rect(169, 269, 46, 77);
    
    var poolStyle = {
        fill: "#0c0cb7",
        stroke: "#0b0b3f",
        "stroke-width": 2,
        "stroke-linejoin": "miter",
        cursor: "pointer"
    };
    
    specialRooms["Pool"].attr(poolStyle);
    specialRooms["Pool"].styleID = poolStyle;
    
    specialRooms["Back Gym"] = paper.rect(217, 269, 42, 77);
    specialRooms["Back Gym"].attr(gymStyle);
    specialRooms["Back Gym"].styleID = gymStyle;
    miscRooms["Dance Studio"] = paper.rect(261, 269, 39, 60);
    barriers["PE-Wing Hallway"] = paper.rect(261, 331, 39, 15);
    specialRooms["Fitness Center"] = paper.rect(169, 348, 65, 48);
    specialRooms["Fitness Center"].attr(gymStyle);
    specialRooms["Fitness Center"].styleID = gymStyle;
    specialRooms["Girls' Locker Room"] = paper.rect(236, 348, 64, 48);
    specialRooms["Girls' Locker Room"].attr(lockStyle);
    specialRooms["Girls' Locker Room"].styleID = lockStyle;
     
    
    
    
    //Set each rooms to different styles (and add animations)
    var animationSpeed = 500;
    var hoverStyle = {
        fill: "#A8BED5"
    };

    //Not technically a room type
    for (var roomName in barriers) {
        barriers[roomName].attr(barriersStyle);
    }

    for (var roomName in mathRooms) {
        mathRooms[roomName].attr(mathRoomStyle);
        mathRooms[roomName].styleID = mathRoomStyle;
    }

    for (var roomName in engRooms) {
        engRooms[roomName].attr(engRoomStyle);
        engRooms[roomName].styleID = engRoomStyle;
    }

    for (var roomName in sciRooms) {
        sciRooms[roomName].attr(sciRoomStyle);
        sciRooms[roomName].styleID = sciRoomStyle;
    }

    for (var roomName in socSciRooms) {
        socSciRooms[roomName].attr(socSciRoomStyle);
        socSciRooms[roomName].styleID = socSciRoomStyle;
    }

    for (var roomName in langRooms) {
        langRooms[roomName].attr(langRoomStyle);
        langRooms[roomName].styleID = langRoomStyle;
    }

    for (var roomName in miscRooms) {
        miscRooms[roomName].attr(miscRoomStyle);
        miscRooms[roomName].styleID = miscRoomStyle;
    }

    for (var roomName in miscNARooms) {
        miscNARooms[roomName].attr(miscNARoomstyle);
        miscNARooms[roomName].styleID = miscNARoomstyle;
    }

    for (var roomName in unknownRooms) {
        unknownRooms[roomName].attr(unknownRoomStyle);
        unknownRooms[roomName].styleID = unknownRoomStyle;
    }

    for (var roomName in bathrooms) {
        bathrooms[roomName].attr(bathStyle);
        bathrooms[roomName].styleID = bathStyle;
    }

    for (var i = 0; i < allRoomTypes.length; i++) {
        var roomType = allRoomTypes[i];

        for (var roomName in roomType) {
            allRooms[roomName] = roomType[roomName];
        }
    }

    for (var roomName in allRooms) {
        var roomStyle = allRooms[roomName].styleID;

        (function (room, name, style) {
            room[0].addEventListener("mouseover", function () {
                room.animate(hoverStyle, animationSpeed);
                var node = document.getElementById("myPopup").innerHTML = name;
                togglePopup();

            }, true);
            room[0].addEventListener("mouseout", function () {
                room.animate(style, animationSpeed);
                togglePopup();
            }, true);
        })(allRooms[roomName], roomName, roomStyle);
    }

    function togglePopup() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
}