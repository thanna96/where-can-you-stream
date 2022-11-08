import { AppBar, Link, Toolbar } from '@mui/material'
import { Logo } from '../icons/Logo'
import { Link as RouterLink } from 'react-router-dom'
import { headerStyle } from '../../styles/theme/BaseTheme'
import { AppName } from '../../utils/AppName'

export const Header = () => {
  return (
        <AppBar position='static'>
            <Toolbar className={headerStyle}>
                <div>
                    <Link to='/' component={RouterLink}>
                        <div>
                            <Logo/>
                        </div>
                    </Link>
                </div>
                <div className={'text-3xl text-center w-full'}>{AppName}</div>
            </Toolbar>
        </AppBar>
  )
}
