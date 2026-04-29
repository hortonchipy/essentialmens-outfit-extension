const outfits = {
casual:{summer:{black:[
{t:"Black tee with jeans and sneakers",img:"https://source.unsplash.com/400x300/?black,men,outfit"},
{t:"Black shirt with shorts and sandals",img:"https://source.unsplash.com/400x300/?black,summer,men"}
]}}};

function generate(){
let o=document.getElementById("occasion").value;
let s=document.getElementById("season").value;
let c=document.getElementById("color").value;

let res=document.getElementById("results");
res.innerHTML="";

let data=(outfits[o]||{})[s]||{};
let list=data[c]||[];

list.forEach(i=>{
let div=document.createElement("div");
div.className="card";
div.innerHTML=`<img src="${i.img}"><p>${i.t}</p>`;
res.appendChild(div);
});
}
