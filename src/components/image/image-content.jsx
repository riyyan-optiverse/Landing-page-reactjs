export const ImageContent = ({image, title}) => {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="h-44 w-52 rounded-md shadow-lg mt-4 ml-4"
      />
    </div>
  );
};
