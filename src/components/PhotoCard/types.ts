import { Photo } from '../../generated/graphql'

export type PhotoAction = { type: 'PHOTO_SELECT'; payload: { photo: Photo } }
