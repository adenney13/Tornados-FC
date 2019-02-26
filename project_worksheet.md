# Project Overview
<img src= 'https://i.imgur.com/8GfRGgU.jpg'>

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 2| Wireframes / Priority Matrix / Functional Components | Incomplete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete


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

#### SAMPLE.....
#### MVP 

-Create landing page for login/sign-up

-Create login page

-Create sign-up page

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
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs |
| Total | H | 6hrs| 5hrs | 

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
