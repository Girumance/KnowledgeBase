const Check= (state=false,action) => {

    switch(action.type){
            case "Change":
                return state = !state

                
             default :
             return state   


    }
}

    export default Check;