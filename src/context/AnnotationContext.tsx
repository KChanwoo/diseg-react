import React from "react";
import { DicomObject } from "../lib/dicomReader";

export interface Annotation {
    id: string;
    segmentation: number[][];
    tag: string;
}

export interface AnnotationContextObject {
    dicomImage: DicomObject;
    tagList: string[];
    annotationList: Annotation[];
    removeAnnotation: (annotation: Annotation) => void;
    addAnnotation: (annotation: Annotation) => void;
    addAllAnnotations: (annotationList: Annotation[]) => void;
    refresh: () => void;
    addTag: (tag: string) => void;
    removeTag: (tag: string) => void;
    addAllTags: (tagList: string[]) => void;
}

const AnnotationContext = React.createContext({} as AnnotationContextObject);

export default AnnotationContext;