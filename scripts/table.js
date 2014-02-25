
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
var color = '#eee';
var blockSpace = 5;
var tableGr = new Group();
var zeroGr = new Group();
var numberedGr = new Group();
var upperGr = new Group();
var lowerGr = new Group();
var rightGr = new Group();

var numberedBoxes = [];

drawNumberedBoxes({group:numberedGr, initialX:0, initialY:200});
drawNumberedBox({group:zeroGr, point:new Point(0,0), size:new Size(140, 306), data:0, numColor:'green'});
drawTextBoxes({group:upperGr, size:new Size(70*4+6, 80), data:upperRow, id:upperIDs, rotation:0, align:'horizontal'});
drawTextBoxes({group:lowerGr, size:new Size(70*2+2, 80), data:lowerRow, id:lowerIDs, rotation:0, align:'horizontal'});
drawTextBoxes({group:rightGr, size:new Size(70, 100), data:rightColumn, id:rightIDs, rotation:-90, align:'vertical'});

createGroup({group:tableGr, items:[zeroGr,numberedGr, upperGr, lowerGr, rightGr]});

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
            box.fillColor = 'blue';
            box.opacity = .2;
        },
        mouseleave: function(event) {
            box.fillColor = '#eee';
            box.opacity = 1;
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
            box.fillColor = 'blue';
            box.opacity = .2;
            for (var key in tableParts) {
                if(box.ID===key.substring(1)){
                    highlightBoxes(tableParts[key], true);
                }
            }
        },
        mouseleave: function(event) {
            box.fillColor = '#eee';
            box.opacity = 1;
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

function createGroup(obj){
    var gr = obj.group;
    gr.addChildren(obj.items);
}


function highlightBoxes(arr, over){
    for (var i = 0; i < arr.length; i++) {
        var box = numberedBoxes[arr[i]-1];
        if(over){
            box.fillColor = 'blue';
            box.opacity = .2;
        }
        else{
            box.fillColor = '#eee';
            box.opacity = 1;
        }
    }
}
function onResize(event) {
    // Whenever the view is resized, move the path to its center:
    tableGr.position = view.center;
}

