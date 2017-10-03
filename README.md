# paper-input-place

Google Places Autocomplete attached to a paper-input, providing a convenient material design input for places.

This release is a Polymer 2.0 hybrid element so it will work in 1.x or 2.0 Polymer applications.

Try it on the [Live Demos](https://mlisook.github.io/paper-input-place/) page.

## Contents
* [Basic Use](#basic-use)
* [Installation](#installation)
* [Properties](#additional-properties)
* [Methods](#methods)
* [Styling](#styling)

## Basic use

```html
<paper-input-place api-key="your google api key" value="{{tourstop.place}}" 
  label="Pick a place" hide-error></paper-input-place>
```
The `value` property is an object:

```js
{
  "search": "Guggenheim Museum, 5th Avenue, New York, NY, United States",
  "place_id": "ChIJmZ5emqJYwokRuDz79o0coAQ",
  "latLng": {
    "lat": 40.7829796,
    "lng": -73.95897059999999
  }
}
```
Basic use with validation:

```html
<paper-input-place label="Pick a place" api-key="your google api key" value="{{tourstop.place}}"></paper-input-place>
```
Basic use with a country code specified (use ISO Alpha-2 code):
```html
<paper-input-place label="kies een plaats, elke plaats" api-key="je google api sleutel" 
  value="{{bestemming.plaats}}" search-country-code="NL">
</paper-input-place>
```

## Installation

Use bower to install:
`bower install --save paper-input-place`

## Additional Properties
### apiLoaded
A _read only_ boolean property (notifies) that indicates if the google api is
loaded and ready to provide place suggestions and geocoding services.

The control also fires an event, `api-loaded`, when the google api is ready
and attached to the input control.

### errorMessage
`errorMessage` / `error-message` allows customization of the error message display.
```html
<paper-input-place api-key="your google api key" error-message="Pick a place from the list"
  value="{{myPlace}}" required label="Select your destination"
  invalid="{{noPlace}}"></paper-input-place>
<paper-button disabled$="[[noPlace]]" on-tap="saveIt">Save</paper-button>
```

### hideError
If specified the element doesn't display an error message and doesn't turn red.
Set `hide-error` in the markup to suppress validation.

### hideIcon

If true (`hide-icon` attribute present) the element will not display the "place" icon
in the prefix position of the `paper-input`.

### invalid
`invalid` is a _read only_ property which indicates if the control has a valid place.
```html
<paper-input-place api-key="your google api key"
  value="{{myPlace}}" required label="Select your destination"
  invalid="{{noPlace}}"></paper-input-place>
<paper-button disabled$="[[noPlace]]" on-tap="saveIt">Save</paper-button>
```
### label
The floating label for the paper-input.
### latLng
`latLng` is a _read only_ property which returns an object after the user selects a place from the prompt.
```html
<paper-input-place api-key="your google api key"
  value="{{myPlace}}"
  lat-lng="{{myLatLng}}"></paper-input-place>
```
```js
{
  "lat": 40.7829796,
  "lng": -73.95897059999999
}
```
### place
`place` is a _read only_ property which returns an object with detailed information after the user selects a place:
```html
<paper-input-place api-key="your google api key"
  value="{{myPlace}}"
  place="{{myPlaceDetails}}"></paper-input-place>
```
```js
{
  "place_id": "ChIJmZ5emqJYwokRuDz79o0coAQ",
  "formatted_address": "1071 5th Ave, New York, NY 10128, USA",
  "search": "Guggenheim Museum, 5th Avenue, New York, NY, United States",
  "latLng": {
    "lat": 40.7829796,
    "lng": -73.95897059999999
  },
  "basic": {
    "name": "Solomon R. Guggenheim Museum",
    "address": "1071 5th Avenue",
    "city": "New York",
    "state": "New York",
    "stateCode": "NY",
    "postalCode": "10128",
    "country": "United States",
    "countryCode": "US",
    "phone": "(212) 423-3500"
  },
  "placeDetails": {
    "address_components": [
      {
        "long_name": "1071",
        "short_name": "1071",
        "types": [
          "street_number"
        ]
      },
      {
        "long_name": "5th Avenue",
        "short_name": "5th Ave",
        "types": [
          "route"
        ]
      },
      {
        "long_name": "Upper East Side",
        "short_name": "UES",
        "types": [
          "neighborhood",
          "political"
        ]
      },
      {
        "long_name": "Manhattan",
        "short_name": "Manhattan",
        "types": [
          "sublocality_level_1",
          "sublocality",
          "political"
        ]
      },
      {
        "long_name": "New York",
        "short_name": "New York",
        "types": [
          "locality",
          "political"
        ]
      },
      {
        "long_name": "New York County",
        "short_name": "New York County",
        "types": [
          "administrative_area_level_2",
          "political"
        ]
      },
      {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
          "administrative_area_level_1",
          "political"
        ]
      },
      {
        "long_name": "United States",
        "short_name": "US",
        "types": [
          "country",
          "political"
        ]
      },
      {
        "long_name": "10128",
        "short_name": "10128",
        "types": [
          "postal_code"
        ]
      }
    ],
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
    "international_phone_number": "+1 212-423-3500",
    "permanently_closed": false,
    "types": [
      "museum",
      "point_of_interest",
      "establishment"
    ],
    "website": "http://www.guggenheim.org/new-york",
    "url": "https://maps.google.com/?cid=333297768485043384",
    "utc_offset": -240
  }
}
```
### required
Indicates to the control that selection of a place is mandatory and that an empty input is not valid.

### Search Bias Properties - searchCountryCode, searchBounds, searchType
These properties can be used to limit the autocomplete search results by country, a bounding geographic rectangle and/or by type of result.

#### searchCountryCode
You can provide an [ISO Alpha-2 Country](http://www.nationsonline.org/oneworld/country_code_list.htm) code to limit results to the given country.

#### searchBounds
`searchBounds` takes an object of the form:
```js
{
  east: number,  // East longitude in degrees.
  west: number,  // West longitude in degrees.
  north: number, // North latitude in degrees.
  south: number, // South latitude in degrees.  
}
```
For example, this area 
```
{ north: 39.144342, east: 1.672126, south: 38.810722, west: 1.164008}
```
includes the island of Ibiza, Spain.

#### searchType
Limits results to a given result type.  Valid types are:
* address
* geocode
* establishment
* (regions) 
* (cities)

## Methods

### focus()
Sets the focus to the input field.

### Convenience Functions
While not needed for the main purpose, the user entering a place, you may have existing data you
need to geocode for use in the element.  We make these functions available here since the Google
API is already loaded.

#### geocode(address)
The `geocode` function takes an address as its parameter and returns a _promise_ for a result which is a _place object_ as described in the place property above.  Note that this does not have any effect on the control's properties (but, of course one could turn around and set the value property with information from the place detail returned).
```js
this.$$('paper-input-place').geocode(address).then(
  function(result) {
    // do something with result (a place object)
  }.bind(this),
  function(status) {
    // do something with status - the reason the geocode did not work
  }.bind(this)
);
```
#### reverseGeocode(latLng)
The `reverseGeocode` function takes a latLng object as it's parameter and returns a _promise_ for a result which is a _place object_ as described in the place property above.  Note that this does not have any effect on the control's properties (but, of course one could turn around and set the value property with information from the place detail returned).
```js
this.$$('paper-input-place').reverseGeocode(latlng).then(
  function(result) {
    // do something with result (a place object)
  }.bind(this),
  function(status) {
    // do something with status - the reason the geocode did not work
  }.bind(this)
);
```
#### putPlace(place)
The `putPlace` function takes a place object and updates the control to reflect that place.
```js
this.$$('paper-input-place').geocode('Qualcomm Stadium').then(
  function(result) {
    // set the control to this place
    this.$$('paper-input-place').putPlace(result);
  }.bind(this),
  function(status) {
    // do something with status - the reason the geocode did not work
  }.bind(this)
);
```

## Styling
### Custom Properties

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-place-icon-mixin`          | Mixin applied to all icons        | `{}`
`--paper-input-place-prefix-icon-mixin`   | Mixin applied to the prefix icon  | `{}`
`--paper-input-place-postfix-icon-mixin`  | Mixin applied to the postfix icon | `{}`

### Paper Input Mixins and Variables
You can style the `paper-input-place` element as you would any `paper-input` element - use the mixins and variables
of `paper-input-container` documented on the [paper-input-container api page](https://www.webcomponents.org/element/PolymerElements/paper-input/elements/paper-input-container). Apply the style to the `paper-input-place` element.

Example: make the `paper-input-place` more green:

```html
<template>
  <style>
    paper-input-place {
      width: 450px;
    }
    paper-input-place.make-it-green {        
      --paper-input-container-underline: {
        border-bottom: 2px dotted lightgreen;
      }
      --paper-input-container-underline-focus: {
        border-bottom: 4px solid green;
      }
      --paper-input-container-label-focus: {
        font-style: italic;
        color: green;
        font-weight: bold;
      }
      --paper-input-container-label: {
        font-style: italic;
        color: lightgreen;
        font-weight: normal;
      }
        --paper-input-container-label-floating: {
        font-style: italic;
        color: darkgreen;
        font-weight: bold;
      }
      /* and a custom property also */
        paper-input-place {
          --paper-input-place-icon-mixin: {
            color: green;
      };
    }
  </style>
  <paper-input-place class="make-it-green" value="{{val}}" place="{{place}}" invalid="{{inv}}" api-key="[[apiKey]]" label="Pick a place, any place" hide-error></paper-input-place>
</template>
```
### Styling the Autocomplete Items List
The list is provided by Google Places Autocomplete and can be styled by CSS classes described [here](https://google-developers.appspot.com/maps/documentation/javascript/places-autocomplete#style_autocomplete).  The trick is the styles must be in the document level (not within a custom element).

Example:  Make the list garish:

index.html
```
<style>
    .pac-container {
      background-color: lightblue;
      border: 2px darkolivegreen ;
      min-width: 450px;
    }
    .pac-item-query {
      font-size: 25px;
    }
    .pac-item:hover {
      background-color: lightgoldenrodyellow;
    }
</style>
```