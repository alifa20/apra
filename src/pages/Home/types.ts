import { ModalAction } from '../../components/Modal/types'
import { PhotoAction } from '../../components/PhotoCard/types'
import { SearchAction } from '../../components/Search/types'
import { Photo } from '../../generated/graphql'

export type State = { status: 'INIT' | 'MODAL_CLOSE' | 'MODAL_OPEN' } & {
	searchTerm: string
	selectedPhoto?: Photo
}

export type Action = SearchAction | PhotoAction | ModalAction
