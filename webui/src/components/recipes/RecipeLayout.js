import { useSearchParams } from "react-router-dom";

import SectionBackground from "../SectionBackground";

function RecipeLayout({
    title,
}) {
    const [searchParams] = useSearchParams();
    const scale = searchParams.get('scale') || 1;

    return (
        <SectionBackground img={null}>
            <h2>{title}</h2>

            <p>Scale: {scale}</p>
        </SectionBackground>
    );
}

export default RecipeLayout;