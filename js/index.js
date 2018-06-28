window.onload=function(){
	let dhhz1=document.getElementsByClassName("dhhz1")[0];
	let dhhz2=document.getElementsByClassName("dhhz1")[1];
	let dhhz3=document.getElementsByClassName("dhhz1")[2];
	let dhbox=document.getElementsByClassName("dhbox")[0];
	let sjrzbox1=document.getElementsByClassName("sjrzbox")[0];
	let sjrzbox2=document.getElementsByClassName("sjrzbox")[1];
	console.log(dhhz1,dhbox);
	function back(dhhz1,dhbox){
		dhhz1.onmouseenter=function(){
		dhbox.style.height="auto";
		dhhz1.style.background="#fff";
		dhbox.style.padding="20px 0";
		dhbox.style.border="1px solid #ddd";
		dhhz1.style.border="1px solid #ddd";
	}
		dhhz1.onmouseleave=function(){
			dhbox.style.height="0";
			dhbox.style.padding="0";
			dhbox.style.border="none";
			dhhz1.style.background="#f5f5f5";
			dhhz1.style.border="1px solid #f5f5f5";
		}
	}
	back(dhhz1,dhbox);
	dhhz2.onmouseenter=function(){
		dhhz2.style.background="#fff";
		sjrzbox1.style.height="auto";
		sjrzbox1.style.padding="5px 0";
		sjrzbox1.style.border="1px solid #ddd";
		dhhz2.style.border="1px solid #ddd";
	}
		dhhz2.onmouseleave=function(){
			sjrzbox1.style.height="0";
			sjrzbox1.style.padding="0";
			sjrzbox1.style.border="none";
			dhhz2.style.background="#f5f5f5";
			dhhz2.style.border="1px solid #f5f5f5";
		}
	
	dhhz3.onmouseenter=function(){
		dhhz3.style.background="#fff";
		sjrzbox2.style.height="auto";
		sjrzbox2.style.padding="5px 0";
		sjrzbox2.style.border="1px solid #ddd";
		dhhz3.style.border="1px solid #ddd";
		}
		dhhz3.onmouseleave=function(){
			sjrzbox2.style.height="0";
			sjrzbox2.style.padding="0";
			sjrzbox2.style.border="none";
			dhhz3.style.background="#f5f5f5";
			dhhz3.style.border="1px solid #f5f5f5";
		}
	let dhhy1=document.getElementsByClassName("dhhy1")[2];
	let dhhy3=document.getElementsByClassName("dhhy1")[3];
	let dhhy5=document.getElementsByClassName("dhhy1")[5];
	let dhhy8=document.getElementsByClassName("dhhy1")[8];
	let mydingdan=document.getElementsByClassName("mydingdan")[0];
	let mydingdan1=document.getElementsByClassName("mydingdan")[1];
	let myyigou=document.getElementsByClassName("myyigou")[0];
	let shopcar=document.getElementsByClassName("shopcar")[0];
	let mobilesu=document.getElementsByClassName("mobilesu")[0];
	function call(dhhy1,mydingdan){
		dhhy1.onmouseenter=function(){
			dhhy1.style.background="#fff";
			mydingdan.style.height="auto";
			mydingdan.style.padding="5px 8px";
			mydingdan.style.border="1px solid #ddd";
			dhhy1.style.border="1px solid #ddd";
		}
		dhhy1.onmouseleave=function(){
			mydingdan.style.height="0";
			mydingdan.style.padding="0 8px";
			mydingdan.style.border="none";
			dhhy1.style.border="1px solid #f5f5f5";
		}
	}
	call(dhhy1,mydingdan);
	call(dhhy3,myyigou);
	call(dhhy5,shopcar);
	call(dhhy8,mobilesu);



	let lbz1=document.getElementsByClassName("lbz1")[0];
	let lis=lbz1.getElementsByTagName("li");
	let asideBox=document.getElementsByClassName("asideBox");
	for(let i=0;i<lis.length;i++){
	       lis[i].onmouseenter=function(){
		         for(let j=0;j<lis.length;j++){
		          asideBox[j].style.display="none";
		         } 
	       asideBox[i].style.display="block";
	       }
	       lis[i].onmouseleave=function(){
	         asideBox[i].style.display="none";
	       }
    }
   
    let imgboxs=document.querySelectorAll(".lbz2 li");
    let circles=document.querySelectorAll(".hh span");
    let banner=document.querySelector(".lbz2");
    let leftjt=document.querySelector(".fxz");
    let rightjt=document.querySelector(".fxy");
    // console.log(imgbox,circles,banner,btnl,btnr);
    // let boxwidth=parseInt(getComputedStyle(imgboxs[0],null).width);
    // console.log(getComputedStyle(imgboxs[0],null).width);
    /*let current=0,next=0;
    circles[0].className="hot1";
    imgbox[0].style.left=0;
    setInterval(move,2000);*/
    let currenindex=0;
	imgboxs[0].style.zIndex=10;
	circles[0].className="hot1";
	let t=setInterval(move,2000);
	function move(){
		currenindex++;
		if(currenindex==imgboxs.length){
			currenindex=0;
		}
		imgboxs.forEach(function(element){
			element.style.zIndex=5;
		})
		circles.forEach(function(element){
			element.className="";
		})
		imgboxs[currenindex].style.zIndex=10;
		circles[currenindex].className="hot1";
	}
	function moveL(){
		currenindex--;
		if(currenindex<0){
			currenindex=imgboxs.length-1;
		}
		imgboxs.forEach(function(element){
			element.style.zIndex=5;
		})
		circles.forEach(function(element){
			element.className="";
		})
		imgboxs[currenindex].style.zIndex=10;
		circles[currenindex].className="hot1";
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	leftjt.onclick=function(){
		moveL();
	}
	rightjt.onclick=function(){
		move();
	}
	for(let i=0;i<imgboxs.length;i++){
		circles[i].onclick=function(){
			imgboxs.forEach(function(element){
				element.style.zIndex=5;
			})
			circles.forEach(function(element){
				element.className="";
			})
			imgboxs[i].style.zIndex=10;
			circles[i].className="hot1";
			currenindex=i;
		}
	}
    
    let ding=document.querySelector("header");
    console.log(ding);
    window.onscroll=function(){
    	let x=document.body.scrollTop||document.documentElement.scrollTop;
    	if(x>50){
    		ding.style.top="0";
    		ding.style.background="#ccc";
    	}
    	else{
    		ding.style.top=-60+"px";
    	}
    }
}