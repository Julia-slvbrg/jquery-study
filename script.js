$(document).ready(function() {
    // document.querySelector('header button'); //assim é como a gente faz no javascript com o DOM

    //  $('header button') //no jQuery basta fazer assim

    /* document.querySelector('header button').addEventListener('click', function(){ }) */    //faz assim com o DOM

    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#reset-btn').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault()

        const urlNewImage = $('#url-new-image').val();
        const newItem = $('<li style="displa none"></li>');
        $(`<img src="${urlNewImage}"/>`).appendTo(newItem);
        $(`
            <div class="overlay-image-link">
                <a href="${urlNewImage}" title="Ver imagem em tamanho real" target="_blank">
                    Ver a imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem);

        $(newItem).appendTo('ul');
        $(newItem).fadeIn(5000);
        $('#url-new-image').val('')
    })
})