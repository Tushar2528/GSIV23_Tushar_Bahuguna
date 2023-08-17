# GSIV23_Tushar_Bahuguna

Hi All, 

This is a baisc Movie Store application built using React JS. The concepts used int he creation of this applications are :

1- React JS
2- React hooks (functional components)
3- React Redux for state management
4- Jest testing library for React
5- COnditional rendering in React
6- Material UI icons
7- Bootstrap (for implementing navbar)

Instructions to run the code:

1- Clone the git repository to your local machine
2- Open the folder in any IDE of your choice (I used Visual Studio Code for this).
3- Launch the terminal and run command "npm install". This should install the node modules folder into your code structure which contains all
the necesasry dependencies used to run this app.
4- When it's done, run the command "npm start". This will fire up the application in your browser.
5- For testing the application, run the command "npm test". This should start executing the test cases. I have created two tests for this application 
for demonstration purpose (I have tested the redux action reducers and movie list component).

There are a few things that i have done well here according to me:

1- Implementing redux for cleaner state management (Instead of the confusion of dealing with props drilling which is more prone to errors).
2- I have kept one or two states as they are as they are only used inside a single component since there is likely no chance of any error occuring because of states
that are only used in the parent component ifself.
3- Infinite scrolling is another functionality that i think is neatly integrated in my code.

Thigs that i might improve if i had spare time for them:

1- Worked more on responsiveness for mobile devices.
2- Worked more on the styling of the application (currently i have followed the template provided in the task folder) as the UI part is one parameter which 
attractes most of the consumer base.
3- To be more creative with this app, i would have included an add to cart/ buy functionality as is the case with most OTT platforms for a more 
realistic experience.

