$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        )
    });

    $("#eat").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var eaten = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                console.log("devoured burger");
                location.reload();
            }
        )
    });

    $("#delete").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "Delete"
        }).then(location.reload());
    });

});

