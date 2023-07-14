import React from "react";
import useDicom from "../hooks/useDicom";

interface DisegProps {
    url: string;
    onSave: (pixels: Uint8ClampedArray, imageBase64: string) => void;
}

function Diseg({ url, onSave }: DisegProps) {
    const [{ loading, data, error }, fetch] = useDicom(url);
    return <></>
}

export default Diseg;