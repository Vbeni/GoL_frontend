# Game of Life

Link to live site: [Game of Life Live Site](https://visionary-fairy-867727.netlify.app/) 

## Description

Game of Life is a web application based on Conway's Game of Life, a cellular automaton simulation. The game consists of a grid of cells, and each cell can be in one of two states: alive or dead. The game evolves through generations based on a set of rules, creating mesmerizing patterns and behaviors.

## Technologies Used

- Django: Web framework used for the backend development.
- React: JavaScript library used for building the frontend user interface.
- PostgreSQL: Database management system used to store game state data.
- Django REST framework: Toolkit used for building RESTful APIs with Django.
- Axios: JavaScript library used for making HTTP requests from the frontend to the backend.
- HTML/CSS: Used for styling and structuring the user interface.

## Installation

To run the Game of Life app locally, follow these steps:

1. Clone the repository from the backend link and frontend link below.
2. Frontend:https://github.com/Vbeni/GoL_frontend/
   Backend:https://github.com/Vbeni/game_of_life
3. Install backend dependencies using the following command:
   ```
   pip install -r requirements.txt
   ```
4. Create and apply database migrations:
   ```
   python manage.py makemigrations
   python manage.py migrate
   ```
5. Start the Django development server:
   ```
   python manage.py runserver
   ```
6. Navigate to the frontend directory and install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
7. Start the React development server:
   ```
   npm start
   ```
8. Access the app locally at `http://localhost:3000/`.

## User Stories

- As a user, I want to experience the patterns of Conway's Game of Life.
- As a user, I want to interact with the grid and see how the cells evolve with each generation.
- As a user, I want to start and stop the simulation to observe specific patterns.

## Wireframes

Link to wireframes: [Game of Life Wireframes](https://www.figma.com/file/4okbdE4l3w3tBzonsQfSo8/Untitled?type=design&node-id=0-1&mode=design&t=DqYaDPHGmeN97qRF-0) 

## Entity Relationship Diagrams

Link to ER Diagrams: [Game of Life ER Diagrams](https://trello.com/b/vw9yXnPm/gameoflife) 

## Unsolved Problems and Future Features

- Implement responsive design to support different screen sizes and devices.
- Add user authentication and the ability to save and load custom patterns.
- Implement randomized seeding of starting cells.
- Implement different rule sets and allow users to customize the rules.
- Enable multiplayer mode with real-time collaboration on the same grid.

