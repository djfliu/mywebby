import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  margin: 0 20px;
  overflow: hidden;
  border-radius: 12px;
  background: #000;
  animation: scaleIn 0.3s ease-in-out;
  
  @keyframes scaleIn {
    from { transform: scale(0.9); }
    to { transform: scale(1); }
  }
`;

const ModalImage = styled.img`
  width: 100%;
  display: block;
  object-fit: contain;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ModalFooter = styled.div`
  padding: 16px;
  color: white;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  flex: 1;
  
  h4 {
    margin: 0;
    color: white;
    font-size: 16px;
  }
  
  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
`;

const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 15px;
  bottom: 100px;
  z-index: 5;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  span {
    font-size: 12px;
    margin-top: 5px;
  }
`;

const ModalCaption = styled.div`
  padding: 16px;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
  
  .hashtags {
    color: #5c8eff;
    margin-top: 8px;
  }
`;

function PhotoModal({ photo, profileImage, username, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalHeader>
          <ProfileImage>
            <img src={profileImage} alt={username} />
          </ProfileImage>
          <UserInfo>
            <h4>{username}</h4>
            <span>Original audio</span>
          </UserInfo>
        </ModalHeader>
        
        <ModalImage src={photo.src} alt={`Photo ${photo.id}`} />
        
        <ActionBar>
          <ActionButton>
            ❤️
            <span>{Math.floor(Math.random() * 1000) + 200}K</span>
          </ActionButton>
          <ActionButton>
            💬
            <span>{Math.floor(Math.random() * 300) + 50}</span>
          </ActionButton>
          <ActionButton>
            🔗
            <span>Share</span>
          </ActionButton>
        </ActionBar>
        
        <ModalCaption>
          <p>{photo.caption || "Birthday memories! 🎂✨"}</p>
          <p className="hashtags">#birthday #memories #celebration</p>
        </ModalCaption>
        
        <ModalFooter>
          {photo.views} views • {photo.pinned ? 'Pinned' : 'Posted recently'}
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default PhotoModal;
