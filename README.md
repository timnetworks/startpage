# Start Something.

A customizable, fast-loading start page with a nostalgic Windows 98 aesthetic, built with modern web technologies compatible with desktop and mobile usecases. This project uses the excellent [98.css](https://jdan.github.io/98.css/) library and custom styling to recreate the classic desktop experience in a functional, responsive webpage.

### [View Live Demo](https://timnetworks.net)

![Screenshot showing the look of the web app](https://github.com/timnetworks/startpage/blob/main/img/screenshot.jpg)

---

## Features

-   **Nostalgic UI**: Leverages `98.css` for an authentic, pixel-perfect Windows 98 look and feel.
-   **Organized Link Sections**: Links are neatly arranged into collapsible "windows" for General, News, Media, and Utility categories.
-   **Dynamic Quote of the Moment**: A random quote is fetched from `quote.md` and displayed on each page load, with a click-to-refresh feature.
-   **Responsive Design**:
    -   **Desktop View**: Classic windowed layout with full title bars.
    -   **Mobile View**: A streamlined, single-column layout that combines windows into one seamless block to save vertical space.
-   **Mobile-First Collapsible Header**: The search bar is fixed to the top on mobile and can be hidden/shown with a draggable-style handle to maximize screen real estate.
-   **Lightweight & Fast**: Built with vanilla HTML, CSS, and JavaScript. No heavy frameworks or libraries are needed.
-   **Easily Customizable**: Add or change links, icons, and quotes by editing simple, well-structured files (`index.html` and `quote.md`).

---

## File Structure

The project is organized into a straightforward structure:

```
.
├── index.html            # Main page structure
├── styles.css            # Custom styles, responsiveness, and layout
├── script.js             # Logic for quote fetching and header interaction
├── quote.md              # A simple text file containing quotes, one per line
└── res/                  # Directory for all icon assets
    ├── apps/
    ├── devices/
    └── ...
```

---

## Setup & Installation

No build process is required. You can run this project locally by following these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/retro-start-page.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd retro-start-page
    ```
3.  **Open `index.html` in your web browser.**

That's it!

---

## Technologies Used

-   **HTML5**
-   **CSS3**: Custom properties, Flexbox, and Grid for modern, responsive layouts.
-   **Vanilla JavaScript**: For all dynamic functionality, ensuring the site is fast and dependency-free.
-   **[98.css](https://jdan.github.io/98.css/)**: A CSS library for building interfaces that look like Windows 98.

## Acknowledgements

-   The visual style is heavily inspired by the **Chicago95** icon and theme pack for Linux, which aims to bring the classic Windows aesthetic to modern desktops.
-   The core component library, **98.css**, was created by [jdan](https://github.com/jdan).
