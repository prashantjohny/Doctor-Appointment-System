let icon1 = document.querySelector(".icon1");
let ul = document.querySelector("ul");

icon1.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";

    }
})

let card = document.querySelectorAll(".reviewCard");
let icon = document.getElementById("icon");
let count = 0;
let surgery = document.querySelectorAll(".card");

card.forEach(function(cards, index){
    cards.style.left=`${index * 100}%`
})

function myFun(){
    card.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(card.length == count){
        count=0;
    }
    myFun()
}, 2000)



icon.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("mode");
    if(icon.className == "fa-solid fa-moon"){
        icon.className="fa-solid fa-sun"
    }
    else{
        icon.className = "fa-solid fa-moon"
    }
})

surgery.forEach(function(curCard){
    curCard.addEventListener("click", function(){
        console.log(curCard.firstElementChild.src);

        let div = document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=`
        <i id="cross" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h1>${curCard.lastElementChild.innerHTML}</h1>
        <p>This surgery involves using advanced robotic systems to assist or perform surgical procedures, enhancing precision, minimally invasive techniques, and patient outcomes.</p>

        `
        document.querySelector("body").appendChild(div)

        document.getElementById("cross").addEventListener("click", function(){
            div.remove();
        })
    })
})

// let speciality = document.getElementById("speciality");
// let doctor = document.getElementById("doctor");
// let review = document.getElementById("review");


// speciality.addEventListener("click", ()=>{
//     speciality.style.color="rgb(4, 219, 219)";
//     doctor.style.color="white";
//     review.style.color="white";
    


// })


// reviews.addEventListener("click", ()=>{
//     reviews.style.color="rgb(4, 219, 219)";
//     speciality.style.color="white";
//     doctor.style.color="white";
    
// })


// doctor.addEventListener("click", ()=>{
//     doctor.style.color="rgb(4, 219, 219)"
//     reviews.style.color="white";
//     speciality.style.color="white";
    
// })




let crd = document.querySelectorAll(".docCard");
let itemPage = document.querySelector(".itemPage")
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);


    crd.forEach(function(curValue){
         curValue.addEventListener("click", function(){
            itemPage.style.display="flex";
            container.style.display="none";

            let imgSrc = curValue.firstElementChild.src ;
            itemImg.src=imgSrc;
             
            let buyText =  document.querySelector(".buyText");
            buyBtn.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="block";
                buyText.innerHTML=`
                <!DOCTYPE html> 
<html lang="en"> 

<head> 
	<meta charset="UTF-8"> 
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0"> 
	<title>Online Payment-Page</title> 
	<link rel="stylesheet" href="style.css"> 
</head> 

<body> 
	<div class="container"> 

		<form> 

			<div class="row"> 

				<div class="col"> 
					<h3 class="title"> 
						Billing Address 
					</h3> 

					<div class="inputBox"> 
						<label for="name"> 
							Full Name: 
						</label> 
						<input type="text" id="name"
							placeholder="Enter your full name"
							required> 
					</div> 

					<div class="inputBox"> 
						<label for="email"> 
							Email: 
						</label> 
						<input type="text" id="email"
							placeholder="Enter email address"
							required> 
					</div> 

					<div class="inputBox"> 
						<label for="address"> 
							Address: 
						</label> 
						<input type="text" id="address"
							placeholder="Enter address"
							required> 
					</div> 

					<div class="inputBox"> 
						<label for="city"> 
							City: 
						</label> 
						<input type="text" id="city"
							placeholder="Enter city"
							required> 
					</div> 

					<div class="flex"> 

						<div class="inputBox"> 
							<label for="state"> 
								State: 
							</label> 
							<input type="text" id="state"
								placeholder="Enter state"
								required> 
						</div> 

						<div class="inputBox"> 
							<label for="zip"> 
								Zip Code: 
							</label> 
							<input type="number" id="zip"
								placeholder="123 456"
								required> 
						</div> 

					</div> 

				</div> 
				<div class="col"> 
					<h3 class="title">Payment</h3> 
                    
                    <h4>Google-pay<input type="radio" id="pay1" name="payment" value="gpay"></h4>
                    
                    <h4>Phone-Pay<input type="radio" id="pay2" name="payment" value="ppay"></h4>
                    
                    <h4>Bharat-Pay<input type="radio"  id="pay3" name="payment" value="bpay"></h4>
                    
                    <h4>Cash-On-Meet<input type="radio" id="pay4" name="payment" value="com" ></h4>
                    
                    <button style="background-color=red;">OR</button>
					<div class="inputBox"> 
						<label for="name"> 
							Card Also Accepted: 
						</label> 
						
					</div> 

					<div class="inputBox"> 
						<label for="cardName"> 
							Name On Card: 
						</label> 
						<input type="text" id="cardName"
							placeholder="Enter card name"
							required> 
					</div> 

					<div class="inputBox"> 
						<label for="cardNum"> 
							Credit Card Number: 
						</label> 
						<input type="text" id="cardNum"
							placeholder="1111-2222-3333-4444"
							maxlength="19" required> 
					</div> 

					<div class="inputBox"> 
						<label for="">Exp Month:</label> 
						<select name="" id=""> 
							<option value="">Choose month</option> 
							<option value="January">January</option> 
							<option value="February">February</option> 
							<option value="March">March</option> 
							<option value="April">April</option> 
							<option value="May">May</option> 
							<option value="June">June</option> 
							<option value="July">July</option> 
							<option value="August">August</option> 
							<option value="September">September</option> 
							<option value="October">October</option> 
							<option value="November">November</option> 
							<option value="December">December</option> 
						</select> 
					</div> 


					<div class="flex"> 
						<div class="inputBox"> 
							<label for="">Exp Year:</label> 
							<select name="" id=""> 
								<option value="">Choose Year</option> 
								<option value="2023">2023</option> 
								<option value="2024">2024</option> 
								<option value="2025">2025</option> 
								<option value="2026">2026</option> 
								<option value="2027">2027</option> 
							</select> 
						</div> 

						<div class="inputBox"> 
							<label for="cvv">CVV</label> 
							<input type="number" id="cvv"
								placeholder="1234" required> 
						</div> 
					</div> 

				</div> 

			</div> 

			<input type="submit" value="Proceed to Checkout"
				class="submit_btn"> 
		</form> 

	</div> 
	<script type="text/javascript" src="style.js"></script> 
</body> 

</html>

                
    
                `
               let button =  document.createElement("button");
               button.innerText="Submit";
               buyText.appendChild(button);

               button.addEventListener("click", function(){
               let name = document.getElementById("name");

               if(name.value == "" && address.value == "" && num.value == ""){
                alert("Please Enter Detail")
               }else{
                alert("Your Response Recorded");
                document.querySelector(".buyPage").style.display="none";

               }
               })
                 
                let cross = document.querySelector(".cross");
                cross.addEventListener("click", function(){
                document.querySelector(".buyPage").style.display="none";

                }
                )
            })

             
         })

    })
    