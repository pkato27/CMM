//Global Variables
var colleges = '4bf58dd8d48988d1ae941735';
var client_id = "EC4IKNOQF0EC2MA51QZHIR4LQ0PC0VK3MEW1WBEXXF02MYNI"
var client_secret = "KRNKDA5Z3SMXTLTLXTKZJ34OOH0YYGYF00UB02CMUQJ2V0GR"
var mainURL = "https://api.foursquare.com/v2/venues/search?near='"
var currentTime = moment(new Date(),'YYYYMMDD');

//Create on clicks for main data pulls
$(document).on("click", ".cat-btn", grabCatdata);
$(document).on("click", ".sub-cat-btn", grabCatdata);
$(document).on("click", "#searchTrigger", mainSearch);

//Run main process
function grabCatdata() {

    var category = $(this).attr("value")

}

function mainSearch() {

    $("#collegeList").empty();

    var category = colleges;
    var location = document.getElementById('locationSearch').value;
    var queryURL = mainURL + location + "'&categoryId=" + colleges+"&client_id=" + client_id + "&client_secret="+client_secret+"&v=" +currentTime

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var results = response.response.venues;
        
        for (i=0;i<results.length;i++) {
            var venueDiv = $('<div>')
            var venueName = results[i].name
            venueDiv.prepend(venueName);

            $("#collegeList").prepend(venueDiv);
            
        }

    
    });
}