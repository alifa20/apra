import { Box, HStack, Spinner, Text, VStack } from '@chakra-ui/react'
import { useReducer } from 'react'
import * as Urql from 'urql'
import { Error } from '../../components/Error/Error'
import { Modal } from '../../components/Modal/Modal'
import { PhotoCard } from '../../components/PhotoCard/PhotoCard'
import { Search } from '../../components/Search/Search'
import { SearchResult } from '../../components/SearchResult/SearchResult'
import {
	GetPhotosQueryVariables,
	useGetPhotosQuery,
} from '../../generated/graphql'
import { initialState, reducer } from './reducer'

export const Home = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { searchTerm } = state

	const options: Omit<Urql.UseQueryArgs<GetPhotosQueryVariables>, 'query'> = {
		variables: {
			options: {
				search: {
					q: searchTerm,
				},
				paginate: {
					page: 1,
					limit: 15,
				},
			},
		},
		pause: !searchTerm,
	}

	const [result] = useGetPhotosQuery(options)
	const { data, fetching, error } = result

	return (
		<Box
			textAlign='center'
			fontSize='xl'
			p={10}
			minH='100vh'
			h='full'
			bg='blue.800'
		>
			<VStack>
				<Search dispatch={dispatch} />
				<HStack>
					{fetching && <Spinner color='whiteAlpha.800' />}
					{!!searchTerm && (
						<Text color='whiteAlpha.800' fontSize='md'>
							Search result for: <strong>{searchTerm}</strong>
						</Text>
					)}
				</HStack>
				<Box w='full'>
					<SearchResult
						data={data}
						renderItem={({ row }) => (
							<PhotoCard key={row?.id} data={row} dispatch={dispatch} />
						)}
					/>
				</Box>
				<Modal
					isOpen={state.status === 'MODAL_OPEN'}
					photo={state.selectedPhoto ?? null}
					dispatch={dispatch}
				/>
				{error && <Error>Something went wrong!</Error>}
			</VStack>
		</Box>
	)
}
