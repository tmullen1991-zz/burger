$(function() {
  $(document).ready(function() {
    M.updateTextFields();
    $(document).on("click", ".submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        name: $("#burger_name")
          .val()
          .trim(),
        devoured: false
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        location.reload();
      });
    });
  });
  $(document).on("click",".devour", function(event) {
    var id = $(this).attr("value");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: id
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
