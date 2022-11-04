import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'
import { Router } from '../../Router'
import { Footer } from './Footer'

export const Base = () => {
  return (
        <BrowserRouter basename={'/'}>
            <Header/>
            <Router/>
            <Footer/>
        </BrowserRouter>)
}
