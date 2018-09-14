// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var eat = $(this).data("ate");
  
      var eater = {
        eatStatus: eat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgerStatus/" + id, {
        type: "PUT",
        data: eater
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newHamburger = {
        hamburger_name: $("#hb").val().trim(),
        devour: $("[hamburger_name=devour]:checked").val().trim(),
        date_created: $("hamburger_name=TIMESTAMP")
      };
  
      // Send the POST request.
      $.ajax("/api/burgerStatus", {
        type: "POST",
        data: newHamburger
      }).then(
        function() {
          console.log("created new hamburger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-hamburgers").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgerStatus/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted hamburger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  