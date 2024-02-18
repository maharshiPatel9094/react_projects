## redux toolkit


# step 1 
- create store 
 // creating a store is our first step 
import {configureStore} from "@reduxjs/toolkit";


// it takes object 
export const store = configureStore({})


# step 2
- create reducers
- main job is to change the things in store 
- reducers are basically the features that we want in our app so we create a new folder features for that and add all the slices over there

# step 3
- add reducers to the store

# step 4
- useDispatch 
const dispatch = useDispatch()
- useSelector 
const varName = useSelector(state => state.value)