

---

# Shogun & Geisha Interactive Image Tool

## Project Overview

This project is a React application that displays an interactive image of a Japanese shogun and a geisha in a cherry blossom forest. Users can click on specific areas of the image to learn more about each element, such as the shogun, geisha, and cherry blossom, via Wikipedia data fetched using an API. The application also includes a development tool to display the current mouse coordinates on the image for ease of development.

## Features

- **Interactive Clickable Areas**: The image contains predefined areas, such as the shogun, geisha, and cherry blossom. Clicking on these areas opens a modal with information about the topic.
- **Wikipedia API Integration**: The app fetches data from Wikipedia for each clickable area, providing a brief description of the selected element.
- **Dynamic Image Resizing**: The clickable areas are responsive and scale dynamically based on the image size.
- **Development Tool for Pixel Coordinates**: In development mode, the app shows pixel coordinates of the mouse on the image, making it easier for developers to define and adjust clickable areas.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development Mode](#development-mode)
- [Folder Structure](#folder-structure)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v16+ recommended)
- npm (v8+ recommended) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/shogun-geisha-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shogun-geisha-app
   rm -rf .git
   ```
3. Install the dependencies:
   ```bash
   npm install
   # OR
   yarn install
   ```

### Usage

To start the application, use the following command:

```bash
npm run dev
# OR
yarn dev
```

This will start the development server at `http://localhost:3000`.

### Development Mode

To activate the **development tool** for displaying the mouse pixel coordinates on the image, simply run the application in development mode. The tool automatically activates when `NODE_ENV` is set to `development`. You can track the mouse coordinates on the image, which are helpful for fine-tuning the clickable areas.

- **Tooltip for Coordinates**: Hover your mouse over the image to see the pixel coordinates displayed as a tooltip.
  
  _Note: The tooltip feature is disabled in production mode._

## Folder Structure

Here is a brief overview of the project folder structure:

```bash
.
├── public/                  # Public files and assets
├── src/
│   ├── assets/              # Static assets like images
│   ├── components/          # Reusable React components
│   │   ├── ImageWithAreas.js
│   │   ├── ClickableArea.js
│   │   ├── Tooltip.js
│   ├── utils/               # Utility functions
│   ├── App.js               # Main application component
│   └── index.js             # Entry point
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── ...
```

## Technology Stack

This project is built with the following technologies:

- **React**: A JavaScript library for building user interfaces
- **Vite**: A fast development build tool for modern web applications
- **Tailwind CSS**: A utility-first CSS framework for styling
- **Wikipedia API**: Used to fetch relevant data for the clickable areas
- **JavaScript**: Core programming language for the front-end logic

## Features

### 1. Interactive Clickable Areas

- Specific areas of the image are clickable (Shogun, Geisha, Cherry Blossom).
- These areas are responsive and scale with the image size.

### 2. Modal with Wikipedia Data

- Clicking on a specific area opens a modal with information fetched from Wikipedia.
- The modal dynamically displays content based on the selected topic.

### 3. Dynamic Image Resizing

- The image size adjusts based on the window size, and the clickable areas are updated accordingly.

### 4. Development Tool: Pixel Coordinates

- In development mode, a tooltip follows the mouse and displays its X and Y pixel coordinates on the image.
- This tool is useful for defining new clickable areas or adjusting existing ones.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

Please make sure your code follows the project's coding standards.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

