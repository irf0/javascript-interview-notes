/*
========================
NATIVE MODULES — RN
========================

WHAT:
- Native code (Swift/Kotlin) exposed to JS
- Used when JS is slow or lacks native access

WHY:
- Access platform APIs (Battery, Sensors, Secure Enclave)
- Heavy computation without blocking JS thread

BRIDGE vs TURBOMODULES:
- Old: Bridge → JSON → async → slow
- New: TurboModules + JSI → direct calls → fast

KEY LINE:
"Modern RN uses TurboModules instead of the Bridge."

LINKING (2026):
- Autolinking by default
- npm install → auto-linked
- iOS: pod install (sometimes)

HOW IT WORKS:
1) Write native logic (Swift/Kotlin)
2) Export method (@ReactMethod / RCT_EXPORT_METHOD)
3) Call via NativeModules in JS

WHEN TO WRITE ONE:
- Missing native API
- Performance-critical logic

NATIVE UI COMPONENT:
- Native view wrapped as React component
- Example: Map, Camera, Video

INTERVIEW SIGNAL WORDS:
- Native Bridging
- Platform-specific code
- JSI / TurboModules

ONE-LINER:
"Native modules let RN access fast, platform-specific APIs."

*/