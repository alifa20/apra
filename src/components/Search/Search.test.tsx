import { fireEvent, render, screen } from '@testing-library/react'
import { Search } from './Search'

const dispatch = jest.fn()

describe('Search', () => {
	it('dispatches search term after clicking enter', async () => {
		render(<Search dispatch={dispatch} />)
		const term = 'lorem'
		const input = await screen.getByRole('search')
		fireEvent.change(input, { target: { value: term } })
		fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 })
		expect(dispatch).toBeCalledWith({
			payload: { term },
			type: 'SEARCH_SUCCESS',
		})
	})
})
