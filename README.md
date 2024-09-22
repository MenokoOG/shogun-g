### Project Documentation for **Shogun-G**

---

#### Overview:
The **Shogun-G** project is a React + Vite application featuring interactive image mapping with clickable areas, dynamic modal displays, and data fetching from Wikipedia for certain topics. The app highlights a Japanese Shogun and Geisha with specific clickable regions on the image that display more information in a modal.

---

#### Project Structure:

1. **Main Files:**
    - `package.json`: Defines project dependencies and scripts for development and production.
    - `index.js`: The entry point that renders the root `App` component.
    - `App.jsx`: The main component that renders the image map and handles modals.

2. **Dependencies:**
    - `react` & `react-dom`: Core React libraries for building the UI.
    - `vite`: Build tool for development and production.
    - `@fortawesome`: FontAwesome icons for UI elements.
    - `eslint`: Linter for enforcing code quality.

3. **Components Overview:**
    - **App.jsx**: The main container component that initializes the `ImageWithAreas` component.
    - **ImageWithAreas.jsx**: Handles the clickable areas on the image and manages state for the modal. It uses two hooks to fetch Wikipedia data and sword-related data.
    - **ImageMap.jsx**: Renders the image and clickable regions based on predefined coordinates.
    - **ClickableArea.jsx**: Defines the individual clickable areas and their positions on the image.
    - **AreaModal.jsx**: Displays modal content with information about the selected area.
    - **Modal.jsx**: Reusable modal component with fade-in/fade-out animations and support for keyboard interactions.
    - **Pixeltool.jsx**: A small utility component for displaying pixel coordinates on the screen for development.

4. **Custom Hooks:**
    - **useWikipediaData**: Fetches summary data from Wikipedia based on the selected topic (except for sword topics).
    - **useSwordData**: Fetches Wikipedia summary data for predefined Japanese sword topics (like Katana, Tachi, etc.).

5. **Assets:**
    - The project includes an image of a Japanese Shogun and Geisha (`shogunGeishaImage`) located in the `assets/images` folder. This image is the main visual element for interaction.

---

#### Detailed Component Breakdown:

1. **App Component (`App.jsx`)**:
   - Renders the main layout and includes the `ImageWithAreas` component, which manages the core functionality.

2. **ImageWithAreas Component (`ImageWithAreas.jsx`)**:
   - Manages the state for modal visibility and data.
   - Determines if sword data or Wikipedia data should be fetched.
   - Detects mouse movement for the `Pixeltool` display.
   - Handles modal opening and closing.

3. **ImageMap Component (`ImageMap.jsx`)**:
   - Displays the main image and overlays clickable areas defined in `clickableAreas`.
   - Dynamically adjusts clickable areas based on image size to maintain correct coordinates on screen resizing.

4. **ClickableArea Component (`ClickableArea.jsx`)**:
   - Defines the individual clickable areas using calculated styles for accurate placement over the image.
   - Triggers modal display when clicked.

5. **AreaModal Component (`AreaModal.jsx`)**:
   - Handles rendering modal content for the clicked area.
   - Displays either Wikipedia data or sword data depending on the selected area.
   - Integrates the `Modal` component for visual presentation.

6. **Modal Component (`Modal.jsx`)**:
   - General-purpose modal with closing animations and keyboard support.
   - Can display a loading spinner while waiting for data.
   - Includes buttons for closing the modal or triggering more actions (like "Learn More").

7. **Pixeltool Component (`Pixeltool.jsx`)**:
   - Displays the X and Y coordinates of the mouse cursor for development purposes.

---

#### Custom Hooks:

1. **useWikipediaData**:
   - Fetches Wikipedia summary data for general topics (not sword-related).
   - Manages loading and error states.

   Example usage:
   ```javascript
   const { data, loading, error } = useWikipediaData(topic);
   ```

2. **useSwordData**:
   - Specifically fetches data related to a list of predefined Japanese swords.
   - Runs when sword-related topics are selected.

   Example usage:
   ```javascript
   const { swordData } = useSwordData(shouldFetch);
   ```

---

#### Usage Instructions:

1. **Installation**:
   - Clone the repository.
   - Run `npm install` to install all dependencies.

2. **Development**:
   - Use `npm run dev` to start the development server.
   - The app will be served at `http://localhost:3000/`.

3. **Build for Production**:
   - Run `npm run build` to build the app for production.

4. **Linting**:
   - Run `npm run lint` to check for and fix any code quality issues.

---

#### Important Notes:

- **Click Areas**: Coordinates for clickable regions are dynamically calculated based on the original image dimensions.
- **Sword Topics**: The app has specific behavior for areas related to swords, fetching multiple sword types via `useSwordData`.
- **Development Feature**: The `Pixeltool` is only enabled during development for testing purposes, displaying cursor coordinates.

---

