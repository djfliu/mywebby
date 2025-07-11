# Birthday TikTok Page Setup Instructions

## 🎉 Congratulations! Your birthday TikTok page is ready!

### How to Access
Visit: `http://localhost:3000/birthday` (when running your dev server)

### Customization Steps

#### 1. Replace Profile Photo
- Add her profile photo to the `public` folder
- Update line 167 in `src/pages/BirthdayTikTok.js`:
  ```javascript
  <img src="/path-to-her-photo.jpg" alt="Profile" />
  ```

#### 2. Update Personal Information
In `src/pages/BirthdayTikTok.js`, customize:
- **Username** (line 169): Change "Happy Birthday! 🎉" to her name
- **Handle** (line 170): Change "@birthday_girl_2025" to something personal
- **Stats** (lines 173-185): Update the numbers (days together, etc.)
- **Bio** (lines 194-200): Write a personal message

#### 3. Add Your Photos Together
1. Create a folder `public/photos/` 
2. Add your photos (name them like: `photo1.jpg`, `photo2.jpg`, etc.)
3. Update the `photos` array (lines 143-152) with your actual photo paths:
   ```javascript
   const photos = [
     { id: 1, src: '/photos/photo1.jpg', views: '2.1M', pinned: true },
     { id: 2, src: '/photos/photo2.jpg', views: '1.8M', pinned: true },
     // ... add more photos
   ];
   ```

#### 4. Customize Messages
- **Birthday Message** (lines 202-205): Write your personal birthday message
- **Bio Description** (lines 196-199): Add your own sweet message

### Tips for Best Results
- Use photos with a 9:16 aspect ratio (vertical/portrait) for best TikTok-like appearance
- Add 6-12 photos for a good grid layout
- Consider the order - put your favorite photos first (they'll be "pinned")
- The page is fully responsive and will look great on mobile too!

### Running the Page
1. Make sure you're in the project directory
2. Run: `npm start`
3. Navigate to `http://localhost:3000/birthday`

Happy Birthday to your girlfriend! 🎂✨
