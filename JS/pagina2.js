function iniciamodal(modalid){
    var modal = window.document.getElementById(modalid)
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalid){
        modal.classList.remove('mostrar')
      }
        
    });
}

var n9 = document.querySelector('.n1')
n9.addEventListener('click', function() {
iniciamodal('modal-produto1')
})

var n9 = document.querySelector('.n2')
n9.addEventListener('click', function() {
iniciamodal('modal-produto2')
})

var n9 = document.querySelector('.n3')
n9.addEventListener('click', function() {
iniciamodal('modal-produto3')
})

var n9 = document.querySelector('.n4')
n9.addEventListener('click', function() {
iniciamodal('modal-produto4')
})

var n9 = document.querySelector('.n5')
n9.addEventListener('click', function() {
iniciamodal('modal-produto5')
})

var n9 = document.querySelector('.n6')
n9.addEventListener('click', function() {
iniciamodal('modal-produto6')
})

var n9 = document.querySelector('.n7')
n9.addEventListener('click', function() {
iniciamodal('modal-produto7')
})

var n9 = document.querySelector('.n8')
n9.addEventListener('click', function() {
iniciamodal('modal-produto8')
})

var n9 = document.querySelector('.n9')
n9.addEventListener('click', function() {
iniciamodal('modal-produto9')
})