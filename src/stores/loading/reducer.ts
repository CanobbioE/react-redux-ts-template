import Action, { DefaultAction } from '../Action'

// This is for centralized loading, if you want each feature to handle its loading
// then add the `isLoading` property to all the states

interface LoadingState {
  isLoading: boolean
}

const INITIAL_STATE: LoadingState = {
  isLoading: false
}

export const LoadingReducer = (state = INITIAL_STATE, action: DefaultAction<any>): LoadingState => {
  if (action.type.includes(Action.LOADING_SUFFIX)) {
    return { ...state, isLoading: true }
  }

  if (action.type.includes(Action.LOADING_SUFFIX) || action.isError) {
    return { ...state, isLoading: false }
  }

  return { ...state }
}
