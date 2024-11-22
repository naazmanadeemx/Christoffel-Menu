# Christoffel's Menu App

## Overview

Christoffel's Menu is an application designed to help manage a restaurant's menu items efficiently. The app allows users (chefs and guests) to add, remove, and filter menu items by course. This README provides an overview of the application, along with a detailed changelog listing the changes made during development.

## Features
- **Add Menu Items**: Add a dish name, description, price, and course (Starters, Mains, Desserts).
- **Remove Items**: Remove any existing menu items from the menu.
- **Filter by Course**: Filter menu items to display only Starters, Mains, or Desserts.
- **View Average Price**: View the total average price of all items and a breakdown of average prices per course.
- **Responsive UI**: Improved user interface with consistent layout and enhanced styling.

## Changelog

### Changes Since Part 2

#### **1. Logo and Branding**
- Added a new logo for 'Christoffel's Menu' at the top of the Home screen.

#### **2. General Layout & Spacing**
- Improved padding and margins across all screens, particularly around headers, list items, and buttons.
- Adjusted layout to reduce visual clutter and improve readability.
- Improved the spacing between the logo and other elements on the Home screen.

#### **3. Item Card Styling**
- Enhanced item cards with:
  - Slight shadow for a modern look.
  - Rounded corners for better visual appeal.
  - Consistent border colors to improve readability.
- Ensured font size for item descriptions is clear and readable.

#### **4. TouchableOpacity Button Design**
- Styled the 'Remove' button to:
  - Have a larger touch area.
  - Use a more prominent color to match the app's design language.
  - Added active opacity for better feedback when pressed.

#### **5. Typography Consistency**
- Applied a consistent font size and weight for statistics (Total Items and Average Price).
- Reduced font size for item descriptions to establish a clear visual hierarchy.

#### **6. FlatList Empty State**
- Added an empty state message for the FlatList to inform users when no menu items are available.
- Removed placeholder image initially added for the empty state.

#### **7. Filter Button Color**
- Used a consistent green color (`#28a745`) for the 'Filter Menu' button to align with the app’s color palette.

#### **8. Consistent Color Palette**
- Ensured consistent use of colors for headers, buttons, and list items to maintain a cohesive visual theme throughout the app.

### Refactoring Changes

#### **1. Separation of Screens**
- Moved the 'Add Menu Item' feature to a separate screen (`AddMenuItemScreen`) from the Home screen to simplify the Home interface and align with user feedback.
- Removed the 'ManageMenuScreen' due to persistent navigation issues.

#### **2. Code Modularization**
- Created reusable functions where possible for better code readability and maintenance.
- Cleaned up the `HomeScreen` code by moving utility functions to a separate `utils` directory (later removed to avoid issues).

#### **3. Improved Navigation**
- Fixed navigation routes to ensure smooth user experience when moving between screens.

#### **4. Commit Messages**
- Improved commit message quality to be more descriptive, documenting changes clearly and concisely.

## Installation & Setup
1. Clone this repository using:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies using:
   ```sh
   npm install
   ```
3. Start the development server using:
   ```sh
   npm start
   ```

## How to Use
- **Home Screen**: View the total items, average prices, and see all menu items.
- **Add Menu Item**: Click on 'Add Menu Item' to add a new dish to the menu.
- **Filter Menu**: Use the 'Filter Menu' button to filter items by course.
