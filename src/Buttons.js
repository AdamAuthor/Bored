import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export default function IconButtonColors() {

    return (
            <Box
                sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Stack direction="row" spacing={5}>
                    <IconButton color="success">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Button variant="contained" style={{background: "#F55151"}}>
                        <div style={{marginLeft: '15px', marginRight: '15px'}}>DO IT!</div>
                    </Button>
                    <IconButton color="success">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Stack>
            </Box>
    );
}