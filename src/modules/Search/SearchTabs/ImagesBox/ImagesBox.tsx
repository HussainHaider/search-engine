import React, { ReactElement } from 'react';
//other third party imports
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
// local imports
import ImageItem from './ImageItem/ImageItem';


const ImagesBox = (): ReactElement => {
  return (
    <Box>
      <ImageList cols={3}
        gap={8}
        variant="masonry">
        {itemData.map((item) => (
          <ImageItem data={item}
            key={item.url} />
        ))}
      </ImageList>
    </Box>
  )
}

export default ImagesBox;


const itemData = [
  {
    'url': 'http://cache.umusic.com/_sites/_halo/taylorswift/images/meta-image.jpg',
    'height': 630,
    'width': 1200,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=1094927124898698511',
    'thumbnailHeight': 157,
    'thumbnailWidth': 299,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift - Official Website',
    'provider': {
      'name': 'umusic',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.taylorswift.com/'
  },
  {
    'url': 'https://pmcvariety.files.wordpress.com/2018/10/taylor_swift.png?w=979',
    'height': 880,
    'width': 979,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=8673048286540026347',
    'thumbnailHeight': 246,
    'thumbnailWidth': 274,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift - Variety500 - Top 500 Entertainment Business Leaders | Variety.com',
    'provider': {
      'name': 'wordpress',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://variety.com/exec/taylor-swift/'
  },
  {
    'url': 'https://cdnph.upi.com/topic/ph/19660/upi/80622b9fce2df307430a5e3ff21175e3/Taylor_Swift_0.jpg',
    'height': 431,
    'width': 313,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=2635773139087957719',
    'thumbnailHeight': 214,
    'thumbnailWidth': 156,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift News | Photos | Quotes | Wiki - UPI.com',
    'provider': {
      'name': 'upi',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.upi.com/topic/taylor_swift/news/'
  },
  {
    'url': 'https://images.tmz.com/2014/12/13/taylor-swift-300x250.jpg',
    'height': 250,
    'width': 300,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=1491532148936957876',
    'thumbnailHeight': 187,
    'thumbnailWidth': 224,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift  News, Pictures, and Videos | TMZ.com',
    'provider': {
      'name': 'tmz',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.tmz.com/person/taylor-swift/'
  },
  {
    'url': 'https://media.npr.org/assets/music/sotd/2009/11/taylor_swift_wide-507c0856fc2fed7724ecbae5540c2b499c649e37.jpg?s=1400',
    'height': 281,
    'width': 500,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=6633699864716525031',
    'thumbnailHeight': 140,
    'thumbnailWidth': 249,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift : NPR',
    'provider': {
      'name': 'npr',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.npr.org/artists/120581188/taylor-swift'
  },
  {
    'url': 'https://cdn.britannica.com/86/182086-050-5FB81069/singer-Taylor-swift-2013.jpg',
    'height': 1600,
    'width': 1235,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=7600856393698390688',
    'thumbnailHeight': 299,
    'thumbnailWidth': 231,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift | Biography, Albums, Songs, & Facts | Britannica',
    'provider': {
      'name': 'britannica',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.britannica.com/biography/Taylor-Swift'
  },
  {
    'url': 'https://cdn.pastemagazine.com/www/articles/2022/11/01/Taylor%20Swift%20-%20Eras%20Tour%20-%20Main%20%281%29.jpeg',
    'height': 381,
    'width': 678,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=4269613610465596252',
    'thumbnailHeight': 94,
    'thumbnailWidth': 169,
    'base64Encoding': '',
    'name': 'Taylor Swift Moves Through Her Different "Eras" on New Tour',
    'title': 'Taylor Swift Moves Through Her Different "Eras" on New Tour - Paste',
    'provider': {
      'name': 'pastemagazine',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.pastemagazine.com/music/taylor-swift/taylor-swift-eras-tour/'
  },
  {
    'url': 'https://www.looktothestars.org/photo/6242-taylor-swift/story_half_width.jpg',
    'height': 280,
    'width': 280,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=3098231922919891677',
    'thumbnailHeight': 210,
    'thumbnailWidth': 210,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift: Charity Work & Causes - Look to the Stars',
    'provider': {
      'name': 'looktothestars',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.looktothestars.org/celebrity/taylor-swift'
  },
  {
    'url': 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/1483969/taylor_swift.jpg',
    'height': 480,
    'width': 509,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=489943839088219438',
    'thumbnailHeight': 359,
    'thumbnailWidth': 381,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor swift timeline | Timetoast timelines',
    'provider': {
      'name': '',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.timetoast.com/timelines/taylor-swift'
  },
  {
    'url': 'https://www.pinkvilla.com/files/styles/fbimagesection/public/taylor_swift_birthday.jpeg?itok=VRq6drie',
    'height': 310,
    'width': 580,
    'thumbnail': 'https://rapidapi.usearch.com/api/thumbnail/get?value=8039867206085482440',
    'thumbnailHeight': 202,
    'thumbnailWidth': 379,
    'base64Encoding': '',
    'name': '',
    'title': 'Taylor Swift Birthday: 6 PHOTOS of the singer\'s hottest looks from her performances',
    'provider': {
      'name': 'pinkvilla',
      'favIcon': '',
      'favIconBase64Encoding': ''
    },
    'imageWebSearchUrl': 'https://usearch.com/search/taylor%20swift/images',
    'webpageUrl': 'https://www.pinkvilla.com/photos/taylor-swift/taylor-swift-birthday-6-photos-singers-hottest-looks-her-performances-966132'
  }
];
