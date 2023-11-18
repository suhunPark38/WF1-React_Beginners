import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import products from "../data/products";

/*
Product 정보를 표시해주는 모달
 */

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ProductModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Button onClick={handleOpen}> <AddIcon/> </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        1234
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        1234
                    </Typography>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </>
);
}

export default ProductModal;