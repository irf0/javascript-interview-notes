/*
React Query (TanStack Query) — Notes

TLDR;
staleTime → freshness window
cacheTime → garbage collection window

WHAT IT IS:
- Server state manager
- Handles API data, caching, syncing

WHAT PROBLEM IT SOLVES:
- Manual loading/error state
- Repeated API calls
- Stale data handling

CORE CONCEPTS:
- Query → read server data
- Mutation → update server data
- Cache → shared in-memory store

FRESH vs STALE:
- Fresh → show cached data, no refetch
- Stale → show cached data + background refetch
- No data → show loader + fetch

IMPORTANT OPTIONS:
- staleTime → how long data is fresh
- cacheTime → how long unused data stays in cache
- refetchOnFocus → refetch when app gains focus

DO USE FOR:
- API data
- Pagination
- Infinite scroll
- Background sync

DO NOT USE FOR:
- UI state
- Toggles
- Form inputs

MENTAL MODEL:
- Redux/Zustand = client state
- React Query = server state

INTERVIEW ONE-LINER:
"React Query manages server state with caching and background refetching."

*/