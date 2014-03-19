this["templates"] = this["templates"] || {};

this["templates"]["popup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div>\n  <h2>"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n\n  <ul>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.liability), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.asset), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.liability), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.liability)),stack1 == null || stack1 === false ? stack1 : stack1.success), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      Liability proof ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.liability)),stack1 == null || stack1 === false ? stack1 : stack1.success), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.liability)),stack1 == null || stack1 === false ? stack1 : stack1.success), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </li>\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "success";
  }

function program5(depth0,data) {
  
  
  return "error";
  }

function program7(depth0,data) {
  
  
  return "successful";
  }

function program9(depth0,data) {
  
  
  return "unsuccessful";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <ul>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.liability)),stack1 == null || stack1 === false ? stack1 : stack1.success)),stack1 == null || stack1 === false ? stack1 : stack1.user)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " balance: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.liability)),stack1 == null || stack1 === false ? stack1 : stack1.success)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>Site liabilities: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.root)),stack1 == null || stack1 === false ? stack1 : stack1.root)),stack1 == null || stack1 === false ? stack1 : stack1.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      </ul>\n      ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.asset)),stack1 == null || stack1 === false ? stack1 : stack1.success), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      Asset proof ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.asset)),stack1 == null || stack1 === false ? stack1 : stack1.success), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.asset)),stack1 == null || stack1 === false ? stack1 : stack1.success), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </li>\n    ";
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <ul>\n        <li>Site assets: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.asset)),stack1 == null || stack1 === false ? stack1 : stack1.success)),stack1 == null || stack1 === false ? stack1 : stack1.balance)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n      </ul>\n      ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"solvency ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.success), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n      Solvency proof ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.success), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".\n    </li>\n    ";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.res), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<!--\n  <div id=\"solvency\">\n    <h1 class=\"hidden error\" id=\"insolvent\">\n      Site insolvent! <span class=\"amount\"></span> missing.\n    </h1>\n    <h1 class=\"hidden success\" id=\"solvent\">\n      Site solvent! <span class=\"amount\"></span> surplus.\n    </h1>\n  </div>\n  <div id=\"lproof\">\n    <h4>Liability proof successful!</h4>\n    <p>\n      <strong>Root hash:</strong> <span id=\"root_hash\"></span><br>\n      <strong>Root value:</strong> <span id=\"root_value\"></span><br>\n      <strong>User:</strong> <span id=\"user\"></span><br>\n      <strong>Balance:</strong> <span id=\"value\"></span><br>\n    </p>\n  </div>\n  <div id=\"aproof\">\n    <h4>Solvency proof successful!</h4>\n    <p>\n      <strong>Site:</strong> <span id=\"site\"></span><br>\n      <strong>Balance:</strong> <span id=\"balance\"></span><br>\n    </p>\n  </div>\n-->\n";
  return buffer;
  });