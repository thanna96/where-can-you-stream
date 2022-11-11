import { AppBar, Link, Toolbar } from '@mui/material'
import { Logo } from '../icons/Logo'
import { Link as RouterLink } from 'react-router-dom'
import { headerStyle } from '../../styles/theme/BaseTheme'

export const Header = () => {
  return (
        <AppBar position='static'>
            <Toolbar className={headerStyle}>
                <div className={'w-full'}>
                    <Link to='/' component={RouterLink}>
                        <div>
                            <Logo className={'m-auto'}/>
                        </div>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
  )
}
