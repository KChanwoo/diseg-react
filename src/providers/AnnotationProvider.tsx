import React, { useState } from "react";
import AnnotationContext, { Annotation, AnnotationContextObject } from "../context/AnnotationContext";

function AnnotationProvider() {
    const [annotationObj, setAnnotationObj] = useState({annotationList: [] as Annotation[], tagList: [] as string[]} as AnnotationContextObject);

    function removeAnnotation(annotation: Annotation) {
        let annotationList = annotationObj.annotationList;
        let index = annotationList.findIndex((o) => o.id == annotation.id);

        if (index == -1) {
            annotationList.splice(index, 1);
            refresh({annotationList});
        }
    }

    function addAnnotation(annotation: Annotation) {
        let annotationList = annotationObj.annotationList;

        annotationList.push(annotation);

        refresh({annotationList});
    }

    function addAllAnnotations(annotationList: Annotation[]) {

        refresh({annotationList});
    }

    function addTag(tag: string) {
        let tagList = annotationObj.tagList;
        let index = tagList.findIndex((o) => o == tag);

        if (index == -1) {
            tagList.push(tag);
            refresh();
        }
    }

    function removeTag(tag: string) {
        let tagList = annotationObj.tagList;
        let index = tagList.findIndex((o) => o == tag);

        if (index == -1) {
            tagList.splice(index, 1);
            refresh();
        }
    }

    function addAllTags(tagList: string[]) {

    }

    function refresh(obj?: any) {
        let newObj = {...annotationObj, removeAnnotation, addAnnotation, addAllAnnotations, addTag, removeTag, refresh, addAllTags};

        if (obj)
            newObj = {...newObj, ...obj};
        
            setAnnotationObj(() => ({...newObj}));
    }

    return <AnnotationContext.Provider value={annotationObj}>

    </AnnotationContext.Provider>
}

export default AnnotationProvider;