import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'

const dispatch = jest.fn()

describe('Pagination', () => {
	it('next button not clickable', async () => {
		render(<Pagination dispatch={dispatch} hasNext={false} hasBack page={1} />)
		const next = await screen.getByTestId('btn-next')
		const back = await screen.getByTestId('btn-back')
		expect(next.hasAttribute('disabled')).toBeTruthy()
		expect(back.hasAttribute('disabled')).toBeFalsy()
	})
	it('back button not clickable', async () => {
		render(<Pagination dispatch={dispatch} hasNext hasBack={false} page={1} />)
		const next = await screen.getByTestId('btn-next')
		const back = await screen.getByTestId('btn-back')
		expect(next.hasAttribute('disabled')).toBeFalsy()
		expect(back.hasAttribute('disabled')).toBeTruthy()
	})
})
