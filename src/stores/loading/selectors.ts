import { RootState } from '../store'

const selectIsLoading = (state: RootState) => state.loading.isLoading

export const LoadingSelectors = { selectIsLoading }
