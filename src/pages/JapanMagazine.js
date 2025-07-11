import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MagazineContainer = styled.div`
  background: linear-gradient(135deg, #f5f3f0 0%, #e8e2db 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Playfair Display', 'Georgia', serif;
`;

const MagazineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.isCover ? '600px' : '1200px'};
  height: 800px;
  background: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  transition: max-width 0.5s ease;
`;

const MagazinePage = styled.div`
  width: ${props => props.isCover ? '100%' : '50%'};
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  transform-origin: ${props => props.isLeft ? 'right center' : 'left center'};
  
  ${props => props.isFlipping && `
    transform: ${props.isLeft ? 'rotateY(-180deg)' : 'rotateY(180deg)'};
  `}
`;

const PageContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${props => props.background || 'white'};
  
  &.cover {
    background-image: url('img/magazine/fuji_landscape.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 0;
    position: relative;
    overflow: hidden;
    display: block;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, 
        rgba(0,0,0,0.4) 0%, 
        rgba(0,0,0,0.1) 30%, 
        rgba(0,0,0,0.1) 70%, 
        rgba(0,0,0,0.6) 100%);
      z-index: 1;
    }
    
    & > * {
      position: relative;
      z-index: 2;
    }
  }
  
  &.contents {
    background: linear-gradient(135deg, #fff8f0 0%, #f5f0e8 100%);
    border-left: 4px solid #d4af37;
  }
`;

// Magazine Cover Components
const MagazineHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
`;

const MagazineLogo = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0;
  color: #FFD700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
  letter-spacing: 3px;
`;

const IssueInfo = styled.div`
  text-align: right;
  font-size: 0.9rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  
  .price { font-weight: bold; font-size: 1.1rem; }
  .date { opacity: 0.9; }
`;

const CoverTitle = styled.h1`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 60%;
  font-size: 3.2rem;
  font-weight: 900;
  margin: 0;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9);
  letter-spacing: 2px;
  color: white;
  line-height: 0.85;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const MainStoryTeaser = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  width: 60%;
  background: rgba(255, 215, 0, 0.95);
  color: #1a1a1a;
  padding: 10px 14px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  line-height: 1.2;
  transform: translateX(-50%);
  text-align: center;
`;

const SideStories = styled.div`
  position: absolute;
  right: -5px;
  top: 10%;
  bottom: 30%;
  width: 130px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  
  .story {
    background: rgba(0,0,0,0.85);
    color: white;
    padding: 6px 8px;
    border-left: 3px solid #FFD700;
    font-size: 0.7rem;
    line-height: 1.2;
    border-radius: 2px;
    flex-shrink: 0;
    
    .title {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.65rem;
      color: #FFD700;
      margin-bottom: 2px;
      letter-spacing: 0.5px;
    }
  }
`;

const BottomInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Barcode = styled.div`
  background: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: black;
  
  .bars {
    height: 30px;
    background: repeating-linear-gradient(
      90deg,
      black 0px,
      black 2px,
      white 2px,
      white 4px
    );
    margin-bottom: 5px;
  }
`;

const WebsiteInfo = styled.div`
  color: white;
  font-size: 0.8rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  
  .website {
    font-weight: bold;
    color: #FFD700;
  }
`;

// Remove old cover subtitle - replaced with new magazine layout

const CoverDate = styled.div`
  font-size: 1.1rem;
  margin-top: 50px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.3);
  padding: 15px 30px;
  border-radius: 25px;
  border: 1px solid rgba(255, 215, 0, 0.3);
`;

const ContentsTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
`;

const ContentsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.1);
    padding-left: 10px;
  }
  
  .title {
    font-size: 1.2rem;
    color: #333;
  }
  
  .page {
    font-size: 1rem;
    color: #666;
    font-weight: bold;
  }
`;

// Layout Type 1: Classic Feature Spread
const FeatureSpread = styled.div`
  display: flex;
  height: 100%;
  
  .left-page {
    width: 50%;
    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(135deg, #fff 0%, #f8f5f0 100%);
    border-right: 3px solid #d4af37;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 20px;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #d4af37, #ff6347);
    }
  }
  
  .right-page {
    width: 50%;
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(0,0,0,0.2), transparent 70%);
    }
  }
`;

// Layout Type 2: Photo Grid with Overlay Text
const PhotoGridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  gap: 2px;
  
  .main-photo {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    background-size: cover;
    background-position: center;
    position: relative;
    
    .overlay-text {
      position: absolute;
      bottom: 40px;
      left: 40px;
      right: 40px;
      background: rgba(0, 0, 0, 0.8);
      padding: 30px;
      border-radius: 10px;
      color: white;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 215, 0, 0.3);
    }
  }
  
  .side-photo {
    background-size: cover;
    background-position: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent);
    }
  }
`;

// Layout Type 3: Vertical Split with Japanese Elements
const VerticalSplitLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .top-section {
    height: 60%;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;
    
    .title-overlay {
      width: 100%;
      background: linear-gradient(transparent, rgba(0,0,0,0.8));
      padding: 60px 40px 40px;
      color: white;
    }
  }
  
  .bottom-section {
    height: 40%;
    padding: 40px;
    background: linear-gradient(135deg, #2c1810 0%, #1a1a1a 100%);
    color: white;
    display: flex;
    align-items: center;
    position: relative;
    
    &::before {
      content: '☆';
      position: absolute;
      top: 20px;
      right: 40px;
      font-size: 2rem;
      color: rgba(255, 215, 0, 0.6);
    }
  }
`;

const FeatureTitle = styled.h1`
  font-size: 3.5rem;
  color: #2c1810;
  margin-bottom: 25px;
  line-height: 1.1;
  font-weight: 800;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #ff6347);
  }
`;

const GridTitle = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const VerticalTitle = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 20px;
  font-weight: 900;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;
`;

const FeatureText = styled.p`
  font-size: 1.2rem;
  line-height: 1.9;
  color: #4a4a4a;
  margin-bottom: 25px;
  font-weight: 400;
  text-align: justify;
`;

const GridText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 15px;
`;

const VerticalText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  font-style: italic;
`;

const NavigationControls = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  z-index: 100;
`;

const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  color: #666;
`;

function JapanMagazine() {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const spreads = [
    {
      id: 'cover',
      type: 'cover',
      content: {
        title: 'JAPAN',
        subtitle: 'Conch and Danny take on Japan',
        date: 'Winter 2024 • A Digital Memory'
      }
    },
    {
      id: 'contents',
      type: 'contents',
      content: {
        items: [
          { title: 'Tokyo Nights', page: '04' },
          { title: 'Kyoto Temples', page: '08' },
          { title: 'Mount Fuji Journey', page: '12' },
          { title: 'Food Adventures', page: '16' },
          { title: 'Cherry Blossoms', page: '20' },
          { title: 'Our Favorite Moments', page: '24' }
        ]
      }
    },
    {
      id: 'tokyo',
      type: 'feature',
      layout: 'classic',
      content: {
        title: 'Tokyo Coffee',
        text: 'Coffee baby, some much to say.',
        image: '/img/magazine/kizasu.jpg'
      }
    },
    {
      id: 'kyoto',
      type: 'feature',
      layout: 'grid',
      content: {
        title: 'Kyoto River thang',
        text: 'Bamboo, monkey, green tea ice cream, lakeside Kyoto.',
        mainImage: '/img/magazine/monkey.jpg',
        sideImages: ['/img/magazine/kyoto_greentea_icecream.jpg', '/img/magazine/lakeside_kyoto.jpg']
      }
    },
    {
      id: 'fuji',
      type: 'feature',
      layout: 'vertical',
      content: {
        title: 'Mount Fuji',
        text: 'Standing before the majestic Mount Fuji, we were reminded of the beauty that exists when patience and persistence come together - much like our journey together. This sacred mountain witnessed our promises and dreams.',
        image: '/img/magazine/OGINO.jpg'
      }
    },
    {
      id: 'food',
      type: 'feature',
      layout: 'grid',
      content: {
        title: 'Cremia Adventure',
        text: 'From street-side ramen to elegant kaiseki dining, every meal was an adventure. We discovered flavors that danced on our tongues and created memories around every table we shared.',
        mainImage: '/img/magazine/cremia_1.jpg',
        sideImages: ['/img/magazine/cremia_2.jpg', '/img/magazine/cremia_3.jpg']
      }
    },
    {
      id: 'moments',
      type: 'feature',
      layout: 'grid',
      content: {
        title: 'Hiroshima',
        text: 'The little things that made this trip extraordinary - your laughter echoing through train stations, quiet moments watching cherry blossoms fall, and the way you looked at everything with wonder.',
        mainImage: '/img/magazine/hiroshima_1.jpg',
        sideImages: ['/img/magazine/hiroshima_2.jpg', '/img/magazine/hiroshima_3.jpg']
      }
    }
  ];

  const nextSpread = () => {
    if (currentSpread < spreads.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevSpread = () => {
    if (currentSpread > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToSpread = (index) => {
    if (index !== currentSpread) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(index);
        setIsFlipping(false);
      }, 300);
    }
  };

  const renderSpread = (spread) => {
    switch (spread.type) {
      case 'cover':
        return (
          <PageContent className="cover">
            <MagazineHeader>
              <MagazineLogo>EXPLORE</MagazineLogo>
              <IssueInfo>
                <div className="date">WINTER 2025</div>
              </IssueInfo>
            </MagazineHeader>
            
            <CoverTitle>JAPAN<br />ADVENTURE</CoverTitle>
            
            <MainStoryTeaser>
              HEHE 
            </MainStoryTeaser>
            
            <SideStories>
              <div className="story">
                <div className="title">Tokyo Nights</div>
                Neon-lit adventures in the world's busiest city
              </div>
              <div className="story">
                <div className="title">Mount Fuji</div>
                Breathtaking views and spiritual moments
              </div>
              <div className="story">
                <div className="title">Food Journey</div>
                From street ramen to Michelin stars
              </div>
              <div className="story">
                <div className="title">Cherry Blossoms</div>
                Perfect timing for sakura season
              </div>
            </SideStories>
            
            <BottomInfo>
              <Barcode>
                <div className="bars"></div>
                9 781234 567890
              </Barcode>
              <WebsiteInfo>
                <div className="website">Connie & Danny</div>
                <div>Japan Travels</div>
              </WebsiteInfo>
            </BottomInfo>
          </PageContent>
        );
      
      case 'contents':
        return (
          <PageContent className="contents">
            <ContentsTitle>Contents</ContentsTitle>
            {spread.content.items.map((item, index) => (
              <ContentsItem key={index} onClick={() => goToSpread(index + 2)}>
                <span className="title">{item.title}</span>
                <span className="page">{item.page}</span>
              </ContentsItem>
            ))}
          </PageContent>
        );
      
      case 'feature':
        // Render different layouts based on layout type
        switch (spread.layout) {
          case 'classic':
            return (
              <FeatureSpread>
                <div className="left-page">
                  <FeatureTitle>{spread.content.title}</FeatureTitle>
                  <FeatureText>{spread.content.text}</FeatureText>
                </div>
                <div 
                  className="right-page"
                  style={{ backgroundImage: `url(${spread.content.image})` }}
                />
              </FeatureSpread>
            );
          
          case 'grid':
            return (
              <PhotoGridLayout>
                <div 
                  className="main-photo"
                  style={{ backgroundImage: `url(${spread.content.mainImage})` }}
                >
                  <div className="overlay-text">
                    <GridTitle>{spread.content.title}</GridTitle>
                    <GridText>{spread.content.text}</GridText>
                  </div>
                </div>
                {spread.content.sideImages?.map((img, index) => (
                  <div 
                    key={index}
                    className="side-photo"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                ))}
              </PhotoGridLayout>
            );
          
          case 'vertical':
            return (
              <VerticalSplitLayout>
                <div 
                  className="top-section"
                  style={{ backgroundImage: `url(${spread.content.image})` }}
                >
                  <div className="title-overlay">
                    <VerticalTitle>{spread.content.title}</VerticalTitle>
                  </div>
                </div>
                <div className="bottom-section">
                  <VerticalText>{spread.content.text}</VerticalText>
                </div>
              </VerticalSplitLayout>
            );
          
          default:
            return (
              <FeatureSpread>
                <div className="left-page">
                  <FeatureTitle>{spread.content.title}</FeatureTitle>
                  <FeatureText>{spread.content.text}</FeatureText>
                </div>
                <div 
                  className="right-page"
                  style={{ backgroundImage: `url(${spread.content.image})` }}
                />
              </FeatureSpread>
            );
        }
      
      default:
        return <PageContent>Page content</PageContent>;
    }
  };

  const isCoverPage = currentSpread === 0;
  const currentSpreadData = spreads[currentSpread];

  return (
    <MagazineContainer>
      <MagazineWrapper isCover={isCoverPage}>
        {isCoverPage ? (
          // Single cover page
          <MagazinePage isCover={true}>
            {renderSpread(currentSpreadData)}
          </MagazinePage>
        ) : (
          // Two-page spread for interior content
          <>
            <MagazinePage isLeft={true} isFlipping={isFlipping}>
              {renderSpread(currentSpreadData)}
            </MagazinePage>
            <MagazinePage isLeft={false} isFlipping={isFlipping}>
              {/* Right page content - can be customized per spread */}
              <PageContent>
                <div style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '1.2rem', color: '#666' }}>
                  {currentSpreadData.rightPageContent || 'Additional content or images can go here'}
                </div>
              </PageContent>
            </MagazinePage>
          </>
        )}
        
        <PageIndicator>
          {currentSpread + 1} / {spreads.length}
        </PageIndicator>
        
        <NavigationControls>
          <NavButton onClick={prevSpread} disabled={currentSpread === 0}>
            ← Previous
          </NavButton>
          <NavButton onClick={nextSpread} disabled={currentSpread === spreads.length - 1}>
            Next →
          </NavButton>
        </NavigationControls>
      </MagazineWrapper>
    </MagazineContainer>
  );
}

export default JapanMagazine;
