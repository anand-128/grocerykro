import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center mt-15'>
      <div className='bg-white w-[30%] rounded-3xl p-8 relative shadow-xl'>
        <h1 className='flex justify-center font-semibold text-3xl mb-8'>Login to see more</h1>

        <div className="mb-4">
          <label className="text-sm">Mobile Number</label>
          <input
            type="email"
            placeholder="Enter Phone Number"
            className="w-full border rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <div className="mb-2">
          <label className="text-sm">Enter OTP</label>
          <input
            type="password"
            placeholder="Enter OTP Here"
            className="w-full border rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <p className="text-sm text-gray-700 mb-4 cursor-pointer">
          Forgotten your password?
        </p>

        <button className="w-full bg-red-600 text-white py-3 rounded-full font-semibold mb-3 hover:bg-red-700">
          Log in
        </button>

        <div className="text-center text-sm text-gray-500 mb-3">OR</div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold mb-3 hover:bg-blue-700">
          Continue with Facebook
        </button>

        <button className="w-full border py-3 rounded-full font-semibold flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5"
          />
          Continue with Google
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          By continuing, you agree to Terms of Service and Privacy Policy
        </p>

        <p className="text-center text-sm mt-4">
          Not on Pinterest yet?{" "}
          <span className="font-semibold cursor-pointer">Sign up</span>
        </p>

      </div>
    </div>
  )
}

export default Login