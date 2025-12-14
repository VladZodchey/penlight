# Penlight

A lightweight (25 LoC, bloated by formatting) CommonJS package to make light/dark themes easier.  
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
