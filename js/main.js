/*face画像をクリック時に位置変更(classの追加・削除)*/
document.querySelector(".faceimg1").addEventListener('click', (e) => {
    if(document.querySelector(".profile-img").classList.contains('faceswap')) {
        return;
    }
    document.querySelector(".profile-img").classList.add('faceswap');
});
document.querySelector(".faceimg2").addEventListener('click', (e) => {
    if(document.querySelector(".profile-img").classList.contains('faceswap')) {
        document.querySelector(".profile-img").classList.remove('faceswap')
    }
});

/*btnクリック時のアニメーション(classの追加・削除)*/
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.add('btn-click');
        //0.15秒タイマー
        setTimeout(() => {
            btn.classList.remove('btn-click');
        }, 150);
    });
});

/*navのaiconをhover差し替え*/
document.querySelectorAll(".sns-aicon").forEach((aicon) => {
    const brownSrc = aicon.querySelector('img').src;
    //〇〇.replace(◻︎, △) -> 〇〇の画像名が入る(◻︎までを、△に変更)
    const whiteSrc = brownSrc.replace('.svg', '_white.svg');

    aicon.addEventListener('mouseenter', () => {
        aicon.querySelector('img').src = whiteSrc;
    });
    aicon.addEventListener('mouseleave', () => {
        aicon.querySelector('img').src = brownSrc;
    });
});

/*arrowをhover差し替え*/
document.querySelectorAll(".hover-arrow").forEach((aicon) => {
    const whiteSrc = aicon.querySelector('img').src;
    //〇〇.replace(◻︎, △) -> 〇〇の画像名が入る(◻︎までを、△に変更)
    const brownSrc = whiteSrc.replace('.svg', '_brown.svg');

    aicon.addEventListener('mouseenter', () => {
        aicon.querySelector('img').src = brownSrc;
    });
    aicon.addEventListener('mouseleave', () => {
        aicon.querySelector('img').src = whiteSrc;
    });
});

//workのmove-circleのクリック移動
const circles = document