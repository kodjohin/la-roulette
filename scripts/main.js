var chip;

var circle1 = new Path.Circle(50, 50, 30);
circle1.fillColor = 'green';
circle1.on({
    mousedown: function(){
        chip = new Symbol(this.clone());
    }
})
var circle2 = new Path.Circle(110, 50, 30);
circle2.fillColor = 'red';
circle2.on({
    mousedown: function(){
        chip = new Symbol(this.clone());
    }
})
var circle3 = new Path.Circle(170, 50, 30);
circle3.fillColor = 'black';
circle3.on({
    mousedown: function(){
        chip = new Symbol(this.clone());
    }
})

var rect = new Path.Rectangle(400, 0, 500, 500);
rect.fillColor = '#eee';
rect.ID = "myrect";
rect.on({
    mousedown:function(e){
        if(chip !== undefined){
            chip.place(e.point);
            console.log(e.target.bounds);
        }
    }
});
