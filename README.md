# Gravity Platformer Game

## Overview
This project is a **Gravity Platformer Game** created for the **Cool-as-Hack Hackathon**. Players control characters that can toggle their gravity to navigate through obstacles and survive as long as possible. The game features platforms, holes, and a dynamic map that challenges players to adapt their movements.

## Features
- **Dynamic Gravity Control**: Players can toggle their gravity to move up or down.
- **Obstacles**: The game includes platforms and holes. Platforms block movement, while holes allow players to fall through.
- **Multiplayer Support**: Up to 5 players can play locally, each with unique controls.
- **Customizable Player Names**: Players can enter their names before starting the game.
- **Dynamic Map Generation**: Platforms and holes are generated dynamically as the game progresses.
- **Time Tracking**: The game tracks how long players survive.

---

## How to Play
1. **Select Player Count**:
   - Open `player_count.html` and select the number of players (1-5).
2. **Enter Player Names**:
   - Enter the names of the players in `names.html`.
3. **Learn Controls**:
   - Controls are displayed in `info.html` before the game starts.
4. **Start the Game**:
   - The game begins in `game.html`. Players must toggle their gravity to avoid obstacles and survive as long as possible.

### Controls
- **Player 1**: `A`
- **Player 2**: `ArrowRight`
- **Player 3**: `F`
- **Player 4**: `J`
- **Player 5**: `L`

---

## Project Structure
The project is organized into the following files and directories:

### HTML Files
- **`index.html`**: Main menu for the game.
- **`player_count.html`**: Allows players to select the number of players.
- **`names.html`**: Form to enter player names.
- **`info.html`**: Displays controls and redirects to the game.
- **`game.html`**: The main game screen.
- **`credits.html`**: Displays credits for the project.

### CSS Files
- **`game_menu.css`**: Styles for the menu and forms.
- **`styles.css`**: Styles for the game canvas and layout.

### JavaScript Modules
- **`main.js`**: Entry point for the game. Handles game initialization, player creation, and the main game loop.
- **`modules/hero.js`**: Defines the `Hero` class for player objects.
- **`modules/players.js`**: Handles player rendering, movement, and gravity toggling.
- **`modules/collisions.js`**: Manages collision detection between players, obstacles, and the canvas boundaries.
- **`modules/generateMap.js`**: Dynamically generates platforms and holes for the game map.
- **`modules/draw.js`**: Handles rendering of the game map and obstacles.
- **`menu.js`**: Manages the player count and name input forms.

---

## Key Functionalities

### Dynamic Gravity
Players can toggle their gravity using their assigned keys. This is implemented in `players.js` using the `changeGravity` function, which listens for key presses and reverses the player's gravity.

### Obstacles
- **Platforms**: Block player movement. Players must toggle gravity to avoid them.
- **Holes**: Allow players to fall through. The collision logic in `collisions.js` ensures that holes are treated differently from platforms.

### Map Generation
The map is dynamically generated using the `generateNewObstacles` function in `generateMap.js`. Platforms and holes are created at random intervals, making the game unpredictable and challenging.

### Collision Detection
Collision detection is handled in `collisions.js`. It ensures players interact correctly with platforms, holes, and the canvas boundaries.

---

## How to Run
1. Open `index.html` in a browser to access the game menu.
2. Follow the steps to select the player count, enter names, and start the game.
3. Play the game in `game.html`.

---

## Credits
This game was created by:
- **Ivan**
- **Ben**
- **Dino**

For the **Cool-as-Hack Hackathon**.