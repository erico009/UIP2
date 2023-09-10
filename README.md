
Project 2 Report - Bubble Tea Store
Eric Tieu
8793317


Personas I took into consideration were 2 personas that were health conscious and regularly ordered food online. These 2 personas goals were to customize a drink which met their dietary preferences. And a persona who regularly drinks bubble tea and would like to know more about the bubble tea store and its reputation.

*Second iteration was not implemented

Link to final site
https://erico009.github.io/UIP2/
Link to code
https://github.com/erico009/UIP2

The original processes I intended to use were follow instructions, explore, design/communicate. The ‘follow instructions’ interactive process is implemented through the checkout page, found by clicking on the cart. The user follows instructions by entering the required information to place the order. The ‘explore’ interactive process is implemented in the menu page, found by clicking either on the ‘View Menu’ text on the homepage or the ‘Menu’ button on the navbar. The ‘design’ interactive process is implemented using the ‘Customize’ modal which is available for each drink. The ‘communicate’ process would have been implemented by the ‘Pickup/Delivery Instructions’ in the mockup, however it seemed better to implement it as a progress bar and order information which implements a ‘analyze results’ interactive process. This also allowed me to satisfy the goals of the health conscious personas by calculating and presenting the calories for every drink included in their order depending on customizations made. As of now only the sugar level of the drink affects the calories, however further implementation could include toppings, size, and ice level. The final interactive process is a ‘absorb information’ interactive process. This is found on the about us page found by clicking on the ‘About Us’ button on the navbar. This page contains a video briefly describing what bubble tea is. This partially satisfies the goal of persona that regularly drinks bubble tea, allowing them to know more about the bubble tea store, but not so much its reputation. To implement the reputation part of their goal a embed to a google review, or other website could be included.

Consistency: Most of the colors, font and styling is consistent, however when looking at the listed items in the cart and when tracking your order the styling is different. The cart icon should be externally consistent.


Familiar language and metaphors: In the customization modal icons were used for toppings along with text which allow for recognition if the user had drank bubble tea before, but could not recall the name of the topping.


Simple, aesthetic and functional design: The website is fairly simple, having the customizations for drinks hidden behind a button, only appearing when the ‘customize’ button is clicked. This however does not prevent the user from realizing that these customizations are available, as the button is a brighter, bolder color than the rest of the site, bringing attention to them. The following image shows my implementation of explore. The checkboxes should update the listed drinks when pressed, however they’re always 1 step behind. I added a refresh button to quickly resolve this issue, however due to the functionality when boxes are checked the results of the search will not always display correctly until the refresh button is pressed



Freedom and control: The user has direct access to any page thanks to the navbar. Pages are mostly static allowing the user to access most information available on a page without the use of many actions.


Flexibility: The main page only leads to the menu. If a user returns to the website after ordering they will only be able to track their order by using the navbar. This is also true for if the user would like to know more about the store.


Recognition over recall: In the mockup the drinks had sections, dividing the menu up allowing for easier recall. I decided to remove these sections as if a user wanted to find a certain section they could just select the section they would like to view. There are no input fields for the filter, prioritizing recognition.

Clear status: Each page has a header showing clear status of the page which the user is on. The cart icon is not functional and only leads to another page, not showing a clear status of the number of items the user has in their cart, unless they go to a new page to view their items. The checkout page could also show the total number of items somewhere. The customize modal also does not show a clear status of what drink the user is modifying if they forgot what drink they pressed, only showing ‘Customize’.


Error prevention: On the checkout page there is a faint border around the required fields, there is no clear indicator that these are required fields however.


Error recovery: If the user attempts to submit their order without entering all of the required fields a warning will appear on the first missing field.


Help: Most menus should be fairly simple, however the concept of adding toppings, sugar percents, and ice levels may be foreign to some people. This could be a good opportunity to add a tooltip. 

For internationalization translations were only implemented to the navbar, but is functional on every page. This was a custom implementation using only react, however implementing to the entire site i18n seems to be the standard.


References
https://www.pngwing.com/en/free-png-kbhet
https://www.gettyimages.ca/detail/illustration/delicious-boba-tea-royalty-free-illustration/1156913677?adppopup=true
https://jujusprinkles.com/wp-content/uploads/2017/03/Juju-Sprinkles-Boba-Tapioca-Tea-Order-Guide-Toppings.jpg
https://www.flaticon.com/free-icon/shopping-cart_2838838?term=cart&page=1&position=4&origin=tag&related_id=2838838
https://www.youtube.com/watch?v=p3iHu4c_Nm8

Appendix Personas contributions
StreamIt, a user-friendly streaming service catered toward movie and TV show enthusiasts. a) John
b) 15, has ADHD, speaks Spanish.
c) Good with technology, and often visits other streaming services.
d) View browse for content that is exclusive. 

Ottawa Basketball Association, basketball league planning.
a) Joe
b) Male, 20, very competitive
c) Good with technology, plays basketball twice every week
d) Would like to recruit members, but is very picky.

EK games, site for an indie game company
a) Henry
b) 33, social, male
c) Often on gaming forums
d) Would like to communicate with players, developers.

*Second iteration was not implemented, Heuristic evaluation was not available.

