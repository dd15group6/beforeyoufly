  var vid;
  // var playing = true;

  let button1;
  let button2;
  // let button3;
  // let button4;

  function preload() {}

  function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    vid = createVideo('2-2-2laxLose.mp4');
    vid.hide();

    vid.size(1920, 1080);
    vid.autoplay(true);
    vid.onended(choices);
    createbtnExit();

    button1 = select("#opt4-1").style("display", "none");
    button2 = select("#opt4-2").style("display", "none");
    // button2 = select("#opt4-3").style("display", "none");
    // button2 = select("#opt4-4").style("display", "none");
  }

  function draw() {

    push();
    var video = vid.loadPixels();
    imageMode(CENTER);

    image(vid, width / 2, height / 2, width, width * 9 / 16);
    pop();
  }


  //pause
  // function mouseClicked() {
  //   if (!playing) {
  //     vid.play();
  //     // vid.time((mouseX/width) * vid.duration());
  //     playing = true;
  //   } else {
  //     vid.pause();
  //     playing = false;
  //   }
  // }

  function choices(elt) {

    button1.style("display", "inline-block");
    button1.mousePressed(senario1);

    button2.style("display", "inline-block");
    button2.mousePressed(senario2);

    // button3.style("display", "inline-block");
    // button3.mousePressed(senario3);
    //
    // button4.style("display", "inline-block");
    // button4.mousePressed(senario4);

  }

  function senario1() {
    self.location = "../../page4.html";
  }

  function senario2() {
    self.location = '../2-2-0lax/2-2-0lax.html';
  }

  // function senario3() {
  //   self.location = '../';
  // }
  //
  // function senario4() {
  //   self.location = '../';
  // }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
