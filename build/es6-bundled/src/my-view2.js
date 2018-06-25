define(["./my-app.js"],function(_myApp){"use strict";class MyView2 extends _myApp.PolymerElement{static get template(){return _myApp.html`
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
        <h2>With Validation</h2>
        <paper-input-place value="{{val}}" place="{{place}}" invalid="{{inv}}" api-key="[[apiKey]]" label="Pick a place, any place"></paper-input-place>
        <br/>
        <div id="sources"></div>
        <h3>Results</h3>
        <h4>Is Input Invalid?</h4>
        <span hidden$="[[!inv]]" style="color:red;">True (entry is invalid)</span><span hidden$="[[inv]]" style="color:green;">False (entry is valid)</span>
        <h4>Value</h4>
        <demo-show-object show-object="[[val]]"></demo-show-object>
        <h4>Place</h4>
        <demo-show-object show-object="[[place]]"></demo-show-object>
        <br/>
      </div>
    `}static get properties(){return{apiKey:{type:String,value:"AIzaSyBmsetVvB1KlWoSbEXYQg1leRZO1PVPm_Q",notify:!0},val:{type:Object,notify:!0,value:function(){return{search:"",place_id:"",latLng:{lat:0,lng:0}}}},place:{type:Object,notify:!0},inv:{type:Boolean,notify:!0}}}connectedCallback(){super.connectedCallback();setTimeout(()=>{this._showSource()},1e3)}_showSource(){const markup=hljs.highlight("xml",`
    <paper-input-place value="{{val}}" place="{{place}}" invalid="{{inv}}" api-key="[[apiKey]]" label="Pick a place, any place"></paper-input-place>
    `);this.$.sources.innerHTML=`
    <h3>Markup - Basic Use, With Validation</h3>
    <pre><code class="html">${markup.value}</code></pre>`}}window.customElements.define("my-view2",MyView2)});