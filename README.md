
# React Router Nested Routes Exercise

## Overview

This exercise aims to help students get comfortable with using React Router Outlet and nested routes. Students will create a simple React application that displays a list of fruits and their details using nested routes and the Outlet component.

## Project Setup


1. Clone the repository:
    ```bash
    git clone https://github.com/turingschool-examples/FruitBox.git
    ```

2. Navigate to the project directory:
    ```bash
    cd FruitBox
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## File Structure

```
src/
  components/
    App/
      App.js
      App.css
    Fruits/
      Fruits.js
      Fruits.css
    FruitDetails/
      FruitDetails.js
      FruitDetails.css
  data/
    fruitData.js
  index.js
```

## Exercise Instructions

### 1. App Component

In `App.js`, set up the main structure of the application. Use `NavLink` for navigation and define the routes for the application.

### 2. Fruits Component

In `Fruits.js`, fetch and display a list of fruits. Each fruit should be a link that navigates to a detailed view of that fruit.

### 3. FruitDetails Component

In `FruitDetails.js`, fetch and display the details of a selected fruit based on the route parameter.

### 4. Data

In `fruitData.js`, create a function that returns a list of fruits with their details.

### 5. Styling

Add basic styling in `App.css`, `Fruits.css`, and `FruitDetails.css` to make the application look better.

## Data File

Create a `fruitData.js` file with the following content:

```javascript
export const getFruitsData = () => [
  { id: '1', name: 'Apple', description: 'A sweet red fruit.', image: '/images/apple.jpg' },
  { id: '2', name: 'Banana', description: 'A long yellow fruit.', image: '/images/banana.jpg' },
  { id: '3', name: 'Cherry', description: 'A small red fruit.', image: '/images/cherry.jpg' },
];
```
## Conclusion

This exercise will guide you through creating a simple application using React Router with nested routes and the Outlet component. You will practice setting up routes, using parameters, and rendering nested content.
