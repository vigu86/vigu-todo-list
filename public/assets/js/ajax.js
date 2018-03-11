$(document).ready(function() {

    $('form').on('submit', function() {

      var item = { item: $('form input').val() };

      $.ajax( {
        type: 'POST',
        url: '/',
        data: item,
        success: function(data) {
          location.reload();
        }
      });

      return false;

    });

    $('li').on('click', function() {
      var item = $(this).text().trim().replace(/ /g, '-');

      $.ajax( {
        type: 'DELETE',
        url: '/' + item,
        success: function(data) {
          location.reload();
        }
      });

      return false;

    });

});
