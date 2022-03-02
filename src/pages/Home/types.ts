import { ModalAction } from '../../components/Modal/types'
import { PaginationAction } from '../../components/Pagination/types'
import { PhotoAction } from '../../components/PhotoCard/types'
import { SearchAction } from '../../components/Search/types'
import { Photo } from '../../generated/graphql'

export type State = { status: 'MODAL_CLOSE' | 'MODAL_OPEN' } & {
	searchTerm: string
	selectedPhoto?: Photo
	page: number
}

export type Action = SearchAction | PhotoAction | ModalAction | PaginationAction
