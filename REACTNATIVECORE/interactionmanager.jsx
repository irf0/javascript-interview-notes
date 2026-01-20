/*
InteractionManager — Quick Notes

PURPOSE:
- Delay heavy JS until UI interactions finish

API:
- InteractionManager.runAfterInteractions(cb)

USE FOR:
- Heavy calculations
- Large state updates
- Post-navigation work

NOT FOR:
- Network calls
- Simple logic
- Everything

ONE-LINER:
"InteractionManager prevents UI jank by deferring JS work until animations finish."

*/