# UFO Sightings with Javascript
Data Bootcamp Week 12

## Overview of Project
This exercise involved using JavaScript to create a dynamic table by user-entered information on specific criteria.

The guided homework portion of the exercise involved building a webpage using HTML, CSS, Bootstrap, D3, and JavaScript. The exercise involved building a table, populating it with the data (provided in JSON format), and creating the ability to filter by date only, after clicking a button.

The independent challenge portion of the exercise involved revisions to the homework exercise, namely adding four additional filters (city, state, country, and shape), registered in an event listener that functions on user-entered input rather than on clicking a button. One or more filters can be used.

## Results
### What's Changed
In the latest version of the webpage, the filter search section includes five fields where a user can enter information, as indicated by the red arrow in the lower left of the image below. Default text values are shown in the input fields, and all available data is shown in the table.

![UFO sighting page prior to filter](https://github.com/larabjork/ufos/tree/main/static/images/ufo_page_before_filtering.png)

### Performing a Search
A user can enter information into one field only or in multiple fields. When the user enters a search term in one field and exits that field (by hitting the tab or return keys or by clicking into another field), the table will be filtered on that entry. If input is entered in another field, the already-filtered table will be filtered further. For example, in the first image below, the user has entered "El Cajon" as the city, which results in five records.

![Search entered for city = El Cajon](https://github.com/larabjork/ufos/tree/main/static/images/search_city_el_cajon.png)

When the user enters "triangle" as the object's shape, the table data is further filtered on both criteria (city and shape), as shown below.

![Search entered for city = El Cajon and shape = triangle ](https://github.com/larabjork/ufos/tree/main/static/images/search_city_and_shape.png)

To execute a fresh search, the user must refresh their browser, as shown below for Chrome (the icon's appearance and positioning may vary, depending on the browser being used).
![Location of refresh icon for Chrome browswer](https://github.com/larabjork/ufos/tree/main/static/images/refresh_icon.png)


## Summary
### Drawbacks of the Current Design
A considerable drawback of the current design is that the page must be manually refreshed to start a new search. Refreshing the page may not be intuitive for all users.

### Recommendations for Further Development
* A "Clear Search" button could be added to help users more easily start a fresh search. 

* Data entry could be restricted for specific fields. For instance:
    * The date field could be set to require a MM/DD/YYYY format
    * The state, country, and object fields could have drop-down lists of options
For any field that has such limitations, feedback to the user could be provided ("It looks like you didn't enter the date correctly"). Testing with users would be ideal to determine what type of restrictions and what kind of feedback messages are most effective.

* A more sophisticated search/filter capacity would not require users to enter information in a specific field. Instead, a single field could be created that would allow users to enter search terms.