

var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "113547045006375");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v16.0'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function () { scrollFunction() };
// khai báo hàm scrollFunction
function scrollFunction() {
    // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //nếu lớn hơn 20px thì hiện button
        document.getElementById("myBtn").style.display = "block";
    } else {
        //nếu nhỏ hơn 20px thì ẩn button
        document.getElementById("myBtn").style.display = "none";
    }
}
//gán sự kiện click cho button
document.getElementById('myBtn').addEventListener("click", function () {
    //Nếu button được click thì nhảy về đầu trang
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});