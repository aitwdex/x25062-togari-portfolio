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

/*workのmove-circleのクリック移動(css変更)*/
document.querySelector(".circle1").addEventListener('click', () => {
    document.querySelector(".move-circle").style.left = '2px';
    document.querySelector(".collection-img").classList.add('hid');
    document.querySelector(".collection-video").classList.remove('hid');
    document.querySelector(".collection-video").src = 'images/collection/CG/pokemon1.mp4';

    document.querySelector(".collection-video").muted = true;
});

document.querySelector(".circle2").addEventListener('click', () => {
    document.querySelector(".move-circle").style.left = '45px';
    document.querySelector(".collection-img").classList.add('hid');
    document.querySelector(".collection-video").classList.remove('hid');
    document.querySelector(".collection-video").src = 'images/collection/movie/shortmovie.mp4';

    document.querySelector(".collection-video").muted = false;
});

document.querySelector(".circle3").addEventListener('click', () => {
    document.querySelector(".move-circle").style.left = '88px';
    document.querySelector(".collection-img").classList.add('hid');
    document.querySelector(".collection-video").classList.remove('hid');
    document.querySelector(".collection-video").src = 'images/collection/music/ginger-video.mp4';

    document.querySelector(".collection-video").muted = false;
});

document.querySelector(".circle4").addEventListener('click', () => {
    document.querySelector(".move-circle").style.left = '131px';
    document.querySelector(".collection-video").classList.add('hid');
    document.querySelector(".collection-img").classList.remove('hid');
    document.querySelector(".collection-img").src = 'images/collection/illustration/gawrl_aicon1.png';
});

document.querySelector(".circle5").addEventListener('click', () => {
    document.querySelector(".move-circle").style.left = '174px';
    document.querySelector(".collection-video").classList.add('hid');
    document.querySelector(".collection-img").classList.remove('hid');
    document.querySelector(".collection-img").src = 'images/collection/CG/pokemon-img.png';
});

//arrowクリック時の移動
document.querySelector(".btn-right").addEventListener('click', () => {
    if(document.querySelector(".move-circle").style.left == '2px' || document.querySelector(".move-circle").style.left == '') {
        document.querySelector(".circle2").click();
    }
    else if(document.querySelector(".move-circle").style.left == '45px') {
        document.querySelector(".circle3").click();
    }
    else if(document.querySelector(".move-circle").style.left == '88px') {
        document.querySelector(".circle4").click();
    }
    else if(document.querySelector(".move-circle").style.left == '131px') {
        document.querySelector(".circle5").click();
    }
    else if(document.querySelector(".move-circle").style.left == '174px') {
        document.querySelector(".circle1").click();
    }
});
document.querySelector(".btn-left").addEventListener('click', () => {
    if(document.querySelector(".move-circle").style.left == '2px' || document.querySelector(".move-circle").style.left == '') {
        document.querySelector(".circle5").click();
    }
    else if(document.querySelector(".move-circle").style.left == '45px') {
        document.querySelector(".circle1").click();
    }
    else if(document.querySelector(".move-circle").style.left == '88px') {
        document.querySelector(".circle2").click();
    }
    else if(document.querySelector(".move-circle").style.left == '131px') {
        document.querySelector(".circle3").click();
    }
    else if(document.querySelector(".move-circle").style.left == '174px') {
        document.querySelector(".circle4").click();
    }
});

/*動画再生hover*/
document.querySelector(".collection-video").addEventListener('mouseenter', () => {
    document.querySelector(".collection-video").play();
});
document.querySelector(".collection-video").addEventListener('mouseleave', () => {
    document.querySelector(".collection-video").pause();
});