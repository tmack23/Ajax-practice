
    
    var topics = ['MMA', 'Soccer', 'Surfing'];

   function displayTopicsInfo(){
    
    var topic = $(this).attr('data-name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC&limit=12";

  $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

            var sportDiv = $('<div class="sport">');

      
            var rating = response.Rated;

          
            sportDiv.append();

           
            $('#sportView').prepend(sportDiv);
        });

    }



    function renderButtons(){ 

       
        $('#buttonsView').empty();

        for (var i = 0; i < topics.length; i++){
              var a = $('<button>') 
            a.addClass('topics');  
            a.attr('data-name', topics[i]); 
            a.text(topics[i]); 
            $('#buttonsView').append(a);  
        }
    }


    $('#addSport').on('click', function(){
        var sport = $('#Sport-input').val().trim();
        topics.push(sport);
        renderButtons();
         return false;
    })

function Click(){
    var state = $(this).attr('data-state');

    if(state == 'animate'){
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }else{
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }   
}

    renderButtons();
    
