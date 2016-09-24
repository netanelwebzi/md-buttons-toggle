md-buttons-toggle
===================
Angular Material module for creating group of buttons with toggle functionality.

----------

Online demo
-------------
**JSFiddle:** http://jsfiddle.net/n2p1ocqz/


----------

Installation
-------------

 1. Clone/download this repository
 2. Import `dist/md-buttons-toggle.min.css` & `dist/md-buttons-toggle.min.js` to your project.
 2. Add `md-buttons-toggle` to your angular application dependencies array.


Usage
-------------
**Markup**

    <md-buttons-toggle ng-model="selected" items="items"></md-buttons-toggle>

**Controller**

    $scope.selected = 'html5';
    $scope.items = [{value: 'html5', label: 'HTML5 PLAYER'}, {value: 'flash', label: 'FLASH PLAYER'}, {value: 'youtube', label: 'Youtube Player'}];

***Thats about it, for simple usage.***

Options
-------------

 - **ng-model**

     The required model for sync the selected value

 
 - **items**

     The buttons for display, can be array of strings of array of objects ({value: '', label: ''})

 - **selected-class (default: md-primary)**

 The relevant class for selected button.

 - **ng-disabled**

    Control if disabling or not the buttons for click events.
