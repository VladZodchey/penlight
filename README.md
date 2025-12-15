# Penlight

A lightweight (30 LoC, bloated by formatting) pure JS package to make light/dark themes easier.  
One day I just wrote a cool script, felt cute, might delete later. /j

What does it do:
- Tries to auto-detect preferred theme by the browser.
- Reacts to theme being switched in real-time.
- Allows it to be overriden, saving the change in `localStorage`.
- Provides hooks to make theme-related UI responsive.

What it doesn't do:
- Carry over the override to other devices of the user.
- Implement extensive backwards compatibility. Sorry, I've got other things to do.
- Track user data or save it somewhere else. :)

## Usage

In a static website, you can pull the package with a simple CDN `<script>`:
```html
<script src="cdn.jsdelivr.net/npm/penlight@0.0.1/index.js"></script>
```

This library aims to achieve a very simple thing: to set a `data-theme` attribute on the DOM element.  
It automatically pulls up the overriden theme or the preferred by browser theme if the former is not set.  

An example CSS that leverages this attribute could look like this:
```css
* {
    color: black;
}
[data-theme="dark"] {
    color: white;
}
```

Also, the package exposes a set of primitive functions to integrate it into your code.

A button to change theme could look like this:
```html
<button onlick="toggleTheme()">Toggle!</button>
```
