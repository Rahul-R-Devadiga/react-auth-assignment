import { useEffect, useRef, useState } from "react";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import { checkValidData } from "../utils/validate";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard"); // logged in? go to dashboard
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const errorMessageCredential = checkValidData(email, password);
    setError(errorMessageCredential);
    if (errorMessageCredential) return;

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden relative">
      <Background />

      {/* Login Card */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="z-10 w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition cursor-pointer"
          onClick={handleLogin}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p
          className="text-sm text-center text-purple-600 cursor-pointer hover:underline"
          onClick={() => {
            setError("");
            setIsLogin(!isLogin);
          }}
        >
          {isLogin
            ? "New user? Sign up here"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
};

export default Auth;
