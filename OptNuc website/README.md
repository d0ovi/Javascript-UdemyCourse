### Omg, I finished it finally. 
**First full project with all css, js and html** 

A website project with design process on Figma and implementation in javascript.

The website is based on this tutorial:
https://www.youtube.com/watch?v=EwmvBnR_xtA&t=578s&ab_channel=DevEd


Update 11/01: 
Implemented the circles on the right to change the main pages (between almond, cashew and pecan)
For now, I have 3 bugs on the main page: 
1. While changing the background colour, the middle part gets dark (is it somehow related to the tutorials code? the colours seem to come from there)  
**-- Fix**  
It seems there is some issue if i use hsl colour numbers. So just changed it to hex and the issue was solved.  
2. If you press the same circle twice, you will get an empty page. hahaha, the tutorial project has this issue as well. yay.  
**-- Fix**   
It was enough to put if statement, if currentPage !== nextPage, do everything, else - do nothing 
3. The right and left part of the images gets flexed together automatically, without you moving the mouse over it (how it suppose to be)  
**-- Fix--**   
I needed to get .set(clearProps) to get the hover function working again (as the pages technically doesnt reload, just get over older one)

**I still need to make some design changes:**
- Make the open nav h3 smaller on a smaller screen
- Make the logo shown on other pages
- Make the hamburger change to 'close' in nav-open
- Do something about the numbers next to the circles on smaller screen

**- host the website for real** 

-- If I ever want to put this on the portfolio, put the figma document as well. 
