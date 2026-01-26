/*
 # React Native Styling — Cheatsheet

## Core Facts
- No CSS, no HTML
- Styles are JavaScript objects
- Uses Flexbox for layout
- Default flexDirection: column

---

## Units
- Numbers only (dp)
- No px, rem, em
- Pixel density handled internally

---

## StyleSheet.create
Why use it:
- Validates styles
- Freezes objects
- Improves performance
- Reduces memory usage

---

## Inline vs StyleSheet
Inline styles:
- New object every render ❌
- Can cause re-renders ❌

StyleSheet:
- Stable references ✅
- Better performance ✅

---

## Responsiveness
- No media queries
- Use Flexbox
- Use Dimensions / useWindowDimensions
- Conditional rendering

---

## Platform Styling
- Platform.OS === 'ios' | 'android'
- Needed for status bar, fonts, shadows

---

## Interview Traps
- Default flexDirection is column
- RN styles ≠ CSS
- Avoid fixed widths


*/