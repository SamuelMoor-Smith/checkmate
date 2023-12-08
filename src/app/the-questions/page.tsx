import { Metadata } from "next"
import { Box } from "@chakra-ui/react";
// import { LP_GRID_ITEMS } from "lp-items"
import NavBar from "../../components/NavBar"
import Hero from "../../components/Hero"
import Form from "../../components/Form"

// export const metadata: Metadata = {
//   title: "Next.js Enterprise Boilerplate",
//   twitter: {
//     card: "summary_large_image",
//   },
//   openGraph: {
//     url: "https://next-enterprise.vercel.app/",
//     images: [
//       {
//         width: 1200,
//         height: 630,
//         url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png",
//       },
//     ],
//   },
// }

export default function Web() {
  return (
    <>
      <Form/>
    </>
  )
}
