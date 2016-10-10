this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["article"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"article-list-item\">\n  <span class=\"date\">"
    + alias3(((helper = (helper = helpers.published || (depth0 != null ? depth0.published : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"published","hash":{},"data":data}) : helper)))
    + "</span></br>\n  <span class=\"title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></br>\n</div>\n<hr>\n";
},"useData":true});