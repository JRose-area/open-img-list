var ul = document.querySelector('#wrap ul');
var lis = document.querySelectorAll('#wrap ul li');
var close = document.querySelector('.close');
var closeBtns = document.querySelectorAll('.close');
var last = null;

var timer = setTimeout(function (){
    ul.className = '';
},200);

lis.forEach(function(li,index){
    li.onclick = function(){
        ul.setAttribute('id','activeWrap');

        last && (last.className = '');
        this.className = 'active';
        last = this;
    }
    closeBtns[index].onclick=function(ev){
        lis[index].className='';
        ul.removeAttribute('id');
        last = null;
        ev.cancelBubble = true;
    }
})