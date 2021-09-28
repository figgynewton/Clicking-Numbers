var colors = ["red","green","blue"];
var eles=[];

function box(background){

    const that =this;

    this.color = background;
    this.number=0;
    this.ele=document.createElement("div");
    this.ele.innerHTML=this.number;
    this.ele.addEventListener("click", function() {
        that.increment();
    });
    this.ele.style.color = 'white';
    this.ele.style.background = this.color;
    this.ele.style.height = "100px";
    this.ele.style.width = "200px";
    this.ele.style.borderRadius = "10px";
    this.ele.style.fontSize = "18px";
    this.ele.style.display = "flex";
    this.ele.style.alignItems = "center";
    this.ele.style.justifyContent = "center";
    this.ele.style.textAlign = "center";

    document.body.appendChild(this.ele);
}

box.prototype.increment = function(){
    this.number=this.number +1;
    this.ele.innerHTML=this.number;
}

for(let i=0; i<colors.length; i++){
    eles.push(new box(colors[i]));
}
