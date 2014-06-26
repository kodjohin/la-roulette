
var redAndBlack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]

var ared = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

var upperRow = ['1st12', '2nd12', '3rd12'];
var lowerRow = ['1-18', 'Even', 'Blacks', 'Reds', 'Odd', '19-36'];
var rightColumn = ['2 to 1', '2 to 1', '2 to 1'];

var upperIDs = ['1st12', '2nd12', '3rd12'];
var lowerIDs = ['1-18', 'Even', 'Blacks', 'Reds', 'Odd', '19-36'];
var rightIDs = ['col1', 'col2', 'col3'];


var tableParts = {
    'a1st12':[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    'a2nd12':[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    'a3rd12':[25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],

    'a1-18':[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    'a19-36':[19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    'acol1':[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    'acol2':[2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    'acol3':[1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],

    'aReds':[1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    'aBlacks':[2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    'aOdd':[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    'aEven':[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
}

var trioIDs = ["trio_0_2_3", "trio_0_1_2a",
            "trio_1_2_3a", "trio_1_2_3b",
            "trio_4_5_6a", "trio_4_5_6b",
            "trio_7_8_9a", "trio_7_8_9b",
            "trio_10_11_12a", "trio_10_11_12b",
            "trio_13_14_15a", "trio_13_14_15b",
            "trio_16_17_18a", "trio_16_17_18b",
            "trio_19_20_21a", "trio_19_20_21b",
            "trio_22_23_24a", "trio_22_23_24b",
            "trio_25_26_27a", "trio_25_26_27b",
            "trio_28_29_30a", "trio_28_29_30b",
            "trio_31_32_33a", "trio_31_32_33b",
            "trio_34_35_36a", "trio_34_35_36b"];

var streetIDs = ["street_1to6a", "street_1to6b",
            "street_4to9a", "street_4to9b",
            "street_7to12a", "street_7to12b",
            "street_10to15a", "street_10to15b",
            "street_13to18a", "street_13to18b",
            "street_16to21a", "street_16to21b",
            "street_19to24a", "street_19to24b",
            "street_22to27a", "street_22to27b",
            "street_25to30a", "street_25to30b",
            "street_28to33a", "street_28to33b",
            "street_31to36a", "street_31to36b"];

var splitIDs = ["split_0_1", "split_0_2", "split_0_3", "split_1_2", "split_2_3",
            "split_1_4", "split_2_5", "split_3_6", "split_4_5", "split_5_6",
            "split_4_7", "split_5_8", "split_6_9", "split_7_8", "split_8_9",
            "split_7_10", "split_8_11", "split_9_12", "split_10_11", "split_11_12",
            "split_10_13", "split_11_14", "split_12_15", "split_13_14", "split_14_15",
            "split_13_16", "split_14_17", "split_15_18", "split_16_17", "split_17_18",
            "split_16_19", "split_17_20", "split_18_21", "split_19_20", "split_20_21",
            "split_19_22", "split_20_23", "split_21_24", "split_22_23", "split_23_24",
            "split_22_25", "split_23_26", "split_24_27", "split_25_26", "split_26_27",
            "split_25_28", "split_26_29", "split_27_30", "split_28_29", "split_29_30",
            "split_28_31", "split_29_32", "split_30_33", "split_31_32", "split_32_33",
            "split_31_34", "split_32_35", "split_33_36", "split_34_35", "split_35_36"];

var cornerIDs = ["corner_1_2_4_5", "corner_2_3_5_6",
            "corner_4_5_7_8", "corner_5_6_8_9",
            "corner_7_8_10_11", "corner_8_9_11_12",
            "corner_10_11_13_14", "corner_11_12_14_15",
            "corner_13_14_16_17", "corner_14_15_17_18",
            "corner_16_17_19_20", "corner_17_18_20_21",
            "corner_19_20_22_23", "corner_20_21_23_24",
            "corner_22_23_25_26", "corner_23_24_26_27",
            "corner_25_26_28_29", "corner_26_27_29_30",
            "corner_28_29_31_32", "corner_29_30_32_33",
            "corner_31_32_34_35", "corner_32_33_35_36"];

var color = '#eee';
var blockSpace = 5;
var tableGr = new Group();
var zeroGr = new Group();
var numberedGr = new Group();
var upperGr = new Group();
var lowerGr = new Group();
var rightGr = new Group();

var streetGr = new Group();
var trioGr = new Group();
var cornerGr = new Group();
var splitGr = new Group();

var numberedBoxes = [];

drawNumberedBoxes({group:numberedGr, initialX:0, initialY:200});
drawNumberedBox({group:zeroGr, point:new Point(0,0), size:new Size(140, 306), data:0, numColor:'green'});
drawTextBoxes({group:upperGr, size:new Size(70*4+6, 80), data:upperRow, id:upperIDs, rotation:0, align:'horizontal'});
drawTextBoxes({group:lowerGr, size:new Size(70*2+2, 80), data:lowerRow, id:lowerIDs, rotation:0, align:'horizontal'});
drawTextBoxes({group:rightGr, size:new Size(70, 100), data:rightColumn, id:rightIDs, rotation:-90, align:'vertical'});

drawStreetBoxes({group:streetGr, id:streetIDs, initialX:206, initialY:375});
drawTrioBoxes({group:trioGr, id:trioIDs, initialX:160, initialY:375});
drawCornerBoxes({group:cornerGr, id:cornerIDs, initialX:206, initialY:280});
drawSplitBoxes({group:splitGr, id:splitIDs, initialX:98, initialY:300});

createGroup({group:tableGr, items:[zeroGr,numberedGr, upperGr, lowerGr, rightGr, streetGr, trioGr, cornerGr, splitGr]});

zeroGr.position.y += 85;
numberedGr.position.x += zeroGr.getBounds().width + blockSpace;
numberedGr.position.y = zeroGr.position.y;
upperGr.position.x += 145;
lowerGr.position.x += 145;
lowerGr.position.y += (zeroGr.getBounds().height/2) + zeroGr.position.y + blockSpace;
rightGr.position.x += upperGr.position.x + (upperGr.getBounds().width/2) + blockSpace;
rightGr.position.y += upperGr.getBounds().height + blockSpace;


function drawNumberedBox(obj){
    var point = obj.point;
    var size = obj.size;

    var box = new Path.Rectangle(point,size);
    box.fillColor = color;
    box.ID = obj.data;
    numberedBoxes.push(box);

    var coloredNum = new Path.Circle(point+size/2, 30);
    coloredNum.fillColor = obj.numColor;

    var text = new PointText({
        point: [point.x+size.width/2, point.y+size.height/2+10],
        justification: 'center',
        fontSize: 30,
        fillColor: 'white'
    });
    text.content = obj.data;

    createGroup({group:obj.group, items:[box, coloredNum, text]})

    var boxHandlers = {
        mouseenter: function(event) {
            box.fillColor = '#ccc';
        },
        mouseleave: function(event) {
            box.fillColor = '#eee';
        }
    }
    box.on(boxHandlers);
    coloredNum.on(boxHandlers);
    text.on(boxHandlers);
}

function drawNumberedBoxes(obj){
    var point = new Point(obj.initialX,obj.initialY);
    var size = new Size(70, 100);

    for (var i = 0; i < redAndBlack.length; i++) {
        if(i>0 && i%3===0){
            point.y = obj.initialY;
            point.x += size.width + 2;
        }
        if(ared.indexOf(redAndBlack[i]) > -1){
            drawNumberedBox({group:numberedGr, point:point, size:size, data:redAndBlack[i], numColor:'red'});
        }
        else{
            drawNumberedBox({group:numberedGr, point:point, size:size, data:redAndBlack[i], numColor:'black'});
        }
        point.y -= size.height + 2;
    }
}

function drawTextBox(obj){
    var point = obj.point;
    var size = obj.size;

    var box = new Path.Rectangle(point,size);
    box.fillColor = color;
    box.ID = obj.id;

    var text = new PointText({
        point: [point.x+size.width/2, point.y+size.height/2+10],
        justification: 'center',
        fontSize: 30,
        fillColor: 'white'
    });
    text.content = obj.data;
    text.rotate(obj.rotation);
    createGroup({group:obj.group, items:[box, text]})

    var boxHandlers = {
        mouseenter: function(event) {
            box.fillColor = '#ccc';
            for (var key in tableParts) {
                if(box.ID===key.substring(1)){
                    highlightBoxes(tableParts[key], true);
                }
            }
        },
        mouseleave: function(event) {
            box.fillColor = '#eee';
            for (var key in tableParts) {
                if(box.ID===key.substring(1)){
                    highlightBoxes(tableParts[key], false);
                }
            }
        }
    }
    box.on(boxHandlers);
    text.on(boxHandlers);
}
function drawTextBoxes(obj){
    var point = new Point(0, 0);
    var size = obj.size;

    for (var i=0; i < obj.data.length; i++) {
        drawTextBox({group:obj.group, point:point, size:size, data:obj.data[i], id:obj.id[i] ,rotation:obj.rotation});
        if(obj.align === 'horizontal'){
            point.x += size.width + 2;
        }
        else{
            point.y += size.height + 2;
        }
    }
}

function drawStreetBoxes(obj){
    var point = new Point(obj.initialX,obj.initialY);
    var size = new Size(20, 20);

    for (var i = 0; i < 22; i++) {
        if(i>0 && i%2===0){
            point.y = obj.initialY;
            point.x += size.width + 52;
        }
        var box = new Path.Rectangle(point,size);
        box.fillColor = 'red';
        box.opacity = 0;
        box.ID = obj.id[i];
        point.y -= size.height + 275;
        createGroup({group:streetGr, items:[box]})
        var boxHandlers = {
            mouseenter: function(event) {
                var box = event.target;
                //console.log(box.ID);
                var beginning = Number(box.ID.split("to")[0].split("_")[1]);
                var end = Number(box.ID.split("to")[1].split(box.ID.split("to")[1].substr(-1, 1))[0]);
                //console.log(beginning,"****",end);
                var tablePart = [];
                for (var j = beginning; j <= end; j++) {
                    tablePart.push(j);
                }
                highlightBoxes(tablePart, true);
            },
            mouseleave: function(event) {
                var box = event.target;
                var beginning = Number(box.ID.split("to")[0].split("_")[1]);
                var end = Number(box.ID.split("to")[1].split(box.ID.split("to")[1].substr(-1, 1))[0]);
                var tablePart = [];
                for (var j = beginning; j <= end; j++) {
                    tablePart.push(j);
                }
                highlightBoxes(tablePart, false);
            }
        }
        box.on(boxHandlers);

    }

}
function drawTrioBoxes(obj){
    var point = new Point(obj.initialX,obj.initialY);
    var size = new Size(40, 20);

    for (var i = 0; i < 24; i++) {
        if(i>0 && i%2===0){
            point.y = obj.initialY;
            point.x += size.width + 32;
        }
        var box = new Path.Rectangle(point,size);
        box.fillColor = 'red';
        box.opacity = 0;
        box.ID = obj.id[i+2];
        point.y -= size.height + 275;
        createGroup({group:trioGr, items:[box]})
        var boxHandlers = {
            mouseenter: function(event) {
                var box = event.target;
                //console.log(box.ID);
                var beginning = Number(box.ID.split("_")[1]);
                var end = Number(box.ID.split("_")[3].split(box.ID.split("_")[3].substr(-1, 1))[0]);
                //console.log(beginning, "*****", end);
                var tablePart = [];
                for (var j = beginning; j <= end; j++) {
                    tablePart.push(j);
                }
                highlightBoxes(tablePart, true);
            },
            mouseleave: function(event) {
                var box = event.target;
                //console.log(box.ID);
                var beginning = Number(box.ID.split("_")[1]);
                var end = Number(box.ID.split("_")[3].split(box.ID.split("_")[3].substr(-1, 1))[0]);
                //console.log(beginning, "*****", end);
                var tablePart = [];
                for (var j = beginning; j <= end; j++) {
                    tablePart.push(j);
                }
                highlightBoxes(tablePart, false);
            }
        }
        box.on(boxHandlers);
    }
}

function drawCornerBoxes(obj){
    var point = new Point(obj.initialX,obj.initialY);
    var size = new Size(20, 20);

    for (var i = 0; i < 22; i++) {
        if(i>0 && i%2===0){
            point.y = obj.initialY;
            point.x += size.width + 52;
        }
        var box = new Path.Rectangle(point,size);
        box.fillColor = 'red';
        box.opacity = 0;
        box.ID = obj.id[i];
        point.y -= size.height + 83;
        createGroup({group:cornerGr, items:[box]})
        var boxHandlers = {
            mouseenter: function(event) {
                var box = event.target;
                //console.log(box.ID);
                var tablePart = box.ID.split("_");
                tablePart.shift();
                highlightBoxes(tablePart, true);
            },
            mouseleave: function(event) {
                var box = event.target;
                var tablePart = box.ID.split("_");
                tablePart.shift();
                highlightBoxes(tablePart, false);
            }
        }
        box.on(boxHandlers);
    }
}

function drawSplitBoxes(obj){
    var point = new Point(obj.initialX,obj.initialY);
    var size;
    var col=1;
    for (var i = 0; i < splitIDs.length; i++) {
        size = new Size(20, 80);
        if(i%5 === 0){
            col = col +1;
            point.y = obj.initialY;
            point.x += size.width + 16;
        }
        else if(i%3===0){
            col = col +1;
            point.y = obj.initialY;
            point.x += size.width + 16;
        }
        if(col%2 !== 0){
            size = new Size(30, 20);
        }
        console.log(col);
        var box = new Path.Rectangle(point,size);
        box.fillColor = 'blue';
        //box.opacity = 0;
        box.ID = obj.id[i];
        if(col%2 !== 0){
            point.y -= size.height + 12;
        }
        else{
            point.y -= size.height + 22;
        }

        createGroup({group:splitGr, items:[box]})
        var boxHandlers = {
            mouseenter: function(event) {
                var box = event.target;
                console.log(box.ID);
                var beginning = Number(box.ID.split("_")[0].split("_")[1]);
                /* var end = Number(box.ID.split("to")[1].split(box.ID.split("to")[1].substr(-1, 1))[0]);
                 //console.log(beginning,"****",end);
                 var tablePart = [];
                 for (var j = beginning; j <= end; j++) {
                 tablePart.push(j);
                 }
                 highlightBoxes(tablePart, true);*/
            },
            mouseleave: function(event) {
                var box = event.target;
                /*var beginning = Number(box.ID.split("to")[0].split("_")[1]);
                 var end = Number(box.ID.split("to")[1].split(box.ID.split("to")[1].substr(-1, 1))[0]);
                 var tablePart = [];
                 for (var j = beginning; j <= end; j++) {
                 tablePart.push(j);
                 }
                 highlightBoxes(tablePart, false);*/
            }
        }
        box.on(boxHandlers);
    }
}

function createGroup(obj){
    var gr = obj.group;
    gr.addChildren(obj.items);
}


function highlightBoxes(arr, over){
    for (var i = 0; i < arr.length; i++) {
        var box = numberedBoxes[arr[i]-1];
        if(over){
            box.fillColor = '#ccc';
        }
        else{
            box.fillColor = '#eee';
        }
    }
}
function onResize(event) {
    // Whenever the view is resized, move the path to its center:
    tableGr.position = view.center;
}

