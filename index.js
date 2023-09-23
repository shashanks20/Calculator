$(".btn").click(function(){

    var x = $(this).attr('id') ;
    switch(x){
        case 'AC':
            document.getElementById("tf").innerHTML="";
            break;
        case 'bksp':
            var x = $('#tf').text();
            document.getElementById('tf').innerHTML = x.substring(0,x.length-1) ;
            break;
        case 'eq':
           var content = $('#tf').text();
           try{
            var v = eval(content);
            document.getElementById('tf').innerHTML = v;
           }
           catch(err){
            document.getElementById("tf").innerHTML="";
           }
            break;
        default:
            var y = document.getElementById('tf');
            y.innerHTML+=x;
            break;

    } 
})