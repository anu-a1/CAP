import keyMirror from "key-mirror";

const actionTypes = keyMirror({
    /* notification */
    TOGGLE_NOTIFICATION: null,
    GET_FIGGEN_ALLOCATIONS: null,
    CALCULATE_FIGGEN_ALLOCATIONS: null
})

export default actionTypes;