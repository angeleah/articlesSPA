this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["articlesCollection"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"article-list-item\">\n      <span class=\"date\">"
    + alias3(((helper = (helper = helpers.published || (depth0 != null ? depth0.published : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"published","hash":{},"data":data}) : helper)))
    + "</span></br>\n      <span class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></br>\n    </div>\n    <hr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"article-list\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.newsArticles : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});