import { Box, HStack, Spinner, Text, VStack } from '@chakra-ui/react'
import { useReducer } from 'react'
import * as Urql from 'urql'
import { Error } from '../../components/Error/Error'
import { Modal } from '../../components/Modal/Modal'
import { Pagination } from '../../components/Pagination/Pagination'
import { PhotoCard } from '../../components/PhotoCard/PhotoCard'
import { Search } from '../../components/Search/Search'
import { SearchResult } from '../../components/SearchResult/SearchResult'
import {
	GetPhotosQueryVariables,
	useGetPhotosQuery,
} from '../../generated/graphql'
import { initialState, reducer } from './reducer'

const limit = 15
export const Home = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { searchTerm, page } = state

	const options: Omit<Urql.UseQueryArgs<GetPhotosQueryVariables>, 'query'> = {
		variables: {
			options: {
				search: { q: searchTerm },
				paginate: { page, limit },
			},
		},
		pause: !searchTerm,
	}

	const [result] = useGetPhotosQuery(options)

	const { data, fetching, error } = result

	const hasNext = page * limit < (data?.photos?.meta?.totalCount ?? 0)
	const hasBack = page > 1
	const hasPhotos = (data?.photos?.data?.length ?? 0) > 0

	console.log('page', page)

	return (
		<Box textAlign='center' fontSize='xl' minH='100vh' h='full' bg='blue.800'>
			<VStack
				position='fixed'
				zIndex={22}
				bg='blue.800'
				w='full'
				pt={5}
				pb={5}
				borderBottomWidth={1}
				borderColor='blue.200'
			>
				<Search dispatch={dispatch} />
				<HStack>
					{fetching && <Spinner color='whiteAlpha.800' />}
					{!!searchTerm && (
						<Text color='whiteAlpha.800' fontSize='md'>
							Search result for: <strong>{searchTerm}</strong>
						</Text>
					)}
				</HStack>
				{hasPhotos && (
					<Pagination
						page={page}
						hasNext={hasNext}
						hasBack={hasBack}
						dispatch={dispatch}
					/>
				)}
			</VStack>
			<VStack>
				<Box w='full' paddingTop={40}>
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
