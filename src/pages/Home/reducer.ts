import { Action, State } from './types'

export const initialState: State = { status: 'INIT', searchTerm: '' }

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
		default: {
			return state
		}
	}
}
