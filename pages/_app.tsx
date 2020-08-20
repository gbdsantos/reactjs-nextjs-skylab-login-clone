import ThemeContainer from "../contexts/themes/ThemeContainer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
