// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })

    .state('about-us', {
        url: "/about-us",
        templateUrl: "views/template.html",
        controller: 'AboutCtrl'
    })

    .state('services', {
        url: "/services",
        templateUrl: "views/template.html",
        controller: 'ServicesCtrl'
    })

    .state('affiliates', {
        url: "/affiliates",
        templateUrl: "views/template.html",
        controller: 'AffiliatesCtrl'
    })

    .state('careers', {
        url: "/careers",
        templateUrl: "views/template.html",
        controller: 'CareersCtrl'
    })

    .state('clients', {
        url: "/clients",
        templateUrl: "views/template.html",
        controller: 'ClientsCtrl'
    })


    .state('downloads', {
        url: "/downloads",
        templateUrl: "views/template.html",
        controller: 'DownloadsCtrl'
    })

    .state('contact-us', {
        url: "/contact-us",
        templateUrl: "views/template.html",
        controller: 'ContactCtrl'
    });


    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.filter('uploadpath', function($sce) {
    return function(input, width, height, style) {
        if (input && input.indexOf(".pdf") != -1) {
            return $sce.trustAsResourceUrl(imgurl + input);
        }
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (input) {
            console.log('input', input);
            return imgurl + input + other;
            console.log('imgurl + input + other', imgurl + input + other);
        }
    };
});


firstapp.directive('uploadImage', function($http) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.upload = function(image) {
                console.log(image);
                console.log("File");
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
});

firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            console.log("Loading should start now", attrs.imageonload);
            scope.attr = attrs;
            scope.$watch(
                "attr.change",
                function handleFooChange(newValue, oldValue) {
                    setTimeout(function() {
                        scope.$apply(attrs.imageonload);
                    }, 500);

                }
            );


        }
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
firstapp.directive('autoHeight', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var newheight = windowHeight - 300;
            var addHeight = function() {
                $element.css("min-height", newheight);
            };
            addHeight();
        }
    };
});

firstapp.directive('scrolldown', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            // var windowHeight = $(window).height();
            $scope.scrollDown = function() {
                $('html,body').animate({
                        scrollTop: $(".second").offset().top
                    },
                    'slow');
            }
        }
    };
});

firstapp.directive('scrolldown1', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            // var windowHeight = $(window).height();
            $scope.scrollDown1 = function() {
                $('html,body').animate({
                        scrollTop: $(".second1").offset().top
                    },
                    'slow');
            }
        }
    };
});
