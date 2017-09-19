(function () {


    $("#username").text("Shawn Wildermuth");

    var main = $("#main");
    main.on("mouseenter", function () {
        main.css({ backgroundColor: '#888' });
    });

    main.on("mouseleave", function () {
        main.css({ backgroundColor: '' });
    });

    var menuItems = $("ul.menu li a");
    menuItems.on("click", function () {
        var me = $(this);
        alert(me.text())
    });
})();