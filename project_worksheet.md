# Project Overview
<img src= 'https://i.imgur.com/8GfRGgU.jpg'>

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 Feb 27| Project Description | Incomplete
|Day 1 Feb 27| Wireframes / Priority Matrix / Functional Components | Incomplete
|Day 2 Feb 28| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 2-4 Feb 28- Mar 2| Pseudocode / actual code | Incomplete
|Day 5-6 Mar 3- Mar 4| Initial Clickable Model  | Incomplete
|Day 7 Mar- 5| MVP | Incomplete
|Day 8 Mar - 6| Present | Incomplete


## Project Description

The Torandos FC app will be the source for all scheduling information for the soccer club. Whether needing the practice schedule, curious about where the team is in league standings, or if they should need to contact someone from their team, the Torandos FC App will be their go to source. I will be using React on Rails and Postgresql.

## Wireframes

https://cloudinary.com/console/media_library/folders/all/P4%20Wireframes

## Priority Matrix

(For MVP)
https://res.cloudinary.com/dvs0stnjy/image/upload/v1551213347/P4%20Priority%20Matrix/587E7961-87AD-4C17-A0DE-2F557EFE93CE.jpg


(For Post-MVP)
https://res.cloudinary.com/dvs0stnjy/image/upload/v1551213347/P4%20Priority%20Matrix/67071806-9C6B-47F5-A6BA-BB7EBE0549E2.jpg


(Matrix)
https://res.cloudinary.com/dvs0stnjy/image/upload/v1551213346/P4%20Priority%20Matrix/5F1FC66C-736B-4EE3-9C88-6591CA0D2AD4.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  


#### MVP 

-Create landing page for users or admin

-Create admin login page

-Create "home" page for user to select what to view

-Users can view their specific team's game schedule or the league's full schedule

-User can view the league's standing's table

-User can view only their team's roster

-User can view only their team's practice schedule

-Create Admin "home" page for admin to select what to view/update

-Admin can view all team's and league schedules

-Admin can view all team's rosters

-Admin can do full CRUD on databases

-Build back end databases with tables for:

	-Team Rosters
	-Leagues with teams
	-Team Games Schedule
	-Team Practice Schedule
	-User information specific to team rosters(parents of team roster)

-Mobile responsive

#### PostMVP 

-Mapbox location of fields for games and practices

-Messaging/notification system from Admin to Users


## Architectural Design

<img src= 'https://res.cloudinary.com/dvs0stnjy/image/upload/v1551210257/P4%20Components/E064EB72-5BA4-4C29-B5B8-17E5CF2B451D.jpg'>

## ERD

<img src= 'https://res.cloudinary.com/dvs0stnjy/image/upload/v1551211886/P4%20ERD/687870A8-5AD1-42D8-8A23-4F53F4F2FA39.jpg'>

## UI Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  

| Landing | First page with option for which schedule to view or admin| 
| Admin | Admin will login with email/password |

| Teamn Schedule | Team's game schedule |
| Practice Schedule | Team's practice schedule |
| League Schedule | Every team's game schedule in the league|
| League Standing | Where every team sits based off points |
| Team Roster | User's specific team roster with name, age, position and phone number to contact |

| Admin Landing| Page for admin to select which schedule to edit |
| Team Schedule Admin | Page for admin to pick, view, and edit/delete a team's game schedule |
| Update Game Form | Form for admin to update team's schedule |
| Add Game Form | Form for admin to add a game to a schedule |

| Team Practice Admin | Page for admin to pick and view a team's practice schedule |
| Practice Update Form | Form for admin to update practice schedule |
| Add Practice Form | Form for admin to add practice session |

| League Schedule Admin | Page for admin to view and edit/delete league schedule |
| Update Game Form | Form for admin to update league schedule game|
| Add Game Form | Form for admin to add league game |

| League Standings Admin | Page for admin to view , add, and edit/delete league standings |
| Team Update Form | Form for admin to update team's standings |
| Add Team Form | Form for admin to add new team to league |

| Team Roster Admin | Page for admin to view, edit/delete a team's roster|
| Add Player form | Form for admin to add a player to a roster |
| Edit Player Form | Form for admin to edit a player on a roster |

| Field View | Page for admin to view what fields the team can play/practice at|
| Add Field Form | Form for admin to add a new field |
| Edit Field Form | Form for admin to edit a current field| 



#### TIME FRAME
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Create Landing Pages | H | 3hrs| N/A |
| Create Admin Page | H | 2hr | N/A |
| Create Team Schedule Pages | H | 3hrs| N/A |
| Create League Schedule Pages | H | 3hrs| N/A |
| Create Team Practice Pages | H | 3hrs| N/A |
| Create League Standing Pages | H | 3hrs| N/A |
| Create Team Roster Pages | H | 3hrs| N/A |
| Create Field Pages | H | 3hrs| N/A |
| Build out databases | H | 10hrs| N/A |
| Allow Admin to CRUD within Databases | H | 6hrs| N/A|
| Mobile Responsive Styling | H | 8hrs| N/A |
| Total | H | 47hrs| N/A | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
