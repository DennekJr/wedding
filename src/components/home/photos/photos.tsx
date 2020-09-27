import React from "react";
import "./photos.styles.css";

// const tileData = [
//        {
//          img: image1,
//          title: 'Image1',
//          cols: 2,
//          },
//     {
//          img: image2,
//          title: 'Image2',
//          cols: 2,
//          },
//     {
//          img: image3,
//          title: 'Image3',
//          cols: 2,
//          },
//     {
//          img: image4,
//          title: 'Image4',
//          cols: 2,
//          },
//     {
//          img: image5,
//          title: 'Image5',
//          cols: 2,
//          },
//     {
//          img: image6,
//          title: 'Image6',
//          cols: 2,
//          },
//
//     ]

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     // flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     overflow: 'hidden',
//     // backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 'auto',
//     height: 'auto',
//   },
// }));

export const Photos = () => {
  // const classes = useStyles();
  return (
    <div className="photosContainer">
      <h2>Photos</h2>
      <div className="photosDivider">
        <hr />
        <span>.</span>
        <hr />
      </div>
      {/*<div className={classes.root}>*/}
      {/*  <GridList className={classes.gridList} style={{height: '1006px'}}>*/}
      {/*    {tileData.map((tile) => (*/}
      {/*        <GridListTile key={tile.img} cols={0.6} style={{borderRadius: '10px', height: '100%'}}>*/}
      {/*          <img src={tile.img} alt={tile.title} />*/}
      {/*        </GridListTile>*/}
      {/*    ))}*/}
      {/*  </GridList>*/}
      {/*</div>*/}
      <div className="imageGrid">
        <div className="gridRow">
          <div>
            <img src='/images/image1.jpeg' alt="Fourth Image" />
          </div>
          <div>
            <img src={'/images/image2.jpeg'} alt="Fifth Image" />
          </div>
          <div>
            <img src={'/images/image3.jpeg'} alt="Third Image" />
          </div>
        </div>
        <div className="gridRow">
          <div>
            <img src={'/images/image4.jpeg'} alt="First Image" />
          </div>
          <div>
            <img src={'/images/image5.jpeg'} alt="Second Image" />
          </div>
          <div>
            <img src={'/images/image6.jpeg'} alt="Sixth Image" />
          </div>
        </div>
        <div className="gridRow">
          <div>
            <img src={'/images/image7.jpg'} alt="First Image" />
          </div>
          <div>
            <img src={'/images/image8.jpg'} alt="Second Image" />
          </div>
          <div>
            <img src={'/images/image9.jpg'} alt="Sixth Image" />
          </div>
        </div>
        <div className="gridRow">
          <div>
            <img src={'/images/image10.jpg'} alt="First Image" />
          </div>
          <div>
            <img src={'/images/image11.jpg'} alt="Second Image" />
          </div>
          <div>
            <img src={'/images/image12.jpg'} alt="Sixth Image" />
          </div>
        </div>
      </div>
    </div>
  );
};
