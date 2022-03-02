import { Action, State } from './types'

export const initialState: State = { status: 'MODAL_CLOSE', searchTerm: '' }

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'PHOTO_SELECT': {
			return {
				...state,
				status: 'MODAL_OPEN',
				selectedPhoto: action.payload.photo,
			}
		}
		case 'CLOSE_MODAL': {
			const { selectedPhoto: _, ...rest } = state
			return { ...rest, status: 'MODAL_CLOSE' }
		}
		case 'SEARCH_SUCCESS': {
			const { selectedPhoto: _, ...rest } = state
			return { ...rest, status: 'MODAL_CLOSE', searchTerm: action.payload.term }
		}

		default: {
			return state
		}
	}
}
