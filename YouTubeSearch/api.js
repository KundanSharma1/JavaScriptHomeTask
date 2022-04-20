const key = "AIzaSyDIdr-W7DOUMtn16LZxB0hv6M6k2rmjYT8"
var data;
pagination = {
    start:0,
    max:4
}
async function fetchingFromAPI(nextToken,val){
    const url = "https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults=15&q="+val+"&pageToken="+nextToken;
    getData(url);
    const prev = document.createElement('input');
    prev.setAttribute('type','submit');
    prev.setAttribute('value','Prev');
    prev.setAttribute('class','btn');
    prev.setAttribute('onClick','prevPage()')
    const next = document.createElement('input');
    next.setAttribute('type','button');
    next.setAttribute('value','Next');
    next.setAttribute('class','btn');
    next.setAttribute('onClick','nextPage()');
    document.getElementById("videosId").append(prev);
    page.appendChild(prev);
    document.getElementById("videosId").append(next);
    page.appendChild(next);
}

async function getData(url){
    await fetch(url)
    .then(res => res.json())
    .then(json => {
        data = json;
    })
    render();
}

async function render(){
    const p = pagination.start + pagination.max;
    for(var i=pagination.start;i<p;i++){
        video=document.createElement('div');
        video.setAttribute('class','video');
        videocontainer.appendChild(video);
        videoimgdiv=document.createElement("div");
        video.appendChild(videoimgdiv);
        videoimg=document.createElement('img');
        imgurl=data.items[i].snippet.thumbnails.high.url;
        videoimg.setAttribute('src',imgurl);
        videoimg.setAttribute('class',"videosnap")
        videoimgdiv.appendChild(videoimg);
        videodescdiv=document.createElement("div");
        video.appendChild(videodescdiv);

        list_ul=document.createElement("ul");
        videodescdiv.appendChild(list_ul);
        list_ul.setAttribute('id','list');
        tilte_li=document.createElement('li');
        tilte_li.setAttribute("class","Title");
        videourl=document.createElement("a");
        var youtubeurl="https://www.youtube.com/watch?v="+data.items[i].id.videoId;
        
        videourl.setAttribute("href",youtubeurl);
        videourl.innerHTML=data.items[i].snippet.title;
        publishedtime_li=document.createElement('li');
        publishedtime_li.setAttribute("class","publishTime");
        publishedtime_li.innerHTML=data.items[i].snippet.publishTime;
        tilte_li.appendChild(videourl);
        channeltitle_li=document.createElement('li');
        channeltitle_li .setAttribute("class","channelTitle");
        channeltitle_li .innerHTML=data.items[i].snippet.channelTitle;
        description_li=document.createElement('li');
        description_li .setAttribute("class","description");
        description_li.innerHTML=data.items[i].snippet.description;
        list_ul.appendChild(tilte_li);
        list_ul.appendChild(publishedtime_li);
        list_ul.appendChild(channeltitle_li);
        list_ul.appendChild(description_li);
    }
}

async function nextPage(){
    if(pagination.start+pagination.max >= 15){
        return;
    }
    var deleteDivvideo= document.getElementById("videosId");
        while(deleteDivvideo.firstChild){
            deleteDivvideo.removeChild(deleteDivvideo.firstChild);
        }
    pagination.start += pagination.max;
    render();
}

async function prevPage(){
    if(pagination.start-pagination.max < 0){
        return;
    }
    var deleteDivvideo= document.getElementById("videosId");
        while(deleteDivvideo.firstChild){
            deleteDivvideo.removeChild(deleteDivvideo.firstChild);
        }
    pagination.start -= pagination.max;
    render();
}


