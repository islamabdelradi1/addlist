
var btn=document.getElementById("btn");

btn.addEventListener("click",(eo) => {
    var inp=document.getElementById("inp").value;
    var li=document.createElement("li");
    var add=document.getElementById("add");
    li.innerHTML=inp;
    add.append(li);


    var btndelet=document.createElement("button");
    var btnadd=document.createElement("button");

    btndelet.innerHTML='<i class="fa-solid fa-trash"></i>';
    btnadd.innerHTML='<i class="fa-solid fa-circle-plus"></i>';
    var dev=document.createElement("div");
    dev.classList.add("btnss");
    li.append(dev);
    dev.append(btndelet,btnadd);

    btndelet.addEventListener("click",(eo) => {
        li.remove();
    
    })

        btnadd.addEventListener("click",(eo) => {
            var add2 =document.getElementById("add2");
            add2.append(li);
            btnadd.remove();
        })
        btnedt.addEventListener("click",(eo) => {
            
        })
})



