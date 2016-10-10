this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["articlesCollection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"article-list\">\n  "
    + this.escapeExpression(((helper = (helper = helpers.testValue || (depth0 != null ? depth0.testValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"testValue","hash":{},"data":data}) : helper)))
    + "\n</div>\n";
},"useData":true});