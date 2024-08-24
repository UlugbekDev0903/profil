import Nav from "@/components/Nav";
import "@/styles/globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

 
export default function App({ Component, pageProps }) {
  return(
    <>
 <ClerkProvider>
 <Nav/>
 <Component {...pageProps} />;
 </ClerkProvider>
    </>
  )
}
