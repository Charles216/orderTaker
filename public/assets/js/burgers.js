// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-served").on("click", function(event) {
      var id = $(this).data("id");
      var getServed = $(this).data("getserved");
  
      var getServedYet = {
        burger_name: getServed
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: getServedYet
      }).then(
        function() {
          console.log("changed sleep to", getServed);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        burger_served: $("[burger_name=burger_served]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("A new burger creation has just been formed!!! 🍔");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Your burger has been served", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  