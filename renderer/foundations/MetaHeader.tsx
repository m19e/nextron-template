import Head from "next/head";

type Props = {
    title: string;
};

const MetaHeader = ({ title }: Props) => (
    <Head>
        <title>{title}</title>
    </Head>
);

export default MetaHeader;
