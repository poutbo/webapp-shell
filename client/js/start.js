// var domain = 'http://doubi.io';
var domain = 'http://192.168.101.147';
var path = '/github/webapp-shell';
var bar = document.getElementById('bar');
var text = document.getElementById('progress');
var loading = document.getElementById('loading');

window.addEventListener('message', function(e){
    if(e.origin !== domain) {
        return;
    }
    var json = JSON.parse(e.data);
    var progress = json.progress + '%';
    bar.style.width = progress;
    text.innerHTML = progress;
    console.log(progress)
    switch (json.status) {
        case 'progress':
            loading.style.display = 'block';
            break;
        case 'complete':
        case 'error':
            setTimeout(function(){
                top.location.replace(domain + path + '/web/app.html');
            }, 500);
    }
});

var ifm = document.createElement('iframe');
ifm.src = domain + path + '/web/cache.html';
ifm.style.display = 'none';
document.body.insertBefore(ifm, document.body.firstChild);