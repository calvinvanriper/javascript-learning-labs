# 🖼️ Lightbox Viewer

## 📝 Description

A simple image gallery that opens full-size images in a lightbox overlay when a thumbnail is clicked. The overlay covers the entire viewport and can be dismissed using a close button or by clicking the overlay.

This project focuses on event-driven DOM interaction, UI state control, and string manipulation to derive full-size image URLs from thumbnail URLs.

## 🧠 What This Project Does

- Displays a gallery of image thumbnails
- Opens a full-size image in a viewport-covering lightbox
- Derives the full-size image URL by removing -thumbnail from the thumbnail URL
- Closes the lightbox via:
  - close button (×)
  - clicking the overlay area

## 🛠️ Concepts Practiced

- DOM selection with `querySelector` / `querySelectorAll`
- Event handling with click listeners
- Using currentTarget to identify clicked elements
- Updating image src dynamically
- Toggling UI visibility
- CSS overlays using fixed positioning and full-viewport sizing

## 📌 Example Behavior

```text
User clicks a thumbnail:
→ Lightbox becomes visible
→ Full-size image replaces the thumbnail source (removes "-thumbnail")

User clicks close button or overlay:
→ Lightbox is hidden
```

## 💡 Reflection

This project reinforced how small UI behaviors can be implemented by combining DOM events with simple string transformations. The lightbox overlay pattern also emphasized the importance of separating content (HTML), presentation (CSS), and behavior (JavaScript) when building interactive components.

## 🔗 Live Demo

[`Lightbox Viewer`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/lightbox-viewer/)

## 🧪 CodePen Version

[`CodePen - Lightbox Viewer`](https://codepen.io/calvinvanriper/full/xbOayJB)
