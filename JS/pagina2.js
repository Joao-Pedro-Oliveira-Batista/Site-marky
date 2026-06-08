function iniciamodal(modalid){
    var modal = window.document.getElementById(modalid)
    modal.classList.add('mostrar')
}

var n9 = document.querySelector('.n9')
n9.addEventListener('click', function() {
iniciamodal('modal-produto')
})