import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ImageUpload from './ImageUpload';
import InstagramEmbed from 'react-instagram-embed';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App() {
  const classes = useStyles();
  const [Posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [openSignin, setOpenSignin] = useState(false);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User Logged in !!
        console.log(authUser);
        setUser(authUser);
      }
      else {
        // User logged out !!
        setUser(null);
      }
    })

    return () => {
      // Perform some cleanup actions !!
      unsubscribe();
    }
  }, [user, username]);


  // UseEffect for getting data from the db
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  const signup = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setOpen(false)
        setEmail('')
        setPassword('')
        setUsername('')
        return authUser.user.updateProfile({ displayName: username })
      })
      .catch((error) => alert(error.message));
    setOpen(false);
  }

  const signin = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(setPassword(''),
          setEmail(''))
    .catch((error) => alert(error.message))
    setOpenSignin(false);
  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => { setOpen(false) }}>

        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="" />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={signup}>SIGN UP</Button>
          </form>
        </div>
      </Modal>

      <Modal
        open={openSignin}
        onClose={() => { setOpenSignin(false) }}>

        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="" />
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={signin}>SIGN IN</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="LOGO" />

        {
          user ? (<Button onClick={() => { auth.signOut() }}>Sign Out</Button>)
            : (
              <div className="app__loginContainer">
                <Button onClick={() => { setOpenSignin(true) }}>Sign In</Button>
                <Button onClick={() => { setOpen(true) }}>Sign Up</Button>
              </div>
            )}
      </div>
      <div className="app__posts">
        <div className="app__postsLeft">
        {
          Posts.map(({ id, post }) => (
            <Post key={id} postID={id} user={user} username={post.username} caption={post.caption} imageurl={post.imageurl} />
          ))
        }
        </div>
        <div className="app__postsRight">
        <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        maxWidth={200}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />
        </div>
      </div>

      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
          <h3>Sorry !! You need to Login !!</h3>
        )}

    </div>
  );
}

export default App;
