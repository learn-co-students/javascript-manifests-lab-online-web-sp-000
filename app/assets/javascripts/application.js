// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

// This file was in lib/assets, which isn't going to work.  It needs to be 
// within lib/assets/javascripts I think
//= require wrong_place_wrong_time

// This file is in vendor/assets/javascripts, which works
//= require alert_maker

// This js file is within app/assets/javascripts
//= require main
