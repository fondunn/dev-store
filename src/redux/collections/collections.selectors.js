import { createSelector } from 'reselect'

const selectCollections = state => state.collections

export const selectCollectionsSections = createSelector(
    [selectCollections],
    collections => collections //
)