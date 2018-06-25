import{IronButtonStateImpl,IronButtonState,PaperRippleBehavior,IronControlState,Polymer,PolymerElement,html}from"./my-app.js";const PaperButtonBehaviorImpl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},_spaceKeyDownHandler:function(event){IronButtonStateImpl._spaceKeyDownHandler.call(this,event);if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},_spaceKeyUpHandler:function(event){IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}},PaperButtonBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperButtonBehaviorImpl];var paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer.content);const $_documentContainer$1=document.createElement("template");$_documentContainer$1.setAttribute("style","display: none;");$_documentContainer$1.innerHTML=`<dom-module id="paper-material-styles">
  <template>
    <style>
      :host, html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material), .paper-material {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]), .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]), .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]), .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]), .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]), .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);const $_documentContainer$2=document.createElement("template");$_documentContainer$2.setAttribute("style","display: none;");$_documentContainer$2.innerHTML=`<dom-module id="paper-button">
  <template strip-whitespace="">
    <style include="paper-material-styles">
      /* Need to specify the same specificity as the styles imported from paper-material. */
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;
        box-sizing: border-box;
        min-width: 5.14em;
        margin: 0 0.29em;
        background: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        font: inherit;
        text-transform: uppercase;
        outline-width: 0;
        border-radius: 3px;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        padding: 0.7em 0.57em;

        @apply --paper-font-common-base;
        @apply --paper-button;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([raised].keyboard-focus) {
        font-weight: bold;
        @apply --paper-button-raised-keyboard-focus;
      }

      :host(:not([raised]).keyboard-focus) {
        font-weight: bold;
        @apply --paper-button-flat-keyboard-focus;
      }

      :host([disabled]) {
        background: #eaeaea;
        color: #a8a8a8;
        cursor: auto;
        pointer-events: none;

        @apply --paper-button-disabled;
      }

      :host([animated]) {
        @apply --shadow-transition;
      }

      paper-ripple {
        color: var(--paper-button-ink-color);
      }
    </style>

    <slot></slot>
  </template>

  
</dom-module>`;document.head.appendChild($_documentContainer$2.content);Polymer({is:"paper-button",behaviors:[PaperButtonBehavior],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){if(!this.raised){this._setElevation(0)}else{PaperButtonBehaviorImpl._calculateElevation.apply(this)}}});class MyView3 extends PolymerElement{static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        paper-input-place {
        width: 450px;
      }
      .demo-area {
        margin: 15px;
        width: 100%;
      }
      </style>

      <div class="demo-area">
        <h2>Geolocation and Reverse Geocoding</h2>
        <paper-button id="btnGetCurrentLocation" raised on-tap="_getCurrentLocation" disabled$="[[_currLocErr]]">
      Get My Location
    </paper-button>
    <br/>
    <paper-input-place id="pip" hide-error value="{{val}}" place="{{place}}" api-key="[[apiKey]]" label="Pick a place, any place"></paper-input-place>
    <br/>
        <div id="sources"></div>
        <h3>Results</h3>
        <h4>Value</h4>
        <demo-show-object show-object="[[val]]"></demo-show-object>
        <h4>Place</h4>
        <demo-show-object show-object="[[place]]"></demo-show-object>
        <br/>
      </div>
    `}static get properties(){return{apiKey:{type:String,value:"AIzaSyBmsetVvB1KlWoSbEXYQg1leRZO1PVPm_Q",notify:!0},val:{type:Object,notify:!0,value:function(){return{search:"",place_id:"",latLng:{lat:0,lng:0}}}},place:{type:Object,notify:!0},inv:{type:Boolean,notify:!0},_currLocErr:{type:Boolean,notify:!0,value:!1}}}connectedCallback(){super.connectedCallback();setTimeout(()=>{this._showSource()},1e3)}_getCurrentLocation(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition(pos=>{this.$.pip.reverseGeocode({lat:pos.coords.latitude,lng:pos.coords.longitude}).then(result=>{this.$.pip.putPlace(result)},status=>{alert("reverseGeocode error: "+status)})},err=>{alert("browser did not return a location: "+err);this._currLocErr=!0},{maximumAge:5e5,enableHighAccuracy:!0,timeout:18e3})}else{this._currLocErr=!0}}_showSource(){const markup=hljs.highlight("xml",`
    <paper-button id="btnGetCurrentLocation" raised on-tap="_getCurrentLocation" disabled$="[[_currLocErr]]">
      Get My Location
    </paper-button>
    <br/>
    <paper-input-place id="pip" hide-error value="{{val}}" place="{{place}}" api-key="[[apiKey]]" label="Pick a place, any place"></paper-input-place>
    `);this.$.sources.innerHTML=`
    <h3>Markup - Geolocation and Reverse Geocoding</h3>
    <pre><code class="html">${markup.value}</code></pre>`;const jsCode=hljs.highlight("javascript",`
    /**
     * handle click on get my location button
     */
    _getCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.$.pip.reverseGeocode({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              })
              .then((result) => {
                  this.$.pip.putPlace(result);
                },
                (status) => {
                  alert('reverseGeocode error: ' + status);
                }
              )},
          (err) => {
            alert('browser did not return a location: ' + err);
            this._currLocErr = true; // disable button
          }, {
            maximumAge: 500000,
            enableHighAccuracy: true,
            timeout: 18000
          });
      } else {
        // browser does not support geolocation
        this._currLocErr = true;
      }
    }
  
    `);this.$.sources.innerHTML+=`
    <h3>Javascript - Geolocation and Reverse Geocoding</h3>
    <pre><code class="js">${jsCode.value}</code></pre>`}}window.customElements.define("my-view3",MyView3);export{paperButtonBehavior as $paperButtonBehavior,PaperButtonBehaviorImpl,PaperButtonBehavior};