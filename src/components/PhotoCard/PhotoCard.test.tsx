import { fireEvent, render, screen } from '@testing-library/react'
import { data } from './mock'
import { PhotoCard } from './PhotoCard'

const dispatch = jest.fn()

describe('PhotoCard', () => {
	it('dispatches action after clicking on the image', async () => {
		render(<PhotoCard dispatch={dispatch} data={data} />)
		const img = await screen.getByRole('img')
		fireEvent.click(img)
		expect(dispatch).toBeCalled()
	})
	it('should not dispatch any action if image data is not provided', async () => {
		render(<PhotoCard dispatch={dispatch} />)
		const img = await screen.getByRole('img')
		fireEvent.click(img)
		expect(dispatch).not.toBeCalled()
	})
})
