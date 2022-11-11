import { Box, Card } from '@mui/material'
import { AppName } from '../../utils/AppName'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const SearchInputCard = () => {
  return (
        <Box
            component="form"
            className='py-16 text-center'
            noValidate
            autoComplete="off"
        >
            <Card variant="outlined" className={'p-8 max-w-md mx-auto'}>
                <div className={'text-3xl text-center w-full pb-2'}>{AppName}</div>
                <TextField className={'w-full'} label="Search Movie or Show" variant="outlined"/>
                <div className={'text-right pt-2'}>
                    <Button variant="outlined">Search</Button>
                </div>
            </Card>
        </Box>
  )
}
