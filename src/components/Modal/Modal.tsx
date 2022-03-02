import {
	Button,
	Image,
	Modal as CkModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import React, { Dispatch } from 'react'
import { Photo } from '../../generated/graphql'
import { ModalAction } from './types'

interface Props {
	photo: Photo | null
	isOpen: boolean
	dispatch: Dispatch<ModalAction>
}
const IMAGE =
	'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

export const Modal = ({ photo, isOpen, dispatch }: Props) => {
	const onClose = () => {
		dispatch({ type: 'CLOSE_MODAL' })
	}

	return (
		<CkModal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{photo?.id}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Image rounded={'lg'} src={photo?.url ?? IMAGE} />
				</ModalBody>
				<ModalFooter justifyContent='flex-start'>
					<Button colorScheme='blue' mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</CkModal>
	)
}
