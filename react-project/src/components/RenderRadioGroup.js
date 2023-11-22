import React, { useState } from 'react';
import Modal from "@mui/material/Modal";
import { Paper, Button, Typography, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ProductInformArray from './ProductInformArray'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  },
  radioGroupContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
};

const ModalContent = ({ content, onClose, getProductDetails }) => (
  <div style={styles.modalContainer}>
    <Paper>
      <Typography variant="h4">{content}</Typography>
      {ProductInformArray(getProductDetails(content))}
      <Button onClick={onClose}>닫기</Button>
    </Paper>
  </div>
);

const RenderRadioGroup = (props) => {
  const { index, radioGroup, groupIndex, selectedRadioGroups, handleRadioChange, products } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleToggleModal = (option) => {
    setModalContent(option);
    setIsModalOpen((prev) => !prev);
  };

  const getProductDetails = (productName) => {
    const product = products.find((product) => product.name === productName);
    return (product ? product : '세부 정보를 찾을 수 없습니다.');
  };

  return (
    <div style={styles.container}>
      <RadioGroup
        name={`radioGroup${groupIndex}`}
        value={selectedRadioGroups[index - 2]}
        onChange={(e) => handleRadioChange(e, `group${groupIndex}`)}
      >
        {radioGroup.options.map((option, optionIndex) => (
          <div key={optionIndex} style={styles.radioGroupContainer}>
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
            />
            {groupIndex !== 1 && (
              <Button key={optionIndex} onClick={() => handleToggleModal(option)}>
                <ContentPasteSearchIcon />
              </Button>
            )}
          </div>
        ))}
      </RadioGroup>

      {<Modal open={isModalOpen} onClose={handleToggleModal}>
        <ModalContent content={modalContent} onClose={handleToggleModal} getProductDetails={getProductDetails}/>
      </Modal>}
    </div>
  );
};

export default RenderRadioGroup;
