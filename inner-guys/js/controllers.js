angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'imageupload'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [{
        image: 'img/slides/slide1.jpg',
        title: 'Bridging the gap. Positively',
        text: 'Innergize Solutions Private Limited is a strategy and management consultancy firm that provides a broad spectrum of services across diverse clientele that ranges from private corporations to financial institutions and even  high net worthy individuals.',
        pagelink: 'about-us',
        pagename: 'About Us'
    }, {
        image: 'img/about/about.jpg',
        // title: 'Services',
        text: 'Innergize offers a comprehensive range of strategic, advisory and execution services that are customized to the grass root reality of the customer’s business environment to harness sustainable, competence and process driven results. Our functional area experts and affiliates ensure that your business is operating at optimal levels.',
        pagelink: 'services',
        pagename: 'services'
    }];

    angular.element(document).ready(function() {
        $scope.autoHeight = $(window).height() - 120;
    });
})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about-us");
    $scope.menutitle = NavigationService.makeactive("About Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ServicesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("services");
    $scope.menutitle = NavigationService.makeactive("Services");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.services = [{
        title: "Strategic, Financial and Business Management",
        content: "<p>We have a holistic approach to diverse business needs in a dynamic economic climate. We review and optimize your business strategy, not just from a financial point of view but also from an overall business, legal and a long-term growth perspective.</p><ul class='dot-blue dot-grey list-unstyled'><li>Strategic Consulting Services</li><li>Business Model Planning</li><li>Corporate Structuring Advisory Services</li><li>Financial Structuring and Planning Services</li><li>Project Feasibility Report Preparation</li><li>Direct and Indirect Taxation Planning</li><li>Financial, Legal, Liability and Business Risks Identification and Mitigation Services</li></ul>"
    }, {
        title: "TRANSACTION SUPPORT AND DUE DILIGENCE",
        content: "<p>In the globalized market of strategic investment and mergers and acquisitions, you need a partner who can unlock hidden value and avoid commercial pitfalls.</p><ul class='dot-blue dot-grey list-unstyled'><li>Financial, Tax, Legal, IPR, Human Resources and Business Due Diligence</li><li>Identification of Value Drivers</li><li>Identification of Risks and Risk Mitigation Approaches</li><li>Transaction Structuring</li><li>Financial Forecasting and Assumption Evaluation</li><li>Feasibility Studies</li><li>Working Capital Assessments</li><li>	Negotiation Support</li><li>Internal Control Evaluation </li><li>Agreed Upon Processes </li></ul>"
    }, {
        title: "EXECUTION SUPPORT",
        content: "<p>Putting together a strategy is one thing, executing it is a whole other thing. Unlike most strategy and management consultants, we ensure that the strategy is implemented across all levels, creating real and effective change in the organization.</p><ul class='dot-blue dot-grey list-unstyled'><li>Planning and Budgeting Support</li><li>Reporting Processes Support</li><li>Long Term and Short Term Financial Arrangement Support</li><li>Performance Management Support</li><li>Legal Documentation Support</li><li>Human Resource Management Support</li><li>Risk Mitigation Support</li><li>Intellectual Property Portfolio Management Support</li><li>Currency and Treasury Management Support</li><li>Business Integration Support (in Mergers and Amalgamations) </li><li>IPO Support </li><li>Corporate Governance Support</li></ul>"
    }, {
        title: "ADVISORY ON FOREIGN BUSINESS SETUP IN INDIA",
        content: "<p>In recent years, India has been attracting numerous foreign companies who are keen on tapping its vast potential. But the country being a maze of varied population, traditions and cultures, time-consuming registrations, bureaucratic clearances, linguistic hurdles and red tape; the lucrative opportunity translates into a tricky challenge while understanding its social and business nuances.</p><p>To interpret this multi-cultural and political mélange; Innergize Solutions assists foreign companies to build their foundation in India and propel them in the direction of success. We offer a portfolio of services that encompass everything from secretarial, legal, accounting, taxation, intellectual property, financial, human resources and much more to ensure that every essential aspect is implemented systematically, without having to repeatedly approach multiple agencies. These services can be totally customized according to specific needs which would enable the foreign entities to confidently establish and smoothly commence and sustain operations in India.</p><p>The Foreign Business Support team is highly conversant and experienced in finance, taxation and corporate matters. Our expert team of professionals provide strategic advice, assistance, execution and continued support at every stage to any foreign company or investor before and after entering India.</p><p>Our comprehensive spectrum includes the following services:</p><ul class='dot-blue dot-grey list-unstyled'><li>Company Formation</li><li>Secretarial Compliances</li><li>Regulatory Compliances</li><li>Direct Tax Registrations and Compliances</li><li>Indirect Taxation and Registrations</li><li>Manpower, Remuneration and HR Related Procedures and Compliances</li><li>Business Planning and Operations</li><li>Financing of Business Operations</li><li>IFRS Implementation Services</li><li>Legal Support Services</li><li>Intellectual Property Services</li><li>Other Support Services</li></ul>"
    }, {
        title: "HEALTHCARE INFRASTRUCTURE CONSULTING",
        content: "<p>The Indian Healthcare Sector has become highly competitive and in order to keep pace with the ever changing environment, Innergize has developed a strong strategy and management practice and an experienced team to shoulder challenging projects and operations of its clients in the healthcare arena. We provide dedicated healthcare advisory services from strategy to implementation.</p><p>We support our clients to focus and redefine their healthcare strategy to achieve enhanced quality and economically viable operations. We understand their needs and provide answers with tailored approach through a combination of strategic, operational and financial skills.</p><p>The Healthcare Infrastructure Consulting is headed by healthcare management professionals with decades of Hospital and Health Care industry experience. The team’s forte lies in hospital and healthcare projects, wherein they bring their matured experience, right from conceptualization, designing, commissioning to making it a commercial success.</p><ul class='dot-blue dot-grey list-unstyled'><li>Greenfield Projects</li><li>Tendering and Project Management Support</li><li>Commissioning Support</li><li>Upgradation and Modernization</li><li>Architectural and Structural Design</li><li>Strategic, Financial and Business Consulting Services</li><li>Transaction Support and Due Diligence Services</li><li>Execution Support Services</li><li>Accreditation Consultancy (JCI, NABH, NABL, ISO 9001)</li><li>Developing SOPs, Policies, Tariffs, etc.</li><li>Hospital Management Information System Consulting</li><li>Intellectual Property Rights</li><li>Human Resources, Training, Manpower Planning, Selection and Recruitment</li></ul></div>"
    }];
})

.controller('AffiliatesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("affiliates");
    $scope.menutitle = NavigationService.makeactive("Affiliates");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ClientsCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("clients");
    $scope.menutitle = NavigationService.makeactive("Clients");
    TemplateService.title = $scope.menutitle;
    $scope.clients = [];
    $scope.navigation = NavigationService.getnav();
    $scope.client = [{
        img: "img/clients/c1.jpg",
        name: "Bharat Serums and Vaccines",
        link: "https://www.bharatserums.com/"
    }, {
        img: "img/clients/c2.jpg",
        name: "Siro Clinpharm",
        link: "http://www.siroclinpharm.com/"

    }, {
        img: "img/clients/c3.jpg",
        name: "Bhilai Engineering Corporation",
        link: "http://bec-group.com/",

    }, {
        img: "img/clients/c4.jpg",
        name: "Ar-Ex Laboratories",
        link: "http://www.arexlab.com/",

    }, {
        img: "img/clients/c5.jpg",
        name: "BioXera Pharma",
        link: "http://www.bioxerapharma.com/",

    }, {
        img: "img/clients/c10.jpg",
        name: "Rodium Realty",
        link: "http://www.rodium.net/",

    }, {
        img: "img/clients/c18.jpg",
        name: "Lubrikote Specialities",
        link: "http://www.lubrikote.com/",

    }, {
        img: "img/clients/c12.jpg",
        name: "Shakti Insulated Wires",
        link: "http://www.shaktins.com/",

    }, {
        img: "img/clients/c6.jpg",
        name: "HLE Engineers",
        link: "http://www.hlengineers.com/",

    }, {
        img: "img/clients/c16.jpg",
        name: "Yashashvi Rasayan",
        link: "http://www.yashrasayan.com/Yashashvi-Rasayan-Pvt-Ltd.html",

    }, {
        img: "img/clients/c15.jpg",
        name: "Urban Science",
        link: "http://www.urbanscience.com/",

    }, {
        img: "img/clients/c9.jpg",
        name: "Simitri 	Group International",
        link: "http://www.simitrigroup.com/",

    }, {
        img: "img/clients/c11.jpg",
        name: "Salt Health Solutions ",
        link: "https://www.facebook.com/SALT-Health-Solutions-INDIA-1512796098963358/",
    }, {
        img: "img/clients/c8.jpg",
        name: "Harris Pye Engineering ",
        link: "http://www.harrispye.com/",

    }, {
        img: "img/clients/c13.jpg",
        name: "Sportsmed Mumbai",
        link: "http://www.sportsmed.in/",

    }, {
        img: "img/clients/c17.jpg",
        name: "Aura Art",
        link: "http://www.auraart.in/#/home",

    }, {
        img: "img/clients/c7.jpg",
        name: "H.N. Indigos",
        link: "http://www.hnindigos.com/",
    }, {
        img: "img/clients/c14.jpg",
        name: "S&T Group",
        link: "http://s-tgroup.com/",

    }, {
        img: "img/clients/c19.jpg",
        name: "Zenith Tins",
        link: "http://www.zenithtins.com/",

    }, {
        img: "img/clients/c20.jpg",
        name: "Morpheus Lifesciences",
        link: "http://www.morpheusivf.com/",

    }, {
        img: "img/clients/c21.jpg",
        name: "Amy Billimoria House of Design",
        link: "http://amybillimoria.com/",

    }, {
        img: "img/clients/c22.jpg",
        name: "ASUTOSH Hospital",
        link: "http://www.asutoshindia.com/",

    }, {
        img: "img/clients/c23.jpg",
        name: "Kasiak Research",
        link: "http://www.kasiakresearch.com/",

    }, {
        img: "img/clients/c24.jpg",
        name: "Savani Transport",
        link: "http://www.savani-india.com/branchnet.asp",
    }];

    $scope.client = _.chunk($scope.client, 8);
    _.each($scope.client, function(key) {
        $scope.clients.push(_.chunk(key, 4));
    });

    var navigationUrl = function(event) {
        if (event.ctrlKey) {
            window.open(client, '_blank'); // in new tab
        } else {
            $location.path(url); // in same tab
        }
    };
})

.controller('DownloadsCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("downloads");
    $scope.menutitle = NavigationService.makeactive("Downloads");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.open = function(pdf) {
        $scope.modalPdf = pdf.pdf;

        $uibModal.open({
            templateUrl: 'views/content/modal-download.html',
            controller: 'DownloadsCtrl',
            scope: $scope
        });
    }

    // $scope.close = function() {
    //   $uibModalInstance.dismiss('cancel');
    // };

    NavigationService.getCategoryData(function(data) {

        $scope.Categories = data;

        console.log('111', $scope.Categories);

    });
    var id = '1';
    $scope.OnclickId = function(id) {

        NavigationService.getCategoryId(id, function(data) {

            $scope.CategoriesWithId = data;
            // $scope.CategoriesWithpdf = data.pdf;

            console.log('CategoriesWithId', $scope.CategoriesWithId);

        });
    }
    $scope.OnclickId(id);





})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contact-us");
    $scope.menutitle = NavigationService.makeactive("Contact Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formData = {};
    $scope.formData.enquiryarr = [];

    $scope.submitContactForm = function(formValid) {
        $scope.formData.enquiry = "";
        if (formValid.$valid && $scope.formData) {
            if ($scope.formData.enquiryarr.length > 0) {
                _.each($scope.formData.enquiryarr, function(n) {
                    $scope.formData.enquiry += n + ",";
                })
                $scope.formData.enquiry = $scope.formData.enquiry.substring(0, $scope.formData.enquiry.length - 1);
            }
            $scope.formData.services = $scope.formData.enquiryarr.toString();
            NavigationService.submitContact($scope.formData, function(data) {
                console.log(data);
                if (data.value != false) {
                    $scope.thankyouact = true;
                }
            });
        }
    };

    $scope.pushorpop = function(val) {
        var foundIndex = $scope.formData.enquiryarr.indexOf(val);
        if (foundIndex == -1) {
            $scope.formData.enquiryarr.push(val);
        } else {
            $scope.formData.enquiryarr.splice(foundIndex, 1);
        }
    }
})

.controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("careers");
    $scope.menutitle = NavigationService.makeactive("Careers");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.formData = {};
    $scope.submitCareersForm = function(formValid) {
        if (formValid.$valid && $scope.formData) {
            NavigationService.submitCareers($scope.formData, function(data) {
                console.log(data);
                if (data.value != false) {
                    $scope.thankyouact = true;
                }
            });
        }
    };

    $scope.changeit = function(data) {
        console.log(data);
        $scope.formData.resume = data.data[0];
    }
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $scope.showBar = "";
    $scope.showMenu = "menu-in";
    $scope.getMenu = function() {
        if ($scope.showMenu == "menu-out") {
            $scope.showMenu = "menu-in";
            $scope.showBar = "";
        } else {
            $scope.showMenu = "menu-out";
            $scope.showBar = "cross-bar";
        }
    };
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };
});
