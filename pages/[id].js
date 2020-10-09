import { useRouter } from "next/router";

export default function TestPage(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>fallback</div>;
  }

  return <div>working</div>;
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps = () => {
  return {
    props: {
      something: null,
    },
  };
}
