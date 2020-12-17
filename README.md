# Fit Init 2.0

I was inspired to create this app to help fitness instructors create workout plans for their clients. [wger Workout Manager API](https://wger.de/en/software/api)


## How It Works

Once logged in, you will be able to create a new workout with a custom workout type, workout name, and exercises. After creating a new entry, the workout with my available to view on the "My Workouts" page. 

![Screenshot](images/homepage.png)
![Screenshot](images/createworkout.png)
![Screenshot](images/workouts.png)

### Technologies Used
The front end is done completely with React.js.
- React hooks (useState, useEffect)
- SCSS Modules
- React Bootstrap
- Fetch API to handle all external APIs, including calls to the backend and The wger Workout Manager API.

The backend uses Express.js on the Node.js runtime. The database is PostgreSQL, using Sequelize as the ORM.
- Many-to-many exercises-workout relationship to create new workouts
- Sequelize seeder to facilitate actual loading of data 
- `passport` & `bcrypt` Node modules for secure authentication

## React Component Heirarchy 

- App 
    - Header
    - Routes 
        - Login 
            - Form 
        - Register 
            - Form 
        - Home 
        - Workouts 
            - Workout Details 
        - Create New Workout 
            - Form 
        - User Profile
            - Form 
        
## Project Planning

I used [this Trello board](https://trello.com/b/YrxQNpLE/fit-init-20) to manage project planning and task completion.

### Entity Relationship Diagram 

![Entity Relationship Diagram](images/Fit-Init_2.0_ERD.png)


### Wireframes

![Wireframes](images/fit-init2.png)

## Code Snippets 



## Future Development
- Adding functionality to allow instructors to assign workouts to specific clients/ users. 
- Adding a dashboard for instructors to be able to view all users that are assigned to them. 
- Allow users to favorite specific workouts 


### Credits 
 - Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
 - 