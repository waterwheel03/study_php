var targetTime = 10;
var time  = 0;
var timer = null;

var toggle = document.getElementById('toggle');
toggle.addEventListener('click', function(event) {
    var status = toggle.value;
    //console.log(status);
    if (status === 'start') {
        timerStart();
        toggle.value = 'stop';
        toggle.classList.add('stop');
    } else {
        timerEnd();
        getResult();
    }
});

function timerStart() {
    startTime = new Date().getTime();
    timer = setInterval(function() {
        time = (new Date().getTime() -startTime) / 1000;
        // document.getElementById('timer').textContent = time.toFixed(3);
    }, 10);
}

function timerEnd() {
    clearInterval(timer);
    timer = null;
}

function getResult() {
    alert(time + ' 秒でした！');

    // 結果をサーバーへ送信
    var result = Math.abs(targetTime - time);
    var form = document.createElement('form');
    form.action = "result.php";
    form.method = "post";
    form.innerHTML = "<input name='result' type='hidden' value='" + result + "'>";
    document.body.appendChild(form); 
    form.submit();
}
