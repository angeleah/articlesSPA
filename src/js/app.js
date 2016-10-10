console.log('hello');
var App = {
  Models: {},
  Views: {},
  Collections: {},
  Dispatcher: _.clone(Backbone.Events),
  Config: {
    el: '#applicationContainer',
  }
};
