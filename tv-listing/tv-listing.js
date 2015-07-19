CoolButton = Polymer({

  is: 'tv-listing',

  properties: {
    listingResults: {
      type: Array,
      notify: true
    },

    genre: {
      type: String,
      reflectToAttribute: true,
      notify: true,
      value: 'crime'
    },

    value: {
      type: Number,
      notify: true
    }
  },

  created: function() {
    console.log(this.localName + '#' + this.id + ' was created');
  },

  ready: function() {
    this.listingResults = [];
    this.listingHide();
    this.data = undefined;
   },

  saySomething: function() {
    console.log('Booga Booga Booga');
  },

  // event handlers
  onClicked: function() {
    this.listingLoad();
  },

  listingLoad: function() {
    var GENRE_URLS = {
      comedy: 'tv-listing/mock/comedy_standup_mock.json',
      crime: 'tv-listing/mock/drama_crime_mock.json',
      languages: 'tv-listing/mock/learning_languages_mock.json',
      music: 'tv-listing/mock/music_classicalpoprock_mock.json',
      football: 'tv-listing/mock/sport_football_mock.json'
    };

    var url = GENRE_URLS[this.genre];
    var request = new XMLHttpRequest();
    var _this = this;

    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var response = JSON.parse(request.responseText);

        _this.listingResults = response.broadcasts;
        _this.listingShow();
      } else {
        console.log('server responded an error', request);
      }
    };
    request.onerror = function() {
      console.log('connection error');
    };
    request.send();
  },

  attributeChanged: function(name, type) {
    console.log('CB: ' + this.localName + '#' + this.id + ' attribute ' + name +
      ' was changed to ' + this.getAttribute(name));
  },

  listingHide: function() {
    this.$.programList.hidden = true;
  },

  listingShow: function() {
    this.$.programList.hidden = false;
  },

  onProrgamEntry: function(e) {
    var model = e.model;

    this.fire('tvlisting:clicked', {
      data: model.item,
      index: model.index
    });
  }

});
