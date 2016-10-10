App.Views.ArticlesCollection = Backbone.View.extend({
  articlesFetched: 0,
  articleGroupLength: 10,
  articlesUrl: 'http://www.stellarbiotechnologies.com/media/press-releases/json',
  loading: false,

  initialize: function() {
    this.loadContent();
  },

  currentUrl: function() {
    return this.articlesUrl + '?limit=' + this.articleGroupLength + '&offset=' + this.articlesFetched;
  },

  loadContent: function() {
    if (!this.loading) {
      this.loading = true;

      $.ajax({
        type: 'GET',
        url: this.currentUrl(),
        dataType: 'json',
        crossDomain: true,
      })
        .done(this.handleSuccessfulArticleFetch.bind(this))
        .fail(this.handleUnsuccessfulArticleFetch.bind(this));
    }
  },

  handleSuccessfulArticleFetch: function(responseData) {
    this.loading = false;
    responseData.news.forEach(this.appendArticle.bind(this));
    this.articlesFetched += this.articleGroupLength;
    this.watchToTriggerContentLoad();
  },

  appendArticle: function(article) {
    var article = new App.Views.Article({ published: article.published, title: article.title });
    this.$el.append(article.$el);
  },

  handleUnsuccessfulArticleFetch: function(responseData) {
    console.log("status code" + responseData.status);
    alert("We apologize for the inconvenience. There has been an error.(" + responseData.status+")");
  },

  watchToTriggerContentLoad: function() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  },

  handleScroll: function() {
    var $window = $(window);
    var scrollBottom = ($(document).height() - $window.height() - $window.scrollTop());
    if(scrollBottom <= 15) {
      this.loadContent();
    }
  }
});
