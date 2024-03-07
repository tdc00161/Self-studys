document.addEventListener("DOMContentLoaded", function() {
    var posts = document.querySelectorAll(".post");
    var btn = document.getElementById("btn");

    // 처음에는 처음 세 개의 게시글만 보이도록 설정
    for (var i = 0; i < 3; i++) {
        posts[i].style.display = "block";
    }

    // "더 보기" 버튼을 클릭할 때마다 다음 세 개의 게시글을 보이도록 설정
    btn.addEventListener("click", function() {
        for (var i = 0; i < 3; i++) {
            if (posts[i].style.display === "none") {
                posts[i].style.display = "block";
            }
        }

        // 모든 게시글이 보이면 "더 보기" 버튼 숨기기
        // if (posts.length === 0) {
        //     btn.style.display = "none";
        // }
    });
});