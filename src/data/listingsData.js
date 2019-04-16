var listingsData = [
    {
        address: 'Charlottenstr. 6',
        city: 'Stuttgart-Mitte',
        state: 'BW',
        rooms: 3,
        price: 220000,
        floorSpace: 2000,
        extras: [
            'elevator',
            'garten'
        ],
        homeType: 'Apartment',
        image: 'https://q-xx.bstatic.com/images/hotel/max1024x768/637/63777551.jpg',
        userName: 'Lee Klopfers',
        userImg : 'https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=',
        postDate: '01.01.2019'

    },

    {
        address: 'Gerokstr. 15',
        city: 'Stuttgart-Ost',
        state: 'BW',
        rooms: 3,
        price: 120000,
        floorSpace: 1000,
        extras: [
            'elevator',
        ],
        homeType: 'Studio',
        image: 'https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width___480px_/s3/community/camden-roosevelt/headers/2-camden-roosevelt-apartments-2-bedroom-dc-dupont-circle-georgetown-u-street-adams-morgan-metro.jpg?itok=pPNNZSeD&timestamp=1528213408',
        userName: 'Jan Böhmermann',
        userImg: 'https://media.istockphoto.com/photos/cool-african-man-picture-id544358094?k=6&m=544358094&s=612x612&w=0&h=Z4tSUuw-aZyxXqwvBgi9j0O3QZzQzcpJVCm6nulS1kw=',
        postDate: '03.02.2019'
    },

    {
        address: 'Gnesener Str. 97',
        city: 'Stuttgart-Bad Cannstatt',
        state: 'BW',
        rooms: 2,
        price: 630000,
        floorSpace: 500,
        extras: [
            'elevator',
            'garten',
            'swimming-pool',
            'wintergarten'
        ],
        homeType: 'Ranch',
        image: 'https://images1.apartments.com/i2/zuaUa-FjipQvMwZND26ZKldKCclk0vOMoGGfsXcbmSU/111/eleanor-apartments-seattle-seattle-wa-foto-principal.jpg',
        userName: 'Lee Klopfers',
        userImg: 'https://media.istockphoto.com/photos/pride-man-smiling-picture-id544358286?k=6&m=544358286&s=612x612&w=0&h=hTQxzaOwlaM39OdqZEV_aZokHhPSyBliAqxJgZJnMac=',
        postDate: '12.03.2019'
    },

    {
        address: 'Schmidener Str. 50',
        city: 'Stuttgart-Bad Cannstatt',
        state: 'BW',
        rooms: 2,
        price: 123000,
        floorSpace: 2000,
        extras: [
            'swimming-pool'
        ],
        homeType: 'Room',
        image: 'https://37b3a77d7df28c23c767-53afc51582ca456b5a70c93dcc61a759.ssl.cf3.rackcdn.com/640x480/54850_3971_001.jpg',
        userName: 'Oli Schulz',
        userImg: 'https://media.istockphoto.com/photos/portrait-of-handsome-smiling-mid-adult-man-picture-id858134246?k=6&m=858134246&s=612x612&w=0&h=IImSKFOfXu-o3JOvc9uWQ0wnEsZ3gXTu0Hw-VPV2deA=',
        postDate: '14.12.2019'
    },

    {
        address: 'Rotenwaldstr. 50',
        city: 'Stuttgart-West',
        state: 'BW',
        rooms: 4,
        price: 220000,
        floorSpace: 2000,
        extras: [
            'swimming-pool',
            'garten'
        ],
        homeType: 'Apartment',
        image: 'https://images1.apartments.com/i2/uo03K21lP2hkPLvhuXSC8OBGAylS5QwLB7oX7gjjlaY/111/the-apartments-at-citycenter-washington-dc-primary-photo.jpg',
        userName: 'Godwin Asare',
        userImg: 'https://media.istockphoto.com/photos/cheerful-man-smiling-picture-id544358364?k=6&m=544358364&s=612x612&w=0&h=FNv8up_9aCfxvea8tOVFEU6MgRzfLy3G9OomJjmcJO0=',
        postDate: '28.02.2019'
    },

    {
        address: 'Archiv Str. 6',
        city: 'Stuttgart-Mitte',
        state: 'BW',
        rooms: 1,
        price: 1000,
        floorSpace: 40,
        extras: [
            'elevator',
            'garten'
        ],
        homeType: 'Studio',
        image: 'https://images1.apartments.com/i2/oZ3kSeVj58MY2VuvNiWIdoqzvcVhsM_5ct06mmdLg_U/117/the-cambridge-apartments-washington-dc-foto-del-edificio.jpg',
        userName: 'Petra Klopfers',
        userImg: 'https://media.istockphoto.com/photos/beautiful-african-american-female-model-picture-id910856488?k=6&m=910856488&s=612x612&w=0&h=r2YM9JLkSKBbs6gRrpUtK0ywxL7I9Vrt8cZELskqfs4=',
        postDate: '15.01.2019'
    },

    {
        address: 'Böblinger Str.',
        city: 'Stuttgart-Süd',
        state: 'BW',
        rooms: 5,
        price: 1020000,
        floorSpace: 2000,
        extras: [
            'elevator',
            'garten'
        ],
        homeType: 'Apartment',
        image: 'https://images1.apartmenthomeliving.com/i2/SGRlMjPcWDRUhpE-L2Zr3pjoxxiUjAvrbGE6UB5N_wY/106/image.jpg',
        userName: 'Keith Xavier Klopfers',
        userImg: 'https://image.shutterstock.com/mosaic_250/1849259/575234476/stock-photo-good-looking-man-in-glasses-portrait-575234476.jpg',
        postDate: '07.03.2019'
    },
    {
        address: 'Engelboldstr. 78',
        city: 'Stuttgart-Süd',
        state: 'BW',
        rooms: 5,
        price: 1020000,
        floorSpace: 2000,
        extras: [
            'garten'
        ],
        homeType: 'Apartment',
        image: 'https://cdn.vox-cdn.com/thumbor/Nqj_NACBd-MYueCnjB2Y5ZB70ig=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/59543123/290_West_St_3B_14.0.jpg',
        userName: 'Fabian Komninos',
        userImg: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        postDate: '24.01.2019'
    }
]

export default listingsData