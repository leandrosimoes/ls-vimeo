; (function (window, document, commonjs) {
	"use strict";
	
    var ls_vimeo = {
        isValidUrl: function(url) {
            if (!url) return false;

            return /^(http\:\/\/|https\:\/\/)?(www\.)?(vimeo\.com\/)([0-9]+)$/.test(url);
        },
        getVideoId: function(url) {
            if (!ls_vimeo.isValidUrl(url)) return null;

            return url.match(/\d{9}/);
        },
        //{
        //"id":999999999,
        //    "title":"Video Title",
        //    "description":"Video Description",
        //    "url":"https://vimeo.com/999999999",
        //    "upload_date":"2016-12-25 16:30:55",
        //    "thumbnail_small":"https://i.vimeocdn.com/video/999999999_100x75.jpg",
        //    "thumbnail_medium":"https://i.vimeocdn.com/video/999999999_200x150.jpg",
        //    "thumbnail_large":"https://i.vimeocdn.com/video/999999999_640.jpg",
        //    "user_id":2417485,"user_name":"John Doo","user_url":"https://vimeo.com/johndoo",
        //    "user_portrait_small":"https://i.vimeocdn.com/portrait/9999999_30x30",
        //    "user_portrait_medium":"https://i.vimeocdn.com/portrait/9999999_75x75",
        //    "user_portrait_large":"https://i.vimeocdn.com/portrait/9999999_100x100",
        //    "user_portrait_huge":"https://i.vimeocdn.com/portrait/9999999_300x300",
        //    "stats_number_of_likes":629,
        //    "stats_number_of_plays":76849,
        //    "stats_number_of_comments":60,
        //    "duration":254,
        //    "width":1920,
        //    "height":1080,
        //    "tags":"Tag1, Tag2, TagN",
        //    "embed_privacy":"anywhere"
        //}
        getVideoData: function(url, callback) {
            if (!ls_vimeo.isValidUrl(url)) return null;

            var videoId = ls_vimeo.getVideoId(url),
                url = "http://vimeo.com/api/v2/video/" + videoId + ".json";

            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", function () {
                var data = JSON.parse(this.responseText);

                if (callback && typeof callback == 'function') callback(data);

                console.log(data);
            });
            oReq.open("GET", url);
            oReq.send();
        },
        appendVideo: function(url, containerId, width, height) {
            if (!ls_vimeo.isValidUrl(url)) throw 'url is required';

            var videoId = ls_vimeo.getVideoId(url),
                newUrl = 'https://player.vimeo.com/video/' + videoId + '?color=ffffff',
                container = document.getElementById(containerId);

            if(!container) {
                container = document.createElement('div');
                container.id = 'video-area-' + new Date().getTime();

                document.body.appendChild(container);
            }

            var iframe = document.createElement('iframe');
            iframe.id = 'yt-iframe-' + new Date().getTime();
            iframe.width = width || 640;
            iframe.height = height || 360;
            iframe.src = newUrl;
            iframe.frameBorder = 0;
            iframe.webkitallowfullscreen = true;
            iframe.mozallowfullscreen = true;
            iframe.allowfullscreen = true;

            container.appendChild(iframe);
        }
    };
	
	if (commonjs) {
        module.exports = ls_vimeo;
    } else {
        window.ls_vimeo = ls_vimeo;
    }	
})(window, document, typeof (exports) !== "undefined");