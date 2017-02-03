# ls-vimeo
A litle vimeo url manipulation lib

### Install

`bower install ls-vimeo --save`

### Usage

`ls_vimeo.isValidUrl(url)` - Verify if is a valid Vimeo URL format

`ls_vimeo.getVideoId(url)` - Extract the Vimeo video ID from URL

`ls_vimeo.getVideoData(url, callback)` - Get Vimeo video data from URL (The callback is for use the data returned)

##### Sample data:

```JSON
{
    "id":999999999,
    "title":"Video Title",
    "description":"Video Description",
    "url":"https://vimeo.com/999999999",
    "upload_date":"2016-12-25 16:30:55",
    "thumbnail_small":"https://i.vimeocdn.com/video/999999999_100x75.jpg",
    "thumbnail_medium":"https://i.vimeocdn.com/video/999999999_200x150.jpg",
    "thumbnail_large":"https://i.vimeocdn.com/video/999999999_640.jpg",
    "user_id":2417485,"user_name":"John Doo","user_url":"https://vimeo.com/johndoo",
    "user_portrait_small":"https://i.vimeocdn.com/portrait/9999999_30x30",
    "user_portrait_medium":"https://i.vimeocdn.com/portrait/9999999_75x75",
    "user_portrait_large":"https://i.vimeocdn.com/portrait/9999999_100x100",
    "user_portrait_huge":"https://i.vimeocdn.com/portrait/9999999_300x300",
    "stats_number_of_likes":629,
    "stats_number_of_plays":76849,
    "stats_number_of_comments":60,
    "duration":254,
    "width":1920,
    "height":1080,
    "tags":"Tag1, Tag2, TagN",
    "embed_privacy":"anywhere"
}
```

`ls_vimeo.appendVideo(url, containerId, width, height)` - Append a Vimeo video on page