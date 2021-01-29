import React from 'react'
import Layout from "../components/Layout/LayoutComponent";
import Link from "next/link";

const SignUp = () => {
	return (
		<Layout>
		to <Link href={'/signin'}>Sign in</Link>
	</Layout>
	)
}

export default SignUp