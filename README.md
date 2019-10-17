# whose-wine-is-it

Whose Wine Is It is an application where a user can create a profile, search a database with over 33000 different wine ratings from 13 countries,
 and add them to their own personal list, with the ability to mark them as wines they have had or wish to have one day.


## Resources Used

The API used for this was Global Wine Score API Documentation(https://globalwinescore.docs.apiary.io).



### Technologies Used
HTML
CSS
JavaScript
Node.js
EJS
Sequelize
JQuery
Bootstrap
BCryptjs
Passport

### What Is Being Done

The application is initially asking for basic profile information(name, email, birthday, etc.) and storing it as a unique identification, with an encypted 
password for security. The user is then directed to a Profile Page where they can (eventually) see statistics reagrding thier wines selectd over time.

Then the user can navigate to a search page, where they can choose the Country, Region, and Appellation of the wine(s) for which they wish to search, which will be populated after.
The usser can then add and delete fro the search page any of the shown wines, and then can navigate to their own List, where they can assign a status as to whether they have tasted the 
wine, or would like to mark it as a Wishlist item

``

## Deployment

The application is fairly RESTful, with all GET/POST/PUT/DELETE Routes present.

I ran into diffculty getting the search paramaters to populate correctly and pass along to the API URL call, but it is very close.


