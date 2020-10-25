#### This is my first project based on the first 7 tutorial projects and what I learned from them. 

There were a few bugs on the way: 

1. If entered custom % tip and pressed 'enter' more than once, the final price would be counted from the last finalPrice  
**_Fix_** - change the name of the showned value to different one than 'inputVal'
2. If you enter the price, get custom % and then enter different price and press 'enter' - it wouldn't work, you would have to press 'custom %' 
button again to hide the 'enter' button and then again to show it  
**_Fix_** - put two onclick events (getInputValue(); and getPercValue) on 'enter' button, not on 'choose custom %' value

#### One more thing to do - write my own css from 0
