### Aftership Challenge

My repository for Aftership Challenge : frontend-level-1.

This is built by static HTML page as well as combining and minifying static files.

The main grunt tasks it uses are `grunt-contrib-less`, `grunt-contrib-cssmin`, and `grunt-uglify`.


### Usage

Auto-compile `.less` and `.js` files from the `src/less/` and `src/js` folders and place the results in `dist/css/` and `dist/js/` .

    grunt watch

Build the project into the `dist/` folder: compile `.less` and `.js` files from the `src/less/` and `src/js` folders.

    grunt


### Folder structure

```
challenge
├── dist 
│ 	├── css
│ 	│	 ├── main.css
│ 	│	 └── main.min.css   // <- final css file
│ 	└── js
│ 		 └── scripts.min.js  // <- final js file
├── index.html
├── images  // <- final image files
└── src 
  	├── img 
  	├── js  
	└── less  
```

### Technology

* CSS frameworks : BootStrap
* JS frameworks : jQuery, Lazy Load 

### Contact

* Email : meiyanlau98234304@gmail.com