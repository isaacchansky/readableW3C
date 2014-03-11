(function(){
    var body = document.querySelector('body').style;
    var specHeader = document.querySelector('#respecHeader');
    var toc = document.querySelector('#rspecContents');
    var pList = document.querySelectorAll('p');
    var ulList = document.querySelectorAll('ul');
    var header2List = document.querySelectorAll('h2');
    var header3List = document.querySelectorAll('h3');

    var algorithmBlocks = document.querySelectorAll('.algorithm');
    var dataTitles = document.querySelectorAll('dt');

    var forEach = Array.prototype.forEach;

    body.maxWidth = '720px';
    body.margin = '0 auto';
    body.color = '#333';

    if(toc){
        toc.style.marginLeft = '1rem';
        toc.style.fontWeight = '300';
    }

    if(specHeader){
        specHeader.fontSize = '0.8rem';
        specHeader.color = '#444';
        specHeader.lineHeight = '1.2rem';
    }

    forEach.call(algorithmBlocks, function(algorithm){
        algorithm.style.margin = '3rem 0 3rem 0';
        algorithm.style.padding = '1rem';
        algorithm.style.backgroundColor = '#fafafa';
        algorithm.style.lineHeight = '1.6rem';
    });

    forEach.call(header2List, function(h2){
        h2.style.fontSize = '2rem';
        h2.style.margin = '3rem 0 2rem 0';
        h2.style.textTransform = 'uppercase';
        h2.style.fontWeight = '600';
    });

    forEach.call(header3List, function(h3){
        h3.style.margin = '2rem 0 1rem';
        h3.style.fontWeight = '300';
        h3.style.fontSize = '1.5rem';
    });

    forEach.call(pList, function(pTag){
        ptag.style.fontSize = '1.1rem';
        ptag.style.lineHeight = '2rem';

    });

    forEach.call(ulList, function(ul){
        ul.style.lineHeight = '1.9rem';
    });

    forEach.call(dataTitles, function(dt){
        dt.style.margin = '1rem 0 0.5rem 0';

    });

})()
