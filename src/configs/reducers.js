import { combineReducers } from 'redux'
import { environment } from 'const'

const reducerList = {

}

export default combineReducers({ [environment.projectName]: combineReducers(reducerList) })