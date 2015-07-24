CoolButton = Polymer({

  is: 'cool-button',

  properties: {
    bodycolor: {
      type: String,
      notify: true
    },

    size: {
      type: String,
      notify: true
    },

    value: {
      type: Number,
      notify: true
    },

    label: {
      type: String,
      notify: true,
      observer: 'textLabelChanged'
    }
  },

  created: function() {
    console.log(this.localName + '#' + this.id + ' was created');
  },

  ready: function() {
    this.data = undefined;

    if (this._bodyColorValid()) this._bodyColorApply();
    if (this._sizeValid()) this._sizeApply();
  },

  _bodyColorValid: function() {
    var COLORS = ['alazarian', 'green-sea', 'peter-river', 'silver', 'sun-flower', 'wisteria'];
    var isValid = COLORS.indexOf(this.bodycolor) >= 0;

    if (!isValid) console.log('invalid body color [' + this.bodycolor + ']');

    return isValid;
  },

  _bodyColorApply: function() {
    this.$.btn.className += ' ' + this.bodycolor;
  },

  _sizeValid: function() {
    return this.size;
  },

  _sizeApply: function() {
    this.$.btn.className += ' ' + this.size;
  },

  saySomething: function() {
    console.log('Booga Booga Booga');
  },

  setData: function(params) {
    this.data = params;
  },

  // event handlers
  onClicked: function() {
    this.fire('clicked', {
      msg: this.label,
      data: this.value
    });
  },

  textLabelChanged: function(newValue, oldValue) {
    console.log('CoolButton.textLabelChanged changed from [' + oldValue + '] to value [' + newValue + ']');
  },

  attributeChanged: function(name, type) {
    console.log('CB: ' + this.localName + '#' + this.id + ' attribute ' + name +
      ' was changed to ' + this.getAttribute(name));
  }

});
