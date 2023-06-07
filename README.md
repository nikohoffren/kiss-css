# KISS CSS Framework

KISS (Keep It Simple Stylesheets) is a simple, lightweight CSS framework designed for ease of use. It provides a collection of reusable CSS classes and components to quickly style your web projects.

## Features

-   Normalize or reset styles for consistent rendering across browsers
-   Base styles for typography, colors, and layout
-   Responsive grid system for building flexible layouts
-   Components like buttons, cards, forms, and navigation
-   Utility classes for margin, padding, shadows, and more

## Getting Started

### Installation

To include KISS in your project, you can install the `kiss-css` package using npm. Open your terminal or command prompt and navigate to your project directory, then run the following command:

```bash
npm install kiss-css
```

Once you've installed the kiss-css package, you can include the CSS file in your HTML file by linking it in the <head> section:

```html
<link rel="stylesheet" href="node_modules/kiss-css/styles.css" />
```

### Usage

Now, you can start using the CSS classes provided by KISS in your HTML elements. Here's an example of how to use some of the classes:

```html
<div class="container mt-2">
    <h1 class="header">Welcome to KISS</h1>
    <p class="center">
        KISS is a simple, lightweight CSS framework designed for ease of use.
        Below are some examples of components you can build using KISS.
    </p>
    <div class="center mt-1">
        <a href="#" class="button">Get Started</a>
    </div>
</div>
```

### Contributing

Contributions to KISS are welcome! If you have any suggestions, bug reports, or would like to contribute improvements, please open an issue or submit a pull request on the [KISS repository](https://github.com/nikohoffren/kiss-css).

### License

KISS is open-source and released under the MIT License.
