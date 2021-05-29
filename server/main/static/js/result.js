$(function () {
  let url = window.location.href;
  let img = $(".result_img img").attr("src");
  $("meta[property='og\\:url']").attr("content", url);
  $("meta[property='og\\:image']").attr("content", img);
});
const copyBtn = document.querySelector(".copy_btn");
const facebookShare = document.querySelector(".facebook_share");
const kakaoShare = document.querySelector(".kakao_share");

copyBtn.addEventListener("click", () => {
  let tmp = document.createElement("input");
  let url = location.href;
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand("copy"); //클립보드에 복사, 특정 브라우저에서 작동 안함
  document.body.removeChild(tmp);
  alert("URL이 복사 되었습니다.");
});

facebookShare.addEventListener("click", () => {
  let url = window.location.href;
  let facebook = "http://www.facebook.com/sharer/sharer.php?u=";
  let link = facebook + url;
  window.open(link);
});

Kakao.init("a584533f1defe735715c8dca35ef9228");
// Kakao.isInitialized();

kakaoShare.addEventListener("click", () => {
  let result_url = window.location.href;
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "나의 개발 유형은?",
      description: "나에게 꼭 맞는 개발 유형을 알아보자!!",
      imageUrl: "https://mbit.weniv.co.kr/static/img/mbit_thumbnail.png",
      link: {
        mobileWebUrl: "https://mbit.weniv.co.kr",
        webUrl: "https://mbit.weniv.co.kr",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "결과 보러가기",
        link: {
          webUrl: result_url,
          mobileWebUrl: result_url,
        },
      },
      {
        title: "테스트 하러가기",
        link: {
          webUrl: "https://mbit.weniv.co.kr",
          mobileWebUrl: "https://mbit.weniv.co.kr",
        },
      },
    ],
  });
});
