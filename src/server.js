const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;


// Start the server


app.use(cors());
app.get('/externalapi/photos/:id', async (req, res) => {
    try {
        const photoId = req.params.id;
        const { title, albumTitle, userEmail } = req.query;

        const photoResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
        const photo = photoResponse.data;

        const albumId = photo.albumId;
        const albumResponse = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
        const album = albumResponse.data;

        const userId = album.userId;
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = userResponse.data;

        const enrichedPhoto = {
            id: photo.id,
            title: photo.title,
            url: photo.url,
            thumbnailUrl: photo.thumbnailUrl,
            album: {
                id: album.id,
                title: album.title,
                user: {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    address: { ...user.address },
                    phone: user.phone,
                    website: user.website,
                    company: { ...user.company }
                }
            }
        };

        res.json(enrichedPhoto);

    }
    catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.use(cors());
app.get('/externalapi/photos', async (req, res) => {
    try {
        const { title, albumTitle, userEmail, limit = 25, offset = 0 } = req.query;

        const [usersResponse, albumsResponse, photosResponse] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/albums'),
            axios.get('https://jsonplaceholder.typicode.com/photos')
        ]);

        const [users, albums, photos] = await Promise.all([
            usersResponse.data,
            albumsResponse.data,
            photosResponse.data
        ]);

        let filteredPhotos = photos.filter(photo => {
            const album = albums.find(album => album.id === photo.albumId);
            const user = users.find(user => user.id === album.userId);
            if (!album || !user) return false;

            if (title && !photo.title.includes(title)) return false;
            if (albumTitle && !album.title.includes(albumTitle)) return false;
            if (userEmail && user.email !== userEmail) return false;

            return true;
        });

        if (filteredPhotos.length === 0 && !title && !albumTitle && !userEmail) {
            filteredPhotos = photos;
        }

        const startIndex = parseInt(offset);
        const endIndex = parseInt(offset) + parseInt(limit);
        const enrichedPhotos = filteredPhotos.slice(startIndex, endIndex).map(photo => {
            const album = albums.find(album => album.id === photo.albumId);
            const user = users.find(user => user.id === album.userId);

            return {
                id: photo.id,
                title: photo.title,
                url: photo.url,
                thumbnailUrl: photo.thumbnailUrl,
                album: {
                    id: album.id,
                    title: album.title,
                    user: {
                        id: user.id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        address: { ...user.address },
                        phone: user.phone,
                        website: user.website,
                        company: { ...user.company }
                    }
                }
            };
        });

        res.json(enrichedPhotos);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
