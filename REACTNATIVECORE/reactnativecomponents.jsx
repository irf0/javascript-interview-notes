/*
# React Native Core Components — Cheatsheet

## Primitive Components
- View → container (like div)
- Text → renders text (mandatory)
- Image → displays images
- ScrollView → renders all children
- FlatList → virtualized list
- Pressable → touch interactions
- SafeAreaView → avoids notch/status bar

---

## Key Rules
- Text must always be inside <Text>
- View cannot render text directly
- Everything ultimately becomes a native View

---

## ScrollView vs FlatList

### ScrollView
- Renders all items at once
- High memory usage
- Use for small/static content

### FlatList
- Virtualized (renders visible items only)
- Recycles views
- Best for long/dynamic lists

---

## FlatList Interview Points
- Uses virtualization & windowing
- Needs keyExtractor
- Optimizes memory & performance

---

## Touch Handling
- Prefer Pressable over TouchableOpacity
- Pressable supports press states & better control

---

## Common Interview Traps
- Using ScrollView for large lists ❌
- Rendering text outside Text ❌
- Missing keys in FlatList ❌

---

## One-Liners
- "FlatList improves performance via virtualization."
- "Text must be wrapped inside Text component."


*/