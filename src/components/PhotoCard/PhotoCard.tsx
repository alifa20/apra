import {
	Box,
	Center,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { Photo } from '../../generated/graphql'

const IMAGE =
	'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

interface Props {
	data?: Photo | null
}

export const PhotoCard = ({ data }: Props) => {
	return (
		<Center py={12} m={5} display='inline-block'>
			<Box
				role={'group'}
				p={6}
				maxW={'330px'}
				// w={'full'}
				w={'330px'}
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
					<Image
						rounded={'lg'}
						height={230}
						width={282}
						objectFit={'cover'}
						src={data?.thumbnailUrl ?? IMAGE}
						cursor='pointer'
						onClick={() => console.log('hey')}
					/>
				</Box>
				<Stack pt={10} align={'center'}>
					<Text color={'gray.500'} fontSize={'sm'}>
						{data?.title}
					</Text>
					{/* <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
						{data?.title}
					</Heading> */}
					{/* <Stack direction={'row'} align={'center'}>
						<Text fontWeight={800} fontSize={'xl'}>
							$57
						</Text>
						<Text textDecoration={'line-through'} color={'gray.600'}>
							$199
						</Text>
					</Stack> */}
				</Stack>
			</Box>
		</Center>
	)
}
