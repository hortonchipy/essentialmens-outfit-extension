const data = {
casual:{
summer:{
black:[
{t:"Black t-shirt with jeans",img:"https://source.unsplash.com/400x300/?black,tshirt,men"},
{t:"Black polo with sneakers",img:"https://source.unsplash.com/400x300/?black,polo,men"}
],
white:[
{t:"White tee with denim",img:"https://source.unsplash.com/400x300/?white,tshirt,men"}
]
},
winter:{
black:[
{t:"Black hoodie with jeans",img:"https://source.unsplash.com/400x300/?black,hoodie,men"}
]
}
},
formal:{
summer:{
black:[
{t:"Black suit with loafers",img:"https://source.unsplash.com/400x300/?black,suit,men"}
]
}
}
};

function generate(){
let o=document.getElementById("occasion").value;
let s=document.getElementById("season").value;
let c=document.getElementById("color").value;

let results=document.getElementById("results");
results.innerHTML="";

let list = (((data[o]||{})[s]||{})[c])||[];

if(list.length===0){
results.innerHTML="<p>No outfits found</p>";
return;
}

list.forEach(item=>{
let div=document.createElement("div");
div.className="card";
div.innerHTML=`<img src="${item.img}"><p>${item.t}</p>`;
results.appendChild(div);
});
}
