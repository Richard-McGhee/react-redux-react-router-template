// action suite:
// 1. action creators - functions that create and return action objects
// 2. action objects - objects with a "type" property that describe events that have taken place in the UI
// 3. action types - variables to manage action type strings to avoid hard-to-find bugs

export const PLACEHOLDER_ACTION1 = "PLACEHOLDER_ACTION1"
export const placeholderAction1 = () => {
    return { type: PLACEHOLDER_ACTION1, payload: 'placeholder1'}
}