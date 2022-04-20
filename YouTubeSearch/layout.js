const header = document.createElement("header");
const logo = document.createElement("img");
logo.setAttribute("alt","logo image");
logo.setAttribute("src","logo.jpg");
logo.setAttribute('id','logo');
header.appendChild(logo);
document.body.appendChild(header);

const main = document.createElement("main");
var searchform = '<input type="text" id="value1" value="" placeholder="Search">';
searchform += '<button type="button" onClick="SearchVideo()" class="btn"> Search</button>'
const box = document.createElement("div");
main.appendChild(box);
box.setAttribute("id","inputdiv")
document.body.appendChild(main);
document.getElementById('inputdiv').innerHTML = searchform;

async function SearchVideo(){
    var val = document.getElementById('value1').value;
    if(val==""){
        alert("Search Field is empty.");
    }
    else{
        console.log(val);
        fetchingFromAPI("",val);
    }
}
    
videocontainer=document.createElement('div');
videocontainer.setAttribute('class','videocontainer')
videocontainer.setAttribute('id','videosId')
main.appendChild(videocontainer);

page = document.createElement('div');
page.setAttribute('class','prev-next');
main.appendChild(page)