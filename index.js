function start_login(){
    let anm_start=document.querySelector(`.nav`);
    let cross=document.querySelector(`.lines`)
    anm_start.style.display='flex';
    cross.style.display='none';
    anm_start.style.backdropFilter= "blur(5px)";
}
function end_login(){
    let anm_start=document.querySelector(`.nav`);
    let lines=document.querySelector(`.lines`);
    anm_start.style.display='none';
    
    if (screenWidth < 700) {
        lines.style.display='block';
    }else{
        lines.style.display='none';
    }
    anm_start.style.backdropFilter= "none";
}
function transform(){
    let add=document.getElementById("shortar");
    let blog=document.getElementById("wrblog");
    add.style.display='none';
    blog.style.display='flex';
    console.log(localStorage.getItem("text"));
}
function home(){
    location.reload();

}
function store(){
    let title=document.getElementById("h3");
    let text=document.getElementById("blogtxt");
    localStorage.setItem("title",title.value);
    localStorage.setItem("text",text.value);
    console.log(title);
    console.log(localStorage.getItem("title"));
    let add=document.getElementById("shortar");
    let blog=document.getElementById("wrblog");
    add.style.display='flex';
    blog.style.display='none';
    adding();
}
var i;
if(localStorage.length==0){
    var i=0;
    console.log(i);   
}
function adding(){
    if (localStorage.getItem("value1") === null) {
        localStorage.setItem("value1", 0);
    }
    i=parseInt(localStorage.getItem("value1"));
    i=i+1;
    console.log(i);
    localStorage.setItem("value1",i);
    var value1=localStorage.getItem("value1");
    console.log(value1);
    var area=document.getElementById("shortar");
    var div=document.createElement("div");
    div.innerHTML=localStorage.getItem("title");
    div.classList.add("blog");
    div.setAttribute("id",value1);
    area.prepend(div);
    var sec=document.getElementById("sec2");
    var div_2=document.createElement("div");
    var div_3=document.createElement("div");
    var div_4=document.createElement("div");
    div_3.innerHTML=localStorage.getItem("title");
    div_4.innerHTML=localStorage.getItem("text");
    div_2.classList.add("blog_details");
    var value2=`n${value1}`;
    div_2.setAttribute("id",value2);
    div_3.classList.add("stitle");
    div_4.classList.add("sdetails");
    sec.appendChild(div_2).appendChild(div_3);
    sec.appendChild(div_2).appendChild(div_4);
    console.log(area);
    console.log(i);
    localStorage.setItem("write",area.innerHTML);
    saveLayoutToStorage();
    console.log(i);
    location.reload();
}
let titl=new Array(100);
let det=new Array(100);
function loadStoredLayout(layoutIndex) {
    var storedLayouts = JSON.parse(localStorage.getItem("draggedLayouts")) || [];
    if (layoutIndex >= 0 && layoutIndex < storedLayouts.length) {
      document.documentElement.innerHTML = storedLayouts[layoutIndex];
    }
    var value1=localStorage.getItem("value1")
    console.log(value1);
    i=parseInt(value1);
    for(let k=0;k<i;k++){
        titl[k]=document.getElementById(1+k);
        det[k]=document.getElementById(`n${1+k}`);
        console.log(titl[k]);
        console.log(det[k]);
        titl[k].addEventListener("click",open);
    }

  }
function saveLayoutToStorage() {
    var currentLayout = document.documentElement.innerHTML;
    var storedLayouts = JSON.parse(localStorage.getItem("draggedLayouts")) || [];
    storedLayouts.push(currentLayout);
    localStorage.setItem("draggedLayouts", JSON.stringify(storedLayouts));
  }
  window.onload = function() {
    var storedLayouts = JSON.parse(localStorage.getItem("draggedLayouts")) || [];
    if (storedLayouts.length > 0) {
      loadStoredLayout(storedLayouts.length - 1);
    }
  };
  function clearall(){
    window.localStorage.clear();
    location.reload();
  }
  var container=document.getElementById("startar");

  container.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("blog")) {
        open(target);
    }
});
  function open(event){
        let newid=`n${event.target.id}`;
        let sec1=document.getElementById("sec1");
        let sec2=document.getElementById("sec2");
        let l=parseInt(event.target.id);
        let n=sec2.children.length;
        console.log(l);
        for(let k=1;k<=n;k++){
            let id=document.getElementById(`n${k}`);
            id.style.display="none";
        }
        console.log(newid);
        document.getElementById(newid).style.display="flex";
        sec1.style.display="none";
        sec2.style.display="flex";
  }
function restore(){
    document.getElementById("h3").value="";
    document.getElementById("blogtxt").value="";

}