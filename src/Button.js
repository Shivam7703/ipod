import React, { useEffect, useState } from 'react';
import ZingTouch from 'zingtouch';
import songs from './song';
import img from './img';

const Buttons = () => {
  const song1 = new Audio(songs.audio1);
  const song2 = new Audio(songs.audio2);
  const song3 = new Audio(songs.audio3);
  const song4 = new Audio(songs.audio4);
  const song5 = new Audio(songs.audio5);

  const wal = {
    pic: [img.wal1, img.wal2, img.wal3, img.wal4],
    wali: 1,
  };

  const playlist = {
    son: [song1, song2, song3, song4, song5],
    cover: [img.s1, img.s2, img.s3, img.s4, img.s5],
    index: 4,
  };

  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [v, setV] = useState(false);
  const [d, setD] = useState(false);

  const [p, setP] = useState('0');

  useEffect(() => {
    const rotat = () => {
      const A = document.getElementById('A');
      const B = document.getElementById('B');
      const C = document.getElementById('C');

      const containerElement = document.getElementById('rotatable');
      const activeRegion = new ZingTouch.Region(containerElement);
      const childElement = document.getElementById('plays');
      childElement.style.pointerEvents = 'auto';

      activeRegion.bind(childElement, 'rotate', function (event) {
        // Perform Operations
        if (
          (event.detail.angle < 90 && event.detail.angle > 45) ||
          (event.detail.angle < 215 && event.detail.angle > 180)
        ) {
          setA(true);
          setB(false);
          setC(false);
          B.style.backgroundColor = 'black';
          A.style.backgroundColor = 'blue';
          C.style.backgroundColor = 'black';
        } else if (
          (event.detail.angle < 45 && event.detail.angle > 0) ||
          (event.detail.angle < 300 && event.detail.angle > 215)
        ) {
          setA(false);
          setB(true);
          setC(false);
          B.style.backgroundColor = 'blue';
          A.style.backgroundColor = 'black';
          C.style.backgroundColor = 'black';
        } else if (
          event.detail.angle > 300 ||
          (event.detail.angle < 180 && event.detail.angle > 90)
        ) {
          setA(false);
          setB(false);
          setC(true);
          B.style.backgroundColor = 'black';
          A.style.backgroundColor = 'black';
          C.style.backgroundColor = 'blue';
        }
      });
    };
    rotat();
  }, []);

  const view = () => {
    setV(!v);
    return;
  };

  const select = () => {
    if (c === true && v === false) {
      document.getElementById('disp').style.display = 'none';
     setP('1');
      setV(true);
      console.log(p);
      pla(playlist.index);
      setC(false);
      return;
    } else if (a === true && v === false) {
      document.getElementById('disp').style.display = 'none';
      document.getElementById('r').style.backgroundColor = 'red';
      setA(false);
      setV(true);
    } else if (b === true && v === false) {
      document.getElementById('disp').style.display = 'none';
      walchange(wal.wali);
     return setD(true) , setV(true), setB(false);
    } else {
      return;
    }
  };





  const pla = (songd) => {
    if (c === true) {
      if (p === '1') {
        // Pause the current song
       return playlist.son[playlist.index].pause();
      }
  
      // Play the selected song
      playlist.son[songd].play();
      document.getElementById('r').style.backgroundImage = `url(${playlist.cover[songd]})`;
      playlist.index = songd;
      setP('1');
      return;
    }
  };








  // const pla = (songd) => {
  //   if (p === '1' && c === true) {
  //     console.log(p);
  //     playlist.son[songd].pause();
  //     setP('0');
  //   } else if (p === '0' && c === true) {
  //     console.log(p);
  //     playlist.son[songd].play();
  //     document.getElementById('r').style.backgroundImage = `url(${playlist.cover[songd]})`;
  //     setP('1');
  //   } else {
  //     return [];
  //   }
  // };

  const walchange = (i) => {
  return  document.getElementById('r').style.backgroundImage = `url(${wal.pic[i]})`;
  };

  const right = () => {
    if (c === true && v === true) {
      if (playlist.index === playlist.son.length - 1) {
        playlist.index = 0;
      } else {
        playlist.index += 1;
      }
      pla(playlist.index);
    } else if (b === true && d === true) {
      console.log(d);
      if (wal.wali === 3) {
        wal.wali = 0;
      } else {
        wal.wali += 1;
      }
      walchange(wal.wali);
    }
  };

  const left = () => {
    if (c === true && v === true) {
      if (playlist.index === 0) {
        playlist.index = 4;
      } else {
        playlist.index -= 1;
      }
      pla(playlist.index);
      document.getElementById('disp').style.display = 'none';
    } else if (b === true && d === true) {
      if (wal.wali === 0) {
        console.log('disp');
        wal.wali = 3;
      } else {
        wal.wali -= 1;
      }
      walchange(wal.wali);
    }
  };

  return (
    <div className="body2">
      <nav style={style.nav}>
        <h1>Ipod</h1>
        <img
          style={{ marginRight: '-160px' }}
          alt="battery"
          src="https://cdn-icons-png.flaticon.com/128/3103/3103460.png"
        />
        <img
          alt="wifi"
          src="https://t4.ftcdn.net/jpg/05/16/45/93/240_F_516459302_LSdHruV1DnTOI3iTVfV2pMIb9cZFRvqg.jpg"
        />
      </nav>
      <div id="disp" style={v ? { ...style.container, display: 'none' } : style.container}>
        <p id="A" style={style.list}>
          setting
        </p>
        <p id="B" style={style.list}>
          wallpaper
        </p>
        <p id="C" style={style.list}>
          playsong
        </p>
      </div>
      <div id="r" style={style.wallpaper}></div>
      <div className="outer" id="rotatable">
        <div id="plays" className="middle">
          <h2 onClick={view}>MENU</h2>
          <img
            alt="left"
            onClick={left}
            className="act_icon"
            src="https://cdn-icons-png.flaticon.com/128/318/318477.png"
          />
          <img
            alt="ok"
            onClick={select}
            className="inner"
            src="https://t4.ftcdn.net/jpg/06/03/54/87/240_F_603548767_dYwHQSkiiSXxox4C9RfJutyQts5D179P.jpg"
          />
          <img
            alt="right"
            onClick={right}
            className="act_icon"
            src="https://cdn-icons-png.flaticon.com/128/318/318476.png"
          />
          <img
            alt="play"
            onClick={() => pla(playlist.index)}
            className="act_icon"
            src="https://cdn-icons-png.flaticon.com/128/2404/2404569.png"
          />
        </div>
      </div>
    </div>
  );
};

const style = {
  wallpaper: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: 300,
    margin: '0px 8px',
    height: 170,
    backgroundColor: 'blue',
  },
  container: {
    position: 'absolute',
    margin: ' 20px 8px',
    width: 150,
    height: 150,
    borderRadius: '0px 60px 0px 0px',
    background: 'linear-gradient(45deg, rgb(1, 1, 1, 490%),rgb(198, 3, 201))',
  },
  list: {
    margin: '15px 10px 15px 0px',
    height: '28px',
    backgroundColor: 'black',
    color: 'white',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '35px',
    width: '300px',
    backgroundColor: 'white',
    margin: '45px 8px 0px 8px',
  },
};

export default Buttons;