var output=""
var buttons=document.querySelectorAll(".btn");
const flag=0

Array.from(buttons).forEach((button) => {
  button.addEventListener('click',(e)=>{
    if (e.target.innerHTML == '=') {
      output= eval(output);
    }
    else if (e.target.innerHTML == 'AC'){ 
        output= ("");
    }
      console.log(e.target)
    output+=e.target.innerHTML;
    document.querySelector('input').value=output;
    
  })
  
});