// Modal home 

   const btnAbrirModal = document.querySelector('.pesquisa')
      const modal = document.querySelector('.mask-modal2')

      btnAbrirModal.addEventListener('click', ()=>{
          modal.classList.add('open')
      });

      const fechaModal= document.querySelector('.fechar')
        fechaModal.addEventListener('click', ()=>{
        modal.classList.remove('open')
      });

//Fim modal home 

