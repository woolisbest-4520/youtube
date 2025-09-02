let player;

function loadYouTubeAPI() {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);
}

// YouTubeのプレイヤーを初期化
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '800',
        videoId: '7b60nu22IWg', // デフォルトの動画ID
    });
}

// 動画URLを入力してプレイヤーを更新
function loadVideo() {
    const url = document.getElementById('videoUrl').value;
    const videoId = getVideoIdFromUrl(url);
    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('無効なYouTube URLです');
    }
}

// YouTubeのURLから動画IDを抽出
function getVideoIdFromUrl(url) {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)([^"&?/ ]{11})/);
    return match ? match[1] : null;
}

loadYouTubeAPI();
