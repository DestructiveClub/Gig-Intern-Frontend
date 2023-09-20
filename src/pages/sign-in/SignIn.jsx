import React, { useState, useEffect } from 'react';
import sideImg from "../../assets/sign.png";

import { loadGapiInsideDOM, loadAuth2 } from 'gapi-script';

import { FcGoogle } from "react-icons/fc";

function SignIn () {

  const [ emailFocus, setEmailFocus ] = useState(false);
  const [ passwordFocus, setPasswordFocus ] = useState(false);
  const [ email, setEmailValue ] = useState('');
  const [ password, setPasswordValue ] = useState('');

  const [ gapi, setGapi ] = useState(null);
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const loadGapi = async () => {
      const newGapi = await loadGapiInsideDOM();
      setGapi(newGapi);
    };
    loadGapi();
  }, []);

  useEffect(() => {
    if (!gapi) return;

    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, process.env.REACT_APP_CLIENT_KEY, '');
      if (auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get());
      } else {
        attachSignin(document.getElementById('customBtn'), auth2);
      }
    };
    setAuth2();
  }, [ gapi ]);

  useEffect(() => {
    if (!gapi) return;

    if (!user) {
      const setAuth2 = async () => {
        const auth2 = await loadAuth2(gapi, process.env.REACT_APP_CLIENT_ID, '');
        attachSignin(document.getElementById('customBtn'), auth2);
      };
      setAuth2();
    }
  }, [ user, gapi ]);

  const updateUser = (currentUser) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    setUser({
      name: name,
      profileImg: profileImg,
    });
  };

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(element, {},
      (googleUser) => {
        updateUser(googleUser);
      }, (error) => {
        console.log(JSON.stringify(error));
      });
  };

  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setUser(null);
      console.log('User signed out.');
    });
  };

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handleEmailBlur = () => {
    setEmailFocus(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocus(false);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className='flex justify-center bg-white'>
      <div className='items-end justify-center hidden p-10 md:flex' style={ {
        backgroundImage: `url(${sideImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 50 + '%',
        height: 100 + 'vh'
      } }>
        <div className='w-[75%]'>
          <h1 className="text-4xl font-bold text-slate-50">Discover, Learn and Build yours skills while you take on free Courses</h1>
        </div>
      </div>
      <div className='py-14 px-10 md:w-[50%] w-[100%]'>
        <div>
          <h1 className="text-black text-opacity-80 text-4xl font-bold leading-[54.86px]">Sign In To Gig Intern</h1>
          <p className="text-xl font-normal leading-relaxed text-black text-opacity-60">Please input your details as specified below</p>


          <div className='mt-2'>
            <form onSubmit={ handleSubmit } className="py-8 ">
              <div className={ `relative` }>
                <input
                  type="text"
                  value={ email }
                  onChange={ handleEmailChange }
                  className={ `w-full h-10 px-3 py-3 border rounded-lg text-gray-800 focus:outline-none focus:border-[#29ABFF] ${emailFocus ? 'border-[#29ABFF]' : 'border-gray-300'
                    }` }
                  onFocus={ handleEmailFocus }
                  onBlur={ handleEmailBlur }
                />
                <label
                  className={ `absolute left-3 top-2 text-gray-600 transition-all ${email || email.length > 0
                    ? 'bg-white px-2 text-xs -top-[8px]'
                    : 'text-base text-gray-800'
                    }` }
                >
                  Email
                </label>
              </div>

              <div className={ `relative my-6` }>
                <input
                  type="password"
                  value={ password }
                  onChange={ handlePasswordChange }
                  className={ `w-full h-10 px-3 py-3 border rounded-lg text-gray-800 focus:outline-none focus:border-[#29ABFF] ${passwordFocus ? 'border-[#29ABFF]' : 'border-gray-300'
                    }` }
                  onFocus={ handlePasswordFocus }
                  onBlur={ handlePasswordBlur }
                />
                <label
                  className={ `absolute left-3 top-2 text-gray-600 transition-all  ${password || password.length > 0
                    ? 'bg-white px-2 text-xs -top-[8px]'
                    : 'text-base text-gray-800'
                    }` }
                >
                  Password
                </label>
              </div>
              <div className='flex items-center justify-between'>
                <label className='flex items-center justify-between'>
                  <input type="checkbox" name="" id="" className='accent-blue-500' />
                  <span className="pl-2 text-black text-opacity-70 text-[15px] font-normal">Keep me logged in</span>
                </label>
                <a href="http://" className="text-blue-600 text-[15px] font-normal leading-tight">Forgot Password?</a>
              </div>

              <button
                type="submit"
                className="mt-10 w-full h-12 bg-[#1E5DFF] text-white rounded-lg hover:bg-black transition duration-200 ease-linear focus:outline-none"
              >
                Sign In
              </button>
            </form>
            <div className='flex items-center justify-center gap-4 mb-6'>
              <div className="w-[268.41px] h-[2px] border border-sky-400 border-opacity-20"></div>
              <p className="w-[24.06px] text-center text-black text-opacity-80 text-sm font-normal">OR</p>
              <div className="w-[268.41px] h-[2px] border border-sky-400 border-opacity-20"></div>
            </div>
            {/* <GoogleLogin /> */ }

            <div id="customBtn" className="rounded-[4px]  py-2 flex justify-center border-[1px] border-[#dadce0] hover:border-sky-200  hover:bg-sky-100 w-full cursor-pointer">
              <p className="text-[#3c4043] text-[14px] flex gap-1 justify-center"><span className="w-[40px] text-2xl"><FcGoogle /></span>Sign in with Google</p>
            </div>



            <div className="mt-10 text-center">
              <span className="text-sm font-normal text-black text-opacity-60">Not registered? </span>
              <a href="#" className="text-blue-600 text-sm font-normal leading-[19.20px]">Create an Account</a></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SignIn;
