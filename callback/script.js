
function loadScript(src,callback){
    let script = document.createElement('script');
    script.src= src;
    script.onload = function(){
        console.log('The script has been loaded.')
        callback('new world');
    }
    document.body.appendChild(script);
}

function hello(name1,func){
    alert('Hello!'+ ' ' + name1)
  func = goodMorning();
}

function goodMorning(){
    alert('Good Morning!')
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js', hello);