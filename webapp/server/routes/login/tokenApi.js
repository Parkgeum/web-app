
function getId() {
    var token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        url: "/me",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization","Bearer " + token);
        },
        success: function (res) {
            document.getElementById('loginid').innerHTML = res.data.id;
            console.log(res.data.id);
            console.log(res.data.following);
            console.log(res.data.follower);
            console.log(res.data.image);
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