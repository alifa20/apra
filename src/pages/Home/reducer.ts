import { Action, State } from './types'

export const initialState: State = {
	status: 'MODAL_CLOSE',
	searchTerm: '',
	page: 1,
}

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
			return { status: 'MODAL_CLOSE', searchTerm: action.payload.term, page: 1 }
		}
		case 'SET_PAGE': {
			return { ...state, page: action.payload.page }
		}
		default: {
			return state
		}
	}
}
