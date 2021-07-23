# Programming Exercise

Use the NASA API described [here](https://api.nasa.gov) to build a Web API project that calls the Mars Rover Photos API with a given day as input, returning corresponding photo images as output. The Web API should have a [Swagger UI GUI](https://swagger.io/tools/swagger-ui/) that will have two endpoints:  
1.) GET that will read the dates.txt file to download and store each image locally.  
2.) POST that will accept a date json object. You are free to define this object however you like, but it must be a POST call.  
  
The submission of the project should be via GitHub.

## Acceptance Criteria

- when complete, please send a link to your own GitHub repository in an email replying to the email from which you received this exercise  
- you are encouraged to think of this as an incremental exercise (e.g., reply back when you have implemented the basic acceptance criteria, then again if you make further improvements or implement one or more of the bonuses)
- use the list of dates below, stored in text file "dates.txt", to pull the images that were captured on that date, by reading dates one-by-one from the file:
  - 02/27/17
  - June 2, 2018
  - Jul-13-2016
  - April 31, 2018
- language should be C#/.NET Core on the backend, and (if applicable) your choice of JavaScript framework on the frontend
- the project should run and build locally, after you submit it (each time you submit it)
- include relevant documentation (e.g., .MD file) in the repository

## Bonuses

- Bonus: include unit testing
- Double Bonus: have the application display the image in a web browser
- Triple Bonus: create a docker-compose.yml file that will contain defintions for the front end and backend.
- Quad Bonus: implement Circuit Breaker on the NASA API Call  
- Quin Bonus: store the results in a database hosted in a container in the same docker-compose.yml file. Image files can still be saved on the file system.
