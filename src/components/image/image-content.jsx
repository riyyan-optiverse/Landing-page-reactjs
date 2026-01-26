export const ImageContent = ({ image, title }) => {
  return (
   <div className="h-40 w-full overflow-hidden ">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
