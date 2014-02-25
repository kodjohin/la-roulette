/**
 * @author kodjo OHIN
 *
 */

var LaRoulette = {
    version:'0.1'
};


////////////////////////////
////SET GLOBAL VARIABLES////
////////////////////////////

/////////////table variables

setInitials = false;

LaRoulette.previousWinningNumbers = ["","","","","","","","","",""];				//will hold the 10 previous winning numbers
LaRoulette.previousWinningColours = ["","","","","","","","","",""];				//will hold the 10 previous winning colours
LaRoulette.previousWinningNumbers2 = ["","","","","","","","","","",""];				//will hold the 10 previous winning numbers
LaRoulette.previousWinningColours2 = ["","","","","","","","","","",""];				//will hold the 10 previous winning colours


LaRoulette.myDP_array = [];
LaRoulette.aBetNumber = [];
LaRoulette.aStake = [];
LaRoulette.aRouletteNumber = [];
LaRoulette.aWinning = [];

//will hold the amount of a new bet
LaRoulette.newBetAmount = 1;
LaRoulette.totalStakes = 0;
//arrays to record what was bet BEFORE, where it was bet BEFORE, and in what order
LaRoulette.recordBetType = [];
LaRoulette.recordLocation = [];
LaRoulette.recordBetAmount = [];

LaRoulette.repeatBetType = [];
LaRoulette.repeatLocation = [];
LaRoulette.repeatBetAmount = [];
LaRoulette.repeatGroupBet = [];
LaRoulette.betRecorderCounterREPEAT = 0;
LaRoulette.betRecorderCounter = 0;
LaRoulette.betGain = 0;

//set the max bet amounts for each bet type
LaRoulette.maxSingleBet = 25;
LaRoulette.maxSplitBet = 50;
LaRoulette.maxTrioBet = 75;
LaRoulette.maxStreetBet = 150;
LaRoulette.maxCornerBet = 100;
LaRoulette.max12thGroupBet = 250;
LaRoulette.maxRowBet = 250;
LaRoulette.maxColourBet = 500;
LaRoulette.maxEvenOddBet = 500;
LaRoulette.maxHalfGroupBet = 500;

LaRoulette.playerCredit = 500;
LaRoulette.creditLimitReached = false;
LaRoulette.maxBetReached = false;
LaRoulette.turboBet = false;
LaRoulette.autoBet = 1;
LaRoulette.remainingAutoBets = 1;
LaRoulette.textLineNo = ["","","","","","","","","","","",""];						//max line of 12


LaRoulette.previousWinningChipsTYPE = [];
LaRoulette.previousWinningChipsNUMBER = [];
LaRoulette.previousWinningChipsAMOUNT = [];
LaRoulette.previousWinningChipsCounter = 0;

/////////////wheel variables

LaRoulette.resetWheelRotation = 0;											//will record the balls rotation
LaRoulette.selectedSlot2 = 1;										//holds the selected slot data untill passed on
LaRoulette.slotIncreaseNumber = 0;											//will hold the increase amount to correct slot number
LaRoulette.slotIncreaseNumber2 = 0;										//will hold data to tweek wheel rotation
LaRoulette.spinType = 1;													//sets the initial spin type

LaRoulette.rouletteNumber = 37;										//set to 37 to identify that no roulette numbers have been spun
LaRoulette.rouletteNumberColour = "NONE";									//will hold the colour data of the chosen number






