const products = [
  {
    id: 1,
    name: "Choco Bliss",
    price: 1200,
    picture: "choco_bliss.jpg", // Link to the chocolate image
    description: "A smooth and creamy milk chocolate with a hint of vanilla. Perfect for chocolate lovers!",
  },
  {
    id: 2,
    name: "Candy Delight",
    price: 800,
    picture: "candy_delight.jpg", // Link to the candy image
    description: "Delicious fruity candies that melt in your mouth. Great for kids and adults alike!",
  },
  {
    id: 3,
    name: "Bonbon Royale",
    price: 3000,
    picture: "bonbon_royale.jpg", // Link to the bonbon image
    description: "Premium bonbons filled with exotic flavors. A luxurious treat for special occasions.",
  },
  {
    id: 4,
    name: "Hazel Dream",
    price: 1500,
    picture: "hazel_dream.jpg", // Link to the hazelnut chocolate image
    description: "Rich dark chocolate with crunchy hazelnut pieces. Perfect for those who enjoy a nutty flavor!",
  },
  {
    id: 5,
    name: "Lemon Chew",
    price: 500,
    picture: "lemon_chew.jpg", // Link to the lemon candy image
    description: "Tangy lemon chews that pack a punch of citrusy flavor. Refreshing and sweet!",
  },
  {
    id: 6,
    name: "Caramel Treat",
    price: 2000,
    picture: "caramel_treat.jpg", // Link to the caramel chocolate image
    description: "Smooth caramel covered in milk chocolate. A delightful combination of sweetness and richness.",
  },
  {
    id: 7,
    name: "Berry Blast",
    price: 1000,
    picture: "berry_blast.jpg", // Link to the berry candy image
    description: "Mixed berry-flavored candies that burst with juicy flavors in every bite. Great for snacking!",
  },
  {
    id: 8,
    name: "Truffle Heaven",
    price: 4000,
    picture: "truffle_heaven.jpg", // Link to the truffle image
    description: "Decadent chocolate truffles filled with smooth ganache. Perfect for gifting or indulging.",
  },
  {
    id: 9,
    name: "Minty Fresh",
    price: 700,
    picture: "minty_fresh.jpg", // Link to the mint candy image
    description: "Refreshing mint candies that leave a cool sensation in your mouth. Great after meals!",
  },
  {
    id: 10,
    name: "Crunchy Delight",
    price: 2500,
    picture: "crunchy_delight.jpg", // Link to the crunchy chocolate image
    description: "A delightful chocolate bar with crispy rice pieces for an extra crunch in every bite.",
  },
  {
    id: 11,
    name: "Vanilla Bonbon",
    price: 3500,
    picture: "vanilla_bonbon.jpg", // Link to the vanilla bonbon image
    description: "Soft and creamy vanilla bonbons with a touch of white chocolate. A delicate and delicious treat.",
  },
  {
    id: 12,
    name: "Orange Twist",
    price: 600,
    picture: "orange_twist.jpg", // Link to the orange candy image
    description: "Zesty orange-flavored candies that are sweet, tangy, and perfect for a citrus kick.",
  }
];

function makeBoxes(){
  const content = products.map(product =>
    `<div class="product-card" id="${product.id}">
      <img src="${product.picture}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Ár: ${product.price} Ft</p>
    </div>`
  )
  return content.join('');
}
const cardsHTML=makeBoxes(products)
  
  


function renderCards(){
  const prod = document.querySelector(".products");
  prod.innerHTML = "";
  prod.innerHTML = makeBoxes()
  return prod
}

//inicializálódik az oldal




//dinamikus tartalom feltöltése
document.addEventListener("DOMContentLoaded", () =>{
  renderCards(cardsHTML);
})



// szűrés elkészítése:
//-gombra esemény figyelő


//-input értékek kivétele
/* const checking=(minPrice,maxPrice)=>{
  if (!minPrice.trim() || maxPrice.trim()){
    return [false, 0,0];
}
if (isNaN(minPrice) || isNaN(maxPrice)){
    return [false,0,0]
}
const minPrice2=Number(minPrice)
const maxPrice2=Number(maxPrice)
return [true, minPrice2,maxPrice2];
} */

//-filterrel szűrni a termékek objektum-listában
/*const szuresWithFilter=()=>{
  const[eredmeny,minPrice,MaxPrice]=checking();
 const searched=products.filter((e,minPrice,maxPrice)=>e>minPrice||e<maxPrice)
 return searched; }*/


//-??? a szűrt eredmények megjelenítése???
//órán csinált dolgok:
function Values(){
  const minPrice=document.getElementById("min-price").value
  const maxPrice=document.getElementById("max-price").value
  return [minPrice,maxPrice];
}
//hibauzenetek:
function Message1(){
  alert("Érvénytelen értéket adott meg!")
}
function Message2(){
  alert("Nem található ilyen termék az áruházban!")
}
//ervenyesseg:
const Checking=(minValue,maxValue)=>{
  if(!minValue||!maxValue){
    return[false,0,0];
  }
  if(isNaN(minValue)||isNaN(maxValue)){
    return[false,0,0]
  }
  return[true,Number(minValue),Number(maxValue)];
}
//szures az input ertekek alapjan:
const filtering=(data,minV,maxV,callback)=>{
  const [Checking,number1,number2]=callback(minV,maxV)
  /* if(!Checking){
    Message1()
    return[]
  } */
  if(!Checking){
    Message1()
    return[]
  }
  if(number1>number2){
    [number1,number2]=[number2,number1]
  }

  const filteredProducts=data.filter(product=>product.price>=number1 && product.price<=number2)
  if(filteredProducts.length===0){
    Message2()
    return [];
  }
  return filteredProducts;
}

//vege
const filteredProds=()=>{
  const szures=document.getElementById("filter-btn")
  szures.addEventListener("click",()=>{
    const [minPrice,maxPrice]=Values()
    const fProds=filtering(products,minPrice,maxPrice,Checking)
    if(fProds){
      const foundedProducts=makeBoxes(fProds)

      renderCards(foundedProducts)
    }
  })
}
filteredProds();



/* szures.addEventListener("click",()=>{
  const [minValue,maxValue]=Values();
  const filteredProductsList=filtering(products,minValue,maxValue,Checking)
  const nedwCardsHTML=createProductCards(filteredProductsList)
  renderCards(nedwCardsHTML)
}) */