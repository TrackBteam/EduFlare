import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Create Your Account</h1>
        <SignUp
          appearance={{
            elements: {
              card: "bg-white rounded-lg shadow-lg",
              formButtonPrimary: "bg-blue-600 text-white hover:bg-blue-700",
              formButton: "bg-gray-200 text-gray-700 hover:bg-gray-300",
              input: "border-gray-300 rounded-lg",
              // Add more styles as needed to match your theme
            }
          }}
          redirectUrl="/user-dashboard" // URL to redirect after sign-up
        />
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/sign-in" className="text-blue-600 hover:text-blue-800">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
