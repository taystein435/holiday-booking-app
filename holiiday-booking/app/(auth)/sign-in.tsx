// app/sign-in.tsx
import { SignIn } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-expo'

export default function SignInScreen() {
  const router = useRouter()
  const { isSignedIn } = useAuth()

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/')
    }
  }, [isSignedIn])

  return <SignIn />
}
