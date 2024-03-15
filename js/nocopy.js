document.addEventListener('copy', (e) =>{
  e.preventDefault();
  navigator.clipboard.writeText('这里不可以复制!!');
});
