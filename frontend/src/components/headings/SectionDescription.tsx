import {HtmlHTMLAttributes} from 'react';

import {cn} from "../../lib/utils";

interface  DescriptionProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
    description: string
}
const SectionDescription = ({description, children, className}: DescriptionProps) => {
    return (
        <p className={cn("mt-4 text-xl lg:text-2xl mb-12 px-4 max-w-screen-md mx-auto", className)}>
            {description}
            {children}
        </p>
    );
};

export default SectionDescription;