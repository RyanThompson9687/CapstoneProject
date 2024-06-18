# import map.js as a usable python library
from pyscript.js_modules import map

# import necessary pyscript functions
from pyscript import when, display, document

# event listener, waiting for click of the button matching html id="getResults"
@when("click", "#getResults")
# function calling each exported getter from map.js, printing onto terminal
def getCoords(event):
    
    getCenter = map.getCenter()
    print(f"Center: {getCenter}")
    
    getSE = map.getSE()
    print(f"SouthEast: {getSE}")

    getNE = map.getNE()
    print(f"NorthEast: {getNE}")

    getNW = map.getNW()
    print(f"NorthWest: {getNW}")

    getSW = map.getSW()
    print(f"SouthWest: {getSW}")

# event listener, waiting for click of the button matching html id="getResults"
@when("click", "#getResults")
# function reading user entered dates from html date entry, printing onto terminal
def getDate(event):
    # functionally equivalent to JavaScript DOM accessors
    startDate = document.querySelector("#startDate").value
    print(f"Start Date: {startDate}")

    endDate = document.querySelector("#endDate").value
    print(f"Start Date: {endDate}")
