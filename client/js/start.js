var domain = 'http://doubi.io';
var bar = document.getElementById('bar');
var status = document.getElementById('status');
var loading = document.getElementById('loading');
window.addEventListener('message', function(e){
    if(e.origin !== domain) {
        return;
    }
    var json = JSON.parse(e.data);
    var progress = json.progress + '%';
    switch (json.status) {
        case 'complete':
        case 'error':
            top.location.replace(domain + '/web/app.html');
            break;
        case 'progress':
            bar.style.width = progress;
            status.innerHTML = progress;
            loading.style.display = 'block';
    }
});

var ifm = document.createElement('iframe');
ifm.src = domain + '/web/cache.html';
ifm.style.display = 'none';
document.body.insertBefore(ifm, document.body.firstChild);