(()=>{
    var checkExist = null;
    
    function go() {
        clearInterval(checkExist);
        
        if(!location.pathname.startsWith('/watch')) {
            return;
        }

        checkExist = setInterval(() => {
            var v = document.querySelector("video");
            var p = v && v.parentNode.parentNode;
            
            if(p && p.getPlayerState() == 1) {
                var pl_id_from_url = location.href.match('[&?]list=([^&]+)');
                var pl_ind_from_url = location.href.match('[&?]index=([^&]+)');
                
                var pl_id = pl_id_from_url?pl_id_from_url[1]:null; //p.getPlaylistId();
                var pl_ind = pl_ind_from_url?pl_ind_from_url[1]:-1; //p.getPlaylistIndex();
                
                var url = 'watch?v=' + p.getVideoData().video_id;                
                url += pl_id?('&list=' + pl_id + '&index=' + pl_ind):'';                
                url += '&t=' + p.getCurrentTime().toFixed() + 's';
                
                history.replaceState(null, '', url);
            }
        }, 5000);
    }

    document.addEventListener('yt-navigate-finish', go);
})();