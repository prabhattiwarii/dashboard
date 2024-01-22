const sidebarReducer = (state,action) => {
    if(action.type === "TOGGLE_SIDEBAR"){
        return{
            ...state,
            isSideBarOpen: !state.isSideBarOpen 
        }
    }     
    throw new Error(`No matchig "${action.type}" action type`)
}
export default sidebarReducer;