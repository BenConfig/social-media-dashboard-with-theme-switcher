# Frontend Mentor - Social Media Dashboard with Theme Switcher Solution

This is a solution to the [Social Media Dashboard with Theme Switcher Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

## Screenshot

### Mobile
![](screenshot-mobile.jpg)

### Tablet
![](screenshot-tablet.jpg)

### Desktop
![](screenshot-desktop.jpg)


## Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- BEM
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS

## What I learned

This is the first project where I have implemented a dark theme which the user is able to toggle on and off. Though I did use SASS for this project, I decided to use CSS custom properties for the colours rather than SASS variables. The reason for this was because I had the idea that I could reassign all the custom properties using a separate class which only becomes active when the user toggles dark mode on.

Here is the SASS and JS code:
```css
:root {
    /* ------------------ Light Mode Colors ----------------- */
    --clr-body-bg-main: hsl(0, 0%, 100%);
    --clr-body-bg-top: hsl(225, 100%, 98%);
    --clr-card-bg: hsl(227, 47%, 96%);
    --clr-card-hover: hsla(0, 0%, 0%, .1);
    --clr-text: hsl(228, 12%, 44%);
    --clr-text-high-contrast: hsl(230, 17%, 14%);
    --clr-toggle: hsl(230, 22%, 74%);
    --clr-toggle-hover: linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%)) border-box;

    /* ------------------ Dark Mode Colors ------------------ */
    &.dark {
        --clr-body-bg-main: hsl(230, 17%, 14%);
        --clr-body-bg-top: hsl(232, 19%, 18%);
        --clr-card-bg: hsl(228, 28%, 20%);
        --clr-card-hover: hsla(0, 0%, 100%, .1);
        --clr-text: hsl(228, 34%, 66%);
        --clr-text-high-contrast: hsl(0, 0%, 100%);
    }
```
```js
// When Dark Mode Switch is clicked...
DARK_MODE_SWITCH.addEventListener('click', e => {
    // ...toggle the 'on' class for the switch...
    DARK_MODE_SWITCH.classList.toggle('on');
    // ... and toggle the 'dark' class for the root element
    document.documentElement.classList.toggle('dark')
})
```

## Continued development

I like the way the dark theme gets activated when the dark class is added with JS, however the change from light to dark is instant. I would prefer if the change from light to dark was a smooth transition but I haven't looked into how this can be achieved, although I have seen examples of it in action. I think it would require a different approach since CSS custom properties cannot themselves be animated (I believe). This is something to explore.