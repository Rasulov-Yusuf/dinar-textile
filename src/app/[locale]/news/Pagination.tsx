import { colors } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
    return (
        <div className='flex items-center justify-center p-4'>
            <Stack spacing={2}>
                <Pagination
                    sx={{color : "#CD333A"}}
                    count={5} />
            </Stack>
        </div>
    );
}
