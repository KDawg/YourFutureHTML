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
    console.log('CoolButton.ready');

    if (this.bodycolor) this.$.btn.className += ' ' + this.bodycolor;
    if (this.size) this.$.btn.className += ' ' + this.size;
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
