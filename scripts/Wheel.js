var aRouletteNumber = [];

var betButton = new Path.Rectangle(new Point(100, 80), 50, 20);
betButton.fillColor = "black";

betButton.onClick = function (event){
    wheelAndBall();
}

function randRange(min, max){								//function to find a random number
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;															//return the random number
}

function roundDecimal( num, places ){
    var places = Math.pow(10, places);
    return Math.round( num * places ) / places;
}

////////////////////////////
////PLACE CHIPS ON TABLE////
////////////////////////////

placeChipsSingle();		placeChipsSplit();		placeChipsTrio();		placeChipsStreet();		placeChipsCorner();
placeChips12thGroup();	placeChipsRow();		placeChipsColour();		placeChipsEvenodd();	placeChipsHalfGroup();

function wheelAndBall(){

    var rouletteNumber = randRange(0, 36);								//set a random roulette number from 0 to 36
    //rouletteNumber = 1;											//set a random roulette number MANUALLY
    var spinType = randRange(1, 5);										//set spin type with a random number from 1 to 5
    var rouletteNumberColour = "NONE";									//will hold the colour data of the chosen number
    var rouletteNumberEvenOdd = "NONE";								//will hold the even/odd data of the chosen number
    var rouletteNumber12thGroup = "NONE";							//will hold the 12th Group data of the chosen number
    var rouletteNumberHalfGroup = "NONE";							//will hold the Half Group data of the chosen number
    var rouletteNumberRow = "NONE";									//will hold the Row data of the chosen number
    var rouletteNumberTrio  = [0,0,0,0,0,0,0,				//will hold true/false case statements for each trio group
        0,0,0,0,0,0,0];
    var rouletteNumberTrio2 = ["0,1,2","0,2,3",			//will hold all the possible trio groups
        "1,2,3","4,5,6",
        "7,8,9","10,11,12",
        "13,14,15","16,17,18",
        "19,20,21","22,23,24",
        "25,26,27","28,29,30",
        "31,32,33","34,35,36"];
    var winningTrios = ["NONE","NONE","NONE"];				//will hold the winning Trio Groups
    //(MAX TRIO GROUPS TO WIN AT ANY ONE TIME IS 3)

    var rouletteNumberStreet  = [0,0,0,0,0,0,				//will hold true/false case statements for each street group
        0,0,0,0,0,0];
    var rouletteNumberStreet2 = ["NONE","1,2,3,4,5,6",		//will hold all the possible street groups
        "4,5,6,7,8,9","7,8,9,10,11,12",
        "10,11,12,13,14,15","13,14,15,16,17,18",
        "16,17,18,19,20,21","19,20,21,22,23,24",
        "22,23,24,25,26,27","25,26,27,28,29,30",
        "28,29,30,31,32,33","31,32,33,34,35,36"];
    var winningStreets = ["NONE","NONE"];					//will hold the winning Street Groups
    //(MAX STREET GROUPS TO WIN AT ANY ONE TIME IS 2)

    var rouletteNumberCorner  = [0,0,0,0,0,0,0,0,0,0,0,	//will hold true/false case statements for each corner group
        0,0,0,0,0,0,0,0,0,0,0,0];
    var rouletteNumberCorner2 = ["0,1,2,3","1,2,4,5",		//will hold all the possible corner groups
        "2,3,5,6","4,5,7,8",
        "5,6,8,9","7,8,10,11",
        "8,9,11,12","10,11,13,14",
        "11,12,14,15","13,14,16,17",
        "14,15,17,18","16,17,19,20",
        "17,18,20,21","19,20,22,23",
        "20,21,23,24","22,23,25,26",
        "23,24,26,27","25,26,28,29",
        "26,27,29,30","28,29,31,32",
        "29,30,32,33","31,32,34,35",
        "32,33,35,36"];
    var winningCorners = ["NONE","NONE","NONE","NONE"];	//will hold the winning Corners Groups
    //(MAX CORNER GROUPS TO WIN AT ANY ONE TIME IS 4)

    var rouletteNumberSplit  = [0,0,0,0,0,0,0,0,0,0,		//will hold true/false case statements for each split group
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0];
    var rouletteNumberSplit2 = ["0,1","0,2","0,3","1,2",	//will hold all the possible split groups
        "1,4","2,3","2,5","3,6",
        "4,5","4,7","5,6","5,8",
        "6,9","7,8","7,10","8,9",
        "8,11","9,12","10,11","10,13",
        "11,12","11,14","12,15","13,14",
        "13,16","14,15","14,17","15,18",
        "16,17","16,19","17,18","17,20",
        "18,21","19,20","19,22","20,21",
        "20,23","21,24","22,23","22,25",
        "23,24","23,26","24,27","25,26",
        "25,28","26,27","26,29","27,30",
        "28,29","28,31","29,30","29,32",
        "30,33","31,32","31,34","32,33",
        "32,35","33,36","34,35","35,36"];
    var winningSplits = ["NONE","NONE","NONE","NONE"];		//will hold the winning Split Groups
    //(MAX SPLIT GROUPS TO WIN AT ANY ONE TIME IS 4)

    aRouletteNumber.push(rouletteNumber);
    switch(rouletteNumber){											//check the roulette number
        //set slot to go to dependant on the roulette number
        //set the colour of the roulette number
        //set even/odd data of the roulette number
        //set the 12th Group data of the roulette number
        //set the Half Group data of the roulette number
        //set the Row data of the roulette number
        //set the Column data of the roulette number
        //set the correct Trio Groups to win
        //set the correct Street Groups to win
        //set the correct Corner Groups to win
        //set the correct Split Groups to win
        case 0:		selectedSlot2 = 31;		rouletteNumberColour = "GREEN";		rouletteNumberEvenOdd = "NONE";
            rouletteNumber12thGroup = "NONE";	rouletteNumberHalfGroup = "NONE";	rouletteNumberRow = "NONE";
            rouletteNumberTrio[0] = true;	rouletteNumberTrio[1] = true;
            rouletteNumberStreet[0] = true;
            rouletteNumberCorner[0] = true;
            rouletteNumberSplit[0] = true;		rouletteNumberSplit[1] = true;	rouletteNumberSplit[2] = true;
            break;
        case 1:		selectedSlot2 = 17;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "3";
            rouletteNumberTrio[0] = true;	rouletteNumberTrio[2] = true;
            rouletteNumberStreet[1] = true;
            rouletteNumberCorner[0] = true;		rouletteNumberCorner[1] = true;
            rouletteNumberSplit[0] = true;		rouletteNumberSplit[3] = true;	rouletteNumberSplit[4] = true;
            break;
        case 2:		selectedSlot2 = 37;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "2";
            rouletteNumberTrio[0] = true;	rouletteNumberTrio[1] = true;	rouletteNumberTrio[2] = true;
            rouletteNumberStreet[1] = true;
            rouletteNumberCorner[0] = true;		rouletteNumberCorner[1] = true;
            rouletteNumberCorner[2] = true;
            rouletteNumberSplit[1] = true;		rouletteNumberSplit[3] = true;	rouletteNumberSplit[5] = true;
            rouletteNumberSplit[6] = true;
            break;
        case 3:		selectedSlot2 = 29;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "1";
            rouletteNumberTrio[1] = true;	rouletteNumberTrio[2] = true;
            rouletteNumberStreet[1] = true;
            rouletteNumberCorner[0] = true;		rouletteNumberCorner[2] = true;
            rouletteNumberSplit[2] = true;		rouletteNumberSplit[5] = true;	rouletteNumberSplit[7] = true;
            break;
        case 4:		selectedSlot2 = 35;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "3";
            rouletteNumberTrio[3] = true;
            rouletteNumberStreet[1] = true;		rouletteNumberStreet[2] = true;
            rouletteNumberCorner[1] = true;		rouletteNumberCorner[3] = true;
            rouletteNumberSplit[4] = true;		rouletteNumberSplit[8] = true;	rouletteNumberSplit[9] = true;
            break;
        case 5:		selectedSlot2 = 13;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "2";
            rouletteNumberTrio[3] = true;
            rouletteNumberStreet[1] = true;		rouletteNumberStreet[2] = true;
            rouletteNumberCorner[1] = true;		rouletteNumberCorner[2] = true;
            rouletteNumberCorner[3] = true;		rouletteNumberCorner[4] = true;
            rouletteNumberSplit[6] = true;		rouletteNumberSplit[8] = true;	rouletteNumberSplit[10] = true;
            rouletteNumberSplit[11] = true;
            break;
        case 6:		selectedSlot2 = 4;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "1";
            rouletteNumberTrio[3] = true;
            rouletteNumberStreet[1] = true;		rouletteNumberStreet[2] = true;
            rouletteNumberCorner[2] = true;		rouletteNumberCorner[4] = true;
            rouletteNumberSplit[7] = true;		rouletteNumberSplit[10] = true;	rouletteNumberSplit[12] = true;
            break;
        case 7:		selectedSlot2 = 25;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "3";
            rouletteNumberTrio[4] = true;
            rouletteNumberStreet[2] = true;		rouletteNumberStreet[3] = true;
            rouletteNumberCorner[3] = true;		rouletteNumberCorner[5] = true;
            rouletteNumberSplit[9] = true;		rouletteNumberSplit[13] = true;	rouletteNumberSplit[14] = true;
            break;
        case 8:		selectedSlot2 = 10;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "2";
            rouletteNumberTrio[4] = true;
            rouletteNumberStreet[2] = true;		rouletteNumberStreet[3] = true;
            rouletteNumberCorner[3] = true;		rouletteNumberCorner[4] = true;
            rouletteNumberCorner[5] = true;		rouletteNumberCorner[6] = true;
            rouletteNumberSplit[11] = true;		rouletteNumberSplit[13] = true;	rouletteNumberSplit[15] = true;
            rouletteNumberSplit[16] = true;
            break;
        case 9:		selectedSlot2 = 21;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "1";
            rouletteNumberTrio[4] = true;
            rouletteNumberStreet[2] = true;		rouletteNumberStreet[3] = true;
            rouletteNumberCorner[4] = true;		rouletteNumberCorner[6] = true;
            rouletteNumberSplit[12] = true;		rouletteNumberSplit[15] = true;	rouletteNumberSplit[17] = true;
            break;
        case 10:	selectedSlot2 = 12;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "3";
            rouletteNumberTrio[5] = true;
            rouletteNumberStreet[3] = true;		rouletteNumberStreet[4] = true;
            rouletteNumberCorner[5] = true;		rouletteNumberCorner[7] = true;
            rouletteNumberSplit[14] = true;		rouletteNumberSplit[18] = true;	rouletteNumberSplit[19] = true;
            break;
        case 11:	selectedSlot2 = 8;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "2";
            rouletteNumberTrio[5] = true;
            rouletteNumberStreet[3] = true;		rouletteNumberStreet[4] = true;
            rouletteNumberCorner[5] = true;		rouletteNumberCorner[6] = true;
            rouletteNumberCorner[7] = true;		rouletteNumberCorner[8] = true;
            rouletteNumberSplit[16] = true;		rouletteNumberSplit[18] = true;	rouletteNumberSplit[20] = true;
            rouletteNumberSplit[21] = true;
            break;
        case 12:	selectedSlot2 = 27;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "1ST";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "1";
            rouletteNumberTrio[5] = true;
            rouletteNumberStreet[3] = true;		rouletteNumberStreet[4] = true;
            rouletteNumberCorner[6] = true;		rouletteNumberCorner[8] = true;
            rouletteNumberSplit[17] = true;		rouletteNumberSplit[20] = true;	rouletteNumberSplit[22] = true;
            break;
        case 13:	selectedSlot2 = 6;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "3";
            rouletteNumberTrio[6] = true;
            rouletteNumberStreet[4] = true;		rouletteNumberStreet[5] = true;
            rouletteNumberCorner[7] = true;		rouletteNumberCorner[9] = true;
            rouletteNumberSplit[19] = true;		rouletteNumberSplit[23] = true;	rouletteNumberSplit[24] = true;
            break;
        case 14:	selectedSlot2 = 19;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "2";
            rouletteNumberTrio[6] = true;
            rouletteNumberStreet[4] = true;		rouletteNumberStreet[5] = true;
            rouletteNumberCorner[7] = true;		rouletteNumberCorner[8] = true;
            rouletteNumberCorner[9] = true;		rouletteNumberCorner[10] = true;
            rouletteNumberSplit[21] = true;		rouletteNumberSplit[23] = true;	rouletteNumberSplit[25] = true;
            rouletteNumberSplit[26] = true;
            break;
        case 15:	selectedSlot2 = 33;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "1";
            rouletteNumberTrio[6] = true;
            rouletteNumberStreet[4] = true;		rouletteNumberStreet[5] = true;
            rouletteNumberCorner[8] = true;		rouletteNumberCorner[10] = true;
            rouletteNumberSplit[22] = true;		rouletteNumberSplit[25] = true;	rouletteNumberSplit[27] = true;
            break;
        case 16:	selectedSlot2 = 15;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "3";
            rouletteNumberTrio[7] = true;
            rouletteNumberStreet[5] = true;		rouletteNumberStreet[6] = true;
            rouletteNumberCorner[9] = true;		rouletteNumberCorner[11] = true;
            rouletteNumberSplit[24] = true;		rouletteNumberSplit[28] = true;	rouletteNumberSplit[29] = true;
            break;
        case 17:	selectedSlot2 = 2;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "2";
            rouletteNumberTrio[7] = true;
            rouletteNumberStreet[5] = true;		rouletteNumberStreet[6] = true;
            rouletteNumberCorner[9] = true;		rouletteNumberCorner[10] = true;
            rouletteNumberCorner[11] = true;	rouletteNumberCorner[12] = true;
            rouletteNumberSplit[26] = true;		rouletteNumberSplit[28] = true;	rouletteNumberSplit[30] = true;
            rouletteNumberSplit[31] = true;
            break;
        case 18:	selectedSlot2 = 23;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "1-18";	rouletteNumberRow = "1";
            rouletteNumberTrio[7] = true;
            rouletteNumberStreet[5] = true;		rouletteNumberStreet[6] = true;
            rouletteNumberCorner[10] = true;	rouletteNumberCorner[12] = true;
            rouletteNumberSplit[27] = true;		rouletteNumberSplit[30] = true;	rouletteNumberSplit[32] = true;
            break;
        case 19:	selectedSlot2 = 34;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "3";
            rouletteNumberTrio[8] = true;
            rouletteNumberStreet[6] = true;		rouletteNumberStreet[7] = true;
            rouletteNumberCorner[11] = true;	rouletteNumberCorner[13] = true;
            rouletteNumberSplit[29] = true;		rouletteNumberSplit[33] = true;	rouletteNumberSplit[34] = true;
            break;
        case 20:	selectedSlot2 = 18;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "2";
            rouletteNumberTrio[8] = true;
            rouletteNumberStreet[6] = true;		rouletteNumberStreet[7] = true;
            rouletteNumberCorner[11] = true;	rouletteNumberCorner[12] = true;
            rouletteNumberCorner[13] = true;	rouletteNumberCorner[14] = true;
            rouletteNumberSplit[31] = true;		rouletteNumberSplit[33] = true;	rouletteNumberSplit[35] = true;
            rouletteNumberSplit[36] = true;
            break;
        case 21:	selectedSlot2 = 36;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "1";
            rouletteNumberTrio[8] = true;
            rouletteNumberStreet[6] = true;		rouletteNumberStreet[7] = true;
            rouletteNumberCorner[12] = true;	rouletteNumberCorner[14] = true;
            rouletteNumberSplit[32] = true;		rouletteNumberSplit[35] = true;	rouletteNumberSplit[37] = true;
            break;
        case 22:	selectedSlot2 = 22;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "3";
            rouletteNumberTrio[9] = true;
            rouletteNumberStreet[7] = true;		rouletteNumberStreet[8] = true;
            rouletteNumberCorner[13] = true;	rouletteNumberCorner[15] = true;
            rouletteNumberSplit[34] = true;		rouletteNumberSplit[38] = true;	rouletteNumberSplit[39] = true;
            break;
        case 23:	selectedSlot2 = 11;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "2";
            rouletteNumberTrio[9] = true;
            rouletteNumberStreet[7] = true;		rouletteNumberStreet[8] = true;
            rouletteNumberCorner[13] = true;	rouletteNumberCorner[14] = true;
            rouletteNumberCorner[15] = true;	rouletteNumberCorner[16] = true;
            rouletteNumberSplit[36] = true;		rouletteNumberSplit[38] = true;	rouletteNumberSplit[40] = true;
            rouletteNumberSplit[41] = true;
            break;
        case 24:	selectedSlot2 = 14;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "2ND";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "1";
            rouletteNumberTrio[9] = true;
            rouletteNumberStreet[7] = true;		rouletteNumberStreet[8] = true;
            rouletteNumberCorner[14] = true;	rouletteNumberCorner[16] = true;
            rouletteNumberSplit[37] = true;		rouletteNumberSplit[40] = true;	rouletteNumberSplit[42] = true;
            break;
        case 25:	selectedSlot2 = 1;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "3";
            rouletteNumberTrio[10] = true;
            rouletteNumberStreet[8] = true;		rouletteNumberStreet[9] = true;
            rouletteNumberCorner[15] = true;	rouletteNumberCorner[17] = true;
            rouletteNumberSplit[39] = true;		rouletteNumberSplit[43] = true;	rouletteNumberSplit[44] = true;
            break;
        case 26:	selectedSlot2 = 30;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "2";
            rouletteNumberTrio[10] = true;
            rouletteNumberStreet[8] = true;		rouletteNumberStreet[9] = true;
            rouletteNumberCorner[15] = true;	rouletteNumberCorner[16] = true;
            rouletteNumberCorner[17] = true;	rouletteNumberCorner[18] = true;
            rouletteNumberSplit[41] = true;		rouletteNumberSplit[43] = true;	rouletteNumberSplit[45] = true;
            rouletteNumberSplit[46] = true;
            break;
        case 27:	selectedSlot2 = 5;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "1";
            rouletteNumberTrio[10] = true;
            rouletteNumberStreet[8] = true;		rouletteNumberStreet[9] = true;
            rouletteNumberCorner[16] = true;	rouletteNumberCorner[18] = true;
            rouletteNumberSplit[42] = true;		rouletteNumberSplit[45] = true;	rouletteNumberSplit[47] = true;
            break;
        case 28:	selectedSlot2 = 26;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "3";
            rouletteNumberTrio[11] = true;
            rouletteNumberStreet[9] = true;		rouletteNumberStreet[10] = true;
            rouletteNumberCorner[17] = true;	rouletteNumberCorner[19] = true;
            rouletteNumberSplit[44] = true;		rouletteNumberSplit[48] = true;	rouletteNumberSplit[49] = true;
            break;
        case 29:	selectedSlot2 = 24;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "2";
            rouletteNumberTrio[11] = true;
            rouletteNumberStreet[9] = true;		rouletteNumberStreet[10] = true;
            rouletteNumberCorner[17] = true;	rouletteNumberCorner[18] = true;
            rouletteNumberCorner[19] = true;	rouletteNumberCorner[20] = true;
            rouletteNumberSplit[46] = true;		rouletteNumberSplit[48] = true;	rouletteNumberSplit[50] = true;
            rouletteNumberSplit[51] = true;
            break;
        case 30:	selectedSlot2 = 9;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "1";
            rouletteNumberTrio[11] = true;
            rouletteNumberStreet[9] = true;		rouletteNumberStreet[10] = true;
            rouletteNumberCorner[18] = true;	rouletteNumberCorner[20] = true;
            rouletteNumberSplit[47] = true;		rouletteNumberSplit[50] = true;	rouletteNumberSplit[52] = true;
            break;
        case 31:	selectedSlot2 = 20;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "3";
            rouletteNumberTrio[12] = true;
            rouletteNumberStreet[10] = true;	rouletteNumberStreet[11] = true;
            rouletteNumberCorner[19] = true;	rouletteNumberCorner[21] = true;
            rouletteNumberSplit[49] = true;		rouletteNumberSplit[53] = true;	rouletteNumberSplit[54] = true;
            break;
        case 32:	selectedSlot2 = 32;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "2";
            rouletteNumberTrio[12] = true;
            rouletteNumberStreet[10] = true;	rouletteNumberStreet[11] = true;
            rouletteNumberCorner[19] = true;	rouletteNumberCorner[20] = true;
            rouletteNumberCorner[21] = true;	rouletteNumberCorner[22] = true;
            rouletteNumberSplit[51] = true;		rouletteNumberSplit[53] = true;	rouletteNumberSplit[55] = true;
            rouletteNumberSplit[56] = true;
            break;
        case 33:	selectedSlot2 = 16;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "1";
            rouletteNumberTrio[12] = true;
            rouletteNumberStreet[10] = true;	rouletteNumberStreet[11] = true;
            rouletteNumberCorner[20] = true;	rouletteNumberCorner[22] = true;
            rouletteNumberSplit[52] = true;		rouletteNumberSplit[55] = true;	rouletteNumberSplit[57] = true;
            break;
        case 34:	selectedSlot2 = 3;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "3";
            rouletteNumberTrio[13] = true;
            rouletteNumberStreet[11] = true;
            rouletteNumberCorner[21] = true;
            rouletteNumberSplit[54] = true;		rouletteNumberSplit[58] = true;
            break;
        case 35:	selectedSlot2 = 28;		rouletteNumberColour = "BLACK";		rouletteNumberEvenOdd = "ODD";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "2";
            rouletteNumberTrio[13] = true;
            rouletteNumberStreet[11] = true;
            rouletteNumberCorner[21] = true;	rouletteNumberCorner[22] = true;
            rouletteNumberSplit[56] = true;		rouletteNumberSplit[58] = true;	rouletteNumberSplit[59] = true;
            break;
        case 36:	selectedSlot2 = 7;		rouletteNumberColour = "RED";		rouletteNumberEvenOdd = "EVEN";
            rouletteNumber12thGroup = "3RD";	rouletteNumberHalfGroup = "19-36";	rouletteNumberRow = "1";
            rouletteNumberTrio[13] = true;
            rouletteNumberStreet[11] = true;
            rouletteNumberCorner[22] = true;
            rouletteNumberSplit[57] = true;		rouletteNumberSplit[59] = true;
            break;
    }


    //////////////////////////////////////////////////////////
    ////////////////////MAIN TRACE CODE///////////////////////

    console.log("Roulette Number        = %c "  + rouletteNumber          , "color:darkturquoise");
    console.log("Roulette Colour        = %c "  + rouletteNumberColour    , "color:"+ rouletteNumberColour);
    console.log("Roulette Even/Odd      = %c "  + rouletteNumberEvenOdd   , "color:orange");
    console.log("Roulette 12TH Group    = %c "  + rouletteNumber12thGroup , "color:purple");
    console.log("Roulette Half Group    = %c "  + rouletteNumberHalfGroup , "color:forestgreen");
    console.log("Roulette Row Number    = %c "  + rouletteNumberRow       , "color:blue");

    console.log("History    = %c "  + aRouletteNumber       , "color:maroon");

    var tempWWW = 0;
    var tempWWW2 = 0;
    while(tempWWW <=59){
        if(rouletteNumberSplit[tempWWW] === true){
            winningSplits[tempWWW2] = rouletteNumberSplit2[tempWWW];
            console.log("Roulette Split Group   =   " + winningSplits[tempWWW2]);
            tempWWW2++;
        }
        tempWWW++;
    }

    var tempXXX = 0;
    var tempXXX2 = 0;
    while(tempXXX <=13){
        if(rouletteNumberTrio[tempXXX] === true){
            winningTrios[tempXXX2] = rouletteNumberTrio2[tempXXX];
            console.log("Roulette Trio Group    =   " + winningTrios[tempXXX2]);
            tempXXX2++;
        }
        tempXXX++;
    }

    var tempYYY = 0;
    var tempYYY2 = 0;
    while(tempYYY <=11){
        if(rouletteNumberStreet[tempYYY] === true){
            winningStreets[tempYYY2] = rouletteNumberStreet2[tempYYY];
            console.log("Roulette Street Group  =   " + winningStreets[tempYYY2]);
            tempYYY2++;
        }
        tempYYY++;
    }

    var tempZZZ = 0;
    var tempZZZ2 = 0;
    while(tempZZZ <=22){
        if(rouletteNumberCorner[tempZZZ] === true){
            winningCorners[tempZZZ2] = rouletteNumberCorner2[tempZZZ];
            console.log("Roulette Corner Group  =   " + winningCorners[tempZZZ2]);
            tempZZZ2++;
        }
        tempZZZ++;
    }

    /////////////////END OF MAIN TRACE CODE///////////////////
    //////////////////////////////////////////////////////////


    var tempSplitHolder  = 0;										//will keep count of which split group is being checked
    var tempSplitHolder2 = 0;										//will keep count of which split groups have been recorded
    while(tempSplitHolder <=59){									//will check through the 60 split groups
        if(rouletteNumberSplit[tempSplitHolder] === true){			//will check if the split group has won
            winningSplits[tempSplitHolder2] = rouletteNumberSplit2[tempSplitHolder];	//will add winning split group to winning array
            tempSplitHolder2++;										//increment the split recording counter
        }
        tempSplitHolder++;											//increment the split checking counter
    }

    var tempTrioHolder  = 0;										//will keep count of which trio group is being checked
    var tempTrioHolder2 = 0;										//will keep count of which trio groups have been recorded
    while(tempTrioHolder <=13){										//will check through the 14 trio groups
        if(rouletteNumberTrio[tempTrioHolder] === true){				//will check if the trio group has won
            winningTrios[tempTrioHolder2] = rouletteNumberTrio2[tempTrioHolder];	//will add winning trio group to winning array
            tempTrioHolder2++;										//increment the trio recording counter
        }
        tempTrioHolder++;											//increment the trio checking counter
    }

    var tempStreetHolder = 0;										//will keep count of which street group is being checked
    var tempStreetHolder2 = 0;										//will keep count of which street groups have been recorded
    while(tempStreetHolder <=11){									//will check through the 12 street groups
        if(rouletteNumberStreet[tempStreetHolder] === true){			//will check if the street group has won
            winningStreets[tempStreetHolder2] = rouletteNumberStreet2[tempStreetHolder]; //will add winning street group to winning array
            tempStreetHolder2++;									//increment the street recording counter
        }
        tempStreetHolder++;											//increment the street checking counter
    }

    var tempCornerHolder = 0;										//will keep count of which corner group is being checked
    var tempCornerHolder2 = 0;										//will keep count of which corner groups have been recorded
    while(tempCornerHolder <=22){									//will check through the 23 corner groups
        if(rouletteNumberCorner[tempCornerHolder] === true){			//will check if the corner group has won
            winningCorners[tempCornerHolder2] = rouletteNumberCorner2[tempCornerHolder]; //will add winning corner group to winning array
            tempCornerHolder2++;									//increment the corner recording counter
        }
        tempCornerHolder++;											//increment the corner checking counter
    }



    var betSingle  = [0,0,0,0,0,0,0,0,0,0,0,0,	//will hold the bet amount for each single roulette number
        0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0];

    var betColour  = [0,0];					//will hold the bet amount for each colours - CAN NOT WIN GREEN
    var betColour2 = ["BLACK","RED"];			//hold the colour identifiers - CAN NOT WIN GREEN

    var betEvenOdd  = [0,0];					//will hold the bet amount for even and odd - CAN NOT WIN '0'
    var betEvenOdd2 = ["EVEN","ODD"];			//hold the even and odd identifiers - CAN NOT WIN '0'

    var bet12thGroup  = [0,0,0];				//will hold the bet amount for the 12th groups - CAN NOT WIN '0'
    var bet12thGroup2 = ["1ST","2ND","3RD"];	//hold the 12th group identifiers - CAN NOT WIN '0'

    var betHalfGroup  = [0,0];					//will hold the bet amount for the half groups - CAN NOT WIN '0'
    var betHalfGroup2 = ["1-18","19-36"];		//hold the half group identifiers - CAN NOT WIN '0'

    var betRow  = [0,0,0];						//will hold the bet amount for each row - CAN NOT WIN '0'
    var betRow2 = ["1","2","3"];				//hold the row identifiers - CAN NOT WIN '0'

    var betSplit  = [0,0,0,0,0,0,0,0,0,0,		//will hold the bet amount for each split
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0];

    var betTrio  = [0,0,0,0,0,0,0,				//will hold the bet amount for each trio
        0,0,0,0,0,0,0];

    var betStreet  = [0,0,0,0,0,0,				//will hold the bet amount for each street
        0,0,0,0,0,0];

    var betCorner  = [0,0,0,0,0,0,0,0,0,0,0,	//will hold the bet amount for each corner
        0,0,0,0,0,0,0,0,0,0,0,0];


    ////////////////////////
    ///////SET BETS ////////
    ////////////////////////


    var tempRecordCounter = 1;

    while(tempRecordCounter <= LaRoulette.betRecorderCounter){
        if(LaRoulette.recordBetType[tempRecordCounter] === "single"){				//check if bet type is single
            betSingle[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "split"){				//check if bet type is split
            betSplit[rLaRoulette.ecordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "trio"){					//check if bet type is trio
            betTrio[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "street"){				//check if bet type is street
            betStreet[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "corner"){				//check if bet type is corner
            betCorner[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "12thgroup"){			//check if bet type is 12th Group
            bet12thGroup[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "row"){					//check if bet type is row
            betRow[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "colour"){				//check if bet type is colour
            betColour[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "evenodd"){				//check if bet type is even or odd
            betEvenOdd[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
        if(LaRoulette.recordBetType[tempRecordCounter] === "halfgroup"){			//check if bet type is half group
            betHalfGroup[LaRoulette.recordLocation[tempRecordCounter]] += LaRoulette.recordBetAmount[tempRecordCounter];
            //trace(recordLocation[tempRecordCounter]);
            tempRecordCounter++;
        }
    };

    //recordOrderNumber[betRecorderCounter] = betRecorderCounter;
    //recordLocation[betRecorderCounter] = i;
    //recordBetAmount[betRecorderCounter] = newBetAmount;

    //FAKE BETS

    betSingle[5]  += 1;									//place a bet on roulette number 5  -  TEMP
    betColour[0]  += 0.10;								//place a bet on black  -  TEMP
    betEvenOdd[0] += 1;									//place a bet on even  -  TEMP
    bet12thGroup[0] += 1;								//place a bet on 1st 12th group  -  TEMP
    betHalfGroup[0] += 1;								//place a bet on 1st half group  -  TEMP
    betRow[2] += 100;									//place a bet on 3rd Row  -  TEMP
    betSplit[3] += 1;									//place a bet on '1,2' split  -  TEMP
    betTrio[5] += 1;									//place a bet on '10,11,12' trio  -  TEMP
    betStreet[2] += 1;									//place a bet on '4,5,6,7,8,9' street  -  TEMP
    betCorner[4] += 1;									//place a bet on '5,6,8,9' corner  -  TEMP


    ////////////////////////////
////////CHECKING BET////////
////////////////////////////

    var totalOverallWin = 0;											//will hold the total overall winnings

    var tempSingleCounter = 0;											//will keep count of which single number should be checked
    var winSingle = false;												//record whether a single number win has been made
    var totalSingleWin = 0;												//will hold the total single number winnings

    var tempColourCounter = 0;											//will keep count of which colour should be checked
    var winColour = false;												//record whether a colour win has been made
    var totalColourWin = 0;												//will hold the total colour winnings

    var tempEvenOddCounter = 0;											//will keep count of whether even or odd should be checked
    var winEvenOdd = false;												//record whether an even or odd win has been made
    var totalEvenOddWin = 0;											//will hold the total even and odd winnings

    var temp12thGroupCounter = 0;										//will keep count of which 12th group should be checked
    var win12thGroup = false;											//record whether a 12th group win has been made
    var total12thGroupWin = 0;											//will hold the total 12th group winnings

    var tempHalfGroupCounter = 0;										//will keep count of which half group should be checked
    var winHalfGroup = false;											//record whether a half group win has been made
    var totalHalfGroupWin = 0;											//will hold the total half group winnings

    var tempRowCounter = 0;												//will keep count of which row should be checked
    var winRow = false;													//record whether a row win has been made
    var totalRowWin = 0;												//will hold the total row winnings

    var tempSplitCounter = 0;											//will keep count of which split should be checked
    var winSplit = false;												//record whether a split win has been made
    var totalSplitWin = 0;												//will hold the total split winnings

    var tempTrioCounter = 0;											//will keep count of which trio should be checked
    var winTrio = false;												//record whether a trio win has been made
    var totalTrioWin = 0;												//will hold the total trio winnings

    var tempStreetCounter = 0;											//will keep count of which street should be checked
    var winStreet = false;												//record whether a street win has been made
    var totalStreetWin = 0;												//will hold the total street winnings

    var tempCornerCounter = 0;											//will keep count of which corner should be checked
    var winCorner = false;												//record whether a corner win has been made
    var totalCornerWin = 0;												//will hold the total corner winnings

    var movingLosingChipsRecorderTYPE = [];					//will hold the bet type of losing chips
    var movingLosingChipsRecorderNUMBER = [];					//will hold the location for that bet type for losing chips
    var movingLosingChipsRecorderCounter = 0;							//will count through the recorded chips

    previousWinningChipsCounter = 0;

    while(tempSingleCounter <= 36){										//do for each roulette number
        if(betSingle[tempSingleCounter] != 0){							//check if bet has been placed
            if(tempSingleCounter === rouletteNumber){					//check if it was a winning bet
                winSingle = true;										//tell game the player has won a single bet
                totalSingleWin += (betSingle[tempSingleCounter] * 36);	//increase total single winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "single";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempSingleCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betSingle[tempSingleCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempSingleCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempSingleCounter++;											//increment Single Number Counter
    }

    while(tempColourCounter <= 1){										//do for each colour
        if(betColour[tempColourCounter] != 0){							//check if bet has been placed
            if(betColour2[tempColourCounter] === rouletteNumberColour){	//check if it was a winning bet
                winColour = true;										//tell game the player has won a colour bet
                totalColourWin += (betColour[tempColourCounter] * 2);	//increase total colour winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "colour";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempColourCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betColour[tempColourCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "colour";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempColourCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempColourCounter++;											//increment Colour Counter
    }

    while(tempEvenOddCounter <= 1){											//do for even and odd
        if(betEvenOdd[tempEvenOddCounter] != 0){							//check if bet has been placed
            if(betEvenOdd2[tempEvenOddCounter] === rouletteNumberEvenOdd){	//check if it was a winning bet
                winEvenOdd = true;											//tell game the player has won an even or odd bet
                totalEvenOddWin += (betEvenOdd[tempEvenOddCounter] * 2);	//increase total even and odd winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "evenodd";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempEvenOddCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betEvenOdd[tempEvenOddCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "evenodd";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempEvenOddCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempEvenOddCounter++;												//increment Even and Odd Counter
    }

    while(temp12thGroupCounter <= 2){											//do for each 12th group
        if(bet12thGroup[temp12thGroupCounter] != 0){							//check if bet has been placed
            if(bet12thGroup2[temp12thGroupCounter] === rouletteNumber12thGroup){	//check if it was a winning bet
                win12thGroup = true;											//tell game the player has won a 12th group bet
                total12thGroupWin += (bet12thGroup[temp12thGroupCounter] * 3);	//increase total 12th group winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "12thgroup";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = temp12thGroupCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = bet12thGroup[temp12thGroupCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "12thgroup";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = temp12thGroupCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        temp12thGroupCounter++;													//increment 12th Group Counter
    }

    while(tempHalfGroupCounter <= 1){											//do for each half group
        if(betHalfGroup[tempHalfGroupCounter] != 0){							//check if bet has been placed
            if(betHalfGroup2[tempHalfGroupCounter] === rouletteNumberHalfGroup){	//check if it was a winning bet
                winHalfGroup = true;											//tell game the player has won a half group bet
                totalHalfGroupWin += (betHalfGroup[tempHalfGroupCounter] * 2);	//increase total half group winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "halfgroup";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempHalfGroupCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betHalfGroup[tempHalfGroupCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "halfgroup";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempHalfGroupCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempHalfGroupCounter++;													//increment Half Group Counter
    }

    while(tempRowCounter <= 2){													//do for each row
        if(betRow[tempRowCounter] != 0){										//check if bet has been placed
            if(betRow2[tempRowCounter] === rouletteNumberRow){					//check if it was a winning bet
                winRow = true;													//tell game the player has won a row bet
                totalRowWin += (betRow[tempRowCounter] * 3);					//increase total row winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "row";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempRowCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betRow[tempRowCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "row";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempRowCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempRowCounter++;														//increment Row Counter
    }

    while(tempSplitCounter <= 59){										//do for each split
        if(betSplit[tempSplitCounter] != 0){							//check if bet has been placed
            if(rouletteNumberSplit[tempSplitCounter] === true){			//check if it was a winning bet
                winSplit = true;										//tell game the player has won a split bet
                totalSplitWin += (betSplit[tempSplitCounter] * 18);		//increase total split winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "split";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempSplitCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betSplit[tempSplitCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "split";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempSplitCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempSplitCounter++;												//increment Split Counter
    }

    while(tempTrioCounter <= 13){										//do for each trio
        if(betTrio[tempTrioCounter] != 0){								//check if bet has been placed
            if(rouletteNumberTrio[tempTrioCounter] === true){			//check if it was a winning bet
                winTrio = true;											//tell game the player has won a trio bet
                totalTrioWin += (betTrio[tempTrioCounter] * 12);		//increase total trio winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "trio";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempTrioCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betTrio[tempTrioCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "trio";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempTrioCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempTrioCounter++;												//increment Trio Counter
    }

    while(tempStreetCounter <= 11){										//do for each street
        if(betStreet[tempStreetCounter] != 0){							//check if bet has been placed
            if(rouletteNumberStreet[tempStreetCounter] === true){		//check if it was a winning bet
                winStreet = true;										//tell game the player has won a street bet
                totalStreetWin += (betStreet[tempStreetCounter] * 6);	//increase total street winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "street";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempStreetCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betStreet[tempStreetCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "street";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempStreetCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempStreetCounter++;											//increment Street Counter
    }

    while(tempCornerCounter <= 22){										//do for each corner
        if(betCorner[tempCornerCounter] != 0){							//check if bet has been placed
            if(rouletteNumberCorner[tempCornerCounter] === true){		//check if it was a winning bet
                winCorner = true;										//tell game the player has won a corner bet
                totalCornerWin += (betCorner[tempCornerCounter] * 9);	//increase total corner winnings respectively

                previousWinningChipsCounter++;
                LaRoulette.previousWinningChipsTYPE[previousWinningChipsCounter] = "corner";
                LaRoulette.previousWinningChipsNUMBER[previousWinningChipsCounter] = tempCornerCounter;
                LaRoulette.previousWinningChipsAMOUNT[previousWinningChipsCounter] = betCorner[tempCornerCounter];
            }else{
                movingLosingChipsRecorderTYPE[movingLosingChipsRecorderCounter] = "corner";
                movingLosingChipsRecorderNUMBER[movingLosingChipsRecorderCounter] = tempCornerCounter;
                movingLosingChipsRecorderCounter++;
            }
        }
        tempCornerCounter++;											//increment Corner Counter
    }

    totalOverallWin += totalSingleWin;									//increase total overall winnings with Single wins
    totalOverallWin += totalColourWin;									//increase total overall winnings with Colour wins
    totalOverallWin += totalEvenOddWin;									//increase total overall winnings with Even and Odd wins
    totalOverallWin += total12thGroupWin;								//increase total overall winnings with 12th Group wins
    totalOverallWin += totalHalfGroupWin;								//increase total overall winnings with Half Group wins
    totalOverallWin += totalRowWin;										//increase total overall winnings with Row wins
    totalOverallWin += totalSplitWin;									//increase total overall winnings with Split wins
    totalOverallWin += totalTrioWin;									//increase total overall winnings with Trio wins
    totalOverallWin += totalStreetWin;									//increase total overall winnings with Street wins
    totalOverallWin += totalCornerWin;									//increase total overall winnings with Corner wins
    console.log("-------------------------");
    console.log("You Win: " + totalOverallWin);				//TRACE###########################################################



    ///////////////////////////////////
    //////////////SUMMARY//////////////

    console.log(rouletteNumber);
    console.log(rouletteNumberColour);
    console.log(rouletteNumberEvenOdd);
    console.log("-------------------------");

    if(winSingle === true){
        console.log("Straight Bet (35/1) :  £" + totalSingleWin)
    }
    if(winColour === true){
        console.log("Colour Bet (EVENS) :  £" + totalColourWin)
    }
    if(winEvenOdd === true){
        console.log("Even/Odd Bet (EVENS) :  £" + totalEvenOddWin)
    }
    if(win12thGroup === true){
        console.log("Dozen Group Bet (2/1) :  £" + total12thGroupWin)
    }
    if(winHalfGroup === true){
        console.log("Half Group Bet (EVENS) :  £" + totalHalfGroupWin)
    }
    if(winRow === true){
        console.log("Row Bet (2/1) :  £" + totalRowWin)
    }
    if(winSplit === true){
        console.log("Split Bet (17/1) :  £" + totalSplitWin)
    }
    if(winTrio === true){
        console.log("Trio Bet (11/1) :  £" + totalTrioWin)
    }
    if(winStreet === true){
        console.log("Street Bet (5/1) :  £" + totalStreetWin)
    }
    if(winCorner === true){
        console.log("Corner Bet (8/1) :  £" + totalCornerWin)
    }
    if(totalOverallWin > 0){
        console.log("-------------------------");
        console.log("Total Winnings : £" + totalOverallWin);
    }else{
        console.log("No Win");
    }

    ///////////END OF SUMMARY//////////
    ///////////////////////////////////

}


//Place Chips on a single bet
function placeChipsSingle(){
    var tempPlaceChipCounter  = 0;									//will keep count of the number being checked
    var tempPlaceChipCounter2 = 0;									//will keep count of the recorded bets
    var tempNewChipAmount = 0;										//will hold the bet amount for any bet

    while(tempPlaceChipCounter <= 36){								//will do for each single number on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){			//will do for each bet made
            //check if bet is lower than one
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
                //var chip = this["mcChip_" + tempPlaceChipCounter];		//create a movieclip to refer to later on
                //chip.gotoAndStop("chips_0");												//hide the chip image
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "single"){
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){	//will check if recorded bet location matches location
//                    var mcChip:MovieClip = this["mcChip_" + tempPlaceChipCounter];	//create a movieclip to refer to later on
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];	//increase the new chip amount with bets in same location
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);				//changes the text of the chip
                }
            }
            tempPlaceChipCounter2++;								//increment the counter for recorded bets
        }
        tempNewChipAmount = 0;										//resets the new chip amount
        tempPlaceChipCounter++;										//increments the number to be checked
        tempPlaceChipCounter2 = 0;									//resets the counter for recorded bets
    }
    updateTotalStakes();
}

//Place Chips on a colour bet
function placeChipsColour(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 1){								//will do for each colour on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_colour_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "colour"){	//will check if bet type is colour
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
//                    var mcChip:MovieClip = this["mcChip_colour_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on an even/odd bet
function placeChipsEvenodd(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 1){								//will do for each even/odd on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_evenodd_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "evenodd"){	//will check if bet type is even/odd
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){

//                    var mcChip:MovieClip = this["mcChip_evenodd_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on a half group bet
function placeChipsHalfGroup(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 1){								//will do for each half group on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_halfgroup_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "halfgroup"){	//will check if bet type is a half group
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
//                    var mcChip:MovieClip = this["mcChip_halfgroup_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on a row bet
function placeChipsRow(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 2){									//will do for each row on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_row_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "row"){			//will check if bet type is a row
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
//                    var mcChip:MovieClip = this["mcChip_row_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on a 12th group bet
function placeChips12thGroup(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 2){										//will do for each 12th group on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_12thgroup_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "12thgroup"){		//will check if bet type is a 12th group
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
//                    var mcChip:MovieClip = this["mcChip_12thgroup_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on a split bet
function placeChipsSplit(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 59){										//will do for each split on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_split_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "split"){		//will check if bet type is a split
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
//                    var mcChip:MovieClip = this["mcChip_split_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on a trio bet
function placeChipsTrio(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 13){										//will do for each trio on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_trio_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "trio"){				//will check if bet type is a trio
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
//                    var mcChip:MovieClip = this["mcChip_trio_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on a corner bet
function placeChipsCorner(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 22){										//will do for each corner on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_corner_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "corner"){			//will check if bet type is a corner
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
//                    var mcChip:MovieClip = this["mcChip_corner_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//Place Chips on a street bet
function placeChipsStreet(){
    var tempPlaceChipCounter  = 0;
    var tempPlaceChipCounter2 = 0;
    var tempNewChipAmount = 0;

    while(tempPlaceChipCounter <= 11){										//will do for each street on table
        while(tempPlaceChipCounter2 <= LaRoulette.betRecorderCounter){
            if(LaRoulette.recordBetAmount[tempPlaceChipCounter2] === undefined || LaRoulette.recordBetAmount[tempPlaceChipCounter2] === 0){
//                var mcChip:MovieClip = this["mcChip_street_" + tempPlaceChipCounter];
//                mcChip.gotoAndStop("chips_0");
            }
            if(LaRoulette.recordBetType[tempPlaceChipCounter2] === "street"){			//will check if bet type is a street
                if(LaRoulette.recordLocation[tempPlaceChipCounter2] === tempPlaceChipCounter){
                    //var mcChip:MovieClip = this["mcChip_street_" + tempPlaceChipCounter];
                    tempNewChipAmount += LaRoulette.recordBetAmount[tempPlaceChipCounter2];
//                    showChipImage(tempNewChipAmount, mcChip);
//                    mcChip.dbChip.text = roundDecimal(tempNewChipAmount, 2);
                }
            }
            tempPlaceChipCounter2++;
        }
        tempNewChipAmount = 0;
        tempPlaceChipCounter++;
        tempPlaceChipCounter2 = 0;
    }
    updateTotalStakes();
}

//update total stakes data
function updateTotalStakes(){
    var tempTotalStakesCounter = 1;									//keeps count of recorded bet being checked
    LaRoulette.totalStakes = 0;												//will hold the total stake amount

    while(tempTotalStakesCounter <= LaRoulette.betRecorderCounter){			//will do for each recorded bet
        LaRoulette.totalStakes += LaRoulette.recordBetAmount[tempTotalStakesCounter];		//adds the bet amount of the recorded bet to the total stakes
        tempTotalStakesCounter++;									//increments the total stakes counter
    }
    console.log("-------------------------");
    console.log("Total Stakes: £" + LaRoulette.totalStakes);
}

