import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

/*
견적 정보를 표시해주는 모달
 */

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EstimateModal = (estimateName, totalPrice, totalPerformance) => {
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
                        {estimateName}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <strong>견적 가격:</strong> {totalPrice}
                        <p></p>
                        <strong>견적 성능:</strong> {totalPerformance}
                    </Typography>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </>
    );
}

export default EstimateModal;