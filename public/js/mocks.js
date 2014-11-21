define(function (require) {
    
    // Ajax Mock Responses //

    // Data Types
    $.mockJSON.data.VIEW_SET_TITLE = [
        "Tortor rhoncdsddcdus",
        "Dignisdssim",
        "Natoqusdsade",
        "Scelersadadsaisque"
    ];

    $.mockJSON.data.MENU_ITEM = [
        "Homfdsfe",
        "About",
        "Contact Us",
        "More"
    ];

    $.mockJSON.data.VIEW_SET_DESCRIPTION = [
        "",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nisi vel mauris ultrices viverra. Praesent a egestas arcu. Nunc quis leo felis. Aliquam commodo consectetur euismod. Vestibulum ullamcorper at odio ut iaculis. In non libero eget libero consequat egestas quis vitae orci. Fusce dictum in leo quis sagittis."
    ];

    $.mockJSON.data.SITE_DESCRIPTION = [
        "Suspendisse auctor posuere sapien vitae porta. Integer ut fringilla justo. Nunc cursus volutpat velit, quis malesuada dolor consequat vehicula. Vestibulum rhoncus risus a luctus porta. Vestibulum ut lorem et nisl rhoncus tincidunt ut non erat. Cras vel neque id risus semper dignissim.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis nisi vel mauris ultrices viverra. Praesent a egestas arcu. Nunc quis leo felis. Aliquam commodo consectetur euismod. Vestibulum ullamcorper at odio ut iaculis. In non libero eget libero consequat egestas quis vitae orci. Fusce dictum in leo quis sagittis.",
        "Morbi vulputate condimentum dolor pulvinar sollicitudin. In accumsan venenatis felis. Maecenas eu eleifend purus. Maecenas lobortis adipiscing orci. Fusce bibendum, purus a imperdiet gravida, tortor magna posuere turpis, et dictum ante lorem id enim. Pellentesque dignissim tincidunt rutrum."
    ];

    // Response Templates
    $.mockJSON("mockViewSetUrl", [
        {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION",
            "count|2-12": 0
        },{
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION",
            "count|2-12": 0
        },{
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION",
            "count|2-12": 0
        },{
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION",
            "count|2-12": 0
        },{
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION",
            "count|2-12": 0
        }
    ], 250);

    $.mockJSON("mockViewListUrl", [
        {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION"
        }, {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION"
        }, {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION"
        }, {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION"
        }, {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION"
        }, {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION"
        }, {
            "title": "@VIEW_SET_TITLE",
            "description": "@VIEW_SET_DESCRIPTION"
        }
    ], 250);

    $.mockJSON("mockUserDataUrl", {
            "userName": "Name 1",
            "userId": "ID 1",
            "Designation": "Trainee",
            "skills":[
                {
                    "skillTitle": "Interface Analysis",
                    "firstUsed": "< 3 years",
                    "lastUsed": "< 1 years",
                    "expertiseLevel": "medium",   
                    "skillId": "ITA",
                    "parentId": "BA"
                },
                {
                    "skillTitle":"Use Case Detailing",
                    "firstUsed": "< 3 years",
                    "lastUsed": "< 1 years",
                    "expertiseLevel": "medium",   
                    "skillId": "UCD", 
                    "parentId": "BA"
                },
                {
                    "skillTitle": "Business Intelligence and Data Warehousing",
                    "firstUsed": "< 3 years",
                    "lastUsed": "< 1 years",
                    "expertiseLevel": "medium",   
                    "skillId": "BID",
                    "parentId": "DEV"
                },
                {
                    "skillTitle": "e-Commerce",
                    "firstUsed": "< 3 years",
                    "lastUsed": "< 1 years",
                    "expertiseLevel": "medium",   
                    "skillId": "EC", 
                    "parentId": "DE"
                },
                {
                    "skillTitle": "Gaming",
                    "firstUsed": "< 3 years",
                    "lastUsed": "< 1 years",
                    "expertiseLevel": "medium",   
                    "skillId": "G", 
                    "parentId": "DE"
                }
            ]
    }, 250);

    $.mockJSON("mockSkillSetDataUrl", [
        {
            "skillTitle": "Business Analytics",
            "skillId": "BA",
            "subSkills":[
                {
                    "skillTitle": "Brainstorming",
                    "skillId": "BS"
                },
                {
                    "skillTitle": "Conducting Feasibility Study",
                    "skillId": "CFS"
                },
                {
                    "skillTitle": "Interface Analysis",
                    "skillId": "ITA"
                },
                {
                    "skillTitle": "Information Architechture",
                    "skillId": "IFA"
                },
                {
                    "skillTitle": "Use Case Detailing",
                    "skillId": "UCD"
                },
                {
                    "skillTitle": "User Task Analysis",
                    "skillId": "UTA"
                }
            ]
        },
        {
            "skillTitle": "Development",
            "skillId": "DEV", 
            "subSkills":[
                {
                    "skillTitle": "Application Types",
                    "skillId": "AT"
                },
                {
                    "skillTitle": "Business Intelligence and Data Warehousing",
                    "skillId": "BID"
                },
                {
                    "skillTitle": "Tools",
                    "skillId": "T" 
                }
            ]
        },
        {
            "skillTitle" : "Domain Experience",
            "skillId": "DE", 
            "subSkills":[
                {
                    "skillTitle": "Aviation",
                    "skillId": "AV"
                },
                {
                    "skillTitle": "Banking",
                    "skillId": "B"
                },
                {
                    "skillTitle": "Education",
                    "skillId": "EDU"
                },
                {
                    "skillTitle": "e-Commerce",
                    "skillId": "EC"
                },
                {
                    "skillTitle": "Electrical",
                    "skillId": "EL"
                },
                {
                    "skillTitle": "Finance",
                    "skillId": "F"
                },
                {
                    "skillTitle": "Gaming",
                    "skillId": "G"
                }
            ]
        }
    ], 250);

});