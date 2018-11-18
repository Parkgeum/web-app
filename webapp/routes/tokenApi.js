
function getId() {
    var token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        url: "/me",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization","Bearer " + token);
        },
        success: function (res) {
            console.log(res);
            document.getElementById('loginid').innerHTML = res.type.id;
        }
    });
}
function clenaId() {
    document.getElementById('loginid').innerHTML = ''; 
}
function logout() {
    localStorage.removeItem("token");
}