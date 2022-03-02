import { Box, ChakraProvider, Spinner, Text, VStack } from '@chakra-ui/react'
import * as Urql from 'urql'
import { Error } from './components/Error/Error'
import { GetPhotosQueryVariables, useGetPhotosQuery } from './generated/graphql'
import { theme } from './layout/theme'
import { Search } from './components/Search/Search'
import { SearchResult } from './components/SearchResult/SearchResult'
import { PhotoCard } from './components/PhotoCard/PhotoCard'

export const App = () => {
	const options: Omit<Urql.UseQueryArgs<GetPhotosQueryVariables>, 'query'> = {
		variables: {
			options: {
				paginate: {
					page: 1,
					limit: 15,
				},
			},
		},
	}

	const [result] = useGetPhotosQuery(options)
	const { data, fetching, error } = result

	const onSearch = (t) => {
		// TODO
	}
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign='center' fontSize='xl' p={10} h='full' bg='blue.800'>
				<VStack>
					<Search onSearch={onSearch} />
					{fetching && <Spinner color='whiteAlpha.800' />}
					<Text>Searching for: </Text>
					<Box w='full'>
						<SearchResult data={data} />
					</Box>
					{error && <Error>Something went wrong!</Error>}
				</VStack>
			</Box>
		</ChakraProvider>
	)
}
