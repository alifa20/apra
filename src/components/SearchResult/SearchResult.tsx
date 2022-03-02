import { Box } from '@chakra-ui/react'
import React from 'react'
import { GetPhotosQuery, Photo } from '../../generated/graphql'

interface Props {
	data?: GetPhotosQuery
	renderItem: (props: { row: Photo | null }) => JSX.Element
}

export const SearchResult = ({ data, renderItem }: Props) => (
	<Box>{data?.photos?.data?.map((row) => renderItem({ row }))}</Box>
)
