import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './layout/theme'
import { Home } from './pages/Home/Home'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Home />
	</ChakraProvider>
)
