var sound1; // 創建音樂播放器的變數
var analyzer; // 創建音樂振福分析器的變數


function preload() {
  sound1 = loadSound("fsm-team-banger.mp3"); // 載入音樂檔案
}


function setup() {
  createCanvas(windowWidth, windowHeight); // 創建畫布
  background("#457b9d"); // 設定背景顏色
  analyzer = new p5.Amplitude(); // 創建音樂振幅分析器
  analyzer.setInput(sound1); // 將音樂輸入到分析器中
}


var w = 100; // 設定橢圓和矩形的基本大小
var s_w = 50; // 設定第二個橢圓的基本大小
var fc, fc1; // 存儲音樂振幅值的變數
var textSizeValue = 30; // 初始文本大小


function draw() {
  background("#457b9d"); // 重設背景色
  rectMode(CENTER);
  noFill();

  // 根據音樂振幅設定文本大小
  if (sound1.isPlaying()) {
    fc = map(analyzer.getLevel(), 0, 1, 0, 100);
    fc1 = map(analyzer.getLevel(), 0, 1, 0, 200);
  } else {
    fc = map(mouseX, 0, windowWidth, 0, 100);
    fc1 = map(mouseY, 0, windowHeight, 0, 200);
  }

  for (var y = w / 2; y <= height + w / 2; y = y + w) {
    for (var x = w / 2; x <= width + 50; x = x + w) {
      // 使用音樂振幅值來設定圖形的大小
      var  EllipseSize = fc; // 設定橢圓大小
      var rectSize = w + mouseX / 5 + fc1; // 設定矩形大小
      var secendEllipseSize = s_w + mouseX / 5 + fc; // 設定第二個橢圓大小

      stroke("#00f5d4");
      strokeWeight(2);
      ellipse(x, y,EllipseSize+10);

      stroke("#003E3E");
      strokeWeight(15);
      rect(x, y,rectSize);

      stroke("#003566");
      strokeWeight(2);
      ellipse(x + 50, y + 50,secendEllipseSize+8);
    }
  }

  // 使用音樂振幅值來設定文本大小
  textSize(fc + 30);
  fill(0)
  text("Ray", 50, 100);
}



function mousePressed() {
  if (sound1.isPlaying()) {
    sound1.stop();
  } else {
    sound1.play();
  }
}
