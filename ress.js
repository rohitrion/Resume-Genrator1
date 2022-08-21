function addnewwefeild(){
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");

    newNode.classList.add("wefeild");
    newNode.classList.add("mt-3");
    newNode.setAttribute('placeholder','Enter here')

    let weob =document.getElementById("we");
    let weaddbuttonob =document.getElementById("weaddbutton  ");

    weob.insertBefore(newNode,weaddbuttonob);

}

function addnewaqfeild(){
 
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");

    newNode.classList.add("aqfeild");
    newNode.classList.add("mt-3");
    newNode.setAttribute('placeholder','Enter here')

    let aqob =document.getElementById("aq");
    let aqaddbuttonob =document.getElementById("aqaddbutton ");

    aqob.insertBefore(newNode,aqaddbuttonob);

}  



 function genratecv(){
     

     let name = document.getElementById("nameFeild ").value;

      document.getElementById("namet1").innerHTML = name

   

      let name2 = document.getElementById("nameFeild ").value;

      document.getElementById("namet2").innerHTML = name2

    
    



    let con = document.getElementById("contactFeild ").value;

     document.getElementById("conctackt").innerHTML = con

    
     let na = document.getElementById("addFeild ").value;

     document.getElementById("adresst").innerHTML = na

     
     let n = document.getElementById("emialFeild ").value;

     document.getElementById("emailt").innerHTML = n

   
     let f = document.getElementById("fbFeild ").value;

     document.getElementById("fbt").innerHTML = f

   
     
     let li = document.getElementById("linkFeild ").value;

     document.getElementById("linkt").innerHTML = li
  

         
     let nf= document.getElementById("obfeild").value;

     document.getElementById("objt").innerHTML = nf


     let nk= document.getElementById("skilfeild").value;

     document.getElementById("skillt").innerHTML = nk
   

   
        
//   wexpeorce 

let wes = document.getElementsByClassName("form-control wefeild");

let str = " ";


for(let e of wes) {

    
    str = str +  `<li> ${e.value} </li>`;
}

document.getElementById("wet").innerHTML = str ;


//   acdemy qualification 
let aqs=document.getElementsByClassName("aqfeild");
let str1 = " ";

for(let e of aqs){
    str1+= `<li> ${e.value} </li>`;
}
  
document.getElementById("adt").innerHTML=str1;




// code for image

let file = document.getElementById("imgfeild").files[0];

console.log(file);

let reader = new FileReader();
reader.readAsDataURL(file);

console.log(reader.result);

reader.onloadend = function(){
    document.getElementById("imgt").src =reader.result;
};
     
document.getElementById("cv-form").style.display ="none";

document.getElementById("cv-template").style.display = "block";




 }


 function printcv(){
 
    window.print();






    const btn = document.getElementById('btnn');

    btn.addEventListener('click', () => {
      // 👇️ hide button
      btn.style.display = 'none';
    
      // 👇️ show div
     
    });
    

 }







 