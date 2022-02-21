

// Pagina cadastro

 document.getElementById("btn-modal").onclick = function () {
        // verifica se existe algum input text vazio
        var inputsText = document.querySelectorAll("input[type=text]");
        let inputVazio = 0;

        inputsText.forEach(function (input) {
          var inputValor = input.value;

          if (inputValor === "") {
            input.classList.add("error");
            console.log("Input Vazio");
            inputVazio++;
          }
        });

        //Verifica se existe pelo menos um checkbox selecionado
        var check = document.querySelectorAll("input[type=checkbox]");
        var checkboxSelecionado = 0;

        check.forEach(function (checkbox) {
          if (checkbox.checked) {
            checkboxSelecionado++;
          }
        });

        if (inputVazio === 0 && checkboxSelecionado > 0) {
          const modal = document.getElementById("modal");
          modal.classList.add("in");
        }

        if (checkboxSelecionado === 0) {
          var msgErro = document.getElementById("msg-erro-checkbox");
          msgErro.classList.add("in");
        }
        return false;
      };
// fim cadastro