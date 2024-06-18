# CapstoneProject

The Florida Polytechnic University Capstone project is a program where senior students work on a project sponsored by an outside company over the course of their senior year.

My group's project was sponsored by the company SkyFi, who tasked us with creating a predictive weather model to determine the liklihood that a satellite image (the image being the product sold by SkyFi) would be clear or cloudy, with clouds ruining a successful image capture.

My contribution to this project was to create a web-based interactive dashboard UI that would allow a user to interact with the model by inputting the necessary information, and recieving the results on the webpage. 

This dashboard UI was written with HTML, CSS, JavaScript, and Python, built using two 3rd-party open-source tools: LeafletJS (with geocoder extension) and PyScript.

Documentation for these tools can be found here:

PyScript - https://pyscript.net/

LeafletJS - https://leafletjs.com/

Geocoder Extension - https://github.com/perliedman/leaflet-control-geocoder

The full project folder containing all source code is uploaded here as "Dashboard Final.zip", so that it can be easily downloaded and accessed locally (required to see full funcionality)

Source code is also uploaded separately as individual files for viewing on GitHub.

________________________________________________________________________________________________________________________________________________

A breakdown of the source code files is as follows:


index.html

The HTML code creates the visual elements of the website, and runs both the JavaScript and Python scripts upon user interaction. The webpage has 3 main elements that the user will interact with, that being the date entry fields, the interactive map, and the “Get Results” button. The date entry fields are HTML elements, which can be accessed by the Python API. Visually, these fields show default values of “mm/dd/yyyy” and have a calendar icon to the right of the box, which upon clicking, brings up a full month calendar where a user can click a date, which will enter it into the box. The interactive map is shown as a box in the middle where the user can click and drag to move the map, click the plus or minus icons to zoom, and search for a location by clicking the magnifying glass icon and typing in the text box that appears when doing so. All of this is handled in the map.js file. The “Get Results” button should be clicked after the above fields are filled out. This button will call the Python script, which pulls the values from the date entry fields and map.js variables. It will also populate the webpage with a picture displaying intended results from the model. The header of the HTML code includes CSS and Script calls for the LeafletJS library, Geocoder Extension, and PyScript framework. These must be present, for functionality of the program, as well as the program being hosted on a web server (either local or online).

________________________________________________________________________________________________________________________________________________

styles.css

The CSS code handles the styling, formatting the top banner, on-screen text, images, and coloration of the website.

________________________________________________________________________________________________________________________________________________

map.js

The interactive map uses the LeafletJS library and an extension called Leaflet-Control-Geocoder. The functionality of location lookup and general map use is part of the Leaflet library and extension. Documentation can be found below(1). The starting position of the map, centering on Florida, is using the coordinates of FL Poly, with the zoom level set to show the full state map. The polygon overlay is an element of the Leaflet library, with the size being expanded to fit the 5x5 km2 area defined as part of our project. This polygon is centered on a coordinate point that is generated as part of the geocoder extension. The Leaflet function returns the center coordinate as a string in the format of “LatLng(0.000000, 0.000000)”, so the string had to be parsed and split to set the individual points into float variables of latitude and longitude. To calculate the corner points, the new latitude and longitude float variables had to be scaled by the distance from the center to the corners. There is an individual global variable for the center and corner points, which are initialized to [0, 0] and set to the entered location’s coordinate points each time the location lookup function is called. A get function is defined and exported for each coordinate point, so that these functions can be called in the Python connecting API.

________________________________________________________________________________________________________________________________________________

main.py

In the Python API code (titled main.py), there is a function called getCoords() that calls the get functions for each coordinate point that are defined in map.js, allowing these coordinate points to be accessed as float variables in Python. There is another function called getDate() that allows the date variables from the HTML code to be read by Python using PyScript’s “document” class, which is the equivalent of a JavaScript DOM accessor.

________________________________________________________________________________________________________________________________________________

pyscript.toml

This is the PyScript configuration file that allows the map.js file to be imported into main.py as a usable module/library. This is how the Python code is able to call and use the functions and classes from the JavaScript code.
