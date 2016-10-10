window.expect = chai.expect;
var xhr;
var requests;
var spies = [];
var stubs = [];

function renderFixture(nodeType, attrs, content) {
  var attributes = _.reduce(attrs, function(memo, value, attr) {
    return memo += " " + attr + '="' + value + '"';
  }, "");

  return [
    "<", nodeType,
    attributes,
    ">",
    content,
    "</" + nodeType + ">"
  ].join("");
}

function appendFixture(nodeType, attrs, content) {
  $("#applicationContainer").append(renderFixture(nodeType, attrs, content));
}

function resetFixture() {
  $("#applicationContainer").empty().off();
}

function spyOn(suspect, method) {
  var spy = sinon.spy(suspect, method);
  spies.push(spy);
  return spy;
}

function stubOut(suspect, method, returnValue) {
  var stub = sinon.stub(suspect, method);
  if (returnValue) {
    stub.returns(returnValue);
  }
  stubs.push(stub);
  return stub;
}

before(function() {
  // this.timeout(10000);

  // sinon.stub(window, "open", function(){
  //   return {
  //     addEventListener: sinon.stub()
  //   };
  // });
});

beforeEach(function(){
  xhr = sinon.useFakeXMLHttpRequest();
  requests = [];
  xhr.onCreate = function(xhr) {
    requests.push(xhr);
  };

  $('body').append("<div id='applicationContainer'/>");
  App.Dispatcher = _.clone(Backbone.Events);
});

afterEach(function() {
  xhr.restore();

  $('#applicationContainer').remove();

  spies.forEach(function(spy) {
    spy.restore();
  });
  spies = [];

  stubs.forEach(function(stub) {
    stub.restore();
  });
  stubs = [];
});
