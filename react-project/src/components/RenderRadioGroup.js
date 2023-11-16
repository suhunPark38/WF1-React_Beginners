import React, { useState } from 'react';
import Modal from "@mui/material/Modal";
import { Paper } from '@mui/material';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';

const RenderRadioGroup = (props) => {
  const { index, radioGroup, groupIndex, selectedRadioGroups, handleRadioChange } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);



  const handleOpenModal = (option) => {
    setModalContent(option);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <RadioGroup
        name={`radioGroup${groupIndex}`}
        value={selectedRadioGroups[index - 2]}
        onChange={(e) => handleRadioChange(e, `group${groupIndex}`)}
      >
        {radioGroup.options.map((option, optionIndex) => (
          <div key={optionIndex} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <FormControlLabel
              value={option}
              control={<Radio />}
              label={option}
            />
            {groupIndex !== 1 && (
              <Button key={optionIndex} onClick={() => handleOpenModal(option)}>
                <ContentPasteSearchIcon />
              </Button>
            )}
          </div>
        ))}
      </RadioGroup>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Paper>
            <h2>안녕하세요!</h2>
            {modalContent && (
              <p>{modalContent}</p>
            )}
            <Button onClick={handleCloseModal}>닫기</Button>
          </Paper>
        </div>
      </Modal>
    </div>
  );
};

export default RenderRadioGroup;
