function generateRandomColor() {
    // Generate a random hexadecimal color code
    var color = "#" + Math.floor(Math.random()*16777215).toString(16);
  
    return color;
  }
  
  // Example usage
  var randomColor = generateRandomColor();
  console.log(randomColor);
  let bhaichange;
  
  const btn1= document.querySelector('.btn-2');
  const btn2 = document.querySelector('.btn-3');
  const heading = document.querySelector('.heading');
  const startfunction = btn1.addEventListener('click',()=>{
       function changecolor(){
        document.body.style.backgroundColor = generateRandomColor();
       }
        bhaichange = setInterval(changecolor,1000);
  })
  const stopfunction = btn2.addEventListener('click',()=>{
    clearInterval(bhaichange);
  })
