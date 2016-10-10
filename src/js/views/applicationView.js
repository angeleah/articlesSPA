App.Views.Application = Backbone.View.extend({
  initialize: function() {
    console.log('inside application view');
    new App.Views.ArticlesCollection({ el: App.Config.el });
  }
});
