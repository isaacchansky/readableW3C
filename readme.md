#Readable W3C

Readable w3c is a <a href='http://en.wikipedia.org/wiki/Bookmarklet'>bookmarklet</a> which simply adds styles to the w3c pages to improve the reading experience. This is not a 'redesign' of w3s. This simply improves my experience of reading and understanding their content and hopefully yours as well.


```javascript
(function(){var e=document.querySelector('body').style;var t=document.querySelector('#respecHeader');var n=document.querySelector('#rspecContents');var r=document.querySelectorAll('p');var i=document.querySelectorAll('ul');var s=document.querySelectorAll('h2');var o=document.querySelectorAll('h3');var u=document.querySelectorAll('.algorithm');var a=document.querySelectorAll('dt');var f=Array.prototype.forEach;e.maxWidth='720px';e.margin='0 auto';e.color='#333';if(n){n.style.marginLeft='1rem';n.style.fontWeight='300'}if(t){t.fontSize='0.8rem';t.color='#444';t.lineHeight='1.2rem'}f.call(u,function(e){e.style.margin='3rem 0 3rem 0';e.style.padding='1rem';e.style.backgroundColor='#fafafa';e.style.lineHeight='1.6rem'});f.call(s,function(e){e.style.fontSize='2rem';e.style.margin='3rem 0 2rem 0';e.style.textTransform='uppercase';e.style.fontWeight='600'});f.call(o,function(e){e.style.margin='2rem 0 1rem';e.style.fontWeight='300';e.style.fontSize='1.5rem'});f.call(r,function(e){ptag.style.fontSize='1.1rem';ptag.style.lineHeight='2rem'});f.call(i,function(e){e.style.lineHeight='1.9rem'});f.call(a,function(e){e.style.margin='1rem 0 0.5rem 0'})})()
```
