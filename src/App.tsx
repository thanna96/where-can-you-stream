import './App.css'
import { Base } from './components/layout/Base'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utils/QueryClient'

function App () {
  return (
        <QueryClientProvider client={queryClient}>
            <Base/>
        </QueryClientProvider>
  )
}

export default App
