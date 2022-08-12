let input="";
function clock(jo){
   input=input+document.getElementById(jo).innerHTML;
   document.getElementById('output').innerHTML=input;
};
function evalu()
{input=eval(input);
   document.getElementById('output').innerHTML=input;
};
function cleare()
{input="";
   document.getElementById('output').innerHTML=0;
   
}
