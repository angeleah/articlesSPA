App.Views.ArticlesCollection = Backbone.View.extend({
  template: App.templates.articlesCollection,

  initialize: function() {
    console.log('inside articles collection view');
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      testValue: 'cool',
    };
  },
});
