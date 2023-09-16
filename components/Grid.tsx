export function Grid({paragraph, element}: {paragraph?: string; element?: JSX.Element;}) {
  return(
    <>
      <div className='row-span-2 min-h-[16rem] rounded-3xl bg-gray-300 shadow-xl' />
      {paragraph ? <p className='text-2xl text-gray-500 font-light'>
        {paragraph}
      </p> : null}
      {element ? element : null}
    </>
  );
}