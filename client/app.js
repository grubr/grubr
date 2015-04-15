'use strict';

require('angular/angular');

var grubrApp = angular.module('grubr', []);

require('./controllers/mapController')(grubrApp);
