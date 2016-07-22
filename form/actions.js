export const FIELD_CHANGED = 'FIELD_CHANGED';
export const fieldChanged = (info) => ({
    type:FIELD_CHANGED,
    ...info,
})

export const FIELD_BLURRED = 'FIELD_BLURRED';
export const fieldBlurred = (info) => ({
    type: FIELD_BLURRED,
    ...info,
})

export const FIELD_FOCUSED = 'FIELD_FOCUSED';
export const fieldFocused = (info) => ({
    type: FIELD_FOCUSED,
    ...info,
})

export const ADD_VALUE = 'ADD_VALUE';
export const addValue = (info) => ({
    type: ADD_VALUE,
    ...info,
})