/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Kyle Widmann",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "(215)-840-5803",
        "email": "Kyle.Widmann@gmail.com",
        "github" : "#",
        "twitter" : "#",
        "location": "San Antonio TX"
    },
    "welcomeMessage": "Welcome to my online resume!  You can find a detailed work history as well as a list of my projects and education history.",
    "skills": [{
        "skill": "C",
        "level": 6
    }, {
        "skill": "Javascript",
        "level": 4
    }, {
        "skill": "HTML/CSS",
        "level": 7
    }, {
        "skill": "PHP",
        "level": 4
    }, {
        "skill": "Java",
        "level": 4
    }],
    "biopic": "images_src/Logo.png",
    "socialMediaLinks": {
        //iClasses come from fontAwesome,  will have to add color using fa class in CSS
        "github": {
            "link": "https://github.com/kwidmann137",
            "iClass": '<i class="fa fa-github-square" aria-hidden="true"></i>'
        },
        "twitter": {
            "link": "https://twitter.com/KyleWidmann",
            "iClass": '<i class="fa fa-twitter-square" aria-hidden="true">'
        },
        "linkedIn": {
            "link": "#",
            "iClass": '<i class="fa fa-linkedin-square" aria-hidden="true"></i>'
        }
    },
    "interests": [{
        "interest": "reading",
        "iClass": '<i class="fa fa-book" aria-hidden="true"></i>'
    }, {
        "interest": "tech",
        "iClass": '<i class="fa fa-laptop" aria-hidden="true"></i>'
    }, {
        "interest": "fitness",
        "iClass": '<i class="fa fa-bicycle" aria-hidden="true"></i>'
    }, {
        "interest": "dogs",
        "iClass": '<i class="fa fa-paw" aria-hidden="true"></i>'
    }, {
        "interest": "golf",
        "iClass": '<i class="fa fa-sun-o" aria-hidden="true"></i>'
    }]
};

var work = {
    //TEMPLATE FOR WORK
    // {
    //     "employer" : "",
    //     "title" : "",
    //     "location" : "",
    //     "dates" : "",
    //     "description" : ""
    // }
    //List in chronological order, starting with most recent
    "jobs": [{
        "employer": "GOLD's Gym",
        "title": "GOLD'SFIT Coach",
        "location": "San Antonio TX",
        "dates": "Aug 2015 - Present",
        "description": "Launched and developed the GOLD'SFIT program, building from 0 to over 100 active athletes.  Oversaw coach development, instructing on proper technique, class management and cueing. Managed customer care and monthly business plans to ensure the business reached goals and continued to grow."
    }, {
        "employer": "GOLD's Gym",
        "title": "Personal Trainer",
        "location": "San Antonio TX",
        "dates": "Feb 2015-Jul 2015",
        "description": "Developed personalized workout routines for clients. Instructed clients on proper form, technique and self-care methods to aid in overall health."
    }, {
        "employer": "United States Navy",
        "title": "Leading Petty Officer",
        "location": "Norfolk VA (USS Bainbridge)",
        "dates": "Jul 2013 - Jan 2015",
        "description": "As Watch Supervisor and Leading Petty Officer led a division of 18 Sailors through training for combat watches as well as daily tasking."
    }, {
        "employer": "United States Navy",
        "title": "Battle Wath Supervisor",
        "location": "Guantanamo Bay Cuba",
        "dates": "Feb 2013 - Jul 2013",
        "description": "Implemented process improvements for daily reports generated by automating data computation, resulting in significantly reduced errors and saving over 100 man hours per month.  Filled a Senior billet as Battle Watch Supervisor overseeing multiple facilities, 6 personnel, and ensuring safe and humane treatment of 151 detained enemy combatants."
    }, {
        "employer": "United States Navy",
        "title": "Second Class Petty Officer",
        "location": "Norfolk VA (Beachmaster Unit Two)",
        "dates": "Nov 2010 - Jan 2013",
        "description": "Conducted weekly training on various topics, oversaw and trained junior Sailors to operate in an amphibious warfare environment, including weapons skills, vehicle operations, and camp support."
    }]

};


var education = {
    //TEMPLATE FOR SCHOOLS
    // {
    //     "name" : "",
    //     "location" : "",
    //     "degree" : "",
    //     "majors" : "",
    //     "dates" : "",
    //     "url" : ""
    // }
    "schools": [{
        "name": "University of Texas at San Antonio",
        "location": "San Antonio TX",
        "degree": "BS",
        "majors": [
            "Computer Science"
        ],
        "dates": "2015-Present",
        "url": "https://www.utsa.edu/"
            // "concentration" : "Software Engineering",
            // "minor" : "Information Systems Security",
            // "GPA" : "4.0"
    }, {
        "name": "Drexel University",
        "location": "Philadelphia PA",
        "degree": "BS",
        "majors": [
            "Mechanical Engineering"
        ],
        "dates": "2007-2009",
        "url": "http://drexel.edu/"
    }],
    "onlineCourses": [
        // TEMPLATE FOR ONLINE SCHOOLS
        // {
        //     "title" : "",
        //     "school" : "",
        //     "date" : "",
        //     "url" : ""
        // }
        {
            "title": "The Complete Web Developer Course",
            "school": "Udemy",
            "dates": "February 2016",
            "url": "https://www.udemy.com/complete-web-developer-course/"
        }, {
            "title": "C Programming for Beginners",
            "school": "Udemy",
            "dates": "June 2016",
            "url": "https://www.udemy.com/c-programming-for-beginners/"
        }
    ]
};

var projects = {
    // TEMPLATE FOR PROJECTS
    // {
    //     "title" : "",
    //     "dates" : "",
    //     "description" : "",
    //     "image" : "",
    //     "url" : ""               // URL to github with code
    // }
    "C": {
        "type": "C",
        "projects": [{
            "title": "Library Transactions",
            "dates": "2016",
            "description": "Develop C code to take an input file, process the commands, build a binary tree ordered by Book ID's, print original book information, process customer transactions, list receipts, and print out new book information.",
            "images": [
                "images_src/library-receipt.jpg"
            ],
            "url": "#"
        }]
    },
    "Java": {
        "type": "Java",
        "projects": [{
            "title": "PONG",
            "dates": "2015",
            "description": "A game of PONG written in Java using the drawing panel.  The objective was to gain experience in and building a game engine and handling user input.",
            "images": [
                "images_src/PONG.png"
            ],

            "url": "#"
        }]
    },
    "Javascript": {
        "type": "Javascript",
        "projects": [{
            "title": "Interactive Resume",
            "dates": "Jun 2016",
            "description": "Objective: learn basic JavaScript syntax, which includes manipulating data, building loops and creating functions. Additionally, learn some simple jQuery DOM manipulation methods to build.",
            "images": [
                "images_src/myResumeScrnSht.png"
            ],
            "url": "#" // URL to github with code
        }, {
            "title": "Frogger",
            "dates": "June 2016",
            "description": "Games have a lot of objects and those objects do a lot of different things; but sometimes they do some very similar things as well. This project was to practice object-oriented programming, an important programming paradigm that influences application architecture and provides performance optimization. Objectives: learn JavaScript’s object oriented programming features to write properly designed classes capable of creating countless instances of similarly functioning objects. Discover a variety of ways inheritance and delegation can be used to create well architected and performant applications.",
            "images": [
                "images_src/FroggerScrnSht.png"
            ],
            "url": "#" // URL to github with code
        }]
    }
};

/****************** HEADER INFO **********************/
bio.display = function (){
    //Append bio pic to header
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#picAndName").prepend(formattedBioPic);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#picAndName").append(formattedName);
    $("#picAndName").append(formattedRole);

    //Social Glyphs
    $('#contactInfo').append(HTMLsocialMediaGlyphsStart);
    for (var site in bio.socialMediaLinks) {
        if (bio.socialMediaLinks[site].hasOwnProperty('link')) {
            //repalce href
            var formattedGlyph = HTMLglyph.replace("%link%", bio.socialMediaLinks[site].link);
            //replace glyph
            formattedGlyph = formattedGlyph.replace("%iClass%", bio.socialMediaLinks[site].iClass);
            //append
            $('#glyphs-ul').append(formattedGlyph);
        }
    }

    //Contact Info
    $('#contactInfo').append(HTMLcontactStart);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#contactInfoUL").append(formattedMobile);
    $("#contactInfoUL").append(formattedEmail);
    $("#contactInfoUL").append(formattedLocation);

    //Apped welcome message to header
    $("#generalInfo").append(HTMLwelcomeMsgStart);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#generalInfo").append(formattedWelcomeMessage);

    //Interests
    $("#generalInfo").append(HTMLinterestStart);

    bio.interests.forEach(function(interest) {
        var formattedInterest = HTMLinterest.replace("%interest%", interest.interest);
        formattedInterest = formattedInterest.replace("%icon%", interest.iClass);
        $("#interestsUL").append(formattedInterest);
    });

    //Display Skills
    $("#skills").append(HTMLskillsStart);
    $("#skillsStart").append(HTMLskillsScale);
    bio.skills.forEach(function(skill) {
        //append skills
        var formattedSkill = HTMLskillName.replace("%data%", skill.skill);
        $("#skillsStart").append(formattedSkill);

        //append icons
        var skillIcon = '<i class="fa fa-file" aria-hidden="true"></i>';
        // var skillIcons = skillIcon.repeat(skill.level * 2);
        var formattedSkillIcons = HTMLskillIcons.replace("%icons%", skillIcon);
        var i;
        for (i = 0; i < 20; i++) {
            if (i < skill.level * 2) {
                $("#skillsStart").append(formattedSkillIcons);
            } else {
                formattedSkillIcons = formattedSkillIcons.replace(skillIcon, "");
                $("#skillsStart").append(formattedSkillIcons);
            }
        }
    });
};

bio.display();



/************************* WORK EXPERIENCE ***********************/
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        var formattedWorkEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

        $(".work-entry:last").append(formattedWorkEntry);
    });
};

work.display();

/******************************* PROJECTS ************************/
projects.display = function() {
    for (var type in projects) {
        if (projects[type].hasOwnProperty('type')) {
            var formattedSection = HTMLprojectCollapseSection.replace(/%ProjectType%/g, projects[type].type);
            $("#projects").append(formattedSection);
            for (var project in projects[type].projects) {
                if (projects[type].projects[project].hasOwnProperty('title')) {
                    // append start to new project
                    $(".project-entry-panel:last").append(HTMLprojectStart);

                    //append project image
                    $(".project-entry:last").append(HTMLprojectImageStart);
                    //Loop through images array and append each to carousel
                    var count = 1;
                    projects[type].projects[project].images.forEach(function(image){
                        var formattedImage;
                        if(count === 1){
                            formattedImage = HTMLprojectImageItem.replace("%data%", image);
                            formattedImage = formattedImage.replace("%data%", image);
                            $(".carousel-inner:last").append(formattedImage);
                            var id = image;
                            var item = document.getElementById(id);
                            console.log(item);
                            item.className += " active";
                            count++;
                        }
                        else{
                            formattedImage = HTMLprojectImageItem.replace("%data%", count);
                            formattedImage = HTMLprojectImageItem.replace("%data%", image);
                            $(".carousel-inner:last").append(formattedImage);
                            count++;
                        }

                    });

                    //append project info
                    $(".project-entry:last").append(HTMLprojectInfo);
                    var formattedTitle = HTMLprojectTitle.replace("%data%", projects[type].projects[project].title);
                    var formattedDates = HTMLprojectDates.replace("%data%", projects[type].projects[project].dates);
                    var formattedSourceCode = HTMLprojectSourceCode.replace("%link%", projects[type].projects[project].url);
                    var formattedDescription = HTMLprojectDescription.replace("%data%", projects[type].projects[project].description);


                    var formattedProject = formattedTitle + formattedDates + formattedSourceCode + formattedDescription;
                    $(".project-info:last").append(formattedProject);
                }
            }
        }

    }
};

projects.display();

/************************************ EDUCATION **********************/

education.display = function() {
    //Start schools section

    //append schools info
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajors;
        school.majors.forEach(function(major){
            formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
        });

        formattedName = formattedName + formattedDegree;

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajors);

        //find link for the entry
        var link = $('.education-entry').find('a').last();

        //set the link equal to shcools URL
        link.attr('href', school.url);
    });

    //Start online course info
    $("#education").append(HTMLonlineClasses);

    //append online course info
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLonlineClassesStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);

        $(".onlineClass-entry:last").append(formattedTitle);
        $(".onlineClass-entry:last").append(formattedSchool);
        $(".onlineClass-entry:last").append(formattedDates);

        //Find the link for the entry
        var link = $('.onlineClass-entry').find('a').last();

        //Set hte link equal to the courses URL
        link.attr('href', course.url);
    });
};

education.display();

// *************************** Technical Skills ***********************
// bio.displaySkills = function() {

// };

// bio.displaySkills();
/**************************** Internationalize Names *********************/
//function to internationalize name
function inName(name) {
    name = name.trim().split(" ");

    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    name[1] = name[1].toUpperCase();

    return name[0] + " " + name[1];

}

//adding the button to internationalize the name
// $("#main").append(internationalizeButton);

/********************* Add the map to show locations ******************/
$("#mapDiv").append(googleMap);