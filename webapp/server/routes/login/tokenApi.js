
function getId() {
    var token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        url: "/me",
        async: false,
        timeout: 3000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", token);
        },
        success: function (res) {
            document.getElementById('loginid').innerHTML = res.data.id;
            console.log(res.data.username);
            console.log(res.data.following);
            console.log(res.data.follower);
            console.log(res.data.posts);
            console.log(res.data.image);
        },
        error: function(jqXhr, textStatus, errorMessage){
            console.log("Error: ", errorMessage);
        }
    });
}

function logout(res) {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
}

function getUsername(res) {
    var username = localStorage.getItem("username");
    var text =  $('#text').val();
     $.ajax({
        type: "GET",
        url: "/posts/posting",
        //contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", username);
        },
        success: function () { 

        },
        error: function(errorMessage){
            console.log("Error: ", errorMessage);
        }
    });
}