# JavaScript_Calculator
Made while at Codeup. The JavaScript calculator was my first major javascript project built using vanilla javascript. 

##JavaScript
```javascript
for (var i = 0; i < numberPad.length; i++) {
        numberPad[i].addEventListener('click', function() {
            if (middle.value == "") {
                lefty.value = (lefty.value + this.innerHTML)
            } else if (middle.value == "=") {
                lefty.value = ("");
                middle.value = ("");
                righty.value = ("");
                lefty.value = (lefty.value + this.innerHTML)
            } else {
                righty.value = (righty.value + this.innerHTML)
            }
        })
    }
```
## Styling
After the javascript, I focused on the CSS. I started with bootstrap and add custom css for the shading and colors. 
