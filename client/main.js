$(document).ready(function() {
    $.getJSON("data.json", function(data){
        var column = [];
        $.each(data, function(key, value){
            column.push("<tr><td>" + value.name + "</td><td>" + value.description + 
                        "</td><td><a href='#'" + " onclick=window.open('https://www.google.com/maps?q=" + value.location + "'" + ")><button>Map</button></a></td></tr>");        
        });
        $("table").append(column);
    });
});