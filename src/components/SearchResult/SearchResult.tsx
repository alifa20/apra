import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { GetPhotosQuery } from '../../generated/graphql'
import { PhotoCard } from '../PhotoCard/PhotoCard'
import { Row } from './Row'

interface Props {
	data?: GetPhotosQuery
}
export const SearchResult = ({ data }: Props) => {
	return (
		<Box>
			{data?.photos?.data?.map((row) => (
				<PhotoCard key={row?.id} data={row} />
				// <Box key={row?.id} bg='red' m={2} w='40px' height='40px' />
			))}
		</Box>
	)
}
