
function getId() {
    var token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/me",
        async: false,
        timeout: 3000,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization","Bearer " + token);
        },
        success: function (res) {
            document.getElementById('loginid').innerHTML = res.data.id;
            console.log(res.data.id);
            console.log(res.data.following);
            console.log(res.data.follower);
            console.log(res.data.image);
        },
        error: function(jqXhr, textStatus, errorMessage){
            console.log("Error: ", errorMessage);
        }
    });
}
function clenaId() {
    document.getElementById('loginid').innerHTML = ''; 
}
function logout(res) {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
}