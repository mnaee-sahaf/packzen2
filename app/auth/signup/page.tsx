// 'use client';

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import type { AuthError, SignUpData } from "@/types/auth";


// export default function SignUp() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [error, setError] = useState<AuthError | null>(null);
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
//     if (!formData.email || !formData.password || !formData.confirmPassword) {
//       setError({ message: "All fields are required" });
//       return false;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       setError({ message: "Passwords do not match" });
//       return false;
//     }
//     if (formData.password.length < 8) {
//       setError({ message: "Password must be at least 8 characters" });
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError(null);
    
//     if (!validateForm()) return;
    
//     setLoading(true);
//     try {
//       const response = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Sign up failed');
//       }

//       router.push('/auth/signin?registered=true');
//     } catch (err) {
//       setError({ 
//         message: err instanceof Error ? err.message : 'An error occurred during sign up'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md space-y-8">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold">Create your account</h1>
//           <p className="mt-2 text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link href="/auth/signin" className="text-blue-600 hover:text-blue-500">
//               Sign in
//             </Link>
//           </p>
//         </div>

//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
//             {error.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <Input
//             type="email"
//             placeholder="Email address"
//             value={formData.email}
//             onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
//             disabled={loading}
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
//             disabled={loading}
//           />
//           <Input
//             type="password"
//             placeholder="Confirm password"
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
//             disabled={loading}
//           />
//           <Button
//             type="submit"
//             className="w-full"
//             disabled={loading}
//           >
//             {loading ? 'Creating account...' : 'Create account'}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }
