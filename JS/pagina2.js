function iniciamodal(modalid){
    var modal = window.document.getElementById(modalid)
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if(e.target.id == modalid){
        modal.classList.remove('mostrar')
      }
        
    });
}

var n1 = document.querySelector('.n1')
n1.addEventListener('click', function() {
iniciamodal('modal-produto1')
})

var n2 = document.querySelector('.n2')
n2.addEventListener('click', function() {
iniciamodal('modal-produto2')
})

var n3 = document.querySelector('.n3')
n3.addEventListener('click', function() {
iniciamodal('modal-produto3')
})

var n4 = document.querySelector('.n4')
n4.addEventListener('click', function() {
iniciamodal('modal-produto4')
})

var n5 = document.querySelector('.n5')
n5.addEventListener('click', function() {
iniciamodal('modal-produto5')
})

var n6 = document.querySelector('.n6')
n6.addEventListener('click', function() {
iniciamodal('modal-produto6')
})

var n7 = document.querySelector('.n7')
n7.addEventListener('click', function() {
iniciamodal('modal-produto7')
})

var n8 = document.querySelector('.n8')
n8.addEventListener('click', function() {
iniciamodal('modal-produto8')
})

var n9 = document.querySelector('.n9')
n9.addEventListener('click', function() {
iniciamodal('modal-produto9')
})