import { ModalAction } from '../../components/Modal/types'
import { PaginationAction } from '../../components/Pagination/types'
import { PhotoAction } from '../../components/PhotoCard/types'
import { SearchAction } from '../../components/Search/types'
import { initialState, reducer } from './reducer'

describe('reducer', () => {
	it('should update state when SEARCH_SUCCESS is dispatched', () => {
		const action: SearchAction = {
			type: 'SEARCH_SUCCESS',
			payload: { term: 'test' },
		}
		const result = reducer(initialState, action)
		expect(result).toMatchInlineSnapshot(`
		Object {
		  "page": 1,
		  "searchTerm": "test",
		  "status": "MODAL_CLOSE",
		}
	`)
	})
	it('should update state when PHOTO_SELECT is dispatched', () => {
		const action: PhotoAction = {
			type: 'PHOTO_SELECT',
			payload: {
				photo: {
					id: '-1',
				},
			},
		}
		const result = reducer(initialState, action)
		expect(result).toMatchInlineSnapshot(`
		Object {
		  "page": 1,
		  "searchTerm": "",
		  "selectedPhoto": Object {
		    "id": "-1",
		  },
		  "status": "MODAL_OPEN",
		}
	`)
	})
	it('should update state when ModalAction is dispatched', () => {
		const action: ModalAction = {
			type: 'CLOSE_MODAL',
		}
		const result = reducer(initialState, action)
		expect(result).toMatchInlineSnapshot(`
		Object {
		  "page": 1,
		  "searchTerm": "",
		  "status": "MODAL_CLOSE",
		}
	`)
	})
	it('should update state when PaginationAction is dispatched', () => {
		const action: PaginationAction = {
			type: 'SET_PAGE',
			payload: {
				page: 3,
			},
		}
		const result = reducer(initialState, action)
		expect(result).toMatchInlineSnapshot(`
		Object {
		  "page": 3,
		  "searchTerm": "",
		  "status": "MODAL_CLOSE",
		}
	`)
	})
})
