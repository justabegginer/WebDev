const allLinks = document.querySelectorAll('a');

// for(let link of allLinks){
//     link.innerText = "I AM A LINK!";
// }

for(let all of allLinks){
    all.style.color = 'pink';
    all.style.textDecorationColor = 'blue';
    all.style.textDecorationStyle = 'wavy';
}