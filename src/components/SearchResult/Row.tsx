import React from 'react'
import { Photo } from '../../generated/graphql'
import { Text } from '@chakra-ui/react'
import { PhotoCard } from '../PhotoCard/PhotoCard'

interface Props {
	data?: Photo | null
}
export const Row = ({ data }: Props) => {
	return <PhotoCard />
	// <Text color='white'>{data?.title}</Text>
}
