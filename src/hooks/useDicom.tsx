import React, { DependencyList } from "react";
import useAsync from "./useAsync";
import dicomReader, { DicomObject, HeaderString } from "../lib/dicomReader";

function useDicom(url: string, header?: HeaderString[], withCredentials?: boolean, dev?: DependencyList) {
    async function getDicom() {
        const image = await dicomReader(url, header, withCredentials);

        return {
            result: image ? "success" : "fail",
            data: new DicomObject(image)
        }
    }

    return useAsync(getDicom, dev, true);
}

export default useDicom;