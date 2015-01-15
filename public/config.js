System.config({
  "paths": {
    "*": "*.js",
    "ean-jspm/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.9",
    "angular-animate": "github:angular/bower-angular-animate@1.3.9",
    "angular-aria": "github:angular/bower-angular-aria@1.3.9",
    "angular-mocks": "github:angular/bower-angular-mocks@1.3.9",
    "angular-route": "github:angular/bower-angular-route@1.3.9",
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "hammer.js": "github:hammerjs/hammer.js@2.0.4",
    "jquery": "github:components/jquery@2.1.3",
    "github:angular/bower-angular-animate@1.3.9": {
      "angular": "github:angular/bower-angular@1.3.9"
    },
    "github:angular/bower-angular-aria@1.3.9": {
      "angular": "github:angular/bower-angular@1.3.9"
    },
    "github:angular/bower-angular-mocks@1.3.9": {
      "angular": "github:angular/bower-angular@1.3.0-beta.19"
    },
    "github:angular/bower-angular-route@1.3.9": {
      "angular": "github:angular/bower-angular@1.3.9"
    },
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    }
  }
});

