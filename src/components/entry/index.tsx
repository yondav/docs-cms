import React, { useEffect } from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

const Entry = (props: { entry }) => {
  // const [entry, setEntry] = useState<IPage | ISection | ISubSection | undefined>(undefined);
  // const { data, loading, error } = useContext(StoreContext);

  // const { page, section, subsection } = useParams();

  // useEffect(() => {
  //   const unsubscribe = () => {
  //     if (props.type === 'page') return setEntry(data?.pages.find(pg => pg.slug === page));
  //     if (props.type === 'section')
  //       return setEntry(data?.pages.find(pg => pg.slug === page)?.sections.find(sect => sect.slug === section));
  //     if (props.type === 'subsection')
  //       return setEntry(
  //         data?.pages
  //           .find(pg => pg.slug === page)
  //           ?.sections.find(sect => sect.slug === section)
  //           ?.subSections.find(sub => sub.slug === subsection)
  //       );
  //     console.log(data?.pages.find(pg => pg.slug === page)?.sections.find(sect => sect.slug === section)?.subSections);
  //   };
  //   unsubscribe();
  // }, [data, data?.pages, page, section, subsection]);

  useEffect(() => props.entry && console.log(props.entry.__typename.toLowerCase()), [props.entry]);

  return (
    <>
      {props.entry && (
        <article tw='mx-auto w-3/4 p-4'>
          {props.entry.__typename.toLowerCase() === 'page' && <h1 tw='mb-5'>{props.entry?.title}</h1>}
          {props.entry.__typename.toLowerCase() === 'section' && <h2 tw='mb-5'>{props.entry?.title}</h2>}
          {props.entry.__typename.toLowerCase() === 'subsection' && <h3 tw='mb-5'>{props.entry?.title}</h3>}
          {props.entry?.description.raw && <RichText content={props.entry?.description?.raw} />}
        </article>
      )}
    </>
  );
};

export default Entry;
