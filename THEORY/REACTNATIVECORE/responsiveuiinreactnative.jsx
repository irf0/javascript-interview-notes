/*
==============================
REACT NATIVE UI — FINAL NOTES
==============================

1) NATIVEWIND
-------------
WHAT IT IS:
- Allows writing Tailwind-like utility classes in React Native
- Compiles to StyleSheet (no runtime CSS)

WHY USE IT:
- Faster UI development
- Consistent design system
- Less custom StyleSheet boilerplate

IMPORTANT:
- Improves developer velocity, not FPS directly
- Still produces native styles

EXAMPLE:
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold">Hello</Text>
</View>

INTERVIEW LINE:
"NativeWind improves dev speed by compiling utility classes to native styles."


2) REANIMATED 3
--------------
PROBLEM WITH Animated API:
- Animations run on JS thread
- JS blocking = dropped frames
- Feels laggy under load

WHY REANIMATED IS FAST:
- Uses worklets
- Runs animations on UI thread (Main thread)
- JS thread not involved during animation

CORE IDEA:
JS THREAD ❌
UI THREAD ✅

EXAMPLE:
const progress = useSharedValue(0);
progress.value = withTiming(1);

RESULT:
- 60 FPS animations
- No jank
- Smooth gestures

INTERVIEW LINE:
"Reanimated is fast because animations run on the UI thread, not the JS thread."


3) RESPONSIVE DESIGN (VERY IMPORTANT)
------------------------------------
REALITY:
- Many screen sizes
- Different aspect ratios
- Orientation changes

BEST PRACTICES:
✔ Avoid fixed width/height
✔ Prefer percentages and flex
✔ Use Flexbox everywhere
✔ Use min/max width when needed

SCREEN SIZE APIS:
- useWindowDimensions() ✅ (preferred)
- Dimensions API (static, less ideal)

EXAMPLE:
const { width, height } = useWindowDimensions();

AVOID:
- Hardcoded pixels
- Device-specific hacks

SAFE AREA:
- Always wrap screens in SafeAreaView
- Use react-native-safe-area-context

INTERVIEW LINE:
"Responsive design in RN is flex-first, not pixel-perfect."


4) HOW EVERYTHING FITS TOGETHER
-------------------------------
- NativeWind → layout + styling
- Reanimated → motion & animations
- Responsive design → adaptability

RULE:
Layout ≠ Animation ≠ Responsiveness

INTERVIEW LINE:
"I separate layout, motion, and responsiveness for scalable UI."


5) COMMON UI MISTAKES (AVOID)
----------------------------
❌ JS-based animations
❌ Fixed widths
❌ Inline dynamic styles everywhere
❌ Animations during heavy JS work

SENIOR FIXES:
✔ Reanimated for motion
✔ Flexbox layouts
✔ Defer work with InteractionManager
✔ Responsive units

ONE-LINER SUMMARY:
"Good RN UI keeps layout flexible and animations off the JS thread."

*/