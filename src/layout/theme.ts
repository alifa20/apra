import { extendTheme, theme as defaultTheme } from '@chakra-ui/react'
import * as components from './components'

export const theme = extendTheme({
	...defaultTheme,
	components: { ...components },
})
