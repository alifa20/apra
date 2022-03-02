import { Button, HStack, Text } from '@chakra-ui/react'
import React, { Dispatch } from 'react'
import { PaginationAction } from './types'

interface Props {
	page: number
	hasNext: boolean
	hasBack: boolean
	dispatch: Dispatch<PaginationAction>
}

export const Pagination = ({ page, hasNext, hasBack, dispatch }: Props) => {
	return (
		<HStack justifyContent='space-between' minW='342px'>
			<Button
				size='sm'
				data-testid='btn-back'
				disabled={!hasBack}
				onClick={() => {
					dispatch({ type: 'SET_PAGE', payload: { page: page - 1 } })
				}}
			>
				Back
			</Button>
			<Text fontSize='sm' color='white'>
				Page: {page}
			</Text>
			<Button
				size='sm'
				disabled={!hasNext}
				data-testid='btn-next'
				onClick={() => {
					dispatch({ type: 'SET_PAGE', payload: { page: page + 1 } })
				}}
			>
				Next
			</Button>
		</HStack>
	)
}
