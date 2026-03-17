# 🎧 Music Player

## 📝 Description

This project is an interactive music player that allows users to play, pause, and navigate through a playlist using both UI controls and playlist selection. The interface dynamically updates to reflect the current song, playback state, and playlist position.

The project focuses on managing application state alongside DOM interaction to create a synchronized user experience.

## 🧠 What This Project Does

- Plays audio tracks using a custom player interface
- Supports play, pause, next, and previous controls
- Allows users to select songs directly from the playlist
- Displays the current song title and artist
- Highlights the currently active song in the playlist
- Resumes playback from the last paused position
- Automatically advances to the next track when a song ends
- Resets player state when reaching the end of the playlist

## 🛠️ Concepts Practiced

- DOM selection with `getElementById` and `querySelectorAll`
- Event handling for button clicks and audio events
- Managing shared application state with a central data object
- Synchronizing UI updates with internal state changes
- DOM traversal and dynamic attribute updates (`aria-current`)
- Reusable function design for consistent interaction logic
- Guard clauses for handling edge cases
- Working with the JavaScript `Audio` object for media playback
- Accessibility improvements using ARIA attributes

## 📌 Example Behavior

```text
User clicks "Play":
→ First song begins playing
→ Display updates with song title and artist
→ Playlist highlights the active song

User clicks "Pause":
→ Song pauses and current time is stored

User clicks "Play" again:
→ Song resumes from previous position

User clicks "Next":
→ Next song plays and display updates

Song finishes playing:
→ Automatically advances to the next track

End of playlist reached:
→ Player resets and stops playback
```

## 💡 Reflection

This project introduced the concept of managing shared application state alongside DOM updates. Instead of handling interactions independently, the player relies on a centralized state object to track the current song and playback position, ensuring consistent behavior across controls.

It reinforced the importance of coordinating multiple UI elements through reusable functions and highlighted how event-driven systems can remain predictable when logic is centralized. This pattern mirrors how larger front-end applications manage state and synchronize UI updates.

## 🔗 Live Demo

[`Music Player`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/music-player/)

## 🧪 CodePen Version

[`CodePen - Music Player`](https://codepen.io/calvinvanriper/full/QwKvzWO)
