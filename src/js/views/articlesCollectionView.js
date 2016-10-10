App.Views.ArticlesCollection = Backbone.View.extend({
  template: App.templates.articlesCollection,
  articlesFetched: 0,
  articleGroupLength: 10,
  articlesUrl: 'http://www.stellarbiotechnologies.com/media/press-releases/json',

  initialize: function() {
    console.log('inside application view');
    this.loadContent();
  },

  render: function() {
    this.$el.html(this.template(this.templateJSON()));
  },

  currentUrl: function() {
    return this.articlesUrl + '?limit=' + this.articleGroupLength + '&offset=' + this.articlesFetched;
  },

  loadContent: function() {
    $.ajax({
      type: 'GET',
      url: this.currentUrl(),
      dataType: 'json',
      crossDomain: true,
    })
      .done(_.bind(this.handleSuccessfulArticleFetch, this))
      .fail(_.bind(this.handleUnsuccessfulArticleFetch, this));
  },

  handleSuccessfulArticleFetch: function(responseData) {
    console.log(responseData);
    this.newsArticles = responseData.news;
    console.log(this.newsArticles);
    this.render();
  },

  handleUnsuccessfulArticleFetch: function(responseData) {
    console.log("status code" + responseData.status);
    alert("We apologize for the inconvenience. There has been an error.(" + responseData.status+")");
  },

  templateJSON: function() {
    return {
      newsArticles: this.newsArticles,
    };
  },
});
