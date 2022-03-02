import { SearchIcon } from '@chakra-ui/icons'
import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
} from '@chakra-ui/react'
import React, {
	ChangeEventHandler,
	Dispatch,
	KeyboardEventHandler,
	useState,
} from 'react'
import { SearchAction } from './types'

interface Props {
	dispatch: Dispatch<SearchAction>
}

export const Search = ({ dispatch }: Props) => {
	const [term, setTerm] = useState('')

	const onChange: ChangeEventHandler<HTMLInputElement> = (event) =>
		setTerm(event.target.value)

	const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === 'Enter') {
			// onSearch(term)
			dispatch({ type: 'SEARCH_SUCCESS', payload: { term } })
			setTerm('')
		}
	}

	return (
		<Flex justifyContent='center'>
			<Box w={400}>
				<InputGroup>
					<Input
						autoFocus
						onKeyDown={onKeyDown}
						onChange={onChange}
						value={term}
					/>
					<InputRightElement>
						<SearchIcon color='whiteAlpha.700' />
					</InputRightElement>
				</InputGroup>
			</Box>
		</Flex>
	)
}
