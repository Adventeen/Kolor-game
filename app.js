function genrateColor() {
  optArr = document.getElementsByClassName('circle');
  const colorArr = [];
  for (var i = 0; i < optArr.length; i++) {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    optArr[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    colorArr[i] = "rgb(" + r + "," + g + "," + b + ")";
    correct = Math.floor(Math.random() * 5);
    document.getElementsByClassName('banner')[0].style.backgroundColor = colorArr[correct];
  }
}

function timer() {
  var timeleft =  Math.floor(document.getElementById('timer').textContent);
  timeleft -= 1;
  document.getElementById('timer').textContent = timeleft;

  var round =  Math.floor(document.getElementById('round').textContent);

  if (timeleft == 0) {
    genrateColor();
    document.getElementById('timer').textContent = 5;
    round += 1;
  }
  document.getElementById('round').textContent = round;
}

var opts = document.getElementsByClassName('circle');

for (var i = 0; i < opts.length; i++) {
  opts[i].addEventListener('click', (e) => {
    target = e.target;

    correct = document.getElementsByClassName('banner')[0].style.backgroundColor
    choosed = target.style.backgroundColor;

    var round =  Math.floor(document.getElementById('round').textContent);
    var score =  Math.floor(document.getElementById('score').textContent);

    if (correct == choosed) {
      genrateColor();
      document.getElementById('timer').textContent = 5;
      round += 1;
      score += 30;
    }
    else {
      score -= 10;

      document.getElementById('scoreCard').style.backgroundColor = 'rgb(255, 92, 51)';
      setTimeout(() => {
        document.getElementById('scoreCard').style.backgroundColor = '#f2f2f2';
      }, 500);

    }
    document.getElementById('round').textContent = round;
    document.getElementById('score').textContent = score;

    if (document.getElementById('round').textContent == '20') {
      console.log('True');
      clearInterval(game);
    }

  })
}

var game = setInterval(timer, 1000)
