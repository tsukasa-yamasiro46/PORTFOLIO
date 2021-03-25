//google form　問い合わせ
$("textarea").attr("rows", 1).on("input", e => {
  $(e.target).height(0).innerHeight(e.target.scrollHeight);
});

//アニメーション置き場
ScrollReveal().reveal('.row', { 
    duration: 1600,
    reset: true   
  });
ScrollReveal().reveal('.PORTFOLIO', { 
    duration: 2700,
    reset: true   
});
ScrollReveal().reveal('.yoshi', { 
    duration: 1600, 
    scale: 3,
    reset: true
});