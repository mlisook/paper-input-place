# paper-input-place

Google Places Autocomplete attached to a paper-input, providing a convenient material design input for places.

[Live Demo](https://mlisook.github.io/paper-input-place/)

Basic use:

```html
<paper-input-place api-key="your google api key" value="{{tourstop.place}}"></paper-input-place>
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
## Additional Properties
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
### hide-error
If specified the element doesn't display an error message and doesn't turn red
### search-value
Use this to set a default search value
## Methods - Convenience Functions
### geocode(address)
The `geocode` function takes an address as it's parameter and returns a _promise_ for a result which is a _place object_ as described in the place property above.  Note that this does not have any effect on the control's properties (but, of course one could turn around and set the value property with information from the place detail returned).
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
### reverseGeocode(latLng)
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
