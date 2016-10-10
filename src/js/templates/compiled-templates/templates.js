this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};
this["App"]["templates"]["appliction"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"icon-text--vertical button--clear\">\n\n<img class=\"icon-clear "
    + this.escapeExpression(((helper = (helper = helpers.selectedClass || (depth0 != null ? depth0.selectedClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"selectedClass","hash":{},"data":data}) : helper)))
    + "\" src=\"img/icons/icon-clear.png\">\n\n  <span class=\"icon-text__title\">clear</span>\n</button>\n";
},"useData":true});