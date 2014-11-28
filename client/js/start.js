var domain = 'http://doubi.io';

window.addEventListener('message', function(e){
    if(e.origin !== domain) {
        return;
    }
    var json = JSON.parse(e.data);
    var progress = json.progress + '%';
    document.getElementById('bar').style.width = progress;
    document.getElementById('status').innerHTML = progress;

    if(progress == '100%'){
        top.location.replace(domain + 'web/app.html');
    }
});

var ifm = document.createElement('iframe');
ifm.src = domain + '/web/cache.html';
ifm.style.display = 'none';
document.body.insertBefore(ifm, document.body.firstChild);