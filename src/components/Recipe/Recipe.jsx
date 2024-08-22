import PropTypes from "prop-types";

const Recipe = ({ dish, handleCook }) => {
  const {
    id,
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    cuisine,
    caloriesPerServing,
    tags,
    userId,
    image,
    rating,
    mealType,
  } = dish;

  return (
    <div className="rounded-xl p-5 border border-zinc-300 flex gap-6">
      <img src={image} alt={name} className="rounded-lg w-1/3 object-cover" />
      <div className="flex flex-col justify-between">
        <div>
          <h4 className="font-bold">{name}</h4>
          <h5 className="text-zinc-600">{cuisine}</h5>
          <div className="flex flex-wrap my-3">
            <div className="flex flex-wrap gap-x-2">
              <h6 className="font-medium">
                Serving:{" "}
                <span className="font-normal text-zinc-700">
                  {servings} People
                </span>
              </h6>
              <h6 className="font-medium">
                Calories Per Serving:{" "}
                <span className="font-normal text-zinc-700">
                  {caloriesPerServing}
                </span>
              </h6>
            </div>
            <div className="flex flex-wrap gap-x-2">
              <h6 className="font-medium">
                Prep Time:{" "}
                <span className="font-normal text-zinc-700">
                  {prepTimeMinutes} Minutes
                </span>
              </h6>
              <h6 className="font-medium">
                Cook Time:{" "}
                <span className="font-normal text-zinc-700">
                  {cookTimeMinutes} Minutes
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <h4 className="font-semibold">Ingredients:</h4>
          <p>
            {ingredients.map((ing, idx) => (
              <span key={idx}>{ing} </span>
            ))}
          </p>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => handleCook(dish)}
            className="btn w-40 bg-emerald-500 text-white hover:text-zinc-900"
            type="button"
          >
            Wanna Cook
          </button>
          <button
            onClick={() => document.getElementById(id).showModal()}
            className="btn w-40 border-emerald-500 text-emerald-500 bg-white hover:text-zinc-900"
            type="button"
          >
            Details
          </button>
          <dialog id={id} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-xl">
                {name}{" "}
                <span className="font-normal text-sm italic">{cuisine}</span>
              </h3>
              <div className="flex flex-wrap gap-6 my-3">
                <div className="flex flex-wrap gap-x-6">
                  <h6 className="font-medium">
                    Serving:{" "}
                    <span className="font-normal text-zinc-700">
                      {servings} People
                    </span>
                  </h6>
                  <h6 className="font-medium">
                    Calories Per Serving:{" "}
                    <span className="font-normal text-zinc-700">
                      {caloriesPerServing}
                    </span>
                  </h6>
                </div>
                <div className="flex flex-wrap gap-x-6">
                  <h6 className="font-medium">
                    Prep Time:{" "}
                    <span className="font-normal text-zinc-700">
                      {prepTimeMinutes} Minutes
                    </span>
                  </h6>
                  <h6 className="font-medium">
                    Cook Time:{" "}
                    <span className="font-normal text-zinc-700">
                      {cookTimeMinutes} Minutes
                    </span>
                  </h6>
                </div>
              </div>
              <div className="mb-3">
                <h4 className="font-semibold">Ingredients:</h4>
                <p>
                  {ingredients.map((ing, idx) => (
                    <span key={idx}>{ing} </span>
                  ))}
                </p>
              </div>
              <div className="mb-3">
                <h4 className="font-semibold">Ingredients:</h4>
                <p>
                  {instructions.map((ing, idx) => (
                    <span key={idx}>{ing} </span>
                  ))}
                </p>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button className="">Close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  dish: PropTypes.any,
  handleCook: PropTypes.any,
};

export default Recipe;
