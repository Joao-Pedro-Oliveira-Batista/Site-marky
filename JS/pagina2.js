function iniciamodal(modalid){
    var modal = window.document.getElementById(modalid)
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalid){
        modal.classList.remove('mostrar')
      }
        
    });
}

var n9 = document.querySelector('.n9')
n9.addEventListener('click', function() {
iniciamodal('modal-produto')
})