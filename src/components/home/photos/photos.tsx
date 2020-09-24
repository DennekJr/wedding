import React from "react";
import "./photos.styles.css";
import image1 from '../../images/image1.jpeg';
import image2 from '../../images/image2.jpeg';
import image3 from '../../images/image3.jpeg';
import image4 from '../../images/image4.jpeg';
import image5 from '../../images/image5.jpeg';
import image6 from '../../images/image6.jpeg';

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
      <h4>
        Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor
        aliquet. Aenean sollicitudin, lorem quis bibendum auci elit
        <br /> consequat ipsutis sem niuis sed odio sit amet
      </h4>
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
            <img src={image4} alt="Fourth Image" />
          </div>
          <div>
            <img src={image5} alt="Fifth Image" />
          </div>
          <div>
            <img src={image3} alt="Third Image" />
          </div>
        </div>
        <div className="gridRow">
          <div>
            <img src={image1} alt="First Image" />
          </div>
          <div>
            <img src={image2} alt="Second Image" />
          </div>
          <div>
            <img src={image6} alt="Sixth Image" />
          </div>
        </div>
      </div>
    </div>
  );
};
