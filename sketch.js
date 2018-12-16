let sketch1, sketch2, sketch3, sketch4;

sketch1 = function(p) { // p could be any variable name
  let woman;
  let man;
  
  let womanx = 170;
	let womany = 180;

	let man1x =225;
	let man1y = 180;

	let man2x = 275;
	let man2y = 180;

	let man3x = 325;
	let man3y = 180;

	let man4x = 374;
	let man4y = 180;
  
  p.preload = function() {
    woman = p.loadImage("woman-tan.png");
    man = p.loadImage("man-blue.png");
  }

  p.allowDraw = false;
  p.setup = function() {
    p.createCanvas(600, 200);
    
  };

  p.draw = function() {
    
    if (p.allowDraw == true) {
    	
      
      p.background(248, 241, 238);
  		p.image(woman, womanx, womany, woman.width / 6, woman.height / 6)
  		p.image(man, man1x, man1y, man.width / 6, man.height / 6)
  		p.image(man, man2x, man2y, man.width / 6, man.height / 6)
  		p.image(man, man3x, man3y, man.width / 6, man.height / 6)
  		p.image(man, man4x, man4y, man.width / 6, man.height / 6)
      
        womanx = womanx + 1
  			if (womanx > 170)
    			womanx = 170
				womany = womany - 15
				if (womany < 35)
   			 womany = 35
  
  			man1x = man1x + 1
 			 	if (man1x > 225)
  			  man1x = 225
				man1y = man1y - 12
				if (man1y < 35)
   			 man1y = 35
  
 			 	man2x = man2x + 1
 			 	if (man2x > 275)
 			   man2x = 275
				man2y = man2y - 10
				if (man2y < 35)
   			 man2y = 35
  
 			 	man3x = man3x + 1
 			 	if (man3x > 325)
   			 man3x = 325
				man3y = man3y - 8
				if (man3y < 35)
   			 man3y = 35
  
  			man4x = man4x + 1
  			if (man4x > 375)
    			man4x = 375
				man4y = man4y - 6
				if (man4y < 35)
   			 man4y = 35
      
    }
  };

};

let mySketch1 = new p5(sketch1, 'canvas1');

sketch2 = function(p) { // p could be any variable name
  var row1;
  var row2;
  var row3;
	var row4;
	var row5;
  
  var row1x = 50;
	var row1y = 400;

	var row2x = 50;
	var row2y = 400;

	var row3x = 50;
	var row3y = 400;

	var row4x = 50;
	var row4y = 400;

	var row5x = 50;
	var row5y = 400;
  
  p.preload = function() {
    row1 = p.loadImage("sketch2row1.png");
    row2 = p.loadImage("sketch2row2.png");
    row3 = p.loadImage("sketch2row2.png")
  	row4 = p.loadImage("sketch2row2.png")
  	row5 = p.loadImage("sketch2row2.png")
  }

  p.allowDraw = false;
  p.setup = function() {
    p.createCanvas(600, 420);
  };

  p.draw = function() {
    if (p.allowDraw == true) {
           
    	p.background(248, 241, 238);
  		p.image(row1, row1x, row1y, row1.width/12, row1.height/12)
  		p.image(row2, row2x, row2y, row2.width/12, row2.height/12)
  		p.image(row2, row3x, row3y, row2.width/12, row2.height/12)
  		p.image(row2, row4x, row4y, row2.width/12, row2.height/12)
  		p.image(row2, row5x, row5y, row2.width/12, row2.height/12)
      
      row1x = row1x + 1
  		if (row1x > 50)
    		row1x = 50
			row1y = row1y - 15
			if (row1y < 40)
    		row1y = 40
  
  		row2x = row2x + 1
  		if (row2x > 50)
    		row2x = 50
			row2y = row2y - 12
			if (row2y < 110)
    		row2y = 110
  
  		row3x = row3x + 1
  		if (row3x > 50)
   		 row3x = 50
			row3y = row3y - 10
			if (row3y < 180)
    		row3y = 180
  
  		row4x = row4x + 1
  		if (row4x > 50)
    		row4x = 50
			row4y = row4y - 8
			if (row4y < 250)
    		row4y = 250
  
  		row5x = row5x + 1
  		if (row5x > 50)
    		row5x = 50
			row5y = row5y - 6
			if (row5y < 320)
    		row5y = 320
    }
  };

};
let mySketch2 = new p5(sketch2, 'canvas2');


sketch3 = function(p) { // p could be any variable name
  var row1;
  var row2;
  var row3;
	var row4;
	var row5;
  
  var row1x = 50;
	var row1y = 400;

	var row2x = 50;
	var row2y = 400;

	var row3x = 50;
	var row3y = 400;

	var row4x = 50;
	var row4y = 400;

	var row5x = 50;
	var row5y = 400;
  
  p.preload = function() {
    row1 = p.loadImage("sketch3row1.png");
    row2 = p.loadImage("sketch3row1.png");
    row3 = p.loadImage("sketch4row3.png");
    row4 = p.loadImage("sketch4row4.png");
    row5 = p.loadImage("sketch2row2.png");
  }

  p.allowDraw = false;
  p.setup = function() {
    p.createCanvas(600, 420);
  };

  p.draw = function() {
    if (p.allowDraw == true) {
           
    	p.background(248, 241, 238);
  		p.image(row1, row1x, row1y, row1.width/12, row1.height/12)
  		p.image(row2, row2x, row2y, row2.width/12, row2.height/12)
  		p.image(row3, row3x, row3y, row3.width/12, row3.height/12)
  		p.image(row4, row4x, row4y, row4.width/12, row4.height/12)
  		p.image(row5, row5x, row5y, row5.width/12, row5.height/12)
      
      row1x = row1x + 1
  		if (row1x > 50)
    		row1x = 50
			row1y = row1y - 15
			if (row1y < 40)
    		row1y = 40
  
  		row2x = row2x + 1
  		if (row2x > 50)
    		row2x = 50
			row2y = row2y - 12
			if (row2y < 110)
    		row2y = 110
  
  		row3x = row3x + 1
  		if (row3x > 50)
   		 row3x = 50
			row3y = row3y - 10
			if (row3y < 180)
    		row3y = 180
  
  		row4x = row4x + 1
  		if (row4x > 50)
    		row4x = 50
			row4y = row4y - 8
			if (row4y < 250)
    		row4y = 250
  
  		row5x = row5x + 1
  		if (row5x > 50)
    		row5x = 50
			row5y = row5y - 6
			if (row5y < 320)
    		row5y = 320
    }
  };

};
let mySketch3 = new p5(sketch3, 'canvas3');

sketch4 = function(p) {
  var bar1;
  var bar2;
  var bar3;
  
  bar1x = 220;
	bar1y = 400;

	bar2x = 280;
	bar2y = 400;

	bar3x = 340;
	bar3y = 400;
  
  p.preload = function() {
  	bar1 = p.loadImage("bar1.png");
 		bar2 = p.loadImage("bar2.png");
 		bar3 = p.loadImage("bar3.png");
  }

  p.allowDraw = false;
  p.setup = function() {
    p.createCanvas(600, 500);
  };

  p.draw = function() {
    if (p.allowDraw == true) {
           
    	p.background(248, 241, 238);
  		p.image(bar1, bar1x, bar1y, bar1.width/2, bar1.height/2);
  		p.image(bar2, bar2x, bar2y, bar2.width/2, bar2.height/2);
  		p.image(bar3, bar3x, bar3y, bar3.width/2, bar3.height/2);
  
  		bar1x = bar1x + 1
  		if (bar1x > 220)
    		bar1x = 220
			bar1y = bar1y - 15
			if (bar1y < 21)
    		bar1y = 21

  		bar2x = bar2x + 1
  		if (bar2x > 280)
    		bar2x = 280
			bar2y = bar2y - 25
			if (bar2y < 148)
    		bar2y = 148
  
  		bar3x = bar3x + 1
  		if (bar3x > 340)
    		bar3x = 340
			bar3y = bar3y - 35
			if (bar3y < 235)
    		bar3y = 235
    }
  };
};
let mySketch4 = new p5(sketch4, 'canvas4');

$(window).on('scroll', function() {
  let y_scroll_pos = $(window).scrollTop();
  let canvas1_location = $("#section1").position().top;
  let canvas2_location = $("#section2").position().top;
  let canvas3_location = $("#section3").position().top;
  let canvas4_location = $("#section4").position().top;


  if (y_scroll_pos > canvas1_location) {
    console.log("canvas1")
    mySketch1.allowDraw = true;
  }
  if (y_scroll_pos > canvas2_location) {
    console.log("canvas2")
    mySketch2.allowDraw = true;
  }
  if (y_scroll_pos > canvas3_location) {
    console.log("canvas3")
    mySketch3.allowDraw = true;
  }
  if (y_scroll_pos > canvas4_location) {
    console.log("canvas4")
    mySketch4.allowDraw = true;
  }

});