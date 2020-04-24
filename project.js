window.onload = function () {
    //button presses
    var restart = this.document.querySelector("#restart");
    var squares = this.document.querySelectorAll("#good");

    function clear() {
        for (var i = 0; i < squares.length; i++) {
            squares[i].textContent = '';
        }
    }
    //calling listener restart
    restart.addEventListener('click', clear)

    //changing box values
    function toggleELement() {
        if (this.textContent == '') {
            this.textContent = 'X'
        }
        else if (this.textContent == 'X') {
            this.textContent = 'O'
        }
        else {
            this.textContent = ''
        }
    }

    //calling each box
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', toggleELement)
    }

}