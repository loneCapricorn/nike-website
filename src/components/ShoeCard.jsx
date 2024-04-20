import PropTypes from "prop-types";

const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoe }) => {
  const handleClick = () => {
    bigShoeImg !== imgUrl ? changeBigShoe(imgUrl) : null;
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  bigShoeImg: PropTypes.string.isRequired,
  changeBigShoe: PropTypes.func.isRequired,
};

export default ShoeCard;
