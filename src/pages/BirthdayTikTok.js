import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoModal from '../components/PhotoModal';

const TikTokContainer = styled.div`
  background: #fff;
  color: #161823;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e1e1e2;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #161823;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 16px;
  
  button {
    background: none;
    border: none;
    color: #161823;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
  }
`;

const ProfileSection = styled.div`
  text-align: center;
  padding: 20px 16px;
`;

const ProfileImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0050, #00f5ff);
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
  }
`;

const Username = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0 4px;
`;

const Handle = styled.p`
  color: #161823;
  font-size: 16px;
  margin: 0 0 20px;
  opacity: 0.75;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0;
`;

const StatItem = styled.div`
  text-align: center;
  
  .number {
    font-size: 20px;
    font-weight: 700;
    display: block;
  }
  
  .label {
    font-size: 14px;
    color: #161823;
    opacity: 0.75;
    margin-top: 4px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 24px 0;
  padding: 0 16px;
`;

const MessageButton = styled.button`
  background: #fe2c55;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  flex: 1;
  max-width: 200px;
  
  &:hover {
    background: #e91e63;
  }
`;

const FollowButton = styled.button`
  background: #f1f1f2;
  color: #161823;
  border: 1px solid #e1e1e2;
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #e1e1e2;
  }
`;

const Bio = styled.div`
  text-align: center;
  padding: 0 16px;
  margin: 16px 0;
  
  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
    color: #161823;
    opacity: 0.75;
  }
  
  .description {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e1e2;
  margin-top: 24px;
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${props => props.active ? '#161823' : '#161823'};
  opacity: ${props => props.active ? '1' : '0.5'};
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  flex: 1;
  border-bottom: ${props => props.active ? '2px solid #161823' : 'none'};
  
  &:hover {
    opacity: 1;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding: 2px;
`;

const PhotoItem = styled.div`
  aspect-ratio: 9/16;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    bottom: 8px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0,0,0,0.9);
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 6px;
    border-radius: 4px;
    backdrop-filter: blur(2px);
    z-index: 2;
    opacity: 1;
    visibility: visible;
    pointer-events: none;
  }
  
  .pinned {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #fe2c55;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }
`;

const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
`;

const ConfettiPiece = styled.div`
  position: absolute;
  font-size: 28px;
  animation: confettiFall 6s linear forwards;
  
  @keyframes confettiFall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(1080deg);
      opacity: 0;
    }
  }
`;

function BirthdayTikTok() {
  const [activeTab, setActiveTab] = useState('videos');
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [daysOld, setDaysOld] = useState('');
  
  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };
  
  useEffect(() => {
    // Trigger confetti on page load
    triggerConfetti();
    
    // Calculate days old (assuming birth date is June 15, 1999 - modify as needed)
    const birthDate = new Date('1999-06-15');
    const today = new Date();
    const diffTime = Math.abs(today - birthDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    setDaysOld(diffDays.toLocaleString());
  }, []);
  
  const generateConfetti = () => {
    const emojis = ['🤾‍♀️🥒🏓', '🏃‍♀️', '🗻', '⛩️', '🎉', '🌯', '🍱', '🍜', '🍲', '🎂']; // pickle, girl running, mount fuji, phone (as TikTok substitute)
    const confettiPieces = [];
    
    for (let i = 0; i < 100; i++) {
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const left = Math.random() * 100;
      const delay = Math.random() * 4;
      const duration = 4 + Math.random() * 4;
      
      confettiPieces.push(
        <ConfettiPiece
          key={i}
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        >
          {emoji}
        </ConfettiPiece>
      );
    }
    
    return confettiPieces;
  };
  
  // Categorized photos for different tabs
  const photoCategories = {
    videos: [
      { id: 1, src: '/img/birthday/business_class.mp4', views: '2.1M', pinned: true },
      { id: 2, src: '/img/birthday/run_fuji.mp4', views: '1.8M', pinned: true },
      { id: 3, src: '/img/birthday/half_marathon.mp4', views: '956K', pinned: true },
    ],
    food: [
      { id: 7, src: '/img/magazine/manten.jpg' , views: '1.2M', pinned: true },
      { id: 8, src: '/img/birthday/food/curry_rice.jpg', views: '987K', pinned: true },
      { id: 9, src: '/img/magazine/cremia_2.jpg', views: '987K', pinned: true },
      { id: 10, src: '/img/birthday/food/uni_omak1.jpg', views: '756K' },
      { id: 11, src: '/img/birthday/food/plane_duck.jpg', views: '645K' },
      { id: 12, src: '/img/birthday/food/claypot.jpg', views: '523K' },
      { id: 13, src: '/img/birthday/food/yoshi.jpg', views: '412K' },
      { id: 14, src: '/img/birthday/food/udon.jpg', views: '412K' },
    ],
    favourites: [
      { id: 15, src: '/img/birthday/faves/conch_dragonfruit.jpg', views: '3.2M', pinned: true },
      { id: 16, src: '/img/birthday/faves/conch_jumbo.jpg', views: '2.8M', pinned: true },
      { id: 17, src: '/img/birthday/faves/conch_ogino.jpg', views: '2.1M', pinned: true },
      { id: 18, src: '/img/birthday/faves/conch_pizza.jpg', views: '1.9M' },
      { id: 19, src: '/img/birthday/faves/conch_cremia.jpg', views: '1.5M' },
      { id: 20, src: '/img/birthday/faves/conch_strawberry.jpg', views: '1.2M' },
    ]
  };
  
  // Get photos for current active tab
  const currentPhotos = photoCategories[activeTab] || photoCategories.videos;

  return (
    <TikTokContainer>
      {showConfetti && (
        <ConfettiContainer>
          {generateConfetti()}
        </ConfettiContainer>
      )}
      
      {selectedPhoto && (
        <PhotoModal 
          photo={selectedPhoto}
          profileImage="/img/birthday/conch.jpeg"
          username="@itsconch"
          onClose={() => setSelectedPhoto(null)}
        />
      )}
      <Header>
        <BackButton>←</BackButton>
        <HeaderIcons>
          <button>🔔</button>
          <button>↗</button>
        </HeaderIcons>
      </Header>

      <ProfileSection>
        <ProfileImage>
          <img src="/img/birthday/conch.jpeg" alt="Profile" />
        </ProfileImage>
        
        <Username>Happy Birthday! 🎉</Username>
        <Handle>@itsconch</Handle>
        
        <StatsContainer>
          <StatItem>
            <span className="number">{daysOld}</span>
            <div className="label">Days Old</div>
          </StatItem>
          <StatItem>
            <span className="number">300+</span>
            <div className="label">Kilometers Run This Year</div>
          </StatItem>
          <StatItem>
            <span className="number">1</span>
            <div className="label">Amazing You</div>
          </StatItem>
        </StatsContainer>

        <ActionButtons>
          <MessageButton onClick={triggerConfetti}>💕 Happy Birthday!</MessageButton>
          <FollowButton>🎂</FollowButton>
        </ActionButtons>

        <Bio>
          <div className="location">
            🌎🤸🏻‍♀️🍵🍰🤾‍♀️🥒🏓
          </div>
          <div className="description">
          toronto but really markham<br/>
          just a lazy 26 year old gal tryna hack life✨
          </div>
        </Bio>
      </ProfileSection>

      <TabContainer>
        <Tab 
          active={activeTab === 'videos'} 
          onClick={() => setActiveTab('videos')}
        >
          🐐 Goat Moments
        </Tab>
        <Tab 
          active={activeTab === 'food'} 
          onClick={() => setActiveTab('food')}
        >
          🍳 Favourite Foods
        </Tab>
        <Tab 
          active={activeTab === 'favourites'} 
          onClick={() => setActiveTab('favourites')}
        >
           👬 My Favorites
        </Tab>
      </TabContainer>

      <PhotoGrid>
        {currentPhotos.map((photo) => {
          // Check if the file is a video based on extension
          const isVideo = photo.src && (photo.src.endsWith('.mp4') || photo.src.endsWith('.mov') || photo.src.endsWith('.webm') || photo.src.endsWith('.avi'));
          
          return (
            <PhotoItem key={photo.id} onClick={() => setSelectedPhoto(photo)}>
              {isVideo ? (
                <video 
                  src={photo.src} 
                  muted 
                  loop 
                  playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img src={photo.src} alt={`Memory ${photo.id}`} />
              )}
              {photo.pinned && <div className="pinned">Pinned</div>}
              <div className="overlay">
                ▶ {photo.views}
              </div>
            </PhotoItem>
          );
        })}
      </PhotoGrid>
    </TikTokContainer>
  );
}

export default BirthdayTikTok;
