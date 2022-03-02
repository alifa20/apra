import {
	Box,
	Center,
	Image,
	LinkOverlay,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { Dispatch } from 'react'
import { Photo } from '../../generated/graphql'
import { PhotoAction } from './types'

const IMAGE =
	'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

interface Props {
	data?: Photo | null
	dispatch: Dispatch<PhotoAction>
}

export const PhotoCard = ({ data, dispatch }: Props) => (
	<Center py={12} m={5} display='inline-block'>
		<Box
			role={'group'}
			p={6}
			maxW={'330px'}
			w={'full'}
			bg={useColorModeValue('white', 'gray.800')}
			boxShadow={'2xl'}
			rounded={'lg'}
			pos={'relative'}
			zIndex={1}
		>
			<Box
				rounded={'lg'}
				mt={-12}
				pos={'relative'}
				height={'230px'}
				_after={{
					transition: 'all .3s ease',
					content: '""',
					w: 'full',
					h: 'full',
					pos: 'absolute',
					top: 5,
					left: 0,
					backgroundImage: `url(${IMAGE})`,
					filter: 'blur(15px)',
					zIndex: -1,
				}}
				_groupHover={{
					_after: {
						filter: 'blur(20px)',
					},
				}}
			>
				<LinkOverlay
					href='#'
					data-testid='image-item'
					onClick={(e) => {
						e.preventDefault()
						if (data) {
							dispatch({ type: 'PHOTO_SELECT', payload: { photo: data } })
						}
					}}
				>
					<Image
						rounded={'lg'}
						height={230}
						width={282}
						alt={`thumbnail for ${data?.title}`}
						objectFit={'cover'}
						src={data?.thumbnailUrl ?? IMAGE}
						cursor='pointer'
					/>
				</LinkOverlay>
			</Box>
			<Stack pt={10} align={'center'}>
				<Text color={'gray.500'} fontSize={'sm'}>
					{data?.title}
				</Text>
			</Stack>
		</Box>
	</Center>
)
