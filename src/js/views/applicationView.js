App.Views.Application = Backbone.View.extend({
  initialize: function() {
    new App.Views.ArticlesCollection({ el: App.Config.el });
  }
});
