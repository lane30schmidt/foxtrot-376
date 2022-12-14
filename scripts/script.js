$(document).ready(function() {

    $.each(devProfile, function(key, valueObj) {

        if (key == 'pic') {
            console.log('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
            $('#dev-profile-data').append('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
        } else {
            $('#dev-profile-data').append("<p><b>" + key + ":</b>" + " " + valueObj + "</p>");
        }
    });


});

const devProfile = {
    "Name": ["Lane Schmidt"],
    "pic": "https://www.novafm.com.au/wp-content/uploads/2016/05/screen_shot_2016-05-27_at_2.06.50_pm.png",
    "Title": "Senior at the University of North Alabama",
    "Github": ["@lane30schmidt: https://github.com/lane30schmidt"],
    "CodePen": "@lane30schmidt: https://codepen.io/lane30schmidt",
    "Instagram": "@lane32schmidt: https://www.instagram.com/lane32schmidt/",
    "Facebook" : "Lane Schmidt: https://www.facebook.com/lane.schmidt.71",
    "Background Info": "University of North Alabama: Bachelor of Business Administration with a Major in Computer Inforamtion Systems ",
    "Hobbies": "Video Games - Weight Lifting - Hockey",
    "Music": "Rap - Hip-Hop",
    "Skills": "Python, Java, MySQL, HTML, CSS, JavaScript"
};


 