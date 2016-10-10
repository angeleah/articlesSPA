App.Views.Article = Backbone.View.extend({
  template: App.templates.article,

  initialize: function(options) {
    this.published = options.published;
    this.title = options.title;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  templateJSON: function() {
    return {
      published: moment(this.published).format('LLLL'),
      title: this.title
    };
  },
});
