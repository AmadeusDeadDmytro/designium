import React from 'react'
import Layout from "../components/Layout/LayoutComponent";
import Link from "next/link";

const SignIn = () => {
	return (
		<Layout>
			to <Link href={'/signup'}>Sign up</Link>
		</Layout>
	)
}

export default SignIn